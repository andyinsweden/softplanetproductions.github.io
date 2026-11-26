---
title: 'Felsökning i Sibelius: 50 vanliga problem'
description: Lös 50 vanliga Sibeliusproblem med ljud, MIDI, notinmatning, layout och PDF-export. Sök bland frågor och
  filtrera efter ämne.
draft: false
showTableOfContents: false
---

Hitta praktiska lösningar på 50 vanliga Sibelius-problem, från saknad uppspelningsljud till obekväma poängavstånd och PDF-exportfrågor.

Dessa instruktioner är avsedda för skrivbord Sibelius. Menynamn och tillgängliga funktioner varierar mellan versioner och utgåvor, inklusive Sibelius First, Artist och Ultimate. Om ett kommando saknas, sök efter sitt namn i Sibelius eller konsultera referensguiden som levereras med din version.

Innan du gör stora ändringar, spara en separat kopia av din noter.

## Hoppa till en kategori {#jump-to-a-category}

- [Ljud och uppspelning](#sound-and-playback)
- [MIDI och Note Input](#midi-and-note-input)
- [Notering, röster och rytm](#notation-voices-and-rhythm)
- [Score Layout och Spacing](#score-layout-and-spacing)
- [Delar, utskrift och export](#parts-printing-and-exporting)
- [Spara, återhämtning och prestanda](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Ljud och uppspelning {#sound-and-playback}

### 1. Varför finns det inget ljud i Sibelius?

Om uppspelningslinjen rör sig men du hör ingenting, kontrollera ljudutgången, uppspelningskonfigurationen och Mixer.

**Lös lösning**

1. Bekräfta att dina högtalare eller hörlurar fungerar i en annan applikation.
2. Öppna **Uppspelningsutrustning (Playback Devices)** från fliken **Spela Play (Play)**.
3. Öppna **Audio motoralternativ (Audio Engine Options)** och välj det avsedda ljudgränssnittet.
4. Välj en uppspelningskonfiguration som använder en installerad ljudkälla.
5. Öppna **Mixer** och kontrollera för dämpade kanaler, soloka instrument eller låg mästervolym.

Om du ansluter ett ljudgränssnitt efter att ha lanserat Sibelius, starta om programmet med gränssnittet anslutet.

**Relaterad:** Se problem 2, 5 och 6.

### 2. Varför spelar Sibelius genom fel högtalare eller hörlurar?

Sibelius kan använda en annan utgång från operativsystemets standardenhet.

**Lös lösning**

1. Anslut och växla på önskad enhet.
2. Öppna **Audio motoralternativ (Audio Engine Options)**.
3. Välj lämpligt gränssnitt.
4. Kontrollera utdatarutningen om ditt gränssnitt har flera utgångar.
5. Restart playback.

Om enheten saknas, stäng Sibelius och bekräfta att operativsystemet känner igen det innan du öppnar programmet.

Bluetooth-enheter kan införa ytterligare fördröjning.

### 3. Varför Playback Crackle, Klicka eller bryta upp?

En ljudbuffert som är för liten kan orsaka avbruten uppspelning, särskilt med krävande ljudbibliotek.

**Lös lösning**

1. Öppna **Audio motoralternativ (Audio Engine Options)**.
2. Öka buffertstorleken med ett led.
3. Spela en krävande passage och lyssna igen.
4. Stäng onödiga applikationer.
5. Kontrollera att gränssnittsföraren stöder ditt operativsystem.

Upprepa tills uppspelningen är stabil. Om ljudet förblir förvrängt, kontrollera även Mixer-nivåer: klippning och buffertproblem kräver olika fixar.

### 4. Varför finns det en fördröjning när jag spelar mitt MIDI-tangentbord?

Tiden mellan att trycka på en nyckel och höra ett ljud kallas latens.

**Lös lösning**

1. Öppna **Audio motoralternativ (Audio Engine Options)**.
2. Minska buffertstorleken gradvis.
3. Testa tangentbordet efter varje förändring.
4. Om klick visas, öka bufferten något.

På Windows, använd gränssnittstillverkarens ASIO-drivrutin när den är tillgänglig. På macOS, använd lämplig Core Audio-enhet.

Undvik Bluetooth-hörlurar när du behöver responsiv tangentbordsövervakning.

### 5. Varför är ett instrument tyst?

En enda tyst personal pekar vanligtvis på sina Mixer-inställningar, ljuduppdrag eller uppspelningsegenskaper.

**Lös lösning**

1. Öppna **Mixer**
2. Kontrollera att instrumentet inte dämpas.
3. Kontrollera om ett annat instrument är solat.
4. Bekräfta att personalen har ett lämpligt ljud som tilldelats.
5. Välj en påverkad anteckning och kontrollera inställningarna **Spela på pass (Play on pass)** i **Inspektör (Inspector)**, där så är tillgängligt.

Leta också efter en oavsiktlig instrumentförändring innan den tysta passagen.

### 6. Varför är Sibelius ljud saknas eller inte tillgängligt?

Anmälan och ljudbiblioteket kan kräva separat installation.

**Lös lösning**

1. Kontrollera vilket ljudbibliotek din uppspelningskonfiguration förväntar sig.
2. Bekräfta att biblioteket är installerat.
3. Om det behövs, få lämplig installatör från ditt Avid-konto.
4. Om du flyttade biblioteket, följ det stödda förfarandet för uppdatering av dess plats.
5. Starta om Sibelius och välj matchande uppspelningskonfiguration.

Anta inte att ominstallation av huvudprogrammet också kommer att installera ett stort ljudbibliotek.

### 7. Varför spelar ett instrument fel ljud?

Personalens instrumentdefinition eller Mixer-uppdrag kanske inte matchar det ljud du förväntar dig.

**Lös lösning**

1. Kontrollera vilket instrument som tilldelas personalen.
2. Leta efter instrumentförändringar i poängen.
3. Kolla den valda uppspelningskonfigurationen.
4. Granska personalens ljuduppdrag i **Mixer**.

Om du behöver ändra instrumentet själv, skapa en riktig **Instrumentförändring (Instrument Change)**. Att byta namn på personalen ensam ändrar inte sin musikaliska definition eller uppspelningsljud.

### 8. Varför påverkar dynamiken inte uppspelningen?

Dynamik inmatade med en olämplig textstil eller bifogad till fel position kan inte ge det avsedda resultatet.

**Lös lösning**

1. Välj noten där dynamiken ska börja.
2. Skapa **Expression Text**.
3. Sätt in dynamiken med textstilens ordmeny.
4. Kontrollera att den är knuten till den avsedda personalen och slå.
5. Spela passagen från något före markeringen.

Om dynamiken fortfarande har liten effekt, testa ett annat uppspelningsljud. Ljudbibliotek skiljer sig åt i hur de reagerar på dynamik.

### 9. Varför ignorerar Sibelius min Tempo Marking?

En rubrik som säger "Allegro" fungerar inte nödvändigtvis som en uppspelnings tempo instruktion.

**Lös lösning**

1. Skapa märkning med **Tempo Text** eller lämplig **Metronome Mark** textstil.
2. För en exakt hastighet, inkludera en erkänd slagenhet och tempo värde.
3. Kontrollera dess bifogade position.
4. Granska **Prestanda (Performance)**-inställningarna om uppspelningen avsiktligt varierar tempot.

Om hela poängen låter konsekvent för snabbt eller långsamt, kontrollera uppspelningstempokontrollen också.

### 10. Varför är upprepade eller första och andra slutar spela felaktigt?

Uppspelningen beror på upprepad struktur, inte bara det visuella utseendet på en linje eller textetikett.

**Lös lösning**

1. Använd rätt repetera barlines.
2. Skapa slutlinjer med hjälp av lämpliga först- och andra-slutande radtyper.
3. Kontrollera att varje slut börjar och slutar på de avsedda staplarna.
4. Granska uppspelningsinställningar och alla manuella upprepa sekvens.
5. Testuppspelning från före det upprepade avsnittet.

Använd erkända upprepa instruktioner snarare än vanlig text som bara ser ut som "DS" eller "DC."

## MIDI och Note Input {#midi-and-note-input}

### 11. Varför känner Sibelius inte igen mitt MIDI-tangentbord?

Enheten kan kopplas bort, otillgänglig för operativsystemet eller inaktiveras i Sibelius.

**Lös lösning**

1. Anslut tangentbordet innan du öppnar Sibelius.
2. Öppna **Preferenser → Ingångsenheter (Preferences → Input Devices)**.
3. Aktivera rätt enhet.
4. Spela en nyckel och kontrollera ingångsindikatorn.
5. Om enheten saknas, testa en annan USB-port eller kabel.

Om ett nav är inblandat, försök att ansluta direkt till datorn. Installera en tillverkare drivrutin om tangentbordet kräver en.

### 12. Varför kan jag höra mitt tangentbord men inga anteckningar visas?

Att höra ett ljud betyder inte att Sibelius för närvarande går in i notationen. Tangentbordet kan också producera sitt eget ljud självständigt.

**Lös lösning**

1. Välj resten eller positionen där ingången ska börja.
2. Ange anteckningsinmatningsläge.
3. Välj en varaktighet på **Keypad**.
4. Spela en ton.

För live-inspelning, använd **Flexi-time** istället för stegtidsinmatning. Bekräfta att tangentbordet är aktiverat i **Input Devices** om anteckningar fortfarande inte visas.

### 13. Varför är anteckningar inskrivna i fel Octave?

En oktavskiftning kan härröra i tangentbordsinställningarna eller instrumentets notationskonventioner.

**Lös lösning**

1. Kontrollera tangentbordets oktav och införa kontroller.
2. Testingång på en normal pianopersonal.
3. Kontrollera instrumentet som tilldelats den ursprungliga personalen.
4. Jämför konsert-pitch och transposing-score utsikt.

Vissa instrument, inklusive gitarr och piccolo, låter konventionellt en oktav bort från sina skriftliga anteckningar. Andra transponeringsinstrument skiftar med olika intervall.

### 14. Varför är MIDI Notes Entered Twice?

Duplicerad ingång kan inträffa när samma prestanda når Sibelius genom mer än en MIDI-rutt.

**Lös lösning**

1. Öppna **Input Devices**.
2. Tillfälligt endast den avsedda tangentbordsinmatningen.
3. Koppla in onödiga MIDI-anslutningar.
4. Kontrollera alla MIDI-routing-program eller gränssnittsinställningar.
5. Testa en enda anteckning igen.

Om du hör dubbla ljud men bara en ton visas, undersöka ljudövervakning och tangentbordets **Lokal kontroll (Local Control)**-inställning istället.

### 15. Varför är Flexi-time Recording Producing Messy Rhythms?

Levande inmatning kan tolkas för exakt för den musik du tänkt, vilket skapar oönskade korta anteckningar, vilar eller tuplets.

**Lös lösning**

1. Öppna **Flexi-time alternativ (Flexi-time Options)**.
2. Ange det minsta notvärdet för att passa passagen.
3. Begränsa tuplets om du inte behöver dem.
4. Spela in på ett bekvämt tempo med ett tydligt klick.
5. Spela in en kort passage och granska den innan du fortsätter.

För komplex musik kan stegtidsinmatning kräva mindre korrigering än liveinspelning.

### 16. Hur går jag in i sladdar istället för separata anteckningar?

Anteckningar spelade en efter en i steg-tid ingång normalt upptar successiva rytmiska positioner.

**Lös lösning**

För MIDI-ingång, spela ackordets anteckningar tillsammans efter att ha valt önskad varaktighet.

För dator-keyboard input:

1. Ange den första anteckningen.
2. Välj det.
3. Använd intervallkommandon för att lägga till anteckningar ovan eller under den.

Kontrollera att de resulterande anteckningarna delar en stam och varaktighet.

### 17. Hur anger jag anteckningar utan en numerisk Keypad?

Du kan använda Sibelius på skärmen **Keypad** även om din bärbara dator inte har någon separat nummerplatta.

**Lös lösning**

1. Visa **Keypad** från panelerna kontroller.
2. Klicka på önskad varaktighet eller artikulation.
3. Ange platser med datortangentbordet eller ett MIDI-tangentbord.
4. Granska tillgängliga tangentbordskortset i **Preferenser (Preferences)**.

Du kan också anpassa genvägar eller ansluta en USB numerisk keypad om du anger notation ofta.

### 18. Varför ersätter nya anteckningar befintlig musik?

Note input redigerar musiken på den valda rytmiska positionen; den skapar inte automatiskt extra barer för varje ny idé.

**Lös lösning**

1. Undo den oönskade redigeringen.
2. Lägg till nödvändiga barer innan du går in i den nya passagen.
3. Välj den första vilan i de nya staplarna.
4. Börja notera input där.

Om du vill ha en ytterligare oberoende rytm på samma personal, använd en annan röst istället för att ersätta den befintliga rösten.

## Notering, röster och rytm {#notation-voices-and-rhythm}

### 19. Hur lägger jag till eller tar bort hela barer?

Radera anteckningar och raderingsstänger är olika verksamheter.

**Lös lösning**

För att lägga till staplar, använd **Home → Bars → Lägg till (Home → Bars → Add)** och välj lämpligt alternativ.

För att ta bort staplar:

1. Gör en **Systemval** av barerna över alla stavar.
2. Kontrollera att urvalet innehåller exakt de barer du vill ha bort.
3. Ta bort urvalet.

Ett normalt passageval kan rensa musikaliskt innehåll medan du lämnar barerna på plats.

### 20. Hur ändrar jag en tidssignatur utan att oväntat flytta anteckningar?

Ändra mätare kan orsaka Sibelius att omorganisera befintlig musik till nya barer.

**Lös lösning**

1. Spara en kopia av poängen.
2. Välj den punkt där förändringen ska börja.
3. Öppna **Time Signature**-kontrollerna.
4. Granska alternativet för att skriva om befintliga barer.
5. Applicera förändringen och inspektera den drabbade passagen.

Inaktivera omskrivning bevarar den befintliga barstrukturen, men det kan lämna staplar vars varaktigheter inte matchar den visade mätaren. Använd det alternativet medvetet.

### 21. Hur skapar jag en Pickup Bar eller Anacrusis?

En pickup är en förkortad öppningsbar, till exempel en slog före den första fulla baren av en bit i 4/4.

**Lös lösning**

När du skapar öppningstidssignaturen, använd alternativet **pickup/upbeat** och ange dess varaktighet.

För en befintlig noter, skapa en **oregelbunden bar** av den önskade längden med hjälp av bar-creation kontroller, sedan överföra öppningsmusiken noggrant.

Kontrollera barnumreringen och den slutliga baren om pjäsen kräver ett komplement till förkortat slut.

### 22. Hur lägger jag två oberoende rytmer på en personal?

Använd separata röster för samtidiga musiklinjer.

**Lös lösning**

1. Ange den första raden i **Röst 1**.
2. Välj startpositionen för den andra raden.
3. Välj **Röst 2** på **Keypad**.
4. Ange sina anteckningar och vilar självständigt.

Röster 1 och 2 ger vanligtvis motsatta stamriktningar. Använd ytterligare röster först när notationen behöver dem.

Använd inte ett ackord när anteckningarna kräver olika rytmer.

### 23. Varför visas extra rester i min poäng?

Varje aktiv röst behöver sin egen rytmiska struktur, så ytterligare röster kan införa ytterligare vilar.

**Lös lösning**

1. Välj en oväntad vila och identifiera rösten.
2. Kontrollera om den rösten innehåller nödvändiga anteckningar någon annanstans i baren.
3. Ta bort en oavsiktligt skapad röst när så är lämpligt.
4. Dölj en vila bara när det är musikaliskt giltigt att göra det.

Undvik att gömma vilar helt enkelt för att dölja en ofullständig rytm. Se först till att varje röst står för den avsedda barens varaktighet.

### 24. Hur skapar jag Triplets och andra Tuplets?

Tuplets delar en rytmisk spännvidd annorlunda än dess normala gruppering.

**Lös lösning**

1. Välj en ton eller vila med den avsedda basperioden.
2. Använd **Notera Input → Tuplets (Note Input → Tuplets)**.
3. Välj önskad tuplet eller ange ett anpassat förhållande.
4. Ange de återstående anteckningarna.

För en vanlig åttonde-not triplet, börja med ett åttonde-not värde. Om tuplet upptar fel span, ångra det och kontrollera starttiden och förhållandet.

### 25. Varför är mina anteckningar strålade felaktigt?

Beam gruppering beror på mätaren, dess grupperingsinställningar och eventuella manuella balkändringar.

**Lös lösning**

1. Kontrollera tidssignaturens slaggruppering.
2. Välj de drabbade anteckningarna.
3. Använd **Keypad**-strålkontrollerna för att starta, fortsätta eller bryta strålar efter behov.
4. För en återkommande fråga, justera grupperingsinställningar snarare än att korrigera varje stråle manuellt.

Till exempel grupperar 6/8 normalt åttonde anteckningar i två grupper av tre, medan andra mätare kan behöva ett annat mönster.

### 26. Hur Beam Notes över två stavar?

Korspersonal notation är användbar för piano passager delas mellan händerna.

**Lös lösning**

1. Ange passagen på sin ursprungspersonal.
2. Välj de anteckningar som ska visas på den andra personalen.
3. Använd kommandona **Cross-staff Notes** för att flytta deras skärm ovanför eller nedan.
4. Granska stjälkar, strålar och personalavstånd.

Korspersonalrörelsen bevarar noternas förhållande till sin ursprungliga röst. Vanligt klipp och klistra flyttar musiken till en annan personal och kanske inte producerar samma notation.

### 27. Varför beter sig min slip som en slusr?

Ties och slurs har olika musikaliska betydelser.

**Lös lösning**

Använd en **Tie** för att gå med på varandra följande anteckningar av samma tonhöjd i en hållbar varaktighet. Applicera den med **Keypad**-tiekontrollen.

Använd en **Släd** för att ange en fras eller artikulation över anteckningar. Skapa det med kommandot **Slur**.

Om ett slips inte ansluter korrekt, kontrollera följande antecknings plan, oavsiktlig, röst och rytmisk position.

### 28. Varför saknas eller återkommer oavsiktliga?

Sibelius bestämmer oavsiktlig visning från nyckelsignaturen, tidigare anteckningar i baren och notationsinställningarna.

**Lös lösning**

1. Kontrollera nyckelsignaturen.
2. Kontrollera tidigare händelser av planen i samma bar.
3. Välj anteckningen och inspektera dess oavsiktliga med hjälp av **Keypad**.
4. Lägg till en försiktighetsolycka där den förbättrar läsbarheten.

Ändra inte den faktiska planen bara för att tvinga en symbol att visas. Oavsiktlig visning och musikalisk tonhöjd måste båda vara korrekta.

### 29. Hur ändrar jag enharmonisk stavning av en ton?

En plan kan anges som en skarp när en platt stavning bättre skulle passa harmonin.

**Lös lösning**

1. Välj anteckning eller passage.
2. Använd kommandot **Respell**.
3. Kontrollera stavningen mot ackord och nyckel.

Till exempel kan en ton som låter som F-sharp behöva skrivas som G-platta i ett visst harmoniskt sammanhang.

Respelling bevarar ljudande tonhöjd. Transponera förändringar plan och löser ett annat problem.

### 30. Varför är Notes Red i Sibelius?

Röda anteckningshuvuden indikerar vanligtvis att en plan ligger utanför det intervall som definieras för instrumentet.

**Lös lösning**

1. Kontrollera instrumentet som tilldelats personalen.
2. Granska de skriftliga och ljudande groparna.
3. Kontrollera instrument-range display inställningen.
4. Bestäm om passagen passar den avsedda spelaren.

En intervallvarning betyder inte automatiskt att notationen är fel. Men att dölja färgen gör inte en opraktisk anteckning spelbar.

## Score Layout och Spacing {#score-layout-and-spacing}

### 31. Hur passar jag mer eller mindre barer på ett system?

Sibelius beräknar normalt systemlängder automatiskt, men du kan styra viktiga pauser.

**Lös lösning**

1. Välj de staplar som ska dela ett system.
2. Använd **Layout → Format → gör in i systemet (Layout → Format → Make Into System)**.
3. Inspektera resultatet för trånga anteckningar och text.

Alternativt väljer du en barline och lägger till en **System Break**.

Om många system är trånga, granska personalstorlek, sidmarginaler och notera avstånd snarare än att tvinga fler barer på varje rad.

### 32. Varför kommer Sibelius inte att vägra min poäng?

Befintliga formateringslås och raster kan förhindra automatiska layoutändringar.

**Lös lösning**

1. Visa layout mark.
2. Leta efter systemavbrott, sidavbrott och låsta system.
3. Välj den drabbade passagen.
4. Använd **Lås upp Format (Unlock Format)** i förekommande fall.
5. Återanvänd bara de pauser du behöver.

Spara en kopia först om poängen redan har noggrant förberedda sidvisningar eller publiceringslayout.

### 33. Varför finns det stora luckor mellan stavar?

Stora luckor kan orsakas av manuell rörelse, kollisionsundvikande eller vertikal motivering.

**Lös lösning**

1. Välj de berörda systemen.
2. Använd **Optimera personalspacing (Optimize Staff Spacing)**.
3. Leta efter texter, dynamik, linjer eller text som upptar klyftan.
4. Kontrollera vertikala motiveringsinställningar om stavarna sprids över en hel sida.

Om tidigare manuella förändringar är orsaken, använd lämplig personal-spacing återställningskommando innan du optimerar igen.

### 34. Varför dynamik, text eller textkollider?

Automatisk kollisionsundvikelse kan inaktiveras, överskridas eller inte lösa en trång layout.

**Lös lösning**

1. Kontrollera att **Magnetisk Layout (Magnetic Layout)** är aktiverat för de drabbade objekten.
2. Återställ onödig manuell positionering.
3. Optimera personalen avstånd.
4. Ge systemet mer horisontellt utrymme om det behövs.
5. Gör små manuella justeringar först efter att ha kontrollerat den automatiska layouten.

Ett system som innehåller för mycket musik kan behöva färre barer, oavsett kollisionsinställningar.

### 35. Hur återställer jag ojämn horisontell Note Spacing?

Att rita anteckningar eller byta avstånd upprepade gånger kan lämna en passage som ser inkonsekvent ut.

**Lös lösning**

1. Välj den drabbade passagen.
2. Välj **Utseende → Återställ anteckningar → Återställ Note Spacing (Appearance → Reset Notes → Reset Note Spacing)**.
3. Inspektera avståndet runt texter, ackordsymboler och oavsiktliga.
4. Justera systemet bryts om passagen förblir trångt.

Om ett visst objekt fortfarande sitter ovanligt långt från noten, kontrollera sin individuella position också.

### 36. Hur döljer jag tomma stavar?

Att gömma oanvända stavar kan göra en stor ensemble poäng lättare att läsa.

**Lös lösning**

1. Välj system eller passage i fråga.
2. Välj **Layout → gömställen → gömmer tomma stavar (Layout → Hiding Staves → Hide Empty Staves)**.
3. Kontrollera att alla nödvändiga instrument är synliga.

En personal som innehåller anteckningar eller andra relevanta objekt får inte kvalificera sig som tom. Inspektera det innan du tar bort någonting.

Använd **Visa tomma stavar (Show Empty Staves)** när du behöver personalen igen.

### 37. Hur ändrar jag ordern av instrument?

Att byta en instrumentetikett flyttar inte sin personal.

**Lös lösning**

1. Öppna **→ Instruments → Lägg till eller ta bort (Home → Instruments → Add or Remove)**.
2. Välj instrumentet i poängens instrumentlista.
3. Flytta upp eller ner.
4. Bekräfta förändringen.
5. Granska fästen, hängslen och barline gruppering.

Välj en beställning som passar ensemblen och hjälper musiker att hitta sina delar snabbt.

### 38. Varför är instrumentnamn fel eller saknas?

Instrumentnamn kan skilja sig mellan det första systemet och senare system.

**Lös lösning**

1. Kontrollera instrumentets fullständiga och korta namn.
2. Redigera det visade namnet eller dess instrumentinställningar i förekommande fall.
3. Granska poängens instrumentnamnsvisningsinställningar.
4. Kontrollera om en instrumentförändring introducerar en annan etikett.

Använd hela namnet där läsare behöver identifiering och en tydlig förkortning på efterföljande system.

### 39. Varför finns det en oväntad tom sida?

En tom sida kan bero på en speciell sida paus, inställningar på titelsidan eller importerad formatering.

**Lös lösning**

1. Visa layout mark.
2. Inspektera slutet på den föregående sidan.
3. Kontrollera en **Special Page Break** som infogar tomma sidor.
4. Ta bort eller justera den ansvariga pausen.
5. Granska följande sidor efter layouten ändras.

Ta inte bort musik för att ta bort en sida som skapats genom formatering.

### 40. Varför startar eller startar Bar Numbers felaktigt?

En pickup, rörelsegräns eller oavsiktlig bar-number förändring kan påverka numreringen.

**Lös lösning**

1. Inspektera den punkt där numreringen blir felaktig.
2. Kontrollera en **Bar Number Förändring (Bar Number Change)**.
3. Korrigera eller ta bort förändringen.
4. Granska inställningarna för bar-number display.
5. Kontrollera numrering i både poäng och delar.

Bestäm om en öppningshämtning ska vara oskadd eller räknas, tillämpa den konventionen konsekvent.

## Delar, utskrift och export {#parts-printing-and-exporting}

### 41. Hur skapar jag individuella instrumentella delar?

**Dynamiska delar (Dynamic Parts)** tillåter en poäng och dess instrumentala delar att dela musikaliskt innehåll.

**Lös lösning**

1. Öppna **Delar (Parts)**-kontrollerna.
2. Kontrollera vilka delar som redan finns.
3. Öppna den önskade delen.
4. Där stöds, skapa en ny del och välj de stavar som den ska innehålla.
5. Justera dess layout för spelaren.

Håll musikredigeringar i det länkade poäng-and-parts-arbetsflödet istället för att upprätthålla separata filer i onödan.

### 42. Varför har min instrumentella del en annan utformning från poängen?

Delar har oberoende layoutkrav, inklusive sidvisningar, personalstorlek och systemavbrott.

**Lös lösning**

1. Öppna den berörda delen.
2. Kontrollera **Dokumentinställning (Document Setup)**.
3. Granska automatiska raster och manuella raster.
4. Justera delens layout direkt.

Skillnader i layout förväntas normalt. Om anteckningar eller rytmer visas fel, kontrollera att du tittar på rätt länkad del och att dess innehåll inte har dolts.

### 43. Varför är multirests saknas eller delas i mina delar?

En multirest kan delas upp av musikinstruktioner eller objekt som måste förbli synliga.

**Lös lösning**

1. Bekräfta att multirests är aktiverade i delen.
2. Inspektera barerna där en multirest bryts.
3. Kontrollera repetitionsmärken, text, barlines, nyckeländringar och tidssignaturer.
4. Ta bort oavsiktliga föremål först efter att ha bekräftat att de är onödiga.

Vissa pauser är korrekta eftersom spelare måste se en instruktion vid den tidpunkten.

### 44. Hur skapar jag bättre sida vänder i delar?

Spelare behöver tillräckligt med tid för att vända en sida utan att missa nästa post.

**Lös lösning**

1. Öppna den enskilda delen.
2. Hitta vilar lämpliga för sida vändningar.
3. Infoga sida bryts på praktiska positioner.
4. Granska automatiska sida-turn alternativ där det finns tillgängligt.
5. Kontrollera det slutliga sidräknings- och systemavståndet.

Undvik att skapa extremt trånga sidor bara för att tvinga en tur. Testa layouten ur spelarens perspektiv.

### 45. Varför har min PDF fel storlek eller marginaler?

Poängens siduppställning och utskrifts- eller exportinställningarna kanske inte är överens.

**Lös lösning**

1. Kontrollera sidstorlek och orientering i **Dokumentinställning (Document Setup)**.
2. Kontrollera marginalerna och personalens storlek.
3. Bekräfta att du exporterar den avsedda poängen eller delen.
4. Använd inbyggd PDF-export där tillgängligt.
5. Öppna PDF-filen och verifiera dess siddimensioner.

När du skriver ut, kontrollera pappersstorlek och skala separat. "Fit to page" kan ändra den slutliga tryckta personalstorleken.

### 46. Varför är musiksymboler eller teckensnitt fel i PDF-filen?

Att missa teckensnitt, substitutioner eller typsnittsrelaterade exportproblem kan ändra utseendet på notationen.

**Lös lösning**

1. Jämför PDF med poängen på skärmen.
2. Bekräfta att de nödvändiga musik- och texttecknen är installerade.
3. Prova Sibelius inbyggda PDF-export där det finns tillgängligt.
4. Öppna resultatet i en annan PDF-tittare.
5. Om symboler också är fel i Sibelius, undersöka programmets typsnitt installation.

Om bara en anpassad typsnitt misslyckas, testa en standard teckensnitt i en kopia av poängen.

### 47. Varför kan jag inte exportera en ljudfil?

Audio export kräver en uppspelningskonfiguration som kan göra ljud i datorn.

**Lös lösning**

1. Kolla den valda uppspelningskonfigurationen.
2. Använd ett stöd virtuellt instrument eller intern uppspelningsljudkälla.
3. Bekräfta att vanlig uppspelning fungerar.
4. Välj **Fil → Export → Audio (File → Export → Audio)**, var tillgänglig.

Om uppspelningen använder en extern hårdvarusynthesizer, kan ljudet behöva registreras genom ett ljudgränssnitt. Skicka MIDI till enheten fångar inte ljudet.

## Spara, återhämtning och prestanda {#saving-recovery-and-performance}

### 48. Hur återställer jag en poäng efter en krasch?

Återhämtningen beror på vad Sibelius sparade innan avbrottet.

**Lös lösning**

1. Åter öppna Sibelius och kontrollera en återhämtningsprompt.
2. Inspektera tillgängliga autosave eller backup filer.
3. Använd de platser som visas i din versions sparande preferenser eller referensguide.
4. Jämför tidsstämplar och musikaliskt innehåll.
5. Spara den bästa versionen under ett nytt namn.

Undvik att skriva originalet tills du har bekräftat att den återställda filen innehåller det arbete du behöver.

### 49. Varför är Sibelius långsam, frysning eller kraschar?

Orsaken kan innebära en viss noter, uppspelningsbibliotek, förare eller programvarukomponent.

**Lös lösning**

1. Spara ditt arbete och starta om Sibelius.
2. Testa en liten ny noter.
3. Jämför beteende med problematiska noter.
4. Testa en enklare uppspelningskonfiguration.
5. Koppla av onödiga MIDI- och ljudenheter.
6. Kontrollera kompatibla Sibelius- och föraruppdateringar.

Om bara en poäng misslyckas, arbeta på en kopia och begränsa den drabbade passagen. Om varje poäng misslyckas, spela in din version, operativsystem och exakt felmeddelande för support.

### 50. Varför kan någon annan inte öppna min Sibelius-fil?

Mottagaren kan ha en äldre version, en begränsad upplaga eller en ofullständig kopia av filen.

**Lös lösning**

1. Fråga vilken Sibelius-version och utgåva de använder.
2. Där du stöds, använd **Fil → Export → Tidigare version (File → Export → Previous Version)**.
3. Skicka den exporterade kopian och behåll originalet.
4. Kontrollera att den överförda filen är klar.
5. Om de använder en annan notationsapplikation, överväga MusicXML.

Older-version export och MusicXML kan ändra formatering eller ostödda funktioner. Skicka en PDF tillsammans med redigerbar fil som en visuell referens.

## Snabb felsökning checklista {#quick-troubleshooting-checklist}

Innan du gör stora förändringar:

1. Spara en separat kopia av poängen.
2. Identifiera om problemet påverkar en poäng eller varje noter.
3. Kontrollera de valda ljud- och MIDI-enheterna.
4. Kolla uppspelningskonfigurationen.
5. Inspektera nyligen noterade eller layoutförändringar.
6. Starta Sibelius när så är lämpligt.
7. Kontrollera version och operativsystem kompatibilitet.
8. Ändra en inställning i taget och testa resultatet.

## Officiell Sibelius Hjälp {#official-sibelius-help}

För instruktioner som är specifika för din version och upplaga, kontakta **Sibelius referensguide (Sibelius Reference Guide)** som levereras med programmet.

- [Avid Sibelius lär sig och stöd](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius frigör information](https://www.avid.com/resource-center/whats-new-in-sibelius)

När du begär hjälp, inkludera din Sibelius-version, operativsystem, uppspelningsenhet, det exakta felmeddelandet och om problemet påverkar en poäng eller alla noter.


---

## Sibelius webbplats licensiering och installation hjälp för skolor {#sibelius-site-licensing-and-installation-help-for-schools}

Hantera Sibelius över en skola eller högskola snarare än att felsöka en arbetsstation? Softplanet Productions har 25 års erfarenhet av att stödja brittiska musikavdelningar. [Jämför Sibelius webbplats licensalternativ och begära ett citat](/sv/services/sibelius-site-licenses/) för nya installationer, ytterligare platser eller nätverksutbyggnad.
