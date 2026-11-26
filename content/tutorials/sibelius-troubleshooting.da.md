---
title: 'Fejlfinding i Sibelius: 50 almindelige problemer'
description: Find løsninger på 50 problemer med lyd, MIDI, nodeindtastning, layout og PDF-eksport i Sibelius. Søg og
  filtrér efter emne.
draft: false
showTableOfContents: false
---

Find praktiske løsninger på 50 almindelige Sibelius problemer, fra manglende afspilning lyd til akavet score afstand og PDF eksport spørgsmål.

Disse instruktioner er beregnet til desktop Sibelius. Menunavne og tilgængelige funktioner varierer mellem versioner og udgaver, herunder Sibelius først, kunstner og Ultimate. Hvis en kommando mangler, skal du søge efter dens navn i Sibelius eller søge i referenceguide, der leveres med din version.

Før du foretager større ændringer, gemme en separat kopi af din score.

## Spring til en kategori {#jump-to-a-category}

- [Lyd og afspilning](#sound-and-playback)
- [MIDI- og note- input](#midi-and-note-input)
- [Notering, stemmer og Rytme](#notation-voices-and-rhythm)
- [Score layout og mellemrum](#score-layout-and-spacing)
- [Dele, tryk- og eksporttryksager](#parts-printing-and-exporting)
- [Gemning, inddrivelse og ydeevne](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Lyd og afspilning {#sound-and-playback}

### 1. Hvorfor er der ingen lyd i Sibelius?

Hvis afspilningslinjen bevæger sig, men du ikke hører noget, skal du kontrollere lyduddata, afspilningsindstilling og mixer.

**Opløsning**

1. Bekræft at dine højttalere eller hovedtelefoner virker i et andet program.
2. Åbn **Afspilningsenheder (Playback Devices)** fra fanebladet **Afspil (Play)**.
3. Åbn **Tilvalg for lydmotor (Audio Engine Options)** og vælg den tiltænkte lydgrænseflade.
4. Vælg en afspilningskonfiguration der bruger en installeret lydkilde.
5. Åbn **Blanding (Mixer)** og tjek for dæmpede kanaler, soloede instrumenter eller lav master volumen.

Hvis du har tilsluttet en lydgrænseflade efter lanceringen Sibelius, genstart programmet med grænsefladen tilsluttet.

**Relateret:** Se problemer 2, 5 og 6.

### 2. Hvorfor spiller Sibelius gennem de forkerte højttalere eller hovedtelefoner?

Sibelius kan bruge en anden output fra operativsystemets standard enhed.

**Opløsning**

1. Tilslut og tænd for den ønskede enhed.
2. Åbn **Tilvalg for lydmotor (Audio Engine Options)**.
3. Vælg den relevante grænseflade.
4. Kontroller output routing, hvis din grænseflade har flere udgange.
5. Genstart afspilningen.

Hvis enheden mangler, lukke Sibelius og bekræfte, at operativsystemet anerkender det, før genåbning af programmet.

Bluetooth-enheder kan indføre yderligere forsinkelser.

### 3. Hvorfor afspilning Crackle, Klik eller bryde op?

En lydbuffer, der er for lille, kan forårsage afbrudt afspilning, især med krævende lydbiblioteker.

**Opløsning**

1. Åbn **Tilvalg for lydmotor (Audio Engine Options)**.
2. Forøg bufferstørrelsen med et tilgængeligt trin.
3. Spil en krævende passage og lyt igen.
4. Tæt på unødvendige applikationer.
5. Kontroller, at grænsefladedriveren understøtter dit operativsystem.

Gentag indtil afspilningen er stabil. Hvis lyden forbliver forvrænget, også kontrollere Mixer niveauer: klipning og buffer problemer kræver forskellige rettelser.

### 4. Hvorfor er der en forsinkelse når jeg spiller min MIDI tastatur?

Tiden mellem at trykke på en nøgle og høre en lyd kaldes latency.

**Opløsning**

1. Åbn **Tilvalg for lydmotor (Audio Engine Options)**.
2. Reducer bufferstørrelsen gradvist.
3. Test tastaturet efter hver ændring.
4. Hvis der fremkommer klik, skal bufferen øges en smule.

På Windows skal du bruge grænsefladeproducentens ASIO driver, når den er tilgængelig. På macOS, brug den relevante Core Audio-enhed.

Undgå Bluetooth hovedtelefoner, når du har brug for lydhør tastatur overvågning.

### 5. Hvorfor er et instrument tavst?

Et enkelt stille personale peger normalt på sine Mixer-indstillinger, lydopgaver eller afspilningsegenskaber.

**Opløsning**

1. Åbn **Blanding (Mixer)**.
2. Kontrollér, at instrumentet ikke er dæmpet.
3. Kontroller, om et andet instrument er soloet.
4. Bekræft, at personalet har en passende lyd tildelt.
5. Vælg en berørt note, og tjek dens **Spil på pass (Play on pass)** indstillinger i **Inspektør (Inspector)**, hvis det er muligt.

Led også efter en utilsigtet instrumentændring før den stille passage.

### 6. Hvorfor er Sibelius lyder mangler eller utilgængelig?

Noteringsprogrammet og dets lydbibliotek kan kræve separat installation.

**Opløsning**

1. Tjek hvilket lydbibliotek din afspilningsindstilling forventer.
2. Bekræft at biblioteket er installeret.
3. Hvis det er nødvendigt, skal du få den relevante montør fra din Avid-konto.
4. Hvis du flyttede biblioteket, skal du følge den understøttede procedure for opdatering af dets placering.
5. Genstart Sibelius og vælg den matchende afspilningsindstilling.

Antag ikke, at geninstallation af hovedprogrammet vil også geninstallere et stort lydbibliotek.

### 7. Hvorfor spiller et instrument den forkerte lyd?

Medarbejdernes instrumentdefinition eller Mixer-opgave matcher måske ikke den lyd, du forventer.

**Opløsning**

1. Undersøg, hvilket instrument der er tildelt personalet.
2. Kig efter instrumentændringer i pointsum.
3. Tjek den valgte afspilningsindstilling.
4. Gennemgå personalets lydopgave i **Blanding (Mixer)**.

Hvis du har brug for at ændre selve instrumentet, oprette en ordentlig **Instrumentændring (Instrument Change)**. Omdøbning af personalet alene ændrer ikke dets musikalske definition eller afspilningslyd.

### 8. Hvorfor påvirker Dynamics ikke Playback?

Dynamik indtastet med en uhensigtsmæssig tekst stil eller knyttet til den forkerte position kan ikke give det tilsigtede resultat.

**Opløsning**

1. Vælg noten hvor dynamikken skal begynde.
2. Opret **Udtryk tekst (Expression Text)**.
3. Indsæt dynamikken ved hjælp af ordmenuen for tekststil.
4. Kontroller, at det er knyttet til den planlagte personale og beat.
5. Spil passagen fra lidt før mærkningen.

Hvis dynamikken stadig har ringe effekt, test en anden afspilning lyd. Lydbiblioteker er forskellige i, hvordan de reagerer på dynamik.

### 9. Hvorfor ignorerer Sibelius min Tempo-markering?

En overskrift, hvor der står "Allegro", fungerer ikke nødvendigvis som afspilning af tempoinstruktion.

**Opløsning**

1. Opret markeringen med **Tempo- tekst (Tempo Text)** eller den relevante **Metronom Mark (Metronome Mark)** tekststil.
2. For en præcis hastighed, omfatte en anerkendt beat enhed og tempo værdi.
3. Kontroller dets fastgørelsesposition.
4. Gennemgå **Præstation (Performance)** indstillinger, hvis afspilning er bevidst ændre tempoet.

Hvis hele score lyder konsekvent for hurtigt eller langsomt, skal du kontrollere afspilning tempo kontrol så godt.

### 10. Hvorfor er gentagelser eller første og anden slutning spiller forkert?

Afspilning afhænger af gentagende struktur, ikke bare den visuelle udseende af en linje eller tekst etiket.

**Opløsning**

1. Brug rigtige gentagelser.
2. Opret slutlinjer ved hjælp af de relevante første og anden slutlinjetyper.
3. Kontrollér, at hver slutning begynder og slutter ved de planlagte barer.
4. Gennemgå gentagne afspilningsindstillinger og en eventuel manuel gentagelse.
5. Test afspilning fra før den gentagne sektion.

Brug genkendte gentagelsesinstruktioner snarere end almindelig tekst, der blot ligner "D.S." eller "D.C."

## MIDI- og note- input {#midi-and-note-input}

### 11. Hvorfor genkender Sibelius ikke mit MIDI tastatur?

Enheden kan afbrydes, ikke tilgængelig for operativsystemet eller deaktiveres i Sibelius.

**Opløsning**

1. Tilslut tastaturet før åbning Sibelius.
2. Åbn **Indstillinger →- indlæsningsenheder (Preferences → Input Devices)**.
3. Aktivér den korrekte enhed.
4. Afspil en nøgle og tjek input indikator.
5. Hvis enheden mangler, afprøves en anden USB-port eller kabel.

Hvis der er tale om et knudepunkt, skal du prøve at forbinde direkte til computeren. Installer en producent driver, hvis tastaturet kræver en.

### 12. Hvorfor kan jeg høre mit tastatur, men ingen noter vises?

At høre en lyd betyder ikke, at Sibelius i øjeblikket indtaster notation. Tastaturet kan også producere sin egen lyd uafhængigt.

**Opløsning**

1. Vælg resten eller position hvor inddata skal begynde.
2. Indtast notes- input tilstand.
3. Vælg en varighed på **Keypad Formand (Keypad)**.
4. Spil en seddel.

Til live optagelse, brug **Flexi- tid (Flexi-time)** i stedet for step-time input. Bekræft at tastaturet er aktiveret i **Input- enheder (Input Devices)** hvis noter stadig ikke vises.

### 13. Hvorfor er Notes optaget i den forkerte Octave?

Et oktavskift kan stamme fra tastaturindstillingerne eller instrumentets notationskonventioner.

**Opløsning**

1. Tjek tastaturets oktav og omsæt kontrollerne.
2. Test input på en normal klaver personale.
3. Kontroller det instrument, der er tildelt det oprindelige personale.
4. Sammenlign koncert-pitch og transposing-score visninger.

Nogle instrumenter, herunder guitar og piccolo, normalt lyde en oktav væk fra deres skriftlige noter. Andre gennemførelsesinstrumenter skifter med forskellige intervaller.

### 14. Hvorfor er MIDI Noter optaget to gange?

Duplikeret input kan forekomme, når den samme ydelse når Sibelius gennem mere end én MIDI rute.

**Opløsning**

1. Åbn **Input- enheder (Input Devices)**.
2. Tidsmæssigt kun aktivere den tiltænkte tastatur input.
3. Afbryd unødvendige MIDI-forbindelser.
4. Kontroller eventuelle MIDI- routing-programmer eller grænsefladeindstillinger.
5. Test en enkelt besked igen.

Hvis du hører fordoblet lyd, men kun en note vises, undersøge lydovervågning og tastaturet **Lokal kontrol (Local Control)** indstilling i stedet.

### 15. Hvorfor er Flexi- tid optagelse Producering Messy Rhythms?

Live input kan fortolkes for præcist for den musik, du ønskede, skabe uønskede korte noter, hvile eller tuplets.

**Opløsning**

1. Åbn **Flexi- time options (Flexi-time Options)**.
2. Sæt den mindste nodeværdi der passer til passagen.
3. Begræns tuplets, hvis du ikke har brug for dem.
4. Optag på en komfortabel tempo med et klart klik.
5. Optag en kort passage og gennemgå det, før du fortsætter.

For komplekse musik, step-time input kan kræve mindre korrektion end live optagelse.

### 16. Hvordan indtaster jeg akkorder i stedet for separate noter?

Noter spillede en efter en i step-time input normalt indtager successive rytmiske positioner.

**Opløsning**

For MIDI input, spille akkordens noter sammen efter at have valgt den krævede varighed.

For computertastatur- input:

1. Indtast den første note.
2. Vælg det.
3. Brug intervalkommandoerne til at tilføje noter over eller under det.

Kontroller, at de resulterende noter deler én stamme og varighed.

### 17. Hvordan indtaster jeg noter uden en Numerisk Keypad?

Du kan bruge Sibelius "s on- screen **Keypad Formand (Keypad)**, selv om din bærbare computer ikke har nogen separat nummer pad.

**Opløsning**

1. Vis **Keypad Formand (Keypad)** fra panelets betjeningsorganer.
2. Klik på den krævede varighed eller artikulering.
3. Indtast pladser med computertastaturet eller et MIDI-tastatur.
4. Gennemgå tilgængelige keyboard- genvejstaster i **Indstillinger (Preferences)**.

Du kan også tilpasse genveje eller tilslutte en USB-numerisk tastatur, hvis du indtaster notation ofte.

### 18. Hvorfor erstatter nye noter eksisterende musik?

Bemærk at inddata redigerer musikken ved den valgte rytmiske position; den skaber ikke automatisk ekstra barer til hver ny idé.

**Opløsning**

1. Fortryd den uønskede redigering.
2. Tilføj de nødvendige stænger før du går ind i den nye passage.
3. Vælg den første hvile i de nye barer.
4. Begynd noteindgang der.

Hvis du ønsker en ekstra uafhængig rytme på samme personale, skal du bruge en anden stemme i stedet for at erstatte den eksisterende stemme.

## Notering, stemmer og Rytme {#notation-voices-and-rhythm}

### 19. Hvordan kan jeg tilføje eller slette hele barer?

Sletning af noter og sletning barer er forskellige operationer.

**Opløsning**

For at tilføje barer, skal du bruge **Hjem → Barer → Tilføj (Home → Bars → Add)** og vælge den passende indstilling.

For at slette bjælker:

1. Lav en **systemvalg** af tremmerne på tværs af alle staver.
2. Markér at markeringen indeholder præcis de barer du ønsker fjernet.
3. Slet markeringen.

Et normalt passage udvalg kan rydde musikalsk indhold, mens du forlader barer på plads.

### 20. Hvordan ændrer jeg en tidssignatur uden uventet bevægelige noter?

Ændring af måler kan få Sibelius til at omorganisere eksisterende musik i nye barer.

**Opløsning**

1. Gem en kopi af resultatet.
2. Vælg det punkt hvor ændringen skal begynde.
3. Åbn **Tidssignatur (Time Signature)**- kontrollerne.
4. Gennemgå muligheden for at omskrive eksisterende barer.
5. Påfør ændringen og inspicer den berørte passage.

Deaktivering omskrivning bevarer den eksisterende bar struktur, men det kan efterlade barer, hvis varighed ikke passer til den viste meter. Brug den mulighed med vilje.

### 21. Hvordan laver jeg en Pickup Bar eller Anacrusis?

En pickup er en forkortet åbningsbjælke, såsom et slag før den første fulde bjælke af et stykke i 4 / 4.

**Opløsning**

Når du opretter åbningstidssignatur, skal du bruge **pickup / upbeat**-indstillingen og angive dens varighed.

For en eksisterende score, skal du oprette en **uregelmæssig stang** af den ønskede længde ved hjælp af bar- creation kontrol, og derefter overføre åbningen musik omhyggeligt.

Kontroller stangens nummerering og den endelige bjælke, hvis arb kræver en yderligere afkortet afslutning.

### 22. Hvordan sætter jeg to uafhængige rystelser på én stav?

Brug separate stemmer til samtidige musikalske linjer.

**Opløsning**

1. Indtast den første linje i **Stemme 1**.
2. Vælg startposition for den anden linje.
3. Vælg **Stemme 2** på **Keypad Formand (Keypad)**.
4. Indtast sine noter og hviler uafhængigt.

Voices 1 og 2 giver normalt modsatrettede stilke retninger. Brug kun yderligere stemmer, når notationen har brug for dem.

Brug ikke en akkord, når noterne kræver forskellige rytmer.

### 23. Hvorfor er Extra Rests vises i min score?

Hver aktiv stemme har brug for sin egen rytmiske struktur, så yderligere stemmer kan indføre yderligere hvile.

**Opløsning**

1. Vælg en uventet hvile og identificere sin stemme.
2. Kontroller, om denne stemme indeholder krævede noter andre steder i baren.
3. Fjern en ved et uheld skabt stemme, hvor det er relevant.
4. Skjul kun en pause, når det er musikalsk gyldigt at gøre det.

Undgå at skjule hvile blot for at skjule en ufuldstændig rytme. Sørg først for at hver stemme konto for den planlagte bar varighed.

### 24. Hvordan laver jeg trillinger og andre tullinger?

Tuplets deler et rytmisk span anderledes end dets normale gruppering.

**Opløsning**

1. Vælg en note eller hvile med den planlagte base varighed.
2. Brug **Note Input → tuplets (Note Input → Tuplets)**.
3. Vælg den nødvendige tuplet eller indtaste en brugerdefineret forhold.
4. Indtast de resterende noter.

For en almindelig ottende- note triplet, begynde med en ottende- note værdi. Hvis tuplet indtager det forkerte span, skal du fortryde det og kontrollere startvarigheden og forholdet.

### 25. Hvorfor er mine noter beamed forkert?

Beam gruppering afhænger af måleren, dens gruppering indstillinger og eventuelle manuelle stråle ændringer.

**Opløsning**

1. Tjek tidssignaturens beat gruppering.
2. Vælg de berørte noter.
3. Brug **Keypad Formand (Keypad)**-strålens betjeningsorganer til at starte, fortsætte eller bryde bjælker efter behov.
4. For en tilbagevendende problem, justere gruppering indstillinger i stedet for at korrigere hver stråle manuelt.

For eksempel, 6 / 8 normalt grupper ottende noter i to grupper af tre, mens andre meter kan have brug for et andet mønster.

### 26. Hvordan Beam Notes på tværs af to staver?

Cross-personale notation er nyttigt for klaver passager deles mellem hænderne.

**Opløsning**

1. Indtast passagen på det personale, der kommer fra dette.
2. Vælg de noter, der skal vises på det andet personale.
3. Brug **Krydstjekket personale Noter (Cross-staff Notes)**- kommandoerne til at flytte deres skærm over eller under.
4. Gennemgå stængler, bjælker og personaleafstand.

Bevægelsen af personale bevarer noternes forhold til deres oprindelige stemme. Almindelig cut og pasta flytter musikken til et andet personale og kan ikke producere den samme notation.

### 27. Hvorfor opfører mit slips sig som en slur?

Slips og slids har forskellige musikalske betydninger.

**Opløsning**

Brug en **slips** til at tilslutte fortløbende noter af samme pitch i en vedvarende varighed. Anvend den med **Keypad Formand (Keypad)** bindingsstyringen.

Brug en **slurGenericName** til at angive en sætning eller artikulering på tværs af noter. Opret det ved hjælp af kommandoen **SlurGenericName (Slur)**.

Hvis et slips ikke forbinder korrekt, skal du kontrollere følgende notes pitch, utilsigtet, stemme og rytmisk position.

### 28. Hvorfor mangler eller dukker op igen?

Sibelius bestemmer utilsigtet visning fra nøglesignatur, tidligere noter i baren og notation indstillinger.

**Opløsning**

1. Tjek nøglesignaturen.
2. Tjek tidligere forekomster af pitch i samme bar.
3. Vælg noten og inspicer dens utilsigtet ved hjælp af **Keypad Formand (Keypad)**.
4. Tilføj en advarsel utilsigtet, hvor det forbedrer læsbarheden.

Ændr ikke den faktiske pitch bare for at tvinge et symbol til at dukke op. Utilsigtet visning og musikalsk pitch skal begge være korrekt.

### 29. Hvordan ændrer jeg Enharmoniske stavning af en note?

En pitch kan indtastes som en skarp, når en flad stavning ville bedre passe harmonien.

**Opløsning**

1. Vælg noten eller passagen.
2. Brug kommandoen **Respell**.
3. Tjek stavning mod akkord og nøgle.

For eksempel, en note lyder som F- skarpe kan være nødt til at skrives som G- flade i en bestemt harmonisk sammenhæng.

- Det lyder som en pitch. Oversætter ændringer pitch og løser et andet problem.

### 30. Hvorfor er Notes Red i Sibelius?

Røde noteshoveder indikerer almindeligvis, at en pitch ligger uden for det område, der er defineret for instrumentet.

**Opløsning**

1. Kontroller det instrument, der er tildelt personalet.
2. Gennemgå de skriftlige og klingende pitches.
3. Kontroller indstillingen af instrument- range display.
4. Beslut om passagen er egnet til den tilsigtede spiller.

En områdeadvarsel betyder ikke automatisk, at notationen er forkert. Men at skjule farven gør ikke en upraktisk note spilbart.

## Score layout og mellemrum {#score-layout-and-spacing}

### 31. Hvordan får jeg mere eller færre barer på ét system?

Sibelius beregner normalt systemets længde automatisk, men du kan styre vigtige pauser.

**Opløsning**

1. Vælg de barer, der skal dele et system.
2. Brug **Layout → Format → Make into system (Layout → Format → Make Into System)**.
3. Undersøg resultatet for overfyldte noter og tekst.

Alternativt vælges en streglinje og tilføjes en **Systembreak (System Break)**.

Hvis mange systemer er overfyldte, gennemgå personale størrelse, side marginer og note afstand i stedet for at tvinge flere barer på hver linje.

### 32. Hvorfor vil Sibelius ikke gentage min score?

Eksisterende formatering låse og pauser kan forhindre automatisk layout ændringer.

**Opløsning**

1. Vis layout-mærker.
2. Kig efter systembrud, sidebrud og låste systemer.
3. Vælg den berørte passage.
4. Brug **Lås format op (Unlock Format)**, hvis det er relevant.
5. Genanvende kun de pauser, du har brug for.

Gem en kopi først, hvis scoren allerede har omhyggeligt forberedt side drejninger eller offentliggørelse layout.

### 33. Hvorfor er der store gaps mellem Staves?

Store huller kan skyldes manuel bevægelse, kollisionsforebyggelse eller vertikal begrundelse.

**Opløsning**

1. Vælg de berørte systemer.
2. Brug **Optimér stavafstand (Optimize Staff Spacing)**.
3. Kig efter tekster, dynamik, linjer eller tekst, der optager kløften.
4. Kontroller lodrette retfærdiggørelsesindstillinger, hvis stavene er spredt på tværs af en hel side.

Hvis tidligere manuelle ændringer er årsagen, skal du bruge den relevante personale- spacing reset kommando, før du optimerer igen.

### 34. Hvorfor gør Dynamics, Lyrics eller tekst Collide?

Automatisk kollisionsforebyggelse kan deaktiveres, tilsidesættes eller ikke kan løse et overfyldt layout.

**Opløsning**

1. Kontrollér at **Magnetisk layout (Magnetic Layout)** er aktiveret for de berørte objekter.
2. Nulstil unødvendig manuel positionering.
3. Optimer personalets afstand.
4. Giv systemet mere vandret plads, hvis det er nødvendigt.
5. Lav kun små manuelle justeringer efter kontrol af det automatiske layout.

Et system, der indeholder for meget musik, kan have brug for færre barer, uanset kollisionsindstillinger.

### 35. Hvordan gendanner jeg Uneven Vandret Note Spacing?

Trækker noter eller ændre afstand gentagne gange kan efterlade en passage ser inkonsekvent.

**Opløsning**

1. Vælg den berørte passage.
2. Vælg **Udseende → Nulstil Noter → Nulstil Note Spacing (Appearance → Reset Notes → Reset Note Spacing)**.
3. Undersøg afstanden omkring tekster, akkord symboler og ulykker.
4. Juster systemet, hvis passagen er overfyldt.

Hvis et bestemt objekt stadig sidder usædvanligt langt fra sin note, kontrollere sin individuelle position så godt.

### 36. Hvordan gemmer jeg tomme staver?

At gemme ubrugte stave kan gøre en stor ensemble score lettere at læse.

**Opløsning**

1. Vælg de pågældende systemer eller passage.
2. Vælg **Layout → Skjule staver → Skjul tomme staver (Layout → Hiding Staves → Hide Empty Staves)**.
3. Kontrollér, at alle nødvendige instrumenter forbliver synlige.

Et personale, der indeholder noter eller andre relevante genstande, kan ikke kvalificere sig som tomt. Undersøg det, før du sletter noget.

Brug **Vis tomme staver (Show Empty Staves)** når du har brug for at personalet skal vises igen.

### 37. Hvordan ændrer jeg instrumentordenen?

Ændring af en instrumentetiket flytter ikke personalet.

**Opløsning**

1. Åbn **Hjem → Instrumenter → Tilføj eller fjern (Home → Instruments → Add or Remove)**.
2. Vælg instrumentet i pointlisten.
3. Op eller ned.
4. Bekræft ændringen.
5. Anmeldelse parentes, seler og barline gruppering.

Vælg en ordre, der passer til ensemble og hjælper musikere med at finde deres dele hurtigt.

### 38. Hvorfor er instrumentnavne forkerte eller mangler?

Instrumentnavne kan variere mellem det første system og senere systemer.

**Opløsning**

1. Tjek instrumentets fulde og korte navne.
2. Redigér det viste navn eller dets instrumentindstillinger efter behov.
3. Gennemgå scoren instrument- navn display indstillinger.
4. Kontroller, om en instrumentændring indfører en anden etiket.

Brug det fulde navn, hvor læserne har brug for identifikation, og en klar forkortelse på efterfølgende systemer.

### 39. Hvorfor er der en uventet blank side?

En blank side kan skyldes en særlig side pause, titel- side indstillinger eller importeret formatering.

**Opløsning**

1. Vis layout-mærker.
2. Undersøg slutningen af den foregående side.
3. Tjek for en **Speciel sidepause (Special Page Break)**, der indsætter blanke sider.
4. Fjern eller juster den ansvarlige pause.
5. Gennemgå følgende sider efter layout ændringer.

Slet ikke musik for at fjerne en side oprettet ved formatering.

### 40. Hvorfor gør Bar Numbers Start eller Genstart forkert?

En pickup, bevægelsesgrænse eller utilsigtet ændring af barnummer kan påvirke nummereringen.

**Opløsning**

1. Undersøg det punkt, hvor nummerering bliver forkert.
2. Tjek for en **Ændring af stangnummerName (Bar Number Change)**.
3. Korrekt eller fjern ændringen.
4. Gennemgå opsætning af bar- nummer.
5. Tjek nummerering i både score og dele.

Beslut dig for, om en pickup til åbning skal være nummereret eller tælles, og anvend derefter den konvention konsekvent.

## Dele, tryk- og eksporttryksager {#parts-printing-and-exporting}

### 41. Hvordan laver jeg individuelle instrumentdele?

**Dynamiske dele (Dynamic Parts)** tillader en score og dets instrumentdele til at dele musikalsk indhold.

**Opløsning**

1. Åbn **Dele (Parts)**- kontrollerne.
2. Tjek hvilke dele der allerede findes.
3. Åbn den nødvendige del.
4. Hvor understøttet, oprette en ny del og vælge de stave, det skal indeholde.
5. Justér dens layout for spilleren.

Hold musikalske redigeringer i de forbundne score- og -dele workflow i stedet for at opretholde separate filer unødigt.

### 42. Hvorfor har min instrumental del en anden layout fra score?

Dele har uafhængige layout krav, herunder sidedrejninger, personale størrelse og system pauser.

**Opløsning**

1. Åbn den berørte del.
2. Tjek dens **Opsætning af dokumenter (Document Setup)**.
3. Gennemgå automatiske og manuelle pauser.
4. Juster delens layout direkte.

Der forventes normalt forskelle i layout. Hvis noter eller rytmer synes forkert, kontrollere, at du ser den korrekte linkede del, og at dens indhold ikke er blevet skjult.

### 43. Hvorfor mangler eller deler Multirest i mine dele?

En multirest kan divideres med musikalske instruktioner eller genstande, der skal forblive synlige.

**Opløsning**

1. Bekræft, at der er aktiveret multihvile i delen.
2. Undersøg tremmerne, hvor en multirest bryder sammen.
3. Tjek for prøvemærker, tekst, streglinjer, vigtige ændringer og tidssignaturer.
4. Fjern kun tilfældige objekter efter bekræftelse af, at de er unødvendige.

Nogle pauser er korrekte, fordi spillerne har brug for at se en instruktion på det tidspunkt.

### 44. Hvordan skaber jeg bedre side vender i dele?

Spillere har brug for tid nok til at vende en side uden at gå glip af deres næste post.

**Opløsning**

1. Åbn den enkelte del.
2. Find hvile egnet til sidedrejninger.
3. Indsæt sidepauser på praktiske positioner.
4. Gennemgå automatisk side-turn muligheder, hvor det er muligt.
5. Tjek den endelige sideoptælling og systemafstand.

Undgå at skabe ekstremt overfyldte sider bare for at tvinge en tur. Test layoutet fra spillerens perspektiv.

### 45. Hvorfor har min PDF den forkerte størrelse eller marginer?

Scoringens sideopsætning og udskrifts- eller eksportindstillingerne er måske ikke enige.

**Opløsning**

1. Tjek sidestørrelse og orientering i **Opsætning af dokumenter (Document Setup)**.
2. Tjek marginer og personalestørrelse.
3. Bekræft, at du eksporterer den tilsigtede score eller del.
4. Brug bygge-i PDF eksport, hvor det er muligt.
5. Åbn PDF 'en og verificer dens sidedimensioner.

Ved udskrivning, tjek papirstørrelse og skalering separat. "Fit til side" kan ændre den endelige trykte personalestørrelse.

### 46. Hvorfor er musiksymboler eller skrifttyper forkerte i PDF?

Manglende skrifttyper, substitutioner eller fontrelaterede eksportproblemer kan ændre udseendet af notation.

**Opløsning**

1. Sammenlign PDF med scoren på skærmen.
2. Bekræft at de krævede musik - og tekstskrifttyper er installeret.
3. Prøv Sibelius 's build- in PDF eksport, hvor det er muligt.
4. Åbn resultatet i en anden PDF-fremviser.
5. Hvis symboler også er forkert inde i Sibelius, undersøge programmets skrifttype installation.

Hvis blot en brugerdefineret skrifttype mislykkes, teste en standard skrifttype i en kopi af score.

### 47. Hvorfor kan jeg ikke eksportere en lydfil?

Audio eksport kræver en afspilning konfiguration i stand til at gøre lyd inde i computeren.

**Opløsning**

1. Tjek den valgte afspilningsindstilling.
2. Brug et understøttet virtuelt instrument eller intern afspilningslydkilde.
3. Bekræft, at normal afspilning virker.
4. Vælg **Fil → Eksportér → lyd (File → Export → Audio)**, hvis det er muligt.

Hvis afspilning bruger en ekstern hardware synthesizer, kan det være nødvendigt at optage dens lyd via en lydgrænseflade. At sende MIDI til enheden fanger ikke dens lyd.

## Gemning, inddrivelse og ydeevne {#saving-recovery-and-performance}

### 48. Hvordan genopretter jeg en score efter et sammenbrud?

Inddrivelse afhænger af, hvad Sibelius gemt før afbrydelsen.

**Opløsning**

1. Genopen Sibelius og tjek efter en recovery prompt.
2. Undersøg de tilgængelige autosave eller backup-filer.
3. Brug placeringerne som vises i din version 's gemning præferencer eller Reference Guide.
4. Sammenlign tidsstempler og musikindhold.
5. Gem den bedst gendannede version under et nyt navn.

Undgå at overskrive originalen, indtil du har bekræftet, at den gendannede fil indeholder det arbejde, du har brug for.

### 49. Hvorfor er Sibelius langsom, iskold eller knusende?

Årsagen kan omfatte en bestemt score, afspilning bibliotek, driver eller software komponent.

**Opløsning**

1. Gem dit arbejde og genstart Sibelius.
2. Test en lille ny score.
3. Sammenlign adfærd med den problematiske score.
4. Test en enklere afspilningsindstilling.
5. Afbryd unødvendige MIDI - og lydenheder.
6. Tjek kompatible Sibelius og driveropdateringer.

Hvis kun én score mislykkes, arbejde på en kopi og indsnævre den berørte passage. Hvis hver score fejler, registrere din version, operativsystem og præcis fejlmeddelelse for støtte.

### 50. Hvorfor kan en anden ikke åbne min Sibelius-fil?

Modtageren kan have en ældre version, en begrænset udgave eller en ufuldstændig kopi af filen.

**Opløsning**

1. Spørg hvilken Sibelius version og udgave de bruger.
2. Hvis understøttet, brug **Fil → Eksportér → Forrige version (File → Export → Previous Version)**.
3. Send den eksporterede kopi og behold originalen.
4. Kontroller at den overførte fil er færdig.
5. Hvis de bruger en anden notation program, overveje MusicXML.

Ældre-version eksport og MusicXML kan ændre formatering eller ikke-understøttet funktioner. Send en PDF ved siden af den redigerbare fil som en visuel reference.

## Checkliste til hurtig fejlfinding {#quick-troubleshooting-checklist}

Før du foretager større ændringer:

1. Gem en separat kopi af pointsum.
2. Identificer, om problemet påvirker en score eller hver score.
3. Tjek de valgte audio - og MIDI - enheder.
4. Tjek afspilningsindstillingen.
5. Undersøg nylige notation eller layout ændringer.
6. Genstart Sibelius når det er hensigtsmæssigt.
7. Kontroller version og driftssystemkompatibilitet.
8. Ændre en indstilling ad gangen og teste resultatet.

## Officiel Sibelius hjælp {#official-sibelius-help}

For instruktioner, der er specifikke for din version og udgave, henvises til den **Guide til Sibelius-reference (Sibelius Reference Guide)** leveres med ansøgningen.

- [Avid Sibelius Lær og Support](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Release Information](https://www.avid.com/resource-center/whats-new-in-sibelius)

Når du beder om hjælp, omfatte din Sibelius version, operativsystem, afspilning enhed, den nøjagtige fejlmeddelelse, og om problemet påvirker en score eller alle scorer.


---

## Sibelius site licens og installation hjælp til skoler {#sibelius-site-licensing-and-installation-help-for-schools}

Håndtering af Sibelius på tværs af en skole eller et universitet i stedet for fejlfinding af en arbejdsstation? Softplanet Productions har 25 års erfaring med at støtte britiske musikafdelinger. [Sammenlign Sibelius site licensmuligheder og anmode om et tilbud](/da/services/sibelius-site-licenses/) for nye anlæg, yderligere sæder eller netindsættelse.
