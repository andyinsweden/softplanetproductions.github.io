(function () {
  "use strict";
  const root = document.getElementById("sp-daily-improv");
  if (!root) return;
  const $ = (id) => document.getElementById(id);
  const elements = {
    date: $("sp-daily-date"), key: $("sp-daily-key"), variation: $("sp-daily-variation"),
    chords: $("sp-daily-chords"), prompt: $("sp-daily-prompt"), notes: $("sp-daily-notes"),
    level: $("sp-daily-level"), bpm: $("sp-daily-bpm"), bpmValue: $("sp-daily-bpm-value"),
    play: $("sp-daily-play"), next: $("sp-daily-new"), done: $("sp-daily-done"),
    status: $("sp-daily-status"), streak: $("sp-daily-streak"), total: $("sp-daily-total")
  };
  const STORAGE_KEY = "softplanet-daily-piano-v1";
  const KEY_NAMES = [
    { name: "C", root: 0, names: ["C", "D", "E", "F", "G", "A", "B"] },
    { name: "G", root: 7, names: ["G", "A", "B", "C", "D", "E", "F♯"] },
    { name: "F", root: 5, names: ["F", "G", "A", "B♭", "C", "D", "E"] },
    { name: "D", root: 2, names: ["D", "E", "F♯", "G", "A", "B", "C♯"] },
    { name: "B♭", root: 10, names: ["B♭", "C", "D", "E♭", "F", "G", "A"] },
    { name: "E♭", root: 3, names: ["E♭", "F", "G", "A♭", "B♭", "C", "D"] }
  ];
  const SCALE = [0, 2, 4, 5, 7, 9, 11];
  const MAJOR_DEGREES = [0, 3, 4];
  const MINOR_DEGREES = [1, 2, 5];
  const PROGRESSIONS = {
    beginner: [[0, 4, 5, 3], [0, 3, 4, 0], [0, 5, 3, 4], [0, 4, 3, 4]],
    intermediate: [[1, 4, 0, 5], [0, 3, 1, 4], [5, 3, 0, 4], [0, 5, 1, 4]],
    expressive: [[5, 3, 0, 4], [1, 4, 0, 5], [0, 2, 3, 4], [3, 4, 5, 0]]
  };
  const PROMPTS = {
    beginner: [
      "Choose three notes from the suggested scale. Play a musical question, leave a pause, and answer it.",
      "Make a short two-beat melody. Repeat it over the next chord, changing only the last note.",
      "Play one note per beat. Add a little space, then try the same notes in a new order.",
      "Start on the first note of the key. Change your rhythm before changing any notes."
    ],
    intermediate: [
      "Find the nearest chord tone when the harmony changes. Let your melody move smoothly between chords.",
      "Create a two-bar motif, then answer it in bars three and four using rhythmic variation.",
      "Keep a left-hand root note on beat one while improvising a syncopated right-hand phrase.",
      "Improvise with five notes. Try a longer phrase followed by a short, contrasting response."
    ],
    expressive: [
      "Create a reflective opening. Gradually widen your melodic intervals, then return to a quiet ending.",
      "Use the chord tones on the strong beats. Add passing notes between them and create tension and release.",
      "Try a rolling broken-chord accompaniment with your left hand and a lyrical melody above it.",
      "Build a musical arc across four bars: question, answer, surprise, resolution."
    ]
  };
  const LEVELS = ["beginner", "intermediate", "expressive"];
  const storageFallback = { days: [], level: "beginner" };
  let data = readData();
  let variation = 0;
  let challenge;
  let audioCtx = null;
  let drumNoise = null;
  let timer = null;
  let nextBeatTime = 0;
  let beatCounter = 0;
  let sounding = [];
  let playing = false;

  function todayKey() {
    const d = new Date();
    return [d.getFullYear(), String(d.getMonth() + 1).padStart(2, "0"), String(d.getDate()).padStart(2, "0")].join("-");
  }
  function hash(value) {
    let number = 2166136261;
    for (let i = 0; i < value.length; i++) {
      number ^= value.charCodeAt(i);
      number = Math.imul(number, 16777619);
    }
    return number >>> 0;
  }
  function readData() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!parsed || !Array.isArray(parsed.days)) return { ...storageFallback };
      return {
        days: Array.from(new Set(parsed.days.filter((x) => /^\d{4}-\d{2}-\d{2}$/.test(x)))).sort().slice(-400),
        level: LEVELS.includes(parsed.level) ? parsed.level : "beginner"
      };
    } catch (_) {
      return { ...storageFallback };
    }
  }
  function saveData() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(data)); } catch (_) { /* private browsing */ }
  }
  function keyNotes(k) {
    return [0, 1, 2, 4, 5].map((degree) => k.names[degree]).join(" · ");
  }
  function makeChallenge(day, level, offset) {
    const seed = hash(day + ":" + level);
    const allowedKeys = level === "beginner" ? KEY_NAMES.slice(0, 3) : KEY_NAMES;
    const k = allowedKeys[(seed + offset) % allowedKeys.length];
    const p = PROGRESSIONS[level][(Math.floor(seed / 7) + offset) % PROGRESSIONS[level].length];
    const promptList = PROMPTS[level];
    const prompt = promptList[(Math.floor(seed / 13) + offset) % promptList.length];
    return {
      key: k, degrees: p, prompt: prompt, notes: keyNotes(k),
      chords: p.map((degree) => k.names[degree] + (MINOR_DEGREES.includes(degree) ? "m" : degree === 6 ? "dim" : "")),
      label: offset === 0 ? "Today's exercise" : "Extra idea " + offset
    };
  }
  function currentStreak() {
    const completed = new Set(data.days);
    let cursor = new Date(todayKey() + "T12:00:00");
    if (!completed.has(todayKey())) cursor.setDate(cursor.getDate() - 1);
    let count = 0;
    while (count < 400) {
      const date = [cursor.getFullYear(), String(cursor.getMonth() + 1).padStart(2, "0"), String(cursor.getDate()).padStart(2, "0")].join("-");
      if (!completed.has(date)) break;
      count++;
      cursor.setDate(cursor.getDate() - 1);
    }
    return count;
  }
  function setStatus(message) { elements.status.textContent = message; }
  function updateProgress() {
    const done = data.days.includes(todayKey());
    elements.streak.textContent = currentStreak();
    elements.total.textContent = data.days.length;
    elements.done.disabled = done;
    elements.done.textContent = done ? "✓ Today's practice completed" : "✓ Mark today's practice done";
  }
  function render() {
    const day = todayKey();
    challenge = makeChallenge(day, elements.level.value, variation);
    elements.date.textContent = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long" }).format(new Date(day + "T12:00:00"));
    elements.key.textContent = challenge.key.name + " major";
    elements.variation.textContent = challenge.label;
    elements.prompt.textContent = challenge.prompt + " Use the " + challenge.key.name + " major pentatonic scale: " + challenge.notes + ".";
    elements.notes.textContent = challenge.notes;
    elements.chords.replaceChildren();
    challenge.chords.forEach(function (name, index) {
      const chip = document.createElement("span");
      chip.textContent = name;
      chip.dataset.bar = String(index);
      elements.chords.appendChild(chip);
    });
    updateProgress();
  }
  function midiFreq(note) { return 440 * Math.pow(2, (note - 69) / 12); }
  function makeTone(midi, when, duration, gain, type) {
    const osc = audioCtx.createOscillator();
    const envelope = audioCtx.createGain();
    osc.type = type || "triangle";
    osc.frequency.setValueAtTime(midiFreq(midi), when);
    envelope.gain.setValueAtTime(0.0001, when);
    envelope.gain.exponentialRampToValueAtTime(gain, when + 0.025);
    envelope.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    osc.connect(envelope);
    envelope.connect(audioCtx.destination);
    osc.start(when);
    osc.stop(when + duration + 0.05);
    osc.addEventListener("ended", function () {
      osc.disconnect(); envelope.disconnect();
      sounding = sounding.filter((item) => item !== osc);
    }, { once: true });
    sounding.push(osc);
  }
  function chordAt(bar, when, beatLength) {
    const degree = challenge.degrees[bar];
    const root = 48 + challenge.key.root + SCALE[degree];
    const third = MINOR_DEGREES.includes(degree) ? 3 : 4;
    // Double the original piano gain, keeping headroom for the quiet drum groove.
    makeTone(root - 12, when, beatLength * 1.9, 0.110, "sine");
    makeTone(root, when, beatLength * 3.65, 0.036, "triangle");
    makeTone(root + third, when, beatLength * 3.65, 0.028, "triangle");
    makeTone(root + 7, when, beatLength * 3.65, 0.028, "triangle");
  }
  function trackDrum(source, envelope, filter, when, duration) {
    source.connect(filter || envelope);
    if (filter) filter.connect(envelope);
    envelope.connect(audioCtx.destination);
    source.start(when);
    source.stop(when + duration);
    source.addEventListener("ended", function () {
      source.disconnect();
      if (filter) filter.disconnect();
      envelope.disconnect();
      sounding = sounding.filter((item) => item !== source);
    }, { once: true });
    sounding.push(source);
  }
  function kick(when) {
    const source = audioCtx.createOscillator();
    const envelope = audioCtx.createGain();
    source.frequency.setValueAtTime(140, when);
    source.frequency.exponentialRampToValueAtTime(48, when + 0.12);
    envelope.gain.setValueAtTime(0.16, when);
    envelope.gain.exponentialRampToValueAtTime(0.0001, when + 0.24);
    trackDrum(source, envelope, null, when, 0.26);
  }
  function noiseHit(when, duration, gain, frequency, type) {
    const source = audioCtx.createBufferSource();
    const envelope = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    source.buffer = drumNoise;
    filter.type = type;
    filter.frequency.setValueAtTime(frequency, when);
    filter.Q.setValueAtTime(0.7, when);
    envelope.gain.setValueAtTime(gain, when);
    envelope.gain.exponentialRampToValueAtTime(0.0001, when + duration);
    trackDrum(source, envelope, filter, when, duration + 0.01);
  }
  function drumsAt(beat, when, beatLength) {
    if (beat === 0 || beat === 2) kick(when);
    else {
      noiseHit(when, 0.16, 0.075, 1800, "bandpass");
      // A short low tone gives the snare body beneath its noise snap.
      makeTone(50, when, 0.09, 0.025, "triangle");
    }
    noiseHit(when, 0.045, 0.035, 7000, "highpass");
    noiseHit(when + beatLength / 2, 0.045, 0.025, 7000, "highpass");
  }
  function tick() {
    if (!playing || !audioCtx) return;
    const beatLength = 60 / Number(elements.bpm.value);
    while (nextBeatTime < audioCtx.currentTime + 0.16) {
      const beat = beatCounter % 4;
      const bar = Math.floor(beatCounter / 4) % 4;
      drumsAt(beat, nextBeatTime, beatLength);
      if (beat === 0) chordAt(bar, nextBeatTime, beatLength);
      if (beat === 2) {
        const degree = challenge.degrees[bar];
        makeTone(48 + challenge.key.root + SCALE[degree] - 12, nextBeatTime, beatLength * 0.8, 0.068, "sine");
      }
      const visualDelay = Math.max(0, (nextBeatTime - audioCtx.currentTime) * 1000);
      // Keep animation best-effort; the actual musical timing is scheduled in AudioContext.
      if (visualDelay < 160) {
        Array.from(elements.chords.children).forEach((el, index) => {
          if (index === bar) el.setAttribute("aria-current", "true");
          else el.removeAttribute("aria-current");
        });
      }
      beatCounter++;
      nextBeatTime += beatLength;
    }
  }
  function stopAudio() {
    playing = false;
    if (timer !== null) { clearInterval(timer); timer = null; }
    sounding.forEach(function (node) { try { node.stop(); } catch (_) {} });
    sounding = [];
    Array.from(elements.chords.children).forEach((el) => el.removeAttribute("aria-current"));
    elements.play.textContent = "▶ Play accompaniment";
  }
  async function toggleAudio() {
    if (playing) { stopAudio(); setStatus("Playback stopped. Try another melody or choose Play to continue."); return; }
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) { setStatus("Audio playback is not supported in this browser. You can still use the chord and melody prompts."); return; }
    try {
      if (!audioCtx) {
        audioCtx = new AudioContextClass();
        drumNoise = audioCtx.createBuffer(1, Math.ceil(audioCtx.sampleRate * 0.2), audioCtx.sampleRate);
        const samples = drumNoise.getChannelData(0);
        for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1;
      }
      if (audioCtx.state !== "running") await audioCtx.resume();
      playing = true; beatCounter = 0; nextBeatTime = audioCtx.currentTime + 0.06;
      timer = setInterval(tick, 65);
      tick();
      elements.play.textContent = "■ Stop accompaniment";
      setStatus("Playing piano with bass drum, snare and closed hi-hat at " + elements.bpm.value + " BPM. Your highlighted chord is the current bar.");
    } catch (_) { stopAudio(); setStatus("Could not start audio. Please check browser audio permissions and try again."); }
  }
  elements.level.value = data.level;
  elements.bpmValue.textContent = elements.bpm.value + " BPM";
  elements.play.addEventListener("click", toggleAudio);
  elements.next.addEventListener("click", function () {
    stopAudio(); variation++; render();
    setStatus("New variation ready. Press Play for the new progression.");
  });
  elements.level.addEventListener("change", function () {
    stopAudio(); variation = 0; data.level = elements.level.value; saveData(); render();
    setStatus("Practice level changed. Today's exercise has been updated.");
  });
  elements.bpm.addEventListener("input", function () {
    elements.bpmValue.textContent = elements.bpm.value + " BPM";
    if (playing) setStatus("Tempo adjusted to " + elements.bpm.value + " BPM.");
  });
  elements.done.addEventListener("click", function () {
    if (data.days.includes(todayKey())) return;
    data.days.push(todayKey()); data.days.sort(); saveData(); updateProgress();
    setStatus("Well played! Today's session is recorded on this device. Come back tomorrow for a fresh challenge.");
  });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stopAudio(); });
  window.addEventListener("pagehide", stopAudio);
  render();
})();
