---
title: "Sibelius: Lösungen für 50 häufige Probleme"
description: "Finde Hilfe zu Ton, MIDI, Noteneingabe, Layout und PDF-Export in Sibelius. Durchsuche 50 Fragen und Antworten nach Thema."
draft: false
showTableOfContents: false
---

Hier findest du Lösungen für 50 häufige Sibelius-Probleme, vom fehlenden Ton über ungleichmäßige Notenabstände bis zum PDF-Export.

Diese Anweisungen sind für Desktop Sibelius bestimmt. Menünamen und verfügbare Funktionen variieren zwischen Versionen und Editionen, einschließlich Sibelius First, Artist und Ultimate. Wenn ein Befehl fehlt, suchen Sie nach seinem Namen in Sibelius oder konsultieren Sie den Referenzhandbuch mit Ihrer Version geliefert.

Bevor Sie größere Änderungen vornehmen, speichern Sie eine separate Kopie Ihrer Partitur.

## Zu einer Kategorie springen {#jump-to-a-category}

- [Klang und Wiedergabe](#sound-and-playback)
- [MIDI und Noteneingabe](#midi-and-note-input)
- [Notation, Stimmen und Rhythmus](#notation-voices-and-rhythm)
- [Notenlayout und Abstände](#score-layout-and-spacing)
- [Einzelstimmen, Drucken und Exportieren](#parts-printing-and-exporting)
- [Speichern, Wiederherstellung und Leistung](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Klang und Wiedergabe {#sound-and-playback}

### 1. Warum gibt es keinen Ton in Sibelius?

Wenn sich die Wiedergabezeile bewegt, aber Sie nichts hören, überprüfen Sie die Audioausgabe, die Wiedergabekonfiguration und den Mixer.

**Lösung**

1. Bestätigen Sie, dass Ihre Lautsprecher oder Kopfhörer in einer anderen Anwendung funktionieren.
2. Öffnen Sie **Wiedergabegeräte (Playback Devices)** von der Registerkarte **Wiedergabe (Play)**.
3. Öffnen Sie **Optionen für Audio-Engine (Audio Engine Options)** und wählen Sie die gewünschte Audio-Schnittstelle.
4. Wählen Sie eine Wiedergabekonfiguration, die eine installierte Soundquelle verwendet.
5. Öffnen Sie den **Mischer (Mixer)** und prüfen Sie nach gedämpften Kanälen, solo-Instrumenten oder niedrigem Master-Volumen.

Wenn Sie nach dem Start von Sibelius eine Audioschnittstelle angeschlossen haben, starten Sie das Programm mit der angeschlossenen Schnittstelle neu.

**Bezug:** Siehe Probleme 2, 5 und 6.

### 2. Warum spielt Sibelius durch die falschen Lautsprecher oder Kopfhörer?

Sibelius kann eine andere Ausgabe als das Standardgerät des Betriebssystems verwenden.

**Lösung**

1. Schließen und schalten Sie das gewünschte Gerät ein.
2. Öffnen Sie **Optionen für Audio-Engine (Audio Engine Options)**.
3. Wählen Sie die entsprechende Schnittstelle.
4. Überprüfen Sie die Ausgabe-Routing, wenn Ihre Schnittstelle mehrere Ausgänge hat.
5. Wiedergabe neu starten.

Wenn das Gerät fehlt, schließen Sie Sibelius und bestätigen Sie, dass das Betriebssystem es erkennt, bevor Sie das Programm wieder öffnen.

Bluetooth-Geräte können zusätzliche Verzögerungen verursachen.

### 3. Warum spielt Playback Crackle, Click oder Break Up?

Ein zu kleiner Audiopuffer kann insbesondere bei anspruchsvollen Klangbibliotheken zu einer unterbrochenen Wiedergabe führen.

**Lösung**

1. Öffnen Sie **Optionen für Audio-Engine (Audio Engine Options)**.
2. Erhöhen Sie die Puffergröße um einen verfügbaren Schritt.
3. Spielen Sie eine anspruchsvolle Passage und hören Sie wieder.
4. Schließen Sie unnötige Anwendungen.
5. Überprüfen Sie, ob der Interface-Treiber Ihr Betriebssystem unterstützt.

Wiederholen Sie, bis die Wiedergabe stabil ist. Wenn der Sound verzerrt bleibt, überprüfen Sie auch Mixer-Levels: Clipping- und Pufferprobleme erfordern unterschiedliche Korrekturen.

### 4. Warum gibt es eine Verzögerung, wenn ich meine MIDI-Tastatur spiele?

Die Zeit zwischen dem Drücken einer Taste und dem Hören eines Tones wird Latenz genannt.

**Lösung**

1. Öffnen Sie **Optionen für Audio-Engine (Audio Engine Options)**.
2. Reduzieren Sie die Puffergröße schrittweise.
3. Testen Sie die Tastatur nach jeder Änderung.
4. Wenn Klicks erscheinen, erhöhen Sie den Puffer leicht.

Verwenden Sie unter Windows den ASIO-Treiber des Schnittstellenherstellers, wenn verfügbar. Verwenden Sie auf macOS das entsprechende Core Audio-Gerät.

Vermeiden Sie Bluetooth Kopfhörer, wenn Sie responsive Tastaturüberwachung benötigen.

### 5. Warum ist ein Instrument still?

Ein einzelnes stilles Personal weist in der Regel auf seine Mixer-Einstellungen, Soundzuweisungen oder Wiedergabeeigenschaften hin.

**Lösung**

1. Öffnen Sie das **Mischer (Mixer)**.
2. Überprüfen Sie, ob das Instrument nicht gedämpft ist.
3. Prüfen Sie, ob ein anderes Instrument solo ist.
4. Bestätigen Sie, dass das Personal einen geeigneten Ton zugewiesen hat.
5. Wählen Sie eine betroffene Notiz und überprüfen Sie die **Spiel auf dem Pass (Play on pass)**-Einstellungen im **Inspektor (Inspector)**, wo verfügbar.

Suchen Sie auch nach einem unbeabsichtigten Instrumentenwechsel vor der stillen Passage.

### 6. Warum sind Sibelius Sounds fehlen oder nicht verfügbar?

Die Notationsanwendung und ihre Klangbibliothek können eine separate Installation erfordern.

**Lösung**

1. Überprüfen Sie, welche Soundbibliothek Ihre Wiedergabekonfiguration erwartet.
2. Bestätigen Sie, dass die Bibliothek installiert ist.
3. Bei Bedarf erhalten Sie den entsprechenden Installer von Ihrem Avid-Konto.
4. Wenn Sie die Bibliothek verschoben haben, folgen Sie der unterstützten Prozedur zur Aktualisierung ihres Standorts.
5. Starten Sie Sibelius neu und wählen Sie die passende Wiedergabekonfiguration aus.

Nehmen Sie nicht an, dass die Neuinstallation der Hauptanwendung auch eine große Klangbibliothek neu installieren wird.

### 7. Warum spielt ein Instrument den falschen Ton?

Die Instrumentendefinition oder Mixer-Zuweisung des Stabs entspricht möglicherweise nicht dem von Ihnen erwarteten Klang.

**Lösung**

1. Prüfen Sie, welches Instrument dem Stab zugewiesen ist.
2. Suchen Sie nach Instrumentenänderungen in der Partitur.
3. Überprüfen Sie die ausgewählte Wiedergabekonfiguration.
4. Überprüfen Sie die Sound-Aufteilung des Personals im **Mischer (Mixer)**.

Wenn Sie das Instrument selbst ändern müssen, erstellen Sie ein richtiges **Änderung des Instruments (Instrument Change)**. Das Umbenennen des Personals allein ändert nicht seine musikalische Definition oder Wiedergabe-Sound.

### 8. Warum wirkt sich Dynamik nicht auf Playback aus?

Dynamics, die mit einem ungeeigneten Textstil eingegeben oder an der falschen Position angebracht werden, kann das beabsichtigte Ergebnis nicht erzeugen.

**Lösung**

1. Wählen Sie den Hinweis, wo die Dynamik beginnen soll.
2. Erstellen Sie **Ausdruckstext (Expression Text)**.
3. Legen Sie die Dynamik mit dem Wortmenü des Textstils ein.
4. Prüfen Sie, ob es an das vorgesehene Personal angeschlossen ist und schlagen.
5. Spielen Sie den Durchgang von etwas vor der Markierung.

Wenn die Dynamik noch wenig Wirkung hat, testen Sie einen anderen Wiedergabeklang. Klangbibliotheken unterscheiden sich in ihrer Reaktion auf Dynamik.

### 9. Warum ignoriert Sibelius meine Tempomarkierung?

Eine Überschrift, die sagt, dass Allegroe nicht unbedingt als Wiedergabetempo-Anweisung funktioniert.

**Lösung**

1. Erstellen Sie die Markierung mit **Tempo-Text (Tempo Text)** oder dem entsprechenden **Metronom-Zeichen (Metronome Mark)** Textstil.
2. Für eine genaue Geschwindigkeit, enthalten eine anerkannte Beat-Einheit und Tempo-Wert.
3. Prüfen Sie die Position der Anlage.
4. Überprüfen Sie die Einstellungen von **Leistung (Performance)**, wenn die Wiedergabe das Tempo absichtlich ändert.

Wenn die gesamte Partitur konsequent zu schnell oder langsam klingt, überprüfen Sie auch die Wiedergabe-Temposteuerung.

### 10. Warum spielen Wiederholungen oder erste und zweite Enden falsch?

Playback hängt von der Wiederholungsstruktur ab, nicht nur vom visuellen Erscheinungsbild einer Zeile oder Textbeschriftung.

**Lösung**

1. Verwenden Sie richtige Wiederholungs-Barlines.
2. Erstellen Sie Endlinien mit den entsprechenden First- und Second-Ending-Linientypen.
3. Überprüfen Sie, ob jedes Ende beginnt und endet an den beabsichtigten Balken.
4. Wiederholen Sie die Wiedergabeeinstellungen und jede manuelle Wiederholungssequenz.
5. Testen Sie die Wiedergabe vor dem wiederholten Abschnitt.

Verwenden Sie anerkannte Wiederholungsanweisungen anstatt gewöhnlichen Text, der nur aussieht wie D.S. oder D.C.

## MIDI und Noteneingabe {#midi-and-note-input}

### 11. Warum erkennt Sibelius meine MIDI-Tastatur nicht?

Das Gerät kann getrennt, nicht auf dem Betriebssystem oder deaktiviert in Sibelius.

**Lösung**

1. Schließen Sie die Tastatur vor dem Öffnen Sibelius.
2. Öffnen Sie **Einstellungen → Eingabegeräte**.
3. Aktivieren Sie das richtige Gerät.
4. Spielen Sie einen Schlüssel und überprüfen Sie die Eingabeanzeige.
5. Wenn das Gerät fehlt, testen Sie einen anderen USB-Anschluss oder Kabel.

Wenn ein Hub beteiligt ist, versuchen Sie, direkt mit dem Computer zu verbinden. Installieren Sie einen Herstellertreiber, wenn die Tastatur einen benötigt.

### 12. Warum kann ich meine Tastatur hören, aber keine Notizen erscheinen?

Das Hören eines Tons bedeutet nicht, dass Sibelius gerade in die Notation eintritt. Die Tastatur kann auch unabhängig ihren eigenen Sound erzeugen.

**Lösung**

1. Wählen Sie den Rest oder die Position, an der die Eingabe beginnen soll.
2. Geben Sie den Notiz-Eingangsmodus ein.
3. Wählen Sie eine Dauer auf dem **Tastatur (Keypad)**.
4. Spielen Sie eine Notiz.

Verwenden Sie für die Live-Aufnahme **Flexi-Zeit (Flexi-time)** anstatt Schrittzeiteingabe. Bestätigen Sie, dass die Tastatur in **Eingabegeräte (Input Devices)** aktiviert ist, wenn Notizen immer noch nicht erscheinen.

### 13. Warum werden Notizen in die falsche Oktave aufgenommen?

Eine Oktavverschiebung kann in den Tastatureinstellungen oder den Notationskonventionen des Instruments entstehen.

**Lösung**

1. Überprüfen Sie die Oktave der Tastatur und übertragen Sie die Steuerelemente.
2. Testeingabe an einem normalen Klavierstab.
3. Prüfen Sie das Instrument, das dem ursprünglichen Stab zugewiesen wurde.
4. Vergleichen Sie Konzert-Pitch und Transposing-Score-Ansichten.

Einige Instrumente, darunter Gitarre und Piccolo, klingen konventionell eine Oktave weg von ihren geschriebenen Noten. Andere transponierende Instrumente verschieben sich durch unterschiedliche Intervalle.

### 14. Warum werden MIDI-Noten zweimal eingegeben?

Duplizieren Input kann auftreten, wenn die gleiche Leistung erreicht Sibelius über mehr als eine MIDI-Route.

**Lösung**

1. Öffnen Sie **Eingabegeräte (Input Devices)**.
2. Vorübergehend nur die gewünschte Tastatureingabe aktivieren.
3. Trennen Sie unnötige MIDI-Verbindungen.
4. Überprüfen Sie alle MIDI-Routing-Anwendungen oder Schnittstelleneinstellungen.
5. Testen Sie wieder eine einzelne Note.

Wenn Sie doppelten Sound hören, aber nur eine Note erscheint, untersuchen Sie die Audioüberwachung und stattdessen die Einstellung **Lokale Steuerung (Local Control)** der Tastatur.

### 15. Warum produziert Flexi-time Recording Messy Rhythms?

Live-Eingabe kann zu genau für die Musik interpretiert werden, die Sie beabsichtigt, erstellen unerwünschte kurze Noten, Pausen oder Tuplets.

**Lösung**

1. Öffnen Sie **Flexi-Zeit-Optionen (Flexi-time Options)**.
2. Legen Sie den Mindestwert der Note fest, der dem Durchgang entspricht.
3. Tuplets einschränken, wenn Sie sie nicht benötigen.
4. Mit einem klaren Klick in einem komfortablen Tempo aufnehmen.
5. Nehmen Sie eine kurze Passage auf und überprüfen Sie sie, bevor Sie fortfahren.

Für komplexe Musik kann der Schrittzeiteingang weniger Korrekturen erfordern als Live-Aufnahmen.

### 16. Wie kann ich Chords anstelle von getrennten Notizen eingeben?

Noten gespielt nacheinander in Schritt-Zeit-Eingabe in der Regel besetzen aufeinander folgenden rhythmischen Positionen.

**Lösung**

Für MIDI-Eingabe spielen Sie die Noten des Akkords nach Auswahl der gewünschten Dauer zusammen.

Für die Eingabe von Computer-Keyboards:

1. Geben Sie die erste Note ein.
2. Wählen Sie es aus.
3. Verwenden Sie die Intervallbefehle, um Notizen darüber oder darunter hinzuzufügen.

Überprüfen Sie, ob die resultierenden Noten einen Stamm und eine Dauer teilen.

### 17. Wie kann ich Notizen ohne numerische Tastatur eingeben?

Sie können Sibelius auf dem Bildschirm **Tastatur (Keypad)** verwenden, auch wenn Ihr Laptop kein separates Nummernpad hat.

**Lösung**

1. Zeigt den **Tastatur (Keypad)** von den Bedienelementen an.
2. Klicken Sie auf die erforderliche Dauer oder Artikulation.
3. Geben Sie Tonhöhen mit der Computertastatur oder einer MIDI-Tastatur ein.
4. Bewertung verfügbar Tastatur-Shortcut Sets in **Präferenzen (Preferences)**.

Sie können auch Shortcuts anpassen oder ein USB numerisches Tastenfeld verbinden, wenn Sie häufig Notation eingeben.

### 18. Warum ersetzen neue Notizen bestehende Musik?

Hinweis Eingabe bearbeitet die Musik an der ausgewählten rhythmischen Position; es erstellt nicht automatisch zusätzliche Balken für jede neue Idee.

**Lösung**

1. Die unerwünschte Bearbeitung rückgängig machen.
2. Fügen Sie die benötigten Balken vor dem Betreten der neuen Passage hinzu.
3. Wählen Sie den ersten Rest in den neuen Balken.
4. Beginnen Sie die Eingabe.

Wenn Sie einen zusätzlichen unabhängigen Rhythmus auf dem gleichen Stab wollen, verwenden Sie eine andere Stimme, anstatt die vorhandene Stimme zu ersetzen.

## Notation, Stimmen und Rhythmus {#notation-voices-and-rhythm}

### 19. Wie kann ich komplette Balken hinzufügen oder löschen?

Das Löschen von Notizen und das Löschen von Balken sind verschiedene Operationen.

**Lösung**

Um Balken hinzuzufügen, verwenden Sie **Startseite → Balken → Hinzufügen** und wählen Sie die entsprechende Option.

Um Balken zu löschen:

1. Machen Sie ein **Systemauswahl** der Stangen über alle Stangen.
2. Überprüfen Sie, ob die Auswahl genau die Balken enthält, die entfernt werden sollen.
3. Löschen Sie die Auswahl.

Eine normale Passage-Auswahl kann musikalische Inhalte beim Verlassen der Bars an Ort und Stelle klar.

### 20. Wie ändere ich eine Taktart ohne unerwartet bewegte Notizen?

Durch das Wechseln des Messgeräts kann Sibelius vorhandene Musik in neue Takte reorganisieren.

**Lösung**

1. Speichern Sie eine Kopie der Partitur.
2. Wählen Sie den Punkt, an dem die Änderung beginnen soll.
3. Öffnen Sie die **Taktart (Time Signature)**-Steuerelemente.
4. Überprüfen Sie die Option für das Neuschreiben vorhandener Balken.
5. Wenden Sie die Änderung an und inspizieren Sie die betroffene Passage.

Das Deaktivieren des Umschreibens bewahrt die vorhandene Balkenstruktur, kann aber Balken verlassen, deren Dauer nicht mit dem angezeigten Zähler übereinstimmt. Verwenden Sie diese Option bewusst.

### 21. Wie erstelle ich einen Pickup-Bar oder Anacrussis?

Ein Pickup ist eine verkürzte Öffnungsleiste, wie ein Beat vor dem ersten vollen Takt eines Stückes in 4/4.

**Lösung**

Verwenden Sie bei der Erstellung der Öffnungszeitsignatur die Option **Abholung/Auftakt** und geben Sie ihre Dauer an.

Erstellen Sie für eine vorhandene Partitur einen **unregelmäßiger Balken** der benötigten Länge mit Hilfe der Bar-Creation-Steuerelemente und übertragen Sie dann die Eröffnungsmusik sorgfältig.

Überprüfen Sie die Taktnummerierung und die letzte Leiste, wenn das Stück eine komplementäre verkürzte Endung erfordert.

### 22. Wie setze ich zwei unabhängige Rhythmen auf einen Stab?

Verwenden Sie separate Stimmen für simultane musikalische Linien.

**Lösung**

1. Geben Sie die erste Zeile in **Stimme 1** ein.
2. Wählen Sie die Ausgangsposition für die zweite Zeile.
3. Wählen Sie **Stimme 2** auf dem **Tastatur (Keypad)**.
4. Geben Sie ihre Noten und ruht unabhängig.

Stimmen 1 und 2 bieten normalerweise entgegengesetzte Stammrichtungen. Verwenden Sie zusätzliche Stimmen nur, wenn die Notation sie benötigt.

Verwenden Sie keinen Akkord, wenn die Noten unterschiedliche Rhythmen erfordern.

### 23. Warum erscheinen Extra-Ruhe in meinem Score?

Jede aktive Stimme braucht ihre eigene rhythmische Struktur, so dass zusätzliche Stimmen zusätzliche Ruhen einführen können.

**Lösung**

1. Wählen Sie eine unerwartete Ruhe und identifizieren Sie ihre Stimme.
2. Prüfen Sie, ob diese Stimme an anderer Stelle in der Bar erforderliche Notizen enthält.
3. Entfernen Sie ggf. eine versehentlich erzeugte Stimme.
4. Verstecken Sie sich nur dann, wenn es musikalisch gültig ist.

Vermeiden Sie Verstecke einfach, um einen unvollständigen Rhythmus zu verbergen. Stellen Sie zuerst sicher, dass jede Stimme für die beabsichtigte Taktdauer verantwortlich ist.

### 24. Wie erstelle ich Triplets und andere Tuplets?

Tuplets teilen eine rhythmische Spanne anders als ihre normale Gruppierung.

**Lösung**

1. Wählen Sie eine Note oder Ruhe mit der beabsichtigten Basisdauer.
2. Verwenden Sie **Anmerkung Eingabe → Tuplets**.
3. Wählen Sie das erforderliche Tuplet oder geben Sie ein benutzerdefiniertes Verhältnis ein.
4. Geben Sie die restlichen Noten ein.

Beginnen Sie bei einem normalen Achter-Noten-Triplett mit einem Achter-Noten-Wert. Wenn das Tuplet die falsche Spanne einnimmt, lösen Sie es wieder auf und überprüfen Sie die Anfangsdauer und das Verhältnis.

### 25. Warum werden meine Notizen falsch bestrahlt?

Die Beam-Gruppierung hängt vom Messgerät, seinen Gruppierungseinstellungen und etwaigen manuellen Strahlwechseln ab.

**Lösung**

1. Überprüfen Sie die Taktart der Beat-Gruppierung.
2. Wählen Sie die betroffenen Notizen.
3. Verwenden Sie die **Tastatur (Keypad)**-Beamsteuerungen, um Balken nach Bedarf zu starten, fortzusetzen oder zu brechen.
4. Passen Sie für ein wiederkehrendes Problem die Gruppierungseinstellungen an, anstatt jeden Strahl manuell zu korrigieren.

Zum Beispiel, 6/8 Gruppen normalerweise achte Noten in zwei Gruppen von drei, während andere Meter benötigen möglicherweise ein anderes Muster.

### 26. Wie beschreibe ich Beam über zwei Stangen hinweg?

Für Klavierpassagen, die zwischen den Händen geteilt werden, ist die Notation des Querstabs nützlich.

**Lösung**

1. Betreten Sie die Passage auf seinem ursprünglichen Stab.
2. Wählen Sie die Notizen, die auf dem anderen Notensystem erscheinen sollen.
3. Verwenden Sie die **Personalübergreifende Anmerkungen (Cross-staff Notes)**-Befehle, um ihre Anzeige über oder unter zu verschieben.
4. Überprüfen Sie Stängel, Balken und Personalabstand.

Cross-Staff-Bewegung bewahrt das Verhältnis der Noten zu ihrer ursprünglichen Stimme. Gewöhnliche Schnitt und Paste bewegt die Musik zu einem anderen Stab und darf nicht die gleiche Notation produzieren.

### 27. Warum verhält sich meine Krawatte wie ein Schlurer?

Krawatten und Schlürzen haben unterschiedliche musikalische Bedeutungen.

**Lösung**

Verwenden Sie einen **Krawatte**, um aufeinanderfolgende Noten derselben Tonhöhe in eine Dauer zu verbinden. Wenden Sie ihn mit der **Tastatur (Keypad)** Krawattensteuerung an.

Verwenden Sie einen **Schläfrigkeit**, um eine Phrase oder Artikulation über Noten zu kennzeichnen. Erstellen Sie sie mit dem Befehl **Schlafen (Slur)**.

Wenn sich eine Krawatte nicht richtig verbindet, überprüfen Sie die Tonhöhe, die zufällige, die Stimme und die rhythmische Position der folgenden Note.

### 28. Warum fehlen Unfälle oder tauchen wieder auf?

Sibelius bestimmt die versehentliche Anzeige aus der Tastensignatur, früheren Noten in der Balken- und Notationseinstellung.

**Lösung**

1. Überprüfen Sie die Schlüsselsignatur.
2. Überprüfen Sie die vorherigen Vorkommen der Seillänge in der gleichen Leiste.
3. Wählen Sie die Note und überprüfen Sie ihre versehentliche Verwendung mit dem **Tastatur (Keypad)**.
4. Fügen Sie ein vorsichtiges versehentliches, wo es die Lesbarkeit verbessert.

Ändern Sie nicht die tatsächliche Tonhöhe, nur um ein Symbol erscheinen zu lassen. Versehentliche Anzeige und musikalische Tonhöhe müssen beide richtig sein.

### 29. Wie ändere ich die enharmonische Schreibweise einer Notiz?

Eine Tonhöhe kann als scharf eingegeben werden, wenn eine flache Schreibweise besser in die Harmonie passen würde.

**Lösung**

1. Wählen Sie die Note oder Passage.
2. Verwenden Sie den Befehl **Respell**.
3. Überprüfen Sie die Rechtschreibung gegen den Akkord und die Taste.

Zum Beispiel muss eine Note, die als F-scharf klingt, möglicherweise als G-flach in einem bestimmten harmonischen Kontext geschrieben werden.

Respelling bewahrt klingende Tonhöhe. Transposing Änderungen Tonhöhe und löst ein anderes Problem.

### 30. Warum sind Noten in Sibelius rot?

Rote Notenköpfe weisen häufig darauf hin, dass eine Tonhöhe außerhalb des für das Instrument definierten Bereichs liegt.

**Lösung**

1. Prüfen Sie das dem Stab zugewiesene Instrument.
2. Überprüfen Sie die schriftlichen und klingenden Tonhöhen.
3. Überprüfen Sie die Anzeigeeinstellung für den Instrumentenbereich.
4. Entscheiden Sie, ob die Passage für den beabsichtigten Spieler geeignet ist.

Eine Range-Warnung bedeutet nicht automatisch, dass die Notation falsch ist. Das Verstecken der Farbe macht jedoch keine unpraktische Note spielbar.

## Notenlayout und Abstände {#score-layout-and-spacing}

### 31. Wie füge ich mehr oder weniger Bars auf ein System?

Sibelius berechnet normalerweise Systemlängen automatisch, aber man kann wichtige Brüche steuern.

**Lösung**

1. Wählen Sie die Balken, die ein System teilen sollen.
2. Verwenden Sie **Layout → Format → In das System einbauen**.
3. Überprüfen Sie das Ergebnis für überfüllte Notizen und Text.

Alternativ wählen Sie eine Barline und fügen Sie ein **Systembruch (System Break)** hinzu.

Wenn viele Systeme überfüllt sind, überprüfen Sie die Personalgröße, die Seitenränder und den Notenabstand, anstatt mehr Balken auf jede Zeile zu zwingen.

### 32. Warum wird Sibelius meinen Punktestand nicht umkehren?

Bestehende Formatierungsschlösser und Pausen können automatische Layoutänderungen verhindern.

**Lösung**

1. Anzeige von Layout-Marken.
2. Suchen Sie nach Systempausen, Seitenpausen und gesperrten Systemen.
3. Wählen Sie den betroffenen Durchgang.
4. Falls erforderlich, verwenden Sie **Format öffnen (Unlock Format)**.
5. Wenden Sie nur die Pausen an, die Sie brauchen.

Speichern Sie zuerst eine Kopie, wenn die Partitur bereits sorgfältig vorbereitet Seitenwechsel oder Publikation Layout.

### 33. Warum gibt es riesige Lücken zwischen den Stangen?

Große Lücken können durch manuelle Bewegung, Kollisionsvermeidung oder vertikale Rechtfertigung verursacht werden.

**Lösung**

1. Wählen Sie die betroffenen Systeme aus.
2. Verwenden Sie **Personalabstand optimieren (Optimize Staff Spacing)**.
3. Suchen Sie nach Texten, Dynamiken, Zeilen oder Text, die die Lücke besetzen.
4. Überprüfen Sie die vertikalen Berechtigungseinstellungen, wenn die Notensysteme über eine ganze Seite verteilt sind.

Wenn frühere manuelle Änderungen die Ursache sind, verwenden Sie den entsprechenden Befehl staff-spacing reset, bevor Sie erneut optimieren.

### 34. Warum Dynamics, Lyrics oder Text Collide?

Automatische Kollisionsvermeidung kann deaktiviert, überschrieben oder nicht in der Lage sein, ein überfülltes Layout zu lösen.

**Lösung**

1. Überprüfen Sie, ob **Magnetisches Layout (Magnetic Layout)** für die betroffenen Objekte aktiviert ist.
2. Unnötige manuelle Positionierung zurücksetzen.
3. Optimieren Sie den Personalabstand.
4. Geben Sie dem System bei Bedarf mehr horizontalen Raum.
5. Machen Sie kleine manuelle Anpassungen erst nach Überprüfung des automatischen Layouts.

Ein System, das zu viel Musik enthält, kann weniger Takte benötigen, unabhängig von Kollisionseinstellungen.

### 35. Wie kann ich Ungleiche horizontale Notizen Abstand wiederherstellen?

Abschleppen von Notizen oder wechselnder Abstand kann immer wieder eine Passage inkonsequent aussehen lassen.

**Lösung**

1. Wählen Sie den betroffenen Durchgang.
2. Wählen Sie **Aussehen → Anmerkungen zurücksetzen → Notiz zurücksetzen Abstand**.
3. Überprüfen Sie den Abstand um Texte, Akkord-Symbole und zufällige.
4. Einstellen System bricht, wenn der Durchgang überfüllt bleibt.

Wenn ein bestimmtes Objekt noch ungewöhnlich weit von seiner Note sitzt, überprüfen Sie auch seine individuelle Position.

### 36. Wie verberge ich leere Stangen?

Ungenutzte Notenblätter verstecken kann eine große Ensemblepartitur leichter lesbar machen.

**Lösung**

1. Wählen Sie die betreffenden Systeme oder Passagen.
2. Wählen Sie **Layout → Absteckstegen → Leerstegen ausblenden**.
3. Prüfen Sie, ob alle notwendigen Instrumente sichtbar bleiben.

Ein Stab, der Notizen oder andere relevante Objekte enthält, darf nicht als leer gelten. Prüfen Sie es, bevor Sie etwas löschen.

Verwenden Sie **Leere Stangen anzeigen (Show Empty Staves)**, wenn das Personal erneut angezeigt werden muss.

### 37. Wie kann ich die Ordnung der Instrumente ändern?

Das Ändern eines Instrumentenetiketts verschiebt sein Personal nicht.

**Lösung**

1. Öffnen Sie **Startseite → Instrumente → Hinzufügen oder Entfernen**.
2. Wählen Sie das Instrument in der Instrumentenliste der Partitur aus.
3. Bewegen Sie es nach oben oder unten.
4. Bestätigen Sie die Änderung.
5. Überprüfen Sie Klammern, Klammern und Barline-Gruppierung.

Wählen Sie einen Auftrag, der zum Ensemble passt und Musikern dabei hilft, ihre Parts schnell zu finden.

### 38. Warum sind Instrumentennamen falsch oder fehlend?

Die Gerätenamen können sich zwischen dem ersten und dem späteren System unterscheiden.

**Lösung**

1. Überprüfen Sie die vollen und kurzen Namen des Instruments.
2. Bearbeiten Sie den angezeigten Namen oder die entsprechenden Geräteeinstellungen.
3. Überprüfen Sie die Anzeigeeinstellungen für den Instrumentennamen der Partitur.
4. Prüfen Sie, ob ein Instrumentenwechsel ein anderes Etikett einführt.

Verwenden Sie den vollständigen Namen, bei dem Leser Identifikation und eine klare Abkürzung auf nachfolgenden Systemen benötigen.

### 39. Warum gibt es eine unerwartete leere Seite?

Eine leere Seite kann sich aus einer speziellen Seitenumbrüche, Titel-Seiten-Einstellungen oder importierter Formatierung ergeben.

**Lösung**

1. Anzeige von Layout-Marken.
2. Untersuchen Sie das Ende der vorhergehenden Seite.
3. Überprüfen Sie nach einem **Besonderer Seitenbruch (Special Page Break)**, das leere Seiten einfügt.
4. Entfernen oder einstellen Sie den verantwortlichen Bruch.
5. Überprüfen Sie die folgenden Seiten nach den Änderungen des Layouts.

Löschen Sie keine Musik, um eine durch Formatierung erstellte Seite zu entfernen.

### 40. Warum beginnen oder beginnen die Taktnummern falsch?

Ein Pickup, Bewegung Grenze oder versehentliche Takt-Nummernänderung kann die Nummerierung beeinflussen.

**Lösung**

1. Untersuchen Sie den Punkt, an dem Nummerierung falsch wird.
2. Suchen Sie nach einem **Änderung der Balkenzahl (Bar Number Change)**.
3. Korrigieren oder entfernen Sie die Änderung.
4. Überprüfen Sie die Bar-Nummer-Anzeigeeinstellungen.
5. Überprüfen Sie die Nummerierung in der Partitur und in Teilen.

Entscheiden Sie, ob eine Öffnung Pickup sollte unnummeriert oder gezählt werden, dann gelten diese Konvention konsequent.

## Einzelstimmen, Drucken und Exportieren {#parts-printing-and-exporting}

### 41. Wie erstelle ich einzelne Instrumentalteile?

**Dynamische Teile (Dynamic Parts)** ermöglicht es einer Partitur und ihren Instrumentalparts, musikalische Inhalte zu teilen.

**Lösung**

1. Öffnen Sie die **Teile (Parts)**-Steuerelemente.
2. Überprüfen Sie, welche Teile bereits vorhanden sind.
3. Öffnen Sie den gewünschten Teil.
4. Wo unterstützt, erstellen Sie einen neuen Teil und wählen Sie die Stangen, die es enthalten sollte.
5. Passen Sie das Layout für den Spieler an.

Halten Sie musikalische Edits im verknüpften Score-and-Parts-Workflow, anstatt unnötig separate Dateien zu pflegen.

### 42. Warum hat mein Instrumentalteil ein anderes Layout als die Partitur?

Teile haben unabhängige Layoutanforderungen, einschließlich Seitenumdrehungen, Personalgröße und Systemumbrüche.

**Lösung**

1. Öffnen Sie den betroffenen Teil.
2. Überprüfen Sie seine **Einrichtung des Dokuments (Document Setup)**.
3. Überprüfen Sie automatische Pausen und manuelle Pausen.
4. Passen Sie das Layout des Teils direkt an.

Wenn Notizen oder Rhythmen falsch erscheinen, überprüfen Sie, ob Sie den korrekt verlinkten Teil ansehen und dass der Inhalt nicht ausgeblendet wurde.

### 43. Warum sind Multireste in meinen Teilen vermisst oder gespalten?

Ein Multirest kann durch musikalische Anweisungen oder Objekte geteilt werden, die sichtbar bleiben müssen.

**Lösung**

1. Bestätigen Sie, dass Multireste im Teil aktiviert sind.
2. Inspizieren Sie die Bars, wo eine Multirest bricht.
3. Prüfen Sie nach Probezeichen, Text, Strichlinien, Schlüsseländerungen und Taktarten.
4. Entfernen Sie versehentliche Objekte erst nach Bestätigung, dass sie unnötig sind.

Einige Pausen sind richtig, weil die Spieler eine Anweisung an diesem Punkt sehen müssen.

### 44. Wie erstelle ich bessere Seitendrehungen in Teilen?

Spieler brauchen genug Zeit, um eine Seite zu drehen, ohne ihren nächsten Eintrag zu verpassen.

**Lösung**

1. Öffnen Sie den einzelnen Teil.
2. Finden Sie Ruhepausen geeignet für Seitenwechsel.
3. Seitenumbrüche an praktischen Stellen einfügen.
4. Überprüfen Sie automatische Seitenwechsel-Optionen, wenn verfügbar.
5. Überprüfen Sie die endgültige Seitenanzahl und den Systemabstand.

Vermeiden Sie extrem überfüllte Seiten nur, um eine Wendung zu erzwingen. Testen Sie das Layout aus der Perspektive des Spielers.

### 45. Warum hat mein PDF die falsche Größe oder Marge?

Der Seitenaufbau der Partitur und die Druck- oder Exporteinstellungen stimmen möglicherweise nicht überein.

**Lösung**

1. Überprüfen Sie die Größe und Ausrichtung der Seite in **Einrichtung des Dokuments (Document Setup)**.
2. Überprüfen Sie die Margen und Personalgröße.
3. Bestätigen Sie, dass Sie die beabsichtigte Punktzahl oder Teil exportieren.
4. Verwenden Sie eingebaute PDF-Export, wo verfügbar.
5. Öffnen Sie das PDF und überprüfen Sie die Abmessungen der Seiten.

Überprüfen Sie beim Drucken die Papiergröße und die Skalierung separat. -Fit to page - kann die endgültige gedruckte Stabgröße ändern.

### 46. Warum sind Musiksymbole oder Schriftarten im PDF falsch?

Fehlende Schriftarten, Substitutionen oder fontbezogene Exportprobleme können das Aussehen der Notation verändern.

**Lösung**

1. Vergleichen Sie das PDF mit der Partitur auf dem Bildschirm.
2. Bestätigen Sie, dass die benötigten Musik- und Textfonts installiert sind.
3. Probieren Sie Sibelius' integrierten PDF-Export, wo verfügbar.
4. Öffnen Sie das Ergebnis in einem anderen PDF-Viewer.
5. Wenn Symbole auch innerhalb von Sibelius falsch liegen, untersuchen Sie die Schriftartinstallation der Anwendung.

Wenn nur eine benutzerdefinierte Schriftart fehlschlägt, testen Sie eine Standardschrift in einer Kopie der Partitur.

### 47. Warum kann ich eine Audiodatei nicht exportieren?

Der Audio-Export erfordert eine Wiedergabekonfiguration, die Ton innerhalb des Computers wiedergeben kann.

**Lösung**

1. Überprüfen Sie die ausgewählte Wiedergabekonfiguration.
2. Verwenden Sie ein unterstütztes virtuelles Instrument oder eine interne Wiedergabe-Soundquelle.
3. Bestätigen Sie, dass normale Wiedergabe funktioniert.
4. Wählen Sie **Datei → → Audio exportieren**, wo verfügbar.

Wenn die Wiedergabe einen externen Hardware-Synthesizer verwendet, muss der Sound möglicherweise über eine Audio-Schnittstelle aufgezeichnet werden. MIDI an das Gerät zu senden erfasst nicht seine Audio.

## Speichern, Wiederherstellung und Leistung {#saving-recovery-and-performance}

### 48. Wie gewinne ich nach einem Absturz einen Score?

Die Erholung hängt davon ab, was Sibelius vor der Unterbrechung gerettet hat.

**Lösung**

1. Eröffne Sibelius und prüfe nach einer Genesungsmeldung.
2. Überprüfen Sie die verfügbaren Autosave- oder Backup-Dateien.
3. Verwenden Sie die in den Speicherneinstellungen Ihrer Version oder Referenzhandbuch angezeigten Orte.
4. Vergleichen Sie Zeitstempel und musikalische Inhalte.
5. Speichern Sie die beste wiederhergestellte Version unter einem neuen Namen.

Vermeiden Sie das Überschreiben des Originals, bis Sie bestätigt haben, dass die wiederhergestellte Datei die Arbeit enthält, die Sie benötigen.

### 49. Warum ist Sibelius langsam, einfrierend oder abstürzend?

Die Ursache kann eine bestimmte Partitur, Wiedergabebibliothek, Treiber oder Software-Komponente beinhalten.

**Lösung**

1. Speichern Sie Ihre Arbeit und starten Sie Sibelius.
2. Testen Sie eine kleine neue Punktzahl.
3. Vergleichen Sie das Verhalten mit der problematischen Punktzahl.
4. Testen Sie eine einfachere Wiedergabekonfiguration.
5. Trennen Sie unnötige MIDI- und Audiogeräte.
6. Prüfen Sie kompatible Sibelius und Treiber-Updates.

Wenn nur eine Partitur fehlschlägt, arbeiten Sie an einer Kopie und verengen Sie die betroffene Passage. Wenn jede Partitur fehlschlägt, notieren Sie Ihre Version, Ihr Betriebssystem und die genaue Fehlermeldung für die Unterstützung.

### 50. Warum kann jemand sonst meine Sibelius-Datei nicht öffnen?

Der Empfänger kann eine ältere Version, eine limitierte Auflage oder eine unvollständige Kopie der Datei haben.

**Lösung**

1. Fragen Sie, welche Sibelius-Version und -Edition sie verwenden.
2. Wo unterstützt, verwenden Sie **Datei → Export → Vorherige Version**.
3. Senden Sie die exportierte Kopie und behalten Sie Ihr Original.
4. Überprüfen Sie, ob die übertragene Datei vollständig ist.
5. Wenn sie eine andere Notationsanwendung verwenden, beachten Sie MusicXML.

Der Export älterer Versionen und MusicXML können Formatierung oder nicht unterstützte Funktionen ändern. Senden Sie ein PDF neben der editierbaren Datei als visuelle Referenz.

## Schnelle Fehlerbehebung Checkliste {#quick-troubleshooting-checklist}

Bevor wesentliche Änderungen vorgenommen werden:

1. Speichern Sie eine separate Kopie der Partitur.
2. Identifizieren Sie, ob das Problem eine Punktzahl oder jede Punktzahl betrifft.
3. Überprüfen Sie die ausgewählten Audio- und MIDI-Geräte.
4. Überprüfen Sie die Wiedergabekonfiguration.
5. Überprüfen Sie aktuelle Notation oder Layout-Änderungen.
6. Sibelius erneut starten, wenn dies angebracht ist.
7. Prüfen Sie Version und Betriebssystem-Kompatibilität.
8. Ändern Sie eine Einstellung zu einer Zeit und testen Sie das Ergebnis.

## Offizielle Sibelius-Hilfe {#official-sibelius-help}

Für Anweisungen für Ihre Version und Ausgabe, konsultieren Sie die **Sibelius Referenzhandbuch (Sibelius Reference Guide)** mit der Anwendung geliefert.

- [Avid Sibelius lernen und unterstützen](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Release Information](https://www.avid.com/resource-center/whats-new-in-sibelius)

Geben Sie bei der Anforderung Ihrer Hilfe Ihre Sibelius-Version, Ihr Betriebssystem, das Wiedergabegerät, die genaue Fehlermeldung an und ob das Problem einen oder alle Punkte betrifft.


---

## Sibelius Site Lizenzierung und Installation Hilfe für Schulen {#sibelius-site-licensing-and-installation-help-for-schools}

Verwaltung von Sibelius über eine Schule oder Hochschule anstatt Fehlerbehebung eines Arbeitsplatzes? Softplanet Productions verfügt über 25 Jahre Erfahrung in der Unterstützung britischer Musikabteilungen. [Vergleichen Sibelius Website Lizenz Optionen und fordern Sie ein Angebot](/de-at/services/sibelius-site-licenses/) für neue Installationen, zusätzliche Arbeitsplätze oder Netzwerk-Bereitstellung.
