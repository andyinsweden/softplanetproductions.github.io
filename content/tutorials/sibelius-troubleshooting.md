---
title: "Sibelius Troubleshooting: 50 Common Problems and Solutions"
description: "Solve common Sibelius problems with playback, MIDI keyboards, note input, notation, score layout, parts, PDF export and file recovery."
draft: false
---

Find practical solutions to 50 common Sibelius problems, from missing playback sound to awkward score spacing and PDF export issues.

These instructions are intended for desktop Sibelius. Menu names and available features vary between versions and editions, including Sibelius First, Artist and Ultimate. If a command is missing, search for its name in Sibelius or consult the Reference Guide supplied with your version.

Before making major changes, save a separate copy of your score.

## Jump to a Category

- [Sound and Playback](#sound-and-playback)
- [MIDI and Note Input](#midi-and-note-input)
- [Notation, Voices and Rhythm](#notation-voices-and-rhythm)
- [Score Layout and Spacing](#score-layout-and-spacing)
- [Parts, Printing and Exporting](#parts-printing-and-exporting)
- [Saving, Recovery and Performance](#saving-recovery-and-performance)

## Sound and Playback

### 1. Why Is There No Sound in Sibelius?

If the playback line moves but you hear nothing, check the audio output, playback configuration and Mixer.

**Solution**

1. Confirm that your speakers or headphones work in another application.
2. Open **Playback Devices** from the **Play** tab.
3. Open **Audio Engine Options** and select the intended audio interface.
4. Choose a playback configuration that uses an installed sound source.
5. Open the **Mixer** and check for muted channels, soloed instruments or low master volume.

If you connected an audio interface after launching Sibelius, restart the program with the interface connected.

**Related:** See problems 2, 5 and 6.

### 2. Why Is Sibelius Playing Through the Wrong Speakers or Headphones?

Sibelius can use a different output from the operating system's default device.

**Solution**

1. Connect and switch on the required device.
2. Open **Audio Engine Options**.
3. Select the appropriate interface.
4. Check the output routing if your interface has several outputs.
5. Restart playback.

If the device is missing, close Sibelius and confirm that the operating system recognizes it before reopening the program.

Bluetooth devices may introduce additional delay.

### 3. Why Does Playback Crackle, Click or Break Up?

An audio buffer that is too small can cause interrupted playback, especially with demanding sound libraries.

**Solution**

1. Open **Audio Engine Options**.
2. Increase the buffer size by one available step.
3. Play a demanding passage and listen again.
4. Close unnecessary applications.
5. Check that the interface driver supports your operating system.

Repeat until playback is stable. If the sound remains distorted, also check Mixer levels: clipping and buffer problems require different fixes.

### 4. Why Is There a Delay When I Play My MIDI Keyboard?

The time between pressing a key and hearing a sound is called latency.

**Solution**

1. Open **Audio Engine Options**.
2. Reduce the buffer size gradually.
3. Test the keyboard after each change.
4. If clicks appear, increase the buffer slightly.

On Windows, use the interface manufacturer's ASIO driver when available. On macOS, use the appropriate Core Audio device.

Avoid Bluetooth headphones when you need responsive keyboard monitoring.

### 5. Why Is One Instrument Silent?

A single silent staff usually points to its Mixer settings, sound assignment or playback properties.

**Solution**

1. Open the **Mixer**.
2. Check that the instrument is not muted.
3. Check whether another instrument is soloed.
4. Confirm that the staff has a suitable sound assigned.
5. Select an affected note and check its **Play on pass** settings in the **Inspector**, where available.

Also look for an unintended instrument change before the silent passage.

### 6. Why Are Sibelius Sounds Missing or Unavailable?

The notation application and its sound library may require separate installation.

**Solution**

1. Check which sound library your playback configuration expects.
2. Confirm that the library is installed.
3. If necessary, obtain the appropriate installer from your Avid account.
4. If you moved the library, follow the supported procedure for updating its location.
5. Restart Sibelius and select the matching playback configuration.

Do not assume that reinstalling the main application will also reinstall a large sound library.

### 7. Why Is an Instrument Playing the Wrong Sound?

The staff's instrument definition or Mixer assignment may not match the sound you expect.

**Solution**

1. Check which instrument is assigned to the staff.
2. Look for instrument changes in the score.
3. Check the selected playback configuration.
4. Review the staff's sound assignment in the **Mixer**.

If you need to change the instrument itself, create a proper **Instrument Change**. Renaming the staff alone does not change its musical definition or playback sound.

### 8. Why Do Dynamics Not Affect Playback?

Dynamics entered with an unsuitable text style or attached to the wrong position may not produce the intended result.

**Solution**

1. Select the note where the dynamic should begin.
2. Create **Expression Text**.
3. Insert the dynamic using the text style's word menu.
4. Check that it is attached to the intended staff and beat.
5. Play the passage from slightly before the marking.

If the dynamic still has little effect, test another playback sound. Sound libraries differ in how they respond to dynamics.

### 9. Why Does Sibelius Ignore My Tempo Marking?

A heading that says “Allegro” is not necessarily functioning as a playback tempo instruction.

**Solution**

1. Create the marking with **Tempo Text** or the appropriate **Metronome Mark** text style.
2. For a precise speed, include a recognized beat unit and tempo value.
3. Check its attachment position.
4. Review the **Performance** settings if playback is intentionally varying the tempo.

If the whole score sounds consistently too fast or slow, check the playback tempo control as well.

### 10. Why Are Repeats or First and Second Endings Playing Incorrectly?

Playback depends on repeat structure, not just the visual appearance of a line or text label.

**Solution**

1. Use proper repeat barlines.
2. Create ending lines using the appropriate first- and second-ending line types.
3. Check that each ending begins and ends at the intended bars.
4. Review repeat playback settings and any manual repeat sequence.
5. Test playback from before the repeated section.

Use recognized repeat instructions rather than ordinary text that merely looks like “D.S.” or “D.C.”

## MIDI and Note Input

### 11. Why Does Sibelius Not Recognize My MIDI Keyboard?

The device may be disconnected, unavailable to the operating system or disabled in Sibelius.

**Solution**

1. Connect the keyboard before opening Sibelius.
2. Open **Preferences → Input Devices**.
3. Enable the correct device.
4. Play a key and check the input indicator.
5. If the device is missing, test another USB port or cable.

If a hub is involved, try connecting directly to the computer. Install a manufacturer driver if the keyboard requires one.

### 12. Why Can I Hear My Keyboard but No Notes Appear?

Hearing a sound does not mean that Sibelius is currently entering notation. The keyboard may also be producing its own sound independently.

**Solution**

1. Select the rest or position where input should begin.
2. Enter note-input mode.
3. Choose a duration on the **Keypad**.
4. Play a note.

For live recording, use **Flexi-time** rather than step-time input. Confirm that the keyboard is enabled in **Input Devices** if notes still do not appear.

### 13. Why Are Notes Entered in the Wrong Octave?

An octave shift can originate in the keyboard settings or the instrument's notation conventions.

**Solution**

1. Check the keyboard's octave and transpose controls.
2. Test input on a normal piano staff.
3. Check the instrument assigned to the original staff.
4. Compare concert-pitch and transposing-score views.

Some instruments, including guitar and piccolo, conventionally sound an octave away from their written notes. Other transposing instruments shift by different intervals.

### 14. Why Are MIDI Notes Entered Twice?

Duplicate input can occur when the same performance reaches Sibelius through more than one MIDI route.

**Solution**

1. Open **Input Devices**.
2. Temporarily enable only the intended keyboard input.
3. Disconnect unnecessary MIDI connections.
4. Check any MIDI-routing application or interface settings.
5. Test a single note again.

If you hear doubled sound but only one note appears, investigate audio monitoring and the keyboard's **Local Control** setting instead.

### 15. Why Is Flexi-time Recording Producing Messy Rhythms?

Live input may be interpreted too precisely for the music you intended, creating unwanted short notes, rests or tuplets.

**Solution**

1. Open **Flexi-time Options**.
2. Set the minimum note value to suit the passage.
3. Restrict tuplets if you do not need them.
4. Record at a comfortable tempo with a clear click.
5. Record a short passage and review it before continuing.

For complex music, step-time input can require less correction than live recording.

### 16. How Do I Enter Chords Instead of Separate Notes?

Notes played one after another in step-time input normally occupy successive rhythmic positions.

**Solution**

For MIDI input, play the chord's notes together after selecting the required duration.

For computer-keyboard input:

1. Enter the first note.
2. Select it.
3. Use the interval commands to add notes above or below it.

Check that the resulting notes share one stem and duration.

### 17. How Do I Enter Notes Without a Numeric Keypad?

You can use Sibelius's on-screen **Keypad** even if your laptop has no separate number pad.

**Solution**

1. Display the **Keypad** from the panels controls.
2. Click the required duration or articulation.
3. Enter pitches with the computer keyboard or a MIDI keyboard.
4. Review available keyboard-shortcut sets in **Preferences**.

You can also customize shortcuts or connect a USB numeric keypad if you enter notation frequently.

### 18. Why Do New Notes Replace Existing Music?

Note input edits the music at the selected rhythmic position; it does not automatically create extra bars for every new idea.

**Solution**

1. Undo the unwanted edit.
2. Add the required bars before entering the new passage.
3. Select the first rest in the new bars.
4. Begin note input there.

If you want an additional independent rhythm on the same staff, use another voice rather than replacing the existing voice.

## Notation, Voices and Rhythm

### 19. How Do I Add or Delete Entire Bars?

Deleting notes and deleting bars are different operations.

**Solution**

To add bars, use **Home → Bars → Add** and choose the appropriate option.

To delete bars:

1. Make a **system selection** of the bars across all staves.
2. Check that the selection includes exactly the bars you want removed.
3. Delete the selection.

A normal passage selection can clear musical contents while leaving the bars in place.

### 20. How Do I Change a Time Signature Without Unexpectedly Moving Notes?

Changing meter can cause Sibelius to reorganize existing music into new bars.

**Solution**

1. Save a copy of the score.
2. Select the point where the change should begin.
3. Open the **Time Signature** controls.
4. Review the option for rewriting existing bars.
5. Apply the change and inspect the affected passage.

Disabling rewriting preserves the existing bar structure, but it may leave bars whose durations do not match the displayed meter. Use that option deliberately.

### 21. How Do I Create a Pickup Bar or Anacrusis?

A pickup is a shortened opening bar, such as one beat before the first full bar of a piece in 4/4.

**Solution**

When creating the opening time signature, use the **pickup/upbeat** option and specify its duration.

For an existing score, create an **irregular bar** of the required length using the bar-creation controls, then transfer the opening music carefully.

Check the bar numbering and the final bar if the piece requires a complementary shortened ending.

### 22. How Do I Put Two Independent Rhythms on One Staff?

Use separate voices for simultaneous musical lines.

**Solution**

1. Enter the first line in **Voice 1**.
2. Select the starting position for the second line.
3. Choose **Voice 2** on the **Keypad**.
4. Enter its notes and rests independently.

Voices 1 and 2 usually provide opposing stem directions. Use additional voices only when the notation needs them.

Do not use a chord when the notes require different rhythms.

### 23. Why Are Extra Rests Appearing in My Score?

Each active voice needs its own rhythmic structure, so additional voices can introduce additional rests.

**Solution**

1. Select an unexpected rest and identify its voice.
2. Check whether that voice contains required notes elsewhere in the bar.
3. Remove an accidentally created voice where appropriate.
4. Hide a rest only when it is musically valid to do so.

Avoid hiding rests simply to conceal an incomplete rhythm. First make sure each voice accounts for the intended bar duration.

### 24. How Do I Create Triplets and Other Tuplets?

Tuplets divide a rhythmic span differently from its normal grouping.

**Solution**

1. Select a note or rest with the intended base duration.
2. Use **Note Input → Tuplets**.
3. Choose the required tuplet or enter a custom ratio.
4. Enter the remaining notes.

For an ordinary eighth-note triplet, begin with an eighth-note value. If the tuplet occupies the wrong span, undo it and check the starting duration and ratio.

### 25. Why Are My Notes Beamed Incorrectly?

Beam grouping depends on the meter, its grouping settings and any manual beam changes.

**Solution**

1. Check the time signature's beat grouping.
2. Select the affected notes.
3. Use the **Keypad** beam controls to start, continue or break beams as required.
4. For a recurring issue, adjust grouping settings rather than correcting every beam manually.

For example, 6/8 normally groups eighth notes into two groups of three, while other meters may need a different pattern.

### 26. How Do I Beam Notes Across Two Staves?

Cross-staff notation is useful for piano passages shared between the hands.

**Solution**

1. Enter the passage on its originating staff.
2. Select the notes that should appear on the other staff.
3. Use the **Cross-staff Notes** commands to move their display above or below.
4. Review stems, beams and staff spacing.

Cross-staff movement preserves the notes' relationship to their original voice. Ordinary cut and paste moves the music to another staff and may not produce the same notation.

### 27. Why Is My Tie Behaving Like a Slur?

Ties and slurs have different musical meanings.

**Solution**

Use a **tie** to join consecutive notes of the same pitch into one sustained duration. Apply it with the **Keypad** tie control.

Use a **slur** to indicate a phrase or articulation across notes. Create it using the **Slur** command.

If a tie does not connect correctly, check the following note's pitch, accidental, voice and rhythmic position.

### 28. Why Are Accidentals Missing or Reappearing?

Sibelius determines accidental display from the key signature, earlier notes in the bar and notation settings.

**Solution**

1. Check the key signature.
2. Check previous occurrences of the pitch in the same bar.
3. Select the note and inspect its accidental using the **Keypad**.
4. Add a cautionary accidental where it improves readability.

Do not change the actual pitch just to force a symbol to appear. Accidental display and musical pitch must both be correct.

### 29. How Do I Change the Enharmonic Spelling of a Note?

A pitch may be entered as a sharp when a flat spelling would better fit the harmony.

**Solution**

1. Select the note or passage.
2. Use the **Respell** command.
3. Check the spelling against the chord and key.

For example, a note sounding as F-sharp may need to be written as G-flat in a particular harmonic context.

Respelling preserves sounding pitch. Transposing changes pitch and solves a different problem.

### 30. Why Are Notes Red in Sibelius?

Red noteheads commonly indicate that a pitch lies outside the range defined for the instrument.

**Solution**

1. Check the instrument assigned to the staff.
2. Review the written and sounding pitches.
3. Check the instrument-range display setting.
4. Decide whether the passage is suitable for the intended player.

A range warning does not automatically mean the notation is wrong. However, hiding the colour does not make an impractical note playable.

## Score Layout and Spacing

### 31. How Do I Fit More or Fewer Bars on One System?

Sibelius normally calculates system lengths automatically, but you can control important breaks.

**Solution**

1. Select the bars that should share one system.
2. Use **Layout → Format → Make Into System**.
3. Inspect the result for crowded notes and text.

Alternatively, select a barline and add a **System Break**.

If many systems are crowded, review staff size, page margins and note spacing rather than forcing more bars onto every line.

### 32. Why Will Sibelius Not Reflow My Score?

Existing formatting locks and breaks can prevent automatic layout changes.

**Solution**

1. Display layout marks.
2. Look for system breaks, page breaks and locked systems.
3. Select the affected passage.
4. Use **Unlock Format** where appropriate.
5. Reapply only the breaks you need.

Save a copy first if the score already has carefully prepared page turns or publication layout.

### 33. Why Are There Huge Gaps Between Staves?

Large gaps may be caused by manual movement, collision avoidance or vertical justification.

**Solution**

1. Select the affected systems.
2. Use **Optimize Staff Spacing**.
3. Look for lyrics, dynamics, lines or text occupying the gap.
4. Check vertical justification settings if the staves are spread across an entire page.

If earlier manual changes are the cause, use the appropriate staff-spacing reset command before optimizing again.

### 34. Why Do Dynamics, Lyrics or Text Collide?

Automatic collision avoidance can be disabled, overridden or unable to resolve a crowded layout.

**Solution**

1. Check that **Magnetic Layout** is enabled for the affected objects.
2. Reset unnecessary manual positioning.
3. Optimize staff spacing.
4. Give the system more horizontal space if needed.
5. Make small manual adjustments only after checking the automatic layout.

A system containing too much music may need fewer bars, regardless of collision settings.

### 35. How Do I Restore Uneven Horizontal Note Spacing?

Dragging notes or changing spacing repeatedly can leave a passage looking inconsistent.

**Solution**

1. Select the affected passage.
2. Choose **Appearance → Reset Notes → Reset Note Spacing**.
3. Inspect the spacing around lyrics, chord symbols and accidentals.
4. Adjust system breaks if the passage remains crowded.

If a particular object still sits unusually far from its note, check its individual position as well.

### 36. How Do I Hide Empty Staves?

Hiding unused staves can make a large ensemble score easier to read.

**Solution**

1. Select the systems or passage concerned.
2. Choose **Layout → Hiding Staves → Hide Empty Staves**.
3. Check that all necessary instruments remain visible.

A staff containing notes or other relevant objects may not qualify as empty. Inspect it before deleting anything.

Use **Show Empty Staves** when you need the staff to appear again.

### 37. How Do I Change the Order of Instruments?

Changing an instrument label does not move its staff.

**Solution**

1. Open **Home → Instruments → Add or Remove**.
2. Select the instrument in the score's instrument list.
3. Move it up or down.
4. Confirm the change.
5. Review brackets, braces and barline grouping.

Choose an order that suits the ensemble and helps musicians find their parts quickly.

### 38. Why Are Instrument Names Wrong or Missing?

Instrument names can differ between the first system and later systems.

**Solution**

1. Check the instrument's full and short names.
2. Edit the displayed name or its instrument settings as appropriate.
3. Review the score's instrument-name display settings.
4. Check whether an instrument change introduces another label.

Use the full name where readers need identification and a clear abbreviation on subsequent systems.

### 39. Why Is There an Unexpected Blank Page?

A blank page may result from a special page break, title-page settings or imported formatting.

**Solution**

1. Display layout marks.
2. Inspect the end of the preceding page.
3. Check for a **Special Page Break** that inserts blank pages.
4. Remove or adjust the responsible break.
5. Review the following pages after the layout changes.

Do not delete music to remove a page created by formatting.

### 40. Why Do Bar Numbers Start or Restart Incorrectly?

A pickup, movement boundary or accidental bar-number change can affect numbering.

**Solution**

1. Inspect the point where numbering becomes incorrect.
2. Check for a **Bar Number Change**.
3. Correct or remove the change.
4. Review the bar-number display settings.
5. Check numbering in both the score and parts.

Decide whether an opening pickup should be unnumbered or counted, then apply that convention consistently.

## Parts, Printing and Exporting

### 41. How Do I Create Individual Instrumental Parts?

**Dynamic Parts** allow a score and its instrumental parts to share musical content.

**Solution**

1. Open the **Parts** controls.
2. Check which parts already exist.
3. Open the required part.
4. Where supported, create a new part and choose the staves it should contain.
5. Adjust its layout for the player.

Keep musical edits in the linked score-and-parts workflow rather than maintaining separate files unnecessarily.

### 42. Why Does My Instrumental Part Have a Different Layout from the Score?

Parts have independent layout requirements, including page turns, staff size and system breaks.

**Solution**

1. Open the affected part.
2. Check its **Document Setup**.
3. Review automatic breaks and manual breaks.
4. Adjust the part's layout directly.

Differences in layout are normally expected. If notes or rhythms appear wrong, check that you are viewing the correct linked part and that its contents have not been hidden.

### 43. Why Are Multirests Missing or Split in My Parts?

A multirest can be divided by musical instructions or objects that need to remain visible.

**Solution**

1. Confirm that multirests are enabled in the part.
2. Inspect the bars where a multirest breaks.
3. Check for rehearsal marks, text, barlines, key changes and time signatures.
4. Remove accidental objects only after confirming they are unnecessary.

Some breaks are correct because players need to see an instruction at that point.

### 44. How Do I Create Better Page Turns in Parts?

Players need enough time to turn a page without missing their next entry.

**Solution**

1. Open the individual part.
2. Find rests suitable for page turns.
3. Insert page breaks at practical positions.
4. Review automatic page-turn options where available.
5. Check the final page count and system spacing.

Avoid creating extremely crowded pages just to force a turn. Test the layout from the player's perspective.

### 45. Why Does My PDF Have the Wrong Size or Margins?

The score's page setup and the printing or export settings may not agree.

**Solution**

1. Check page size and orientation in **Document Setup**.
2. Check the margins and staff size.
3. Confirm that you are exporting the intended score or part.
4. Use built-in PDF export where available.
5. Open the PDF and verify its page dimensions.

When printing, check paper size and scaling separately. “Fit to page” can alter the final printed staff size.

### 46. Why Are Music Symbols or Fonts Wrong in the PDF?

Missing fonts, substitutions or font-related export problems can change the appearance of notation.

**Solution**

1. Compare the PDF with the score on screen.
2. Confirm that the required music and text fonts are installed.
3. Try Sibelius's built-in PDF export where available.
4. Open the result in another PDF viewer.
5. If symbols are also wrong inside Sibelius, investigate the application's font installation.

If only a custom font fails, test a standard font in a copy of the score.

### 47. Why Can I Not Export an Audio File?

Audio export requires a playback configuration capable of rendering sound inside the computer.

**Solution**

1. Check the selected playback configuration.
2. Use a supported virtual instrument or internal playback sound source.
3. Confirm that ordinary playback works.
4. Choose **File → Export → Audio**, where available.

If playback uses an external hardware synthesizer, its sound may need to be recorded through an audio interface. Sending MIDI to the device does not capture its audio.

## Saving, Recovery and Performance

### 48. How Do I Recover a Score After a Crash?

Recovery depends on what Sibelius saved before the interruption.

**Solution**

1. Reopen Sibelius and check for a recovery prompt.
2. Inspect the available autosave or backup files.
3. Use the locations shown in your version's saving preferences or Reference Guide.
4. Compare timestamps and musical contents.
5. Save the best recovered version under a new name.

Avoid overwriting the original until you have confirmed that the recovered file contains the work you need.

### 49. Why Is Sibelius Slow, Freezing or Crashing?

The cause may involve a particular score, playback library, driver or software component.

**Solution**

1. Save your work and restart Sibelius.
2. Test a small new score.
3. Compare behaviour with the problematic score.
4. Test a simpler playback configuration.
5. Disconnect unnecessary MIDI and audio devices.
6. Check compatible Sibelius and driver updates.

If only one score fails, work on a copy and narrow down the affected passage. If every score fails, record your version, operating system and exact error message for support.

### 50. Why Can Someone Else Not Open My Sibelius File?

The recipient may have an older version, a restricted edition or an incomplete copy of the file.

**Solution**

1. Ask which Sibelius version and edition they use.
2. Where supported, use **File → Export → Previous Version**.
3. Send the exported copy and keep your original.
4. Check that the transferred file is complete.
5. If they use another notation application, consider MusicXML.

Older-version export and MusicXML can change formatting or unsupported features. Send a PDF alongside the editable file as a visual reference.

## Quick Troubleshooting Checklist

Before making major changes:

1. Save a separate copy of the score.
2. Identify whether the problem affects one score or every score.
3. Check the selected audio and MIDI devices.
4. Check the playback configuration.
5. Inspect recent notation or layout changes.
6. Restart Sibelius when appropriate.
7. Check version and operating-system compatibility.
8. Change one setting at a time and test the result.

## Official Sibelius Help

For instructions specific to your version and edition, consult the **Sibelius Reference Guide** supplied with the application.

- [Avid Sibelius Learn and Support](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Release Information](https://www.avid.com/resource-center/whats-new-in-sibelius)

When requesting help, include your Sibelius version, operating system, playback device, the exact error message and whether the problem affects one score or all scores.
