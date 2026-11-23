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
  const SAMPLE_DIRECTORY = "/audio/daily-piano-improvisation/";
  const PIANO_SAMPLE_NOTES = [48, 51, 54, 57, 60, 63, 66, 69, 72, 75];
  const SAMPLE_NAMES = [...PIANO_SAMPLE_NOTES.map((note) => "ep-" + note), "kick", "snare", "hat"];
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
  let samples = null;
  let sampleLoad = null;
  let timer = null;
  let nextBeatTime = 0;
  let beatCounter = 0;
  let sounding = [];
  let playing = false;
  let pendingStart = null;
  let activeChord = null;

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
  function loadSamples() {
    if (!sampleLoad) {
      sampleLoad = Promise.all(SAMPLE_NAMES.map(async (name) => {
        const response = await fetch(SAMPLE_DIRECTORY + name + ".mp3");
        if (!response.ok) throw new Error("Sample download failed: " + name);
        const buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
        return [name, buffer];
      })).then((entries) => Object.fromEntries(entries)).catch((error) => {
        sampleLoad = null;
        throw error;
      });
    }
    return sampleLoad;
  }
  function playSample(buffer, when, volume, output, rate = 1, duration = Infinity) {
    const source = audioCtx.createBufferSource();
    const envelope = audioCtx.createGain();
    const naturalDuration = buffer.duration / rate;
    source.buffer = buffer;
    source.playbackRate.setValueAtTime(rate, when);
    envelope.gain.setValueAtTime(volume, when);
    if (duration < naturalDuration) {
      const end = when + duration;
      envelope.gain.setValueAtTime(volume, end - 0.075);
      envelope.gain.linearRampToValueAtTime(0, end);
    }
    source.connect(envelope);
    envelope.connect(output);
    source.addEventListener("ended", function () {
      source.disconnect();
      envelope.disconnect();
      sounding = sounding.filter((item) => item !== source);
    }, { once: true });
    source.start(when);
    if (duration < naturalDuration) source.stop(when + duration);
    sounding.push(source);
    return source;
  }
  function electricPianoNote(midi, when, duration, volume, output) {
    const note = PIANO_SAMPLE_NOTES.reduce((closest, candidate) =>
      Math.abs(candidate - midi) < Math.abs(closest - midi) ? candidate : closest
    );
    const rate = 2 ** ((midi - note) / 12);
    return playSample(samples["ep-" + note], when, volume, output, rate, duration);
  }
  function chordAt(bar, when, beatLength) {
    const degree = challenge.degrees[bar];
    const root = 48 + challenge.key.root + SCALE[degree];
    const third = MINOR_DEGREES.includes(degree) ? 3 : 4;
    const duration = beatLength * 3.65;
    // A tempo increase can bring the next bar in before the old chord has decayed.
    if (activeChord && activeChord.end > when) {
      const releaseStart = Math.max(audioCtx.currentTime, when - 0.015);
      activeChord.output.gain.setValueAtTime(1, releaseStart);
      activeChord.output.gain.linearRampToValueAtTime(0, Math.max(releaseStart, when));
    }

    const output = audioCtx.createGain();
    output.connect(audioCtx.destination);
    let notesPlaying = 3;
    for (const [note, volume] of [[root, 0.42], [root + third, 0.34], [root + 7, 0.34]]) {
      const source = electricPianoNote(note, when, duration, volume, output);
      source.addEventListener("ended", () => {
        if (--notesPlaying === 0) output.disconnect();
      }, { once: true });
    }
    activeChord = { output, end: when + duration };
  }
  // Soft, plucked electric-style bass, synthesized locally without extra downloads.
  function bassNote(midi, when, duration, intensity = 1) {
    const frequency = 440 * 2 ** ((midi - 69) / 12);
    const end = when + Math.max(0.12, duration);
    const oscillator = audioCtx.createOscillator();
    const sub = audioCtx.createOscillator();
    const subGain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    const envelope = audioCtx.createGain();
    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(frequency, when);
    sub.type = "sine";
    sub.frequency.setValueAtTime(frequency / 2, when);
    subGain.gain.value = 0.22;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(580, when);
    filter.frequency.exponentialRampToValueAtTime(190, Math.min(end, when + 0.22));
    envelope.gain.setValueAtTime(0.0001, when);
    envelope.gain.exponentialRampToValueAtTime(0.16 * intensity, when + 0.012);
    envelope.gain.exponentialRampToValueAtTime(0.0001, end);
    oscillator.connect(filter);
    sub.connect(subGain);
    subGain.connect(filter);
    filter.connect(envelope);
    envelope.connect(audioCtx.destination);
    oscillator.start(when);
    sub.start(when);
    oscillator.stop(end + 0.015);
    sub.stop(end + 0.015);
    const voice = { stop: () => { try { oscillator.stop(); } catch (_) {} try { sub.stop(); } catch (_) {} } };
    sounding.push(voice);
    oscillator.addEventListener("ended", () => {
      oscillator.disconnect();
      sub.disconnect();
      subGain.disconnect();
      filter.disconnect();
      envelope.disconnect();
      sounding = sounding.filter((item) => item !== voice);
    }, { once: true });
  }
  // Four complementary grooves provide variety without sacrificing the beat
  // or becoming too busy for improvisation. A new idea chooses a new groove.
  const GROOVES = ["Laid-back", "Syncopated", "Driving", "Half-time"];
  function grooveIndex() {
    return (hash(todayKey() + ":" + elements.level.value) + variation) % GROOVES.length;
  }
  function bassAt(bar, beat, when, beatLength, groove, phrase) {
    const root = 36 + challenge.key.root + SCALE[challenge.degrees[bar]];
    const followingRoot = 36 + challenge.key.root + SCALE[challenge.degrees[(bar + 1) % 4]];
    const fifth = root + 7;
    const pickup = followingRoot > root ? followingRoot - 2 : followingRoot + 2;
    const add = (note, offset, length, intensity) =>
      bassNote(note, when + beatLength * offset, beatLength * length, intensity);
    // Anchor every chord change, then answer it with a small rhythmic phrase.
    if (beat === 0) add(root, 0, groove === 3 ? 1.4 : 0.78, 0.93);
    if (groove === 0) {
      if (beat === 1 && bar % 2 === 0) add(fifth, 0.5, 0.38, 0.54);
      if (beat === 2) add(root, 0, 0.68, 0.76);
      if (beat === 3 && bar !== 3) add(pickup, 0.5, 0.32, 0.46);
    } else if (groove === 1) {
      if (beat === 0 && bar % 2 === 1) add(fifth, 0.75, 0.22, 0.43);
      if (beat === 1) add(fifth, 0.5, 0.32, 0.64);
      if (beat === 2) add(root, 0.75, 0.34, 0.81);
      if (beat === 3) add(bar === 3 ? fifth : pickup, 0.5, 0.29, 0.54);
    } else if (groove === 2) {
      if (beat === 1) add(fifth, 0, 0.42, 0.63);
      if (beat === 2) add(root, 0, 0.43, 0.85);
      if (beat === 3) {
        add(fifth, 0, 0.31, 0.58);
        if (bar !== 3 || phrase % 2 === 1) add(pickup, 0.5, 0.3, 0.53);
      }
    } else {
      if (beat === 2) add(fifth, 0.5, 0.72, 0.58);
      if (beat === 3 && bar === 3) add(pickup, 0.5, 0.32, 0.42);
    }
  }
  function drumsAt(bar, beat, when, beatLength, groove, phrase) {
    const output = audioCtx.destination;
    const hit = (name, offset, volume) =>
      playSample(samples[name], when + beatLength * offset, volume, output);
    const ending = bar === 3 && beat === 3;
    if (groove === 0) {
      if (beat === 0 || beat === 2) hit("kick", 0, 0.18);
      if (beat === 1 || beat === 3) hit("snare", 0, 0.12);
      if (beat === 2 && bar % 2 === 1) hit("kick", 0.5, 0.095);
    } else if (groove === 1) {
      if (beat === 0 || beat === 2) hit("kick", 0, 0.18);
      if (beat === 1 || beat === 3) hit("snare", 0, 0.12);
      if (beat === 1 || (beat === 3 && bar % 2 === 0)) hit("kick", 0.75, 0.115);
      if (beat === 2 && bar % 2 === 1) hit("snare", 0.75, 0.048);
    } else if (groove === 2) {
      hit("kick", 0, beat % 2 === 0 ? 0.18 : 0.135);
      if (beat === 1 || beat === 3) hit("snare", 0, 0.12);
      if (beat === 3 && bar % 2 === 1) hit("kick", 0.5, 0.09);
    } else {
      if (beat === 0 || beat === 2) hit("kick", 0, 0.18);
      if (beat === 2) hit("snare", 0, 0.135);
      if (beat === 3 && bar % 2 === 1) hit("kick", 0.5, 0.085);
      if (beat === 3 && bar === 1) hit("snare", 0.75, 0.045);
    }
    // Lightly accented hats, with rests and small 16th-note turnarounds.
    hit("hat", 0, beat === 0 || beat === 2 ? 0.064 : 0.048);
    if (groove !== 3 || beat % 2 === 1) hit("hat", 0.5, 0.036);
    if (groove === 2 && beat % 2 === 1) hit("hat", 0.75, 0.023);
    if (ending && phrase % 2 === 1) {
      hit("snare", 0.5, 0.065);
      hit("snare", 0.75, 0.082);
      hit("hat", 0.75, 0.042);
    } else if (ending) {
      hit("snare", 0.75, 0.047);
    }
  }
  function tick() {
    if (!playing || !audioCtx) return;
    const beatLength = 60 / Number(elements.bpm.value);
    while (nextBeatTime < audioCtx.currentTime + 0.16) {
      const beat = beatCounter % 4;
      const bar = Math.floor(beatCounter / 4) % 4;
      const groove = grooveIndex();
      const phrase = Math.floor(beatCounter / 16);
      drumsAt(bar, beat, nextBeatTime, beatLength, groove, phrase);
      bassAt(bar, beat, nextBeatTime, beatLength, groove, phrase);
      if (beat === 0) chordAt(bar, nextBeatTime, beatLength);
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
    pendingStart = null;
    activeChord = null;
    if (timer !== null) { clearInterval(timer); timer = null; }
    sounding.forEach(function (node) { try { node.stop(); } catch (_) {} });
    sounding = [];
    Array.from(elements.chords.children).forEach((el) => el.removeAttribute("aria-current"));
    elements.play.textContent = "▶ Play accompaniment";
  }
  async function toggleAudio() {
    if (playing) { stopAudio(); setStatus("Playback stopped. Try another melody or choose Play to continue."); return; }
    if (pendingStart) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) { setStatus("Audio playback is not supported in this browser. You can still use the chord and melody prompts."); return; }
    const start = {};
    pendingStart = start;
    try {
      if (!audioCtx) audioCtx = new AudioContextClass();
      if (audioCtx.state !== "running") await audioCtx.resume();
      if (pendingStart !== start) return;
      if (!samples) {
        setStatus("Loading electric piano and drum sounds…");
        samples = await loadSamples();
        if (pendingStart !== start) return;
      }
      playing = true; beatCounter = 0; nextBeatTime = audioCtx.currentTime + 0.06;
      timer = setInterval(tick, 65);
      tick();
      elements.play.textContent = "■ Stop accompaniment";
      setStatus("Playing the " + GROOVES[grooveIndex()].toLowerCase() + " groove with electric piano, bass and drums at " + elements.bpm.value + " BPM. Chords highlight each bar.");
    } catch (_) {
      if (pendingStart === start) {
        stopAudio();
        setStatus("Could not start the accompaniment. Press Play to try again.");
      }
    } finally {
      if (pendingStart === start) pendingStart = null;
    }
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
