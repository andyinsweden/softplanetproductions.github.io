(() => {
  'use strict';

  const tool = document.querySelector('#sp-chord-finder');
  if (!tool) return;

  const language = document.documentElement.lang.split("-")[0];
  const translations = JSON.parse(document.getElementById("softplanet-tool-messages")?.textContent || "{}");
  const message = (english, spanish, german) => translations[english] ?? ({ es: spanish, de: german })[language] ?? english;
  const find = selector => tool.querySelector(selector);
  const piano = find('[data-piano]');
  const noteInput = find('#sp-chord-notes');
  const chordInput = find('#sp-chord-symbol');
  const inversionSelect = find('#sp-chord-inversion');
  const natural = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };
  const letters = Object.keys(natural);
  const pitchNames = ['C', 'D♭', 'D', 'E♭', 'E', 'F', 'F♯', 'G', 'A♭', 'A', 'B♭', 'B'];
  const black = new Set([1, 3, 6, 8, 10]);
  const intervals = {
    1: 0, '♭2': 1, 2: 2, '♭3': 3, 3: 4, 4: 5, '♯4': 6,
    '♭5': 6, 5: 7, '♯5': 8, 6: 9, '♭♭7': 9, '♭7': 10, 7: 11,
    '♭9': 13, 9: 14, '♯9': 15, 11: 17, '♯11': 18, '♭13': 20, 13: 21,
  };
  const pc = number => ((number % 12) + 12) % 12;
  const normalize = text => text.replaceAll('♭', 'b').replaceAll('♯', '#')
    .replaceAll('𝄪', '##').replaceAll('𝄫', 'bb').replaceAll('−', '-');
  const display = text => text.replaceAll('b', '♭').replaceAll('#', '♯');
  const pitchOf = spelling => {
    const [letter, ...accidentals] = normalize(spelling);
    return natural[letter] + accidentals.reduce((total, accidental) => total + (accidental === '#' ? 1 : -1), 0);
  };
  const standardNote = midi => pitchNames[pc(midi)] + (Math.floor(midi / 12) - 1);
  const templates = [
    ['', '1 3 5', 'maj M major'],
    ['m', '1 ♭3 5', 'min minor -'],
    ['dim', '1 ♭3 ♭5', '° o'],
    ['aug', '1 3 ♯5', '+'],
    ['sus2', '1 2 5'],
    ['sus4', '1 4 5', 'sus'],
    ['5', '1 5'],
    ['6', '1 3 5 6', 'maj6'],
    ['m6', '1 ♭3 5 6', 'min6'],
    ['6/9', '1 3 5 6 9', '69'],
    ['m6/9', '1 ♭3 5 6 9', 'm69'],
    ['add9', '1 3 5 9', 'add2'],
    ['madd9', '1 ♭3 5 9', 'madd2'],
    ['add11', '1 3 5 11', 'add4'],
    ['madd11', '1 ♭3 5 11', 'madd4'],
    ['7', '1 3 5 ♭7', 'dom7'],
    ['maj7', '1 3 5 7', 'M7 Δ Δ7'],
    ['m7', '1 ♭3 5 ♭7', 'min7 -7'],
    ['m(maj7)', '1 ♭3 5 7', 'mMaj7 mmaj7 mM7'],
    ['m7♭5', '1 ♭3 ♭5 ♭7', 'ø ø7 halfdim7'],
    ['dim7', '1 ♭3 ♭5 ♭♭7', '°7 o7'],
    ['7sus4', '1 4 5 ♭7', '7sus'],
    ['7sus2', '1 2 5 ♭7'],
    ['maj7sus4', '1 4 5 7', 'M7sus4'],
    ['7♭5', '1 3 ♭5 ♭7'],
    ['7♯5', '1 3 ♯5 ♭7', 'aug7 7+5'],
    ['maj7♯5', '1 3 ♯5 7', 'M7#5 maj7+5'],
    ['maj7♭5', '1 3 ♭5 7', 'M7b5'],
    ['9', '1 3 5 ♭7 9', 'dom9'],
    ['maj9', '1 3 5 7 9', 'M9 Δ9'],
    ['m9', '1 ♭3 5 ♭7 9', 'min9'],
    ['m(maj9)', '1 ♭3 5 7 9', 'mMaj9 mmaj9 mM9'],
    ['9sus4', '1 4 5 ♭7 9', '9sus'],
    ['9♭5', '1 3 ♭5 ♭7 9'],
    ['9♯5', '1 3 ♯5 ♭7 9', '9+5'],
    ['7♭9', '1 3 5 ♭7 ♭9'],
    ['7♯9', '1 3 5 ♭7 ♯9'],
    ['7♯11', '1 3 5 ♭7 ♯11'],
    ['maj7♯11', '1 3 5 7 ♯11', 'M7#11'],
    ['maj9♯11', '1 3 5 7 9 ♯11', 'M9#11'],
    ['9♯11', '1 3 5 ♭7 9 ♯11'],
    ['7♭13', '1 3 5 ♭7 ♭13'],
    ['7♭5♭9', '1 3 ♭5 ♭7 ♭9'],
    ['7♭5♯9', '1 3 ♭5 ♭7 ♯9'],
    ['7♯5♭9', '1 3 ♯5 ♭7 ♭9', '7+5b9'],
    ['7♯5♯9', '1 3 ♯5 ♭7 ♯9', '7+5#9'],
    ['11', '1 3 5 ♭7 9 11', 'dom11'],
    ['m11', '1 ♭3 5 ♭7 9 11', 'min11'],
    ['maj11', '1 3 5 7 9 11', 'M11'],
    ['13', '1 3 5 ♭7 9 11 13', 'dom13'],
    ['m13', '1 ♭3 5 ♭7 9 11 13', 'min13'],
    ['maj13', '1 3 5 7 9 11 13', 'M13'],
    ['13sus4', '1 4 5 ♭7 9 13', '13sus'],
    ['13♭9', '1 3 5 ♭7 ♭9 13'],
    ['13♯11', '1 3 5 ♭7 9 ♯11 13'],
    ['maj13♯11', '1 3 5 7 9 ♯11 13', 'M13#11'],
    ['7♭9♭13', '1 3 5 ♭7 ♭9 ♭13'],
    ['add13', '1 3 5 13', 'add6'],
    ['madd13', '1 ♭3 5 13'],
    ['maj7add13', '1 3 5 7 13'],
    ['m7add11', '1 ♭3 5 ♭7 11'],
    ['7add11', '1 3 5 ♭7 11'],
    ['7add13', '1 3 5 ♭7 13'],
    ['13♭9♯11', '1 3 5 ♭7 ♭9 ♯11 13'],
    ['7alt', '1 3 ♭5 ♯5 ♭7 ♭9 ♯9', 'alt'],
  ].map(([suffix, degrees, aliases = '']) => {
    const tones = degrees.split(' ').map(degree => ({
      step: (Number(degree.replace(/\D/g, '')) - 1) % 7,
      semitones: intervals[degree],
    }));
    return { suffix, tones, aliases: [normalize(suffix), ...aliases.split(' ').filter(Boolean)] };
  });

  function spellTone(root, tone) {
    const letter = letters[(letters.indexOf(root[0]) + tone.step) % 7];
    const difference = pc(pitchOf(root) + tone.semitones - natural[letter] + 6) - 6;
    return letter + (difference < 0 ? '♭'.repeat(-difference) : '♯'.repeat(difference));
  }

  function parseNote(text) {
    if (/^\d+$/.test(text) && Number(text) < 128) return { midi: Number(text) };
    const match = text.match(/^([A-G])([#b]{0,2})(-?\d{1,2})?$/i);
    if (!match) throw new Error(message('Use note names such as C E♭ G, octaves such as C4, or MIDI numbers 0–127.', "Usa notas como C E♭ G, octavas como C4 o números MIDI del 0 al 127.", "Gib Notennamen wie C E♭ G, Töne mit Oktavnummer wie C4 oder MIDI-Notennummern von 0 bis 127 ein."));
    const spelling = display(match[1].toUpperCase() + match[2].replaceAll('B', 'b'));
    const pitch = pitchOf(spelling);
    if (match[3] === undefined) return { pitch, spelling };
    const midi = (Number(match[3]) + 1) * 12 + pitch;
    if (midi < 0 || midi > 127) throw new Error(message('One of those notes is outside the MIDI range (0–127).', "Una de las notas queda fuera del intervalo MIDI (0–127).", "Einer dieser Töne liegt außerhalb des MIDI-Bereichs (0–127)."));
    return { midi, spelling };
  }

  function parseNotes(text) {
    let previous = 47;
    return normalize(text.trim()).split(/[\s,;–—]+|(?<=[A-Ga-g0-9#b])-(?=[A-Ga-g])/).filter(Boolean).map(token => {
      const note = parseNote(token);
      const midi = note.midi ?? previous + (pc(note.pitch - previous) || 12);
      if (midi > 127) throw new Error(message('Use octaves to keep the notes within the MIDI range (0–127).', "Especifica las octavas para mantener las notas dentro del intervalo MIDI (0–127).", "Gib Oktavnummern an, damit die Töne im MIDI-Bereich (0–127) bleiben."));
      previous = midi;
      return { midi, spelling: note.spelling };
    });
  }

  function identify(notes) {
    const pitches = [...new Set(notes.map(pc))];
    return pitches.flatMap(root => {
      const spelling = spellings.get(root) ?? pitchNames[root];
      return templates.filter(template => template.tones.length === pitches.length &&
        template.tones.every(tone => pitches.includes(pc(root + tone.semitones))))
        .map(template => {
          const names = new Map(template.tones.map(tone => [pc(root + tone.semitones), spellTone(spelling, tone)]));
          const bass = pc(notes[0]);
          return { symbol: spelling + template.suffix + (root === bass ? '' : '/' + names.get(bass)), names };
        });
    });
  }

  function parseChord(text) {
    const match = normalize(text.trim()).match(/^([A-Ga-g])([#b]{0,2})(.*?)(?:\/([A-Ga-g][#b]{0,2}))?$/);
    if (!match) throw new Error(message('Enter a chord such as Cmaj7, B♭m9 or C/E.', "Escribe un acorde como Cmaj7, B♭m9 o C/E.", "Gib einen Akkord wie Cmaj7, B♭m9 oder C/E ein."));
    const root = display(match[1].toUpperCase() + match[2]);
    const quality = match[3].replace(/\s+/g, '');
    const compact = quality.replace(/[()]/g, '');
    const template = templates.find(type => type.aliases.includes(quality)) ??
      templates.find(type => type.aliases.includes(compact)) ??
      templates.find(type => type.aliases.includes(compact.toLowerCase()));
    if (!template) throw new Error(message('Chord type not found. Try a symbol such as Fmaj7, G7♭9 or Dsus4.', "No se reconoce el tipo de acorde. Prueba con Fmaj7, G7♭9 o Dsus4.", "Akkordtyp nicht erkannt. Probiere ein Symbol wie Fmaj7, G7♭9 oder Dsus4."));
    const slash = match[4];
    const bass = slash ? display(slash[0].toUpperCase() + slash.slice(1)) : root;
    const toneIndex = template.tones.findIndex(tone => pc(pitchOf(root) + tone.semitones) === pc(pitchOf(bass)));
    return { root, template, bass, inversion: toneIndex };
  }

  let mode = 'lookup';
  const roots = ['C','C♯','D♭','D','D♯','E♭','E','F','F♯','G♭','G','G♯','A♭','A','A♯','B♭','B'];
  const popular = ['', 'm', '7', 'maj7', 'm7', 'sus4', 'sus2', 'dim', 'aug', '6', 'm6', 'add9', 'm7♭5', 'dim7', '9', 'm9', 'maj9', '11', 'm11', '13', 'm13', 'maj13'];
  const orderedTemplates = [...popular.map(suffix => templates.find(t => t.suffix === suffix)), ...templates.filter(t => !popular.includes(t.suffix))];
  let libraryRoot = 'C';
  let librarySuffix = '';
  function renderLibrary() {
    const makeButton = (label, active, action) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = label;
      button.setAttribute('aria-pressed', String(active));
      button.addEventListener('click', action);
      return button;
    };
    find('[data-roots]').replaceChildren(...roots.map(root => makeButton(root, root === libraryRoot, () => {
      libraryRoot = root;
      chordInput.value = root + librarySuffix;
      lookupChord();
    })));
    find('[data-qualities]').replaceChildren(...orderedTemplates.map(t => makeButton(libraryRoot + t.suffix, t.suffix === librarySuffix, () => {
      chordInput.value = libraryRoot + t.suffix;
      lookupChord();
    })));
  }
  let keyboardStart = 36;
  let keyboardSpan = 36;
  let selected = new Set();
  let spellings = new Map();
  let voicing = [];
  let chord;
  let audio;
  // Salamander Grand Piano V3 (Alexander Holm), CC BY 3.0.
  // Samples are requested only after the first playback interaction.
  const pianoSampleBase = 'https://tonejs.github.io/audio/salamander/';
  const pianoSampleNotes = [
    [24, 'C1'], [36, 'C2'], [42, 'Fs2'], [48, 'C3'],
    [54, 'Fs3'], [60, 'C4'], [66, 'Fs4'], [72, 'C5'],
    [78, 'Fs5'], [84, 'C6'], [96, 'C7'],
  ];
  const pianoSamples = new Map();
  let pianoLoadPromise;
  let midiAccess;
  const midiListeners = new Map();
  const midiNotes = new Map();
  let keyButtons = new Map();

  function useNotes(notes, shift = true) {
    selected = new Set(notes.map(note => note.midi));
    spellings = new Map(notes.filter(note => note.spelling).map(note => [pc(note.midi), note.spelling]));
    clearError(noteInput);
    if (shift) fitKeyboard([...selected]);
    render();
  }

  function fitKeyboard(notes) {
    if (!notes.length) return;
    const lowest = Math.min(...notes);
    const highest = Math.max(...notes);
    const start = lowest >= keyboardStart && highest <= keyboardStart + keyboardSpan ?
      keyboardStart : Math.min(108, Math.floor(lowest / 12) * 12);
    const span = highest > start + 36 ? 48 : 36;
    if (start !== keyboardStart || span !== keyboardSpan) {
      keyboardStart = start;
      keyboardSpan = span;
      buildKeyboard();
    }
  }

  function buildKeyboard() {
    const last = Math.min(127, keyboardStart + keyboardSpan);
    const whiteCount = Array.from({ length: last - keyboardStart + 1 }, (_, i) => keyboardStart + i)
      .filter(midi => !black.has(pc(midi))).length;
    piano.style.setProperty('--black-key-width', (64 / whiteCount) + '%');
    keyButtons = new Map();
    const fragment = document.createDocumentFragment();
    let whiteIndex = 0;
    for (let midi = keyboardStart; midi <= last; midi++) {
      const button = document.createElement('button');
      const isBlack = black.has(pc(midi));
      button.type = 'button';
      button.className = 'sp-chord__key sp-chord__key--' + (isBlack ? 'black' : 'white');
      button.setAttribute('aria-label', standardNote(midi));
      if (isBlack) {
        button.style.setProperty('--key-left', (whiteIndex / whiteCount * 100) + '%');
      } else {
        whiteIndex++;
        button.textContent = pc(midi) === 0 ? standardNote(midi) : pitchNames[pc(midi)];
      }
      button.addEventListener('click', () => pressKey(midi));
      keyButtons.set(midi, button);
      fragment.append(button);
    }
    piano.replaceChildren(fragment);
    find('[data-range]').textContent = standardNote(keyboardStart) + '–' + standardNote(last);
    find('[data-octave="-1"]').disabled = keyboardStart === 0;
    find('[data-octave="1"]').disabled = keyboardStart === 108;
  }

  function pressKey(midi) {
    if (mode === 'identify') {
      if (selected.has(midi)) {
        selected.delete(midi);
        if (![...selected].some(note => pc(note) === pc(midi))) spellings.delete(pc(midi));
      } else {
        selected.add(midi);
        play([midi]);
      }
      noteInput.value = '';
      clearError(noteInput);
      render();
    } else {
      play([midi]);
    }
  }

  function setResult(title, notes = '', alternatives = '') {
    for (const [selector, value] of [['[data-result]', title], ['[data-notes]', notes], ['[data-alternatives]', alternatives]]) {
      const element = find(selector);
      if (element.textContent !== value) element.textContent = value;
    }
  }

  function setError(input, message) {
    input.setAttribute('aria-invalid', 'true');
    setResult(message);
  }

  function clearError(input) {
    input.removeAttribute('aria-invalid');
  }

  function render() {
    const lookup = mode === 'lookup';
    const input = lookup ? chordInput : noteInput;
    const notes = lookup ? voicing : [...selected].sort((a, b) => a - b);
    for (const [midi, button] of keyButtons) {
      const active = notes.includes(midi);
      button.classList.toggle('is-selected', active);
      button.classList.toggle('is-bass', active && midi === notes[0]);
      if (lookup) button.removeAttribute('aria-pressed');
      else button.setAttribute('aria-pressed', String(active));
    }
    find('[data-play]').disabled = !notes.length;
    find('[data-arpeggio]').disabled = !notes.length;
    if (input.hasAttribute('aria-invalid')) return;
    if (!notes.length) {
      setResult(message('Tap the piano keys to choose notes.', "Pulsa las teclas del piano para elegir las notas.", "Tippe auf die Klaviertasten, um Töne auszuwählen."));
      return;
    }
    const matches = lookup ? [describeVoicing()] : identify(notes);
    const best = matches[0];
    const labels = notes.map(midi => {
      const name = best?.names.get(pc(midi)) ?? spellings.get(pc(midi)) ?? pitchNames[pc(midi)];
      return name + ((midi - pitchOf(name)) / 12 - 1);
    });
    const pitchCount = new Set(notes.map(pc)).size;
    const fallback = pitchCount === 1 ? message('Choose more notes to find a chord.', "Añade notas para encontrar un acorde.", "Wähle weitere Töne, um einen Akkord zu finden.") :
      pitchCount === 2 ? message('Two distinct notes. Add a third to check for a chord.', "Has elegido dos notas distintas. Añade una tercera para buscar un acorde.", "Zwei unterschiedliche Töne. Füge einen dritten hinzu, um den Akkord zu bestimmen.") : message('No matching chord for these notes.', "No se encontró ningún acorde para estas notas.", "Kein passender Akkord für diese Töne.");
    setResult(best?.symbol ?? fallback, labels.join(' · '),
      matches.length > 1 ? message('Also fits: ', "También coincide con: ", "Ebenfalls möglich: ") + matches.slice(1).map(match => match.symbol).join(', ') : '');
  }

  function describeVoicing() {
    const { root, template, bass, inversion } = chord;
    const names = new Map(template.tones.map(tone => [pc(pitchOf(root) + tone.semitones), spellTone(root, tone)]));
    const bassName = inversion === 0 ? root : bass;
    names.set(pc(pitchOf(bassName)), bassName);
    return { symbol: root + template.suffix + (inversion === 0 ? '' : '/' + bassName), names };
  }

  function showVoicing() {
    const { root, template, bass, inversion } = chord;
    const rootMidi = 48 + pc(pitchOf(root));
    const tones = template.tones.map(tone => rootMidi + tone.semitones);
    if (inversion === 0) {
      voicing = tones;
    } else if (inversion < 0) {
      const bassMidi = rootMidi - (pc(rootMidi - pitchOf(bass)) || 12);
      voicing = [bassMidi, ...tones];
    } else {
      const bassMidi = 48 + pc(pitchOf(bass));
      const pitch = pc(bassMidi);
      voicing = tones.map(tone => bassMidi + pc(tone - pitch)).sort((a, b) => a - b);
    }
    fitKeyboard(voicing);
    render();
  }

  function lookupChord() {
    try {
      chord = parseChord(chordInput.value);
      libraryRoot = chord.root;
      librarySuffix = chord.template.suffix;
      renderLibrary();
      clearError(chordInput);
      const options = chord.template.tones.map((tone, index) => new Option(
        index === 0 ? message('Root position', "Posición fundamental", "Grundstellung") : message('Inversion ', "Inversión ", "Umkehrung ") + index + ' (' + spellTone(chord.root, tone) + message(' in bass)', " en el bajo)", " im Bass)"),
        String(index),
      ));
      if (chord.inversion < 0) options.unshift(new Option(chord.bass + ' in bass (slash chord)', '-1'));
      inversionSelect.replaceChildren(...options);
      inversionSelect.value = String(chord.inversion);
      inversionSelect.disabled = false;
      showVoicing();
    } catch (error) {
      voicing = [];
      inversionSelect.replaceChildren();
      inversionSelect.disabled = true;
      setError(chordInput, error.message);
      render();
    }
  }

  function status(selector, message) {
    const element = find(selector);
    element.textContent = message;
    element.hidden = !message;
  }

  async function loadPianoSamples() {
    if (pianoLoadPromise) return pianoLoadPromise;
    pianoLoadPromise = (async () => {
      status('[data-audio-status]', message('Loading acoustic grand piano samples…', "Cargando las muestras de piano de cola…", "Klavieraufnahmen werden geladen …"));
      const results = await Promise.allSettled(pianoSampleNotes.map(async ([midi, name]) => {
        const response = await fetch(pianoSampleBase + name + '.mp3');
        if (!response.ok) throw new Error(message('Piano sample unavailable', "Muestra de piano no disponible", "Klavieraufnahme nicht verfügbar"));
        const buffer = await response.arrayBuffer();
        pianoSamples.set(midi, await audio.decodeAudioData(buffer));
      }));
      const loaded = results.filter(result => result.status === 'fulfilled').length;
      status('[data-audio-status]', loaded ?
        (loaded === pianoSampleNotes.length ? '' : message('Some piano samples unavailable; using nearest available recordings.', "Faltan algunas muestras de piano. Se usarán las grabaciones más cercanas.", "Einige Klavieraufnahmen fehlen. Es werden die nächstgelegenen verfügbaren Aufnahmen verwendet.")) :
        message('Piano samples unavailable; using synthesized audio instead.', "Las muestras de piano no están disponibles. Se usará sonido sintetizado.", "Die Klavieraufnahmen sind nicht verfügbar. Das Tool verwendet stattdessen synthetischen Klang."));
    })();
    return pianoLoadPromise;
  }

  function playSynth(notes, step) {
    const start = audio.currentTime + .015;
    const volume = .19 / Math.sqrt(step ? 1 : notes.length);
    notes.forEach((midi, index) => {
      const time = start + index * step;
      const frequency = 440 * 2 ** ((midi - 69) / 12);
      for (const [harmonic, strength, decay] of [[1, 1, .85], [2, .32, .46], [3, .13, .24]]) {
        if (frequency * harmonic >= audio.sampleRate / 2) continue;
        const oscillator = audio.createOscillator();
        const envelope = audio.createGain();
        oscillator.frequency.value = frequency * harmonic;
        envelope.gain.setValueAtTime(.0001, time);
        envelope.gain.exponentialRampToValueAtTime(volume * strength, time + .009);
        envelope.gain.exponentialRampToValueAtTime(.0001, time + decay);
        oscillator.connect(envelope).connect(audio.destination);
        oscillator.start(time);
        oscillator.stop(time + decay + .01);
      }
    });
  }

  async function play(notes, step = 0) {
    if (!notes.length) return;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) throw new Error(message('Audio playback is unavailable in this browser.', "Este navegador no permite reproducir audio.", "Dieser Browser unterstützt keine Audiowiedergabe."));
      audio ??= new Audio();
      if (audio.state !== 'running') await audio.resume();
      await loadPianoSamples();
      if (!pianoSamples.size) {
        playSynth(notes, step);
        return;
      }
      const start = audio.currentTime + .015;
      const volume = .56 / Math.sqrt(step ? 1 : notes.length);
      notes.forEach((midi, index) => {
        const nearest = [...pianoSamples.keys()].sort((a, b) => Math.abs(a - midi) - Math.abs(b - midi))[0];
        const source = audio.createBufferSource();
        source.buffer = pianoSamples.get(nearest);
        source.playbackRate.value = 2 ** ((midi - nearest) / 12);
        const envelope = audio.createGain();
        const time = start + index * step;
        const duration = Math.min(source.buffer.duration / source.playbackRate.value, 4);
        const end = time + Math.max(.05, duration);
        envelope.gain.setValueAtTime(.0001, time);
        envelope.gain.exponentialRampToValueAtTime(volume, time + .012);
        envelope.gain.setValueAtTime(volume, Math.max(time + .013, end - .2));
        envelope.gain.exponentialRampToValueAtTime(.0001, end);
        source.connect(envelope).connect(audio.destination);
        source.start(time);
        source.stop(end + .01);
      });
    } catch {
      if (audio?.state === 'running') playSynth(notes, step);
      status('[data-audio-status]', message('Sample playback unavailable. Using synthesized audio instead.', "No se pueden reproducir las muestras. Se usará sonido sintetizado.", "Die Aufnahmen lassen sich nicht abspielen. Stattdessen erklingt synthetischer Ton."));
    }
  }

  function receiveMIDI(event, notes) {
    if (mode !== 'identify') return;
    const [statusByte, midi, velocity] = event.data;
    const command = statusByte & 0xf0;
    const channel = statusByte & 0x0f;
    const key = channel * 128 + midi;
    if (command === 0x90 && velocity > 0) {
      notes.set(key, midi);
      const held = [...midiNotes.values()].flatMap(port => [...port.values()]);
      noteInput.value = '';
      useNotes(held.map(pitch => ({ midi: pitch })));
    } else if (command === 0x80 || command === 0x90) {
      notes.delete(key);
    } else if (command === 0xb0 && (midi === 120 || midi === 123)) {
      for (const key of notes.keys()) {
        if (Math.floor(key / 128) === channel) notes.delete(key);
      }
    }
  }

  function connectInputs() {
    const inputs = new Map([...midiAccess.inputs.values()].filter(port => port.state === 'connected')
      .map(port => [port.id, port]));
    for (const [id, { port, listener }] of midiListeners) {
      if (inputs.has(id)) continue;
      port.removeEventListener('midimessage', listener);
      midiListeners.delete(id);
      midiNotes.delete(id);
    }
    for (const [id, port] of inputs) {
      if (midiListeners.has(id)) continue;
      const notes = new Map();
      const listener = event => receiveMIDI(event, notes);
      port.addEventListener('midimessage', listener);
      midiNotes.set(id, notes);
      midiListeners.set(id, { port, listener });
    }
    status('[data-midi-status]', inputs.size ? message('MIDI connected. Play a chord on your keyboard.', "MIDI conectado. Toca un acorde en tu teclado.", "MIDI verbunden. Spiele einen Akkord auf deinem Keyboard.") :
      message('No MIDI input found. Connect a keyboard and check again.', "No se detectó una entrada MIDI. Conecta un teclado y vuelve a intentarlo.", "Kein MIDI-Eingang gefunden. Schließe ein Keyboard an und versuche es erneut."));
  }

  const pressedNotes = () => mode === 'lookup' ? voicing : [...selected].sort((a, b) => a - b);
  for (const button of tool.querySelectorAll('[data-mode]')) button.addEventListener('click', () => {
    mode = button.dataset.mode;
    for (const pressed of tool.querySelectorAll('[data-mode]')) pressed.setAttribute('aria-pressed', String(pressed === button));
    for (const panel of tool.querySelectorAll('[data-panel]')) panel.hidden = panel.dataset.panel !== mode;
    for (const notes of midiNotes.values()) notes.clear();
    if (mode === 'lookup') lookupChord();
    else {
      fitKeyboard([...selected]);
      if (noteInput.hasAttribute('aria-invalid')) readNoteInput();
      else render();
    }
  });

  for (const button of tool.querySelectorAll('[data-octave]')) button.addEventListener('click', () => {
    keyboardStart += Number(button.dataset.octave) * 12;
    buildKeyboard();
    render();
  });
  for (const button of tool.querySelectorAll('[data-depth-button]')) button.addEventListener('click', () => {
    piano.dataset.depth = button.dataset.depthButton;
    for (const pressed of tool.querySelectorAll('[data-depth-button]')) pressed.setAttribute('aria-pressed', String(pressed === button));
  });
  for (const button of tool.querySelectorAll('[data-example]')) button.addEventListener('click', () => {
    noteInput.value = button.dataset.example;
    useNotes(parseNotes(noteInput.value));
  });

  function readNoteInput() {
    try {
      useNotes(parseNotes(noteInput.value));
    } catch (error) {
      useNotes([]);
      setError(noteInput, error.message);
    }
  }

  find('[data-note-form]').addEventListener('submit', event => {
    event.preventDefault();
    readNoteInput();
  });
  noteInput.addEventListener('input', readNoteInput);
  find('[data-chord-form]').addEventListener('submit', event => {
    event.preventDefault();
    lookupChord();
  });
  inversionSelect.addEventListener('change', () => {
    const inversion = Number(inversionSelect.value);
    if (inversion === chord.inversion) return;
    chord.inversion = inversion;
    chord.bass = spellTone(chord.root, chord.template.tones[inversion]);
    if (inversionSelect.options[0].value === '-1') inversionSelect.remove(0);
    chordInput.value = describeVoicing().symbol;
    showVoicing();
  });
  find('[data-clear]').addEventListener('click', () => {
    noteInput.value = '';
    for (const notes of midiNotes.values()) notes.clear();
    useNotes([]);
  });
  find('[data-play]').addEventListener('click', () => play(pressedNotes()));
  find('[data-arpeggio]').addEventListener('click', () => play(pressedNotes(), .22));

  const computer = find('[data-computer]');
  computer.addEventListener('click', () => {
    const active = computer.getAttribute('aria-pressed') !== 'true';
    computer.setAttribute('aria-pressed', String(active));
    find('[data-computer-help]').hidden = !active;
  });
  document.addEventListener('keydown', event => {
    if (mode !== 'identify' || computer.getAttribute('aria-pressed') !== 'true' ||
      event.defaultPrevented || event.repeat || event.altKey || event.ctrlKey || event.metaKey ||
      event.target.closest('input, textarea, select, [contenteditable]')) return;
    const code = 'zsxdcvgbhnjmq2w3er5t6y7u'.indexOf(event.key.toLowerCase());
    if (event.key.length === 1 && code >= 0 && keyButtons.has(keyboardStart + code)) {
      event.preventDefault();
      pressKey(keyboardStart + code);
    }
  });

  find('[data-midi]').addEventListener('click', async event => {
    const button = event.currentTarget;
    button.disabled = true;
    try {
      if (!navigator.requestMIDIAccess) {
        status('[data-midi-status]', message('Web MIDI is unavailable in this browser. Try Chrome or Edge with a connected MIDI keyboard.', "Este navegador no ofrece Web MIDI. Prueba Chrome o Edge con un teclado MIDI conectado.", "Web MIDI ist in diesem Browser nicht verfügbar. Probiere Chrome oder Edge mit angeschlossenem MIDI-Keyboard."));
        return;
      }
      if (!midiAccess) {
        midiAccess = await navigator.requestMIDIAccess({ sysex: false });
        midiAccess.addEventListener('statechange', connectInputs);
      }
      connectInputs();
    } catch {
      status('[data-midi-status]', message('MIDI access was denied or is unavailable. Check your browser’s site permissions.', "No se pudo acceder a MIDI. Revisa los permisos del sitio en el navegador.", "Der MIDI-Zugriff wurde verweigert oder ist nicht verfügbar. Prüfe die Berechtigungen für diese Website."));
    } finally {
      button.disabled = false;
    }
  });

  buildKeyboard();
  const requestedChord = new URLSearchParams(window.location.search).get('chord');
  if (requestedChord && requestedChord.length <= 40) chordInput.value = requestedChord;
  lookupChord();
})();
