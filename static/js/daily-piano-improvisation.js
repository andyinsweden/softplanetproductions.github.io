(function () {
  "use strict";
  const root = document.getElementById("sp-daily-improv");
  if (!root) return;
  const language = document.documentElement.lang.split("-")[0];
  const message = (english, spanish, german) => ({ es: spanish, de: german })[language] ?? english;
  const $ = (id) => document.getElementById(id);
  const elements = {
    date: $("sp-daily-date"), key: $("sp-daily-key"), variation: $("sp-daily-variation"),
    chords: $("sp-daily-chords"), prompt: $("sp-daily-prompt"), notes: $("sp-daily-notes"),
    level: $("sp-daily-level"), meter: $("sp-daily-meter"), bpm: $("sp-daily-bpm"), bpmValue: $("sp-daily-bpm-value"),
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
      message("Choose three notes from the suggested scale. Play a musical question, leave a pause, and answer it.", "Elige tres notas de la escala propuesta. Toca una pregunta musical, deja una pausa y contéstala.", "Wähle drei Töne aus der vorgeschlagenen Tonleiter. Spiele eine musikalische Frage, lasse eine Pause und antworte darauf."),
      message("Make a short two-beat melody. Repeat it over the next chord, changing only the last note.", "Crea una melodía breve de dos tiempos. Repítela sobre el siguiente acorde y cambia solo la última nota.", "Erfinde eine kurze Melodie über zwei Schläge. Wiederhole sie über dem nächsten Akkord und ändere nur den letzten Ton."),
      message("Play one note per beat. Add a little space, then try the same notes in a new order.", "Toca una nota por tiempo. Deja algún silencio y luego prueba las mismas notas en otro orden.", "Spiele einen Ton pro Schlag. Lasse eine kleine Pause und probiere dieselben Töne in anderer Reihenfolge."),
      message("Start on the first note of the key. Change your rhythm before changing any notes.", "Empieza en la tónica. Varía el ritmo antes de cambiar las notas.", "Beginne auf dem Grundton der Tonart. Verändere erst den Rhythmus und danach die Tonfolge.")
    ],
    intermediate: [
      message("Find the nearest chord tone when the harmony changes. Let your melody move smoothly between chords.", "Cuando cambie la armonía, busca la nota más cercana del nuevo acorde. Deja que la melodía enlace los acordes con suavidad.", "Suche beim Akkordwechsel den nächstgelegenen Akkordton. Führe deine Melodie fließend von einem Akkord zum nächsten."),
      message("Create a two-bar motif, then answer it in bars three and four using rhythmic variation.", "Crea un motivo de dos compases. Contéstalo en los compases tres y cuatro con una variación rítmica.", "Erfinde ein Motiv über zwei Takte und beantworte es im dritten und vierten Takt mit einer rhythmischen Variation."),
      message("Keep a left-hand root note on beat one while improvising a syncopated right-hand phrase.", "Toca la fundamental en el primer tiempo con la mano izquierda e improvisa una frase sincopada con la derecha.", "Spiele auf Zählzeit eins den Grundton mit links und improvisiere rechts eine Phrase mit Synkopen."),
      message("Improvise with five notes. Try a longer phrase followed by a short, contrasting response.", "Improvisa con cinco notas. Prueba una frase larga seguida de una respuesta breve que contraste con ella.", "Improvisiere mit fünf Tönen. Auf eine längere Phrase folgt eine kurze Antwort, die sich deutlich von ihr abhebt.")
    ],
    expressive: [
      message("Create a reflective opening. Gradually widen your melodic intervals, then return to a quiet ending.", "Empieza con un motivo tranquilo. Amplía poco a poco los intervalos de la melodía y termina con suavidad.", "Beginne ruhig. Vergrößere nach und nach die Intervalle deiner Melodie und finde zu einem leisen Schluss zurück."),
      message("Use the chord tones on the strong beats. Add passing notes between them and create tension and release.", "Usa las notas del acorde en los tiempos fuertes. Añade notas de paso para crear y resolver tensión.", "Spiele Akkordtöne auf den betonten Zählzeiten. Füge Durchgangstöne ein, um Spannung aufzubauen und aufzulösen."),
      message("Try a rolling broken-chord accompaniment with your left hand and a lyrical melody above it.", "Prueba un acompañamiento fluido de acordes desglosados con la mano izquierda y una melodía cantable por encima.", "Spiele links gebrochene Akkorde als fließende Begleitung und rechts eine gesangliche Melodie."),
      message("Build a musical arc across four bars: question, answer, surprise, resolution.", "Construye un arco musical de cuatro compases: pregunta, respuesta, sorpresa y resolución.", "Gestalte einen musikalischen Bogen über vier Takte: Frage, Antwort, Überraschung und Auflösung.")
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
      label: offset === 0 ? message("Today's exercise", "Ejercicio de hoy", "Übung des Tages") : message("Extra idea ", "Idea adicional ", "Weitere Idee ") + offset
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
    elements.done.textContent = done ? message("✓ Today's practice completed", "✓ Práctica de hoy completada", "✓ Übung für heute abgeschlossen") : message("✓ Mark today's practice done", "✓ Marcar la práctica de hoy como completada", "✓ Heutige Übung als erledigt markieren");
  }
  function render() {
    const day = todayKey();
    challenge = makeChallenge(day, elements.level.value, variation);
    elements.date.textContent = new Intl.DateTimeFormat(message("en-GB", "es", "de"), { weekday: "long", day: "numeric", month: "long" }).format(new Date(day + "T12:00:00"));
    elements.key.textContent = challenge.key.name + message(" major", " mayor", "-Dur");
    elements.variation.textContent = challenge.label;
    elements.prompt.textContent = challenge.prompt + message(
      ` Use the ${challenge.key.name} major pentatonic scale: ${challenge.notes}.`,
      ` Usa la escala pentatónica mayor de ${challenge.key.name}: ${challenge.notes}.`,
      ` Verwende die ${challenge.key.name}-Dur-Pentatonik: ${challenge.notes}.`
    );
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
    const duration = beatLength * 0.92;
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
  const METERS = ["2/4", "3/4", "4/4", "5/4", "6/8"];
  function currentMeter() {
    return elements.meter.value === "auto" ? METERS[(hash(todayKey() + ":" + elements.level.value) + variation) % METERS.length] : elements.meter.value;
  }
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
  // For compound time, each scheduler step is an eighth note; 6/8 accents 1 and 4.
  // All other meters schedule quarter-note beats. The chord changes each full bar.
  function alternateRhythmAt(bar, beat, when, stepLength, meter, groove, phrase) {
    const root = 36 + challenge.key.root + SCALE[challenge.degrees[bar]];
    const nextRoot = 36 + challenge.key.root + SCALE[challenge.degrees[(bar + 1) % 4]];
    const fifth = root + 7;
    const pickup = nextRoot > root ? nextRoot - 2 : nextRoot + 2;
    const hit = (name, offset, volume) =>
      playSample(samples[name], when + stepLength * offset, volume, audioCtx.destination);
    const bass = (note, offset, length, volume) =>
      bassNote(note, when + stepLength * offset, stepLength * length, volume);
    if (meter === "6/8") {
      if (beat === 0) {
        hit("kick", 0, 0.18);
        bass(root, 0, groove === 3 ? 2.65 : 1.9, 0.95);
      }
      if (beat === 3) {
        hit("snare", 0, 0.115);
        if (groove !== 3) bass(fifth, 0, 1.7, 0.67);
      }
      if (beat === 2 && groove === 1) hit("kick", 0, 0.09);
      if (beat === 4 && groove === 2) bass(root, 0, 0.75, 0.57);
      if (beat === 5 && (groove === 1 || bar === 3)) {
        bass(pickup, 0, 0.7, 0.48);
        if (bar === 3 && phrase % 2) hit("snare", 0, 0.054);
      }
      // An eighth-note lilt; sparse hats for the half-time arrangement.
      if (groove !== 3 || beat % 3 === 0)
        hit("hat", 0, beat === 0 || beat === 3 ? 0.062 : 0.034);
      return;
    }
    const beatsPerBar = Number(meter.split("/")[0]);
    const finalBeat = beat === beatsPerBar - 1;
    if (beat === 0) {
      hit("kick", 0, 0.18);
      bass(root, 0, 0.8, 0.95);
    }
    if (meter === "2/4") {
      if (beat === 1) hit("snare", 0, 0.126);
    } else if (meter === "3/4") {
      if (beat === 1) hit("snare", 0, 0.09);
      if (beat === 2 && groove === 2) hit("kick", 0, 0.09);
    } else if (meter === "5/4") {
      // 3+2 grouping, rather than a 4/4 bar with an added empty beat.
      if (beat === 1 || beat === 3) hit("snare", 0, beat === 3 ? 0.125 : 0.085);
      if (beat === 3) hit("kick", 0, 0.12);
      if (beat === 2 && groove === 2) hit("kick", 0, 0.08);
    }
    if (beat !== 0 && (beat === 2 || (meter === "3/4" && beat === 1)))
      bass(beat === 2 ? root : fifth, groove === 1 ? 0.5 : 0, 0.55, 0.68);
    if (finalBeat && groove !== 3) {
      bass(pickup, 0.5, 0.35, 0.51);
      if (bar === 3 && phrase % 2) hit("snare", 0.75, 0.057);
    }
    hit("hat", 0, beat === 0 || (meter === "5/4" && beat === 3) ? 0.065 : 0.045);
    if (groove !== 3 || beat % 2 === 1) hit("hat", 0.5, 0.034);
    if (groove === 2 && finalBeat) hit("hat", 0.75, 0.027);
  }
  function tick() {
    if (!playing || !audioCtx) return;
    const meter = currentMeter();
    const beatsPerBar = Number(meter.split("/")[0]);
    const stepLength = 60 / Number(elements.bpm.value) * (meter === "6/8" ? 0.5 : 1);
    while (nextBeatTime < audioCtx.currentTime + 0.16) {
      const beat = beatCounter % beatsPerBar;
      const bar = Math.floor(beatCounter / beatsPerBar) % 4;
      const groove = grooveIndex();
      const phrase = Math.floor(beatCounter / (beatsPerBar * 4));
      if (meter === "4/4") {
        drumsAt(bar, beat, nextBeatTime, stepLength, groove, phrase);
        bassAt(bar, beat, nextBeatTime, stepLength, groove, phrase);
      } else {
        alternateRhythmAt(bar, beat, nextBeatTime, stepLength, meter, groove, phrase);
      }
      if (beat === 0) chordAt(bar, nextBeatTime, stepLength * beatsPerBar);
      if (nextBeatTime - audioCtx.currentTime < 0.16) {
        Array.from(elements.chords.children).forEach((el, index) => {
          if (index === bar) el.setAttribute("aria-current", "true");
          else el.removeAttribute("aria-current");
        });
      }
      beatCounter++;
      nextBeatTime += stepLength;
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
    elements.play.textContent = message("▶ Play accompaniment", "▶ Reproducir acompañamiento", "▶ Begleitung abspielen");
  }
  async function toggleAudio() {
    if (playing) { stopAudio(); setStatus(message("Playback stopped. Try another melody or choose Play to continue.", "Reproducción detenida. Prueba otra melodía o pulsa Reproducir para continuar.", "Wiedergabe gestoppt. Probiere eine andere Melodie oder starte die Wiedergabe erneut.")); return; }
    if (pendingStart) return;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) { setStatus(message("Audio playback is not supported in this browser. You can still use the chord and melody prompts.", "Este navegador no admite la reproducción de audio. Aun así, puedes usar los ejercicios de acordes y melodía.", "Dein Browser unterstützt keine Audiowiedergabe. Du kannst die Akkorde und Melodieideen trotzdem verwenden.")); return; }
    const start = {};
    pendingStart = start;
    try {
      if (!audioCtx) audioCtx = new AudioContextClass();
      if (audioCtx.state !== "running") await audioCtx.resume();
      if (pendingStart !== start) return;
      if (!samples) {
        setStatus(message("Loading electric piano and drum sounds…", "Cargando los sonidos de piano eléctrico y batería…", "E-Piano- und Schlagzeugklänge werden geladen …"));
        samples = await loadSamples();
        if (pendingStart !== start) return;
      }
      playing = true; beatCounter = 0; nextBeatTime = audioCtx.currentTime + 0.06;
      timer = setInterval(tick, 65);
      tick();
      elements.play.textContent = message("■ Stop accompaniment", "■ Detener acompañamiento", "■ Begleitung stoppen");
      setStatus(message(
        `Playing ${currentMeter()} in a ${GROOVES[grooveIndex()].toLowerCase()} groove with electric piano, bass and drums at ${elements.bpm.value} BPM. Chords highlight each bar.`,
        `Reproduciendo en ${currentMeter()} con piano eléctrico, bajo y batería a ${elements.bpm.value} BPM. El acorde activo se resalta en cada compás.`,
        `Wiedergabe im ${currentMeter()}-Takt mit E-Piano, Bass und Schlagzeug bei ${elements.bpm.value} BPM. Der aktuelle Akkord wird hervorgehoben.`
      ));
    } catch (_) {
      if (pendingStart === start) {
        stopAudio();
        setStatus(message("Could not start the accompaniment. Press Play to try again.", "No se pudo iniciar el acompañamiento. Pulsa Reproducir para volver a intentarlo.", "Die Begleitung konnte nicht gestartet werden. Starte die Wiedergabe erneut."));
      }
    } finally {
      if (pendingStart === start) pendingStart = null;
    }
  }
  elements.level.value = data.level;
  elements.bpmValue.textContent = elements.bpm.value + " BPM";
  elements.play.addEventListener("click", toggleAudio);
  elements.meter.addEventListener("change", function () {
    stopAudio();
    const meter = elements.meter.value === "auto"
      ? message(`automatic (${currentMeter()})`, `automático (${currentMeter()})`, `automatisch (${currentMeter()})`)
      : currentMeter();
    setStatus(message(
      `Time signature set to ${meter}. Press Play to hear the new rhythm.`,
      `Compás seleccionado: ${meter}. Pulsa Reproducir para escuchar el nuevo ritmo.`,
      `Taktart gewählt: ${meter}. Starte die Wiedergabe, um den neuen Rhythmus zu hören.`
    ));
  });
  elements.next.addEventListener("click", function () {
    stopAudio(); variation++; render();
    setStatus(message(
      `New variation ready in ${currentMeter()}. Press Play to hear the progression and rhythm.`,
      `Nueva variación en ${currentMeter()}. Pulsa Reproducir para escuchar la progresión y el ritmo.`,
      `Neue Variante in ${currentMeter()}. Starte die Wiedergabe, um Akkorde und Rhythmus zu hören.`
    ));
  });
  elements.level.addEventListener("change", function () {
    stopAudio(); variation = 0; data.level = elements.level.value; saveData(); render();
    setStatus(message("Practice level changed. Today's exercise has been updated.", "Se actualizó el ejercicio de hoy con el nuevo nivel.", "Die heutige Übung wurde an die gewählte Stufe angepasst."));
  });
  elements.bpm.addEventListener("input", function () {
    elements.bpmValue.textContent = elements.bpm.value + " BPM";
    if (playing) setStatus(message(`Tempo adjusted to ${elements.bpm.value} BPM.`, `Tempo ajustado a ${elements.bpm.value} BPM.`, `Tempo: ${elements.bpm.value} BPM.`));
  });
  elements.done.addEventListener("click", function () {
    if (data.days.includes(todayKey())) return;
    data.days.push(todayKey()); data.days.sort(); saveData(); updateProgress();
    setStatus(message("Well played! Today's session is recorded on this device. Come back tomorrow for a fresh challenge.", "¡Bien hecho! La sesión de hoy se guardó en este dispositivo. Vuelve mañana para probar un reto nuevo.", "Gut gespielt! Die heutige Übung ist auf diesem Gerät gespeichert. Morgen wartet eine neue Aufgabe auf dich."));
  });
  document.addEventListener("visibilitychange", function () { if (document.hidden) stopAudio(); });
  window.addEventListener("pagehide", stopAudio);
  render();
})();
