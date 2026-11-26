---
title: 'Feilsøking i Sibelius: 50 vanlige problemer'
description: Løs vanlige Sibelius problemer med avspilling, MIDI tastaturer, notatinngang, notasjon, score layout, deler,
  PDF eksport og filgjenoppretting.
draft: false
showTableOfContents: false
---

Finn praktiske løsninger på 50 vanlige Sibelius-problemer, fra manglende lyd av avspilling til vanskelig scoreavstand og PDF-eksportproblemer.

Disse instruksjonene er beregnet på desktop Sibelius. Menynavn og tilgjengelige funksjoner varierer mellom versjoner og utgaver, inkludert Sibelius First, Artist og Ultimate. Hvis en kommando mangler, søk etter navnet i Sibelius eller kontakt referanseguiden som leveres med din versjon.

Før du gjør store endringer, lagrer du en separat kopi av poenget ditt.

## Hopp til kategori {#jump-to-a-category}

- [Lyd og spill](#sound-and-playback)
- [MIDI og Note Inngang](#midi-and-note-input)
- [Notasjon, stemme og rhythm](#notation-voices-and-rhythm)
- [Poengutforming og avstand](#score-layout-and-spacing)
- [Deler, trykk og eksport](#parts-printing-and-exporting)
- [Sparing, gjenoppretting og ytelse](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Lyd og spill {#sound-and-playback}

### 1. Hvorfor er det ingen lyd i Sibelius?

Hvis avspillingslinjen beveger seg, men du ikke hører noe, sjekk lydutgangen, avspillingskonfigurasjonen og mikseren.

**Løsning**

1. Bekreft at høyttalerne eller hodetelefonene fungerer i et annet program.
2. Åpne **Avspillingsenheter (Playback Devices)** fra fanen **Spille (Play)**.
3. Åpne **Lydmotoralternativer (Audio Engine Options)** og velg det tiltenkte lydgrensesnittet.
4. Velg en avspillingskonfigurasjon som bruker en installert lydkilde.
5. Åpne **Mixer** og sjekk for dempete kanaler, soloinstrumenter eller lavt mastervolum.

Hvis du koblet til et lydgrensesnitt etter oppstart av Sibelius, start programmet på nytt med grensesnittet tilkoblet.

**Relatert:** Se problemer 2, 5 og 6.

### 2. Hvorfor spiller Sibelius gjennom feil høyttalere eller hodetelefoner?

Sibelius kan bruke en annen utgang fra operativsystemets standardenhet.

**Løsning**

1. Koble til og slå på den nødvendige enheten.
2. Åpne **Lydmotoralternativer (Audio Engine Options)**.
3. Velg riktig grensesnitt.
4. Sjekk utgangsruten hvis grensesnittet har flere utganger.
5. Start avspillingen på nytt.

Hvis enheten mangler, lukk Sibelius og bekreft at operativsystemet gjenkjenner den før programmet åpnes opp igjen.

Blåtann-enheter kan introdusere ytterligere forsinkelse.

### 3. Hvorfor spiller du på playback, klikker du eller bryter opp?

En lydbuffer som er for liten kan forårsake avbrudd på avspillingen, spesielt med krevende lydbiblioteker.

**Løsning**

1. Åpne **Lydmotoralternativer (Audio Engine Options)**.
2. Øk bufferstørrelsen med ett tilgjengelig trinn.
3. Spille en krevende passasje og lytte igjen.
4. Lukk unødvendige applikasjoner.
5. Kontroller at grensesnittdriveren støtter operativsystemet.

Gjenta til avspillingen er stabil. Hvis lyden forblir forvrengt, sjekk også Mixer nivåer: clipping og buffer problemer krever ulike rettinger.

### 4. Hvorfor er det en forsinkelse når jeg spiller mitt MIDI-tastatur?

Tiden mellom å trykke på en nøkkel og høre en lyd kalles latens.

**Løsning**

1. Åpne **Lydmotoralternativer (Audio Engine Options)**.
2. Reduser bufferstørrelsen gradvis.
3. Test tastaturet etter hver endring.
4. Hvis klikk vises, øke bufferen litt.

På Windows kan du bruke grensesnittprodusentens ASIO-driver når det er tilgjengelig. På macOS, bruk riktig Core Audio enhet.

Unngå Bluetooth-hodetelefoner når du trenger responsiv tastaturovervåking.

### 5. Hvorfor er ett instrument stille?

En enkelt stille personale peker vanligvis på sine Mixer innstillinger, lydtildeling eller avspillingsegenskaper.

**Løsning**

1. Åpne **Mixer**.
2. Sjekk at instrumentet ikke er dempet.
3. Sjekk om et annet instrument er soloisert.
4. Bekreft at personalet har en egnet lyd tildelt.
5. Velg et berørt notat og sjekk **Spill på passer (Play on pass)**-innstillingene i **Inspektør (Inspector)**, der det er tilgjengelig.

Også se etter en utilsiktet instrumentendring før den stille passasjen.

### 6. Hvorfor mangler eller ikke Sibelius-lyder?

Notasjonsprogrammet og lydbiblioteket kan kreve separat installasjon.

**Løsning**

1. Sjekk hvilket lydbibliotek innstillingen forventer.
2. Bekreft at biblioteket er installert.
3. Om nødvendig, få den riktige installasjonsprogrammet fra din Avid-konto.
4. Hvis du flyttet biblioteket, følg den støttede prosedyren for å oppdatere plasseringen.
5. Start Sibelius på nytt og velg den matchende innstillingen for avspilling.

Ikke anta at reinstallering av hovedprogrammet vil også installere et stort lydbibliotek på nytt.

### 7. Hvorfor spiller et instrument feil lyd?

Personalets instrumentdefinisjon eller Mixer-tildeling kan ikke matche lyden du forventer.

**Løsning**

1. Sjekk hvilket instrument som tildeles personalet.
2. Se etter instrumentendringer i scoren.
3. Kontroller den valgte innstillingen for avspilling.
4. Se på personalets lydoppdrag i **Mixer**.

Hvis du trenger å endre selve instrumentet, opprette en riktig **Instrumentendring (Instrument Change)**. Å renovere personalet alene endrer ikke sin musikalske definisjon eller avspillingslyd.

### 8. Hvorfor påvirker ikke Dynamics spilling?

Dynamikk som er angitt med en uegnet tekststil eller festet til feil posisjon, kan ikke gi det tiltenkte resultatet.

**Løsning**

1. Velg notat der dynamikken skal begynne.
2. Opprett **Uttrykkstekst (Expression Text)**.
3. Sett inn dynamikken ved hjelp av tekststilens ordmeny.
4. Kontroller at det er knyttet til den tiltenkte personalet og beat.
5. Spill passasjen fra litt før markeringen.

Hvis dynamikken fortsatt har liten effekt, test en annen avspillingslyd. Lydbibliotekene er forskjellige i hvordan de reagerer på dynamikk.

### 9. Hvorfor ignorerer Sibelius min Tempo-merking?

En overskrift som sier \"Allegro\" fungerer ikke nødvendigvis som en avspilling tempo instruksjon.

**Løsning**

1. Opprette markeringen med **Tempotekst (Tempo Text)** eller riktig **Metronome Mark** tekststil.
2. For en nøyaktig hastighet, inkluderer en anerkjent beat enhet og tempo-verdi.
3. Sjekk vedleggsposisjonen.
4. Sjekk innstillingene i **Ytelse (Performance)** hvis avspillingen med vilje varierer tempoet.

Hvis hele scoren høres ut konsekvent for raskt eller sakte, sjekk avspillingstempo-kontrollen også.

### 10. Hvorfor spiller gjentaker eller første og andre slutt feil?

Avspilling avhenger av gjentakende struktur, ikke bare det visuelle utseendet på en linje eller tekstetikett.

**Løsning**

1. Bruk riktige gjentakede linjer.
2. Opprette sluttlinjene ved hjelp av de passende første- og andre-ende-linjene.
3. Sjekk at hver slutt starter og slutter på de tiltenkte barene.
4. Gjennomgang gjenta avspillingsinnstillinger og enhver manuell gjenta sekvens.
5. Test avspilling fra før gjentatte seksjoner.

Bruk anerkjente gjentatte instruksjoner i stedet for vanlig tekst som bare ser ut som \"D.S.\" eller \"D.C..

## MIDI og Note Inngang {#midi-and-note-input}

### 11. Hvorfor gjenkjenner Sibelius ikke mitt MIDI-tastatur?

Enheten kan frakobles, ikke tilgjengelig for operativsystemet eller deaktiveres i Sibelius.

**Løsning**

1. Koble til tastaturet før du åpner Sibelius.
2. Åpne **Innstillinger → inngangsenheter (Preferences → Input Devices)**.
3. Aktiver riktig enhet.
4. Spill av en nøkkel og sjekk inngangsindikatoren.
5. Hvis enheten mangler, test en annen USB-port eller kabel.

Hvis et nav er involvert, prøv å koble direkte til datamaskinen. Installere en produsent driver hvis tastaturet krever en.

### 12. Hvorfor kan jeg høre tastaturet mitt, men ingen notater vises?

Høring av lyd betyr ikke at Sibelius for tiden kommer inn i notasjonen. Tastaturet kan også produsere sin egen lyd uavhengig.

**Løsning**

1. Velg resten eller posisjonen der inngangen skal begynne.
2. Skriv inn notatinnleggsmodus.
3. Velg en varighet på **Keypad**.
4. Spill et notat.

For live opptak, bruk **Fleksi-tid (Flexi-time)** i stedet for trinn-tid inngang. Bekreft at tastaturet er slått på i **Inngangsenheter (Input Devices)** hvis notater fortsatt ikke vises.

### 13. Hvorfor er notatene i feil oktave?

Et oktavskifte kan komme fra tastaturinnstillingene eller instrumentets notasjonskonvensjoner.

**Løsning**

1. Sjekk keyboardets oktav og transponer kontroller.
2. Test input på et normalt piano personale.
3. Sjekk instrumentet som er tildelt det opprinnelige personalet.
4. Sammenlign konsert-pitch og transponder-score visninger.

Noen instrumenter, inkludert gitar og pikkolo, høres konvensjonelt ut som en oktav fra sine skriftlige notater. Andre transponerende instrumenter skifter med forskjellige intervaller.

### 14. Hvorfor er MIDI-notaer kommet inn to ganger?

Duplisert inngang kan forekomme når den samme ytelsen når Sibelius gjennom mer enn én MIDI-rute.

**Løsning**

1. Åpne **Inngangsenheter (Input Devices)**.
2. Mellombels aktivere bare den tiltenkte tastaturinngangen.
3. Koble fra unødvendige MIDI-forbindelser.
4. Sjekk alle MIDI-ruting program eller grensesnitt innstillinger.
5. Prøv et eneste notat igjen.

Hvis du hører dobbel lyd, men bare én note vises, undersøke lydovervåkning og keyboardets **Lokal kontroll (Local Control)**-innstilling i stedet.

### 15. Hvorfor er Flexi-tid opptak produserende Messy Rhythms?

Live input kan tolkes for nøyaktig for musikken du hadde tenkt deg, og skape uønskede korte notater, hviler eller tuplets.

**Løsning**

1. Åpne **Fleksi-tid-alternativer (Flexi-time Options)**.
2. Angi minste noteverdi som passer til passasjen.
3. Begrense tuppets hvis du ikke trenger dem.
4. Ta opp på et komfortabelt tempo med et klart klikk.
5. Ta opp en kort passasje og se gjennom det før du fortsetter.

For kompleks musikk kan trinntidsinnspilling kreve mindre korreksjon enn liveopptak.

### 16. Hvordan kommer jeg inn i kor i stedet for separate notater?

Noter spilte en etter en i trinn-tid inngang normalt okkupere suksessive rytmiske stillinger.

**Løsning**

For MIDI-inngang, spille akkorden notater sammen etter å ha valgt den nødvendige varigheten.

For input for datamaskin-keyboard:

1. Skriv det første notatet.
2. Velg den.
3. Bruk intervallkommandoene til å legge til notater over eller under den.

Sjekk at de resulterende notatene deler én stamme og varighet.

### 17. Hvordan angir jeg notater uten et numerisk nøkkelfelt?

Du kan bruke Sibelius på skjermen **Keypad** selv om bærbar datamaskin ikke har egen nummerpute.

**Løsning**

1. Vis **Keypad** fra panelkontrollene.
2. Klikk på ønsket varighet eller artikulasjon.
3. Skriv inn plasser med datamaskintastaturet eller et MIDI-tastatur.
4. Anmeld tilgjengelige tastatur-shortcut-sett i **Innstillinger (Preferences)**.

Du kan også tilpasse snarveier eller koble til et USB numerisk tastatur hvis du skriver inn notasjon ofte.

### 18. Hvorfor erstatter nye notater eksisterende musikk?

Legg merke til inngangen redigerer musikken på den valgte rytmiske posisjonen; den oppretter ikke automatisk ekstra streker for hver ny idé.

**Løsning**

1. Angre uønsket redigering.
2. Legg til de nødvendige barene før du går inn i den nye passasjen.
3. Velg den første resten i de nye barene.
4. Begynn å skrive inn notater der.

Hvis du vil ha en ekstra uavhengig rytme på samme personale, bruk en annen stemme i stedet for å erstatte den eksisterende stemmen.

## Notasjon, stemme og rhythm {#notation-voices-and-rhythm}

### 19. Hvordan legger jeg til eller sletter hele barer?

Slette notater og slette barer er forskjellige operasjoner.

**Løsning**

Hvis du vil legge til barer, kan du bruke **Hjem → Bars → Legg til (Home → Bars → Add)** og velge riktig alternativ.

For å slette streker:

1. Gjør en **systemvalg** av barene på tvers av alle staver.
2. Kontroller at utvalget inneholder nøyaktig de barene du vil ha fjernet.
3. Slett utvalget.

Et normalt passasjevalg kan rense musikkinnhold mens du forlater barene på plass.

### 20. Hvordan endrer jeg en tidssignatur uten uventet å flytte notater?

Endre måler kan føre til at Sibelius omorganiserer eksisterende musikk til nye barer.

**Løsning**

1. Lagre en kopi av poenget.
2. Velg punktet der endringen skal begynne.
3. Åpne **Tidssignatur (Time Signature)**-kontrollene.
4. Se på muligheten for å skrive om eksisterende barer.
5. Bruk endringen og inspisere den berørte passasjen.

Disabling omskriving bevarer den eksisterende stangstrukturen, men det kan etterlate stenger hvis varighet ikke samsvarer med den viste måler. Bruk dette alternativet med vilje.

### 21. Hvordan oppretter jeg en pickup bar eller anacrusis?

En pickup er en forkortet åpningsstang, som for eksempel én slag før den første fulle streken av et stykke i 4/4.

**Løsning**

Når du oppretter åpningstiden signatur, bruk **pickup/upbeat**-alternativet og angi varigheten.

For en eksisterende poengsum, opprette en **irregulær bar** av den nødvendige lengden ved hjelp av bar-skapingskontrollene, og deretter overføre åpningsmusikken nøye.

Sjekk streknummerering og den endelige streken hvis stykket krever en komplementær forkortet slutt.

### 22. Hvordan legger jeg to uavhengige rhythms på én stab?

Bruk separate stemmer for samtidige musikalske linjer.

**Løsning**

1. Skriv inn den første linjen i **Stemme 1**.
2. Velg startposisjonen for den andre linjen.
3. Velg **Voice 2** på **Keypad**.
4. Skriv inn sine notater og hviler uavhengig.

Stemningene 1 og 2 gir vanligvis motsatte stengelretninger. Bruk ytterligere stemmer bare når notasjonen trenger dem.

Ikke bruk akkord når notatene krever forskjellige rytmer.

### 23. Hvorfor vises ekstra hviler i min poengsum?

Hver aktiv stemme trenger sin egen rytmiske struktur, slik at ytterligere stemmer kan introdusere ytterligere hviler.

**Løsning**

1. Velg en uventet hvile og identifisere stemmen.
2. Sjekk om den stemmen inneholder nødvendige notater andre steder i baren.
3. Fjerne en tilfeldig opprettet stemme der det er nødvendig.
4. Skjul bare en hvile når det er musikalsk gyldig å gjøre det.

Unngå å skjule hviler bare for å skjule en ufullstendig rytme. Først sørge for at hver stemmekonto for den tiltenkte streken varighet.

### 24. Hvordan lager jeg tripletter og andre tupleter?

Tupletter deler et rytmisk spenn forskjellig fra sin normale gruppering.

**Løsning**

1. Velg et notat eller hvile med tiltenkt basisvarighet.
2. Bruk **Merkeinngang → Tuplets (Note Input → Tuplets)**.
3. Velg den nødvendige tuppet eller skriv inn et tilpasset forhold.
4. Skriv inn de gjenværende notatene.

For en vanlig åttendenote triplet, begynner med en åttendenote verdi. Hvis tuppet opptar feil spenn, angre det og sjekk start varigheten og forholdet.

### 25. Hvorfor er notatene mine feilaktige?

Beam gruppering avhenger av måleren, dens grupperingsinnstillinger og eventuelle manuelle bjelke endringer.

**Løsning**

1. Sjekk tidssignaturens beat-gruppe.
2. Velg de berørte notatene.
3. Bruk **Keypad**-strålekontrollene til å starte, fortsette eller bryte stråler etter behov.
4. For et gjentakende problem, justere grupperingsinnstillinger i stedet for å korrigere hver bjelke manuelt.

For eksempel grupperer 6/8 normalt åttende noter i to grupper på tre, mens andre meter kan trenge et annet mønster.

### 26. Hvordan beam noterer jeg over to staver?

Cross-staff-notasjon er nyttig for pianopassasjer som deles mellom hendene.

**Løsning**

1. Skriv inn passasjen på sin opprinnelige personale.
2. Velg de notatene som skal vises på den andre personalet.
3. Bruk **Cross-staff Notes**-kommandoene til å flytte skjermen over eller under.
4. Anmeldelse av stengler, bjelker og personalavstand.

Cross-staff bevegelse bevarer notatenes forhold til sin opprinnelige stemme. Vanlige kutt og pasta flytter musikken til et annet personale og kan ikke produsere den samme notasjonen.

### 27. Hvorfor oppfører jeg meg som en slur?

Ties og slurs har forskjellige musikalske betydninger.

**Løsning**

Bruk en **binde** til å koble påfølgende notater av samme banen i en vedvarende varighet. Påfør den med **Keypad**-båndkontrollen.

Bruk en **slur** til å indikere en frase eller artikulering på tvers av notater. Lag den ved hjelp av **Slur**-kommandoen.

Hvis et slips ikke kobles riktig, sjekk følgende notats tonehøyde, utilsiktet, stemme- og rytmisk posisjon.

### 28. Hvorfor mangler eller gjenkommer ulykkestilfeller?

Sibelius bestemmer utilsiktet visning fra nøkkelsignaturen, tidligere notater i streken og notasjonsinnstillingene.

**Løsning**

1. Sjekk nøkkelsignaturen.
2. Sjekk tidligere forekomster av banen i samme strek.
3. Velg notat og inspisere det utilsiktet ved hjelp av **Keypad**.
4. Legg til en forsiktig utilsiktet der det forbedrer leseligheten.

Ikke endre den faktiske tonehøyden bare for å tvinge et symbol til å vises. Ulykkesvisning og musikalsk tonehøyde må begge være riktig.

### 29. Hvordan endrer jeg enharmonisk staving av en note?

En tonehøyde kan angis som en skarp når en flat staving bedre passer til harmonien.

**Løsning**

1. Velg notat eller passasje.
2. Bruk **Respell**-kommandoen.
3. Sjekk staving mot akkord og nøkkel.

For eksempel kan det være nødvendig å skrive en notelyd som F-sharp som G-flat i en bestemt harmonisk sammenheng.

Avstøting bevarer lyding banen. Overføring av endringsplass og løser et annet problem.

### 30. Hvorfor er det rødt i Sibelius?

Røde notehoder indikerer vanligvis at en tonehøyde ligger utenfor området definert for instrumentet.

**Løsning**

1. Sjekk instrumentet som er tildelt personalet.
2. Se gjennom de skriftlige og lydende stedene.
3. Kontroller innstillingen for instrumentområdevisning.
4. Avgjør om passasjen er egnet for den tiltenkte spilleren.

En rekkeviddesvarsel betyr ikke automatisk at notasjonen er feil. Men å skjule fargen gjør ikke en upraktisk notat spillbar.

## Poengutforming og avstand {#score-layout-and-spacing}

### 31. Hvordan passer jeg til flere eller færre barer på ett system?

Sibelius beregner vanligvis systemets lengder automatisk, men du kan kontrollere viktige pauser.

**Løsning**

1. Velg barer som skal dele ett system.
2. Bruk **Layout → Format → Gjør i systemet (Layout → Format → Make Into System)**.
3. Sjekk resultatet for overfylte notater og tekst.

Alternativt velger du en linjelinje og legger til en **Systempaus (System Break)**.

Hvis mange systemer er overfylte, se over personalstørrelse, side marginer og notat avstand i stedet for å tvinge flere streker på hver linje.

### 32. Hvorfor vil Sibelius ikke reflowe min poengsum?

Eksisterende formateringslåser og pauser kan hindre automatiske utformingsendringer.

**Løsning**

1. Vis layoutmerker.
2. Se etter systempauser, sidepauser og låste systemer.
3. Velg den berørte passasjen.
4. Bruk **Lås opp format (Unlock Format)** der det er relevant.
5. Bruk kun de pausene du trenger.

Lagre en kopi først hvis poengsummen allerede har nøye forberedt sidesving eller publiseringslayout.

### 33. Hvorfor er det store gaps mellom stavene?

Store hull kan være forårsaket av manuell bevegelse, kollisjonsundvikelse eller vertikal begrunnelse.

**Løsning**

1. Velg de berørte systemene.
2. Bruk **Optimer personalavstand (Optimize Staff Spacing)**.
3. Se etter tekster, dynamikk, linjer eller tekst som okkuperer gapet.
4. Kontroller vertikale begrunnelsesinnstillinger hvis stavene er spredt over en hel side.

Hvis tidligere manuelle endringer er årsaken, kan du bruke den riktige tilbakestillingskommandoen for personell før du optimaliserer igjen.

### 34. Hvorfor er det Dynamics, Lyrics eller Text Collide?

Automatisk kollisjonsunngåelse kan deaktiveres, overstyres eller ikke kan løse en overfylt layout.

**Løsning**

1. Kontroller at **Magnetisk layout (Magnetic Layout)** er aktivert for de berørte objektene.
2. Tilbakestille unødvendig manuell posisjonering.
3. Optimer personalavstand.
4. Gi systemet mer horisontalt rom om nødvendig.
5. Gjør kun små manuelle justeringer etter å ha sjekket den automatiske utformingen.

Et system som inneholder for mye musikk kan trenge færre barer, uavhengig av kollisjonsinnstillinger.

### 35. Hvordan gjenoppretter jeg ujevn horisontalt notatavstand?

Dra notater eller endre avstand gjentatte ganger kan forlate en passasje som ser inkonsekvent ut.

**Løsning**

1. Velg den berørte passasjen.
2. Velg **Utseende → Tilbakestille notater → Tilbakestille notatavstand (Appearance → Reset Notes → Reset Note Spacing)**.
3. Sjekk avstanden rundt tekster, akkordsymboler og utilsiktede.
4. Juster systemet bryter hvis passasjen forblir overfylt.

Hvis et bestemt objekt fortsatt sitter uvanlig langt fra sin note, sjekk dens individuelle posisjon også.

### 36. Hvordan skjuler jeg tomme staver?

Å skjule ubrukte staver kan gjøre en stor ensemble score lettere å lese.

**Løsning**

1. Velg hvilke systemer eller passasje som gjelder.
2. Velg **Layout → Hiding Staves → Skjul tomme staver (Layout → Hiding Staves → Hide Empty Staves)**.
3. Sjekk at alle nødvendige instrumenter er synlige.

En personell som inneholder notater eller andre relevante gjenstander kan ikke kvalifiseres som tom. Sjekk det før du sletter noe.

Bruk **Vis tomme staver (Show Empty Staves)** når du trenger personalet til å vises igjen.

### 37. Hvordan endrer jeg rekkefølgen av instrumenter?

Hvis du endrer et instrumentmerke, beveger du ikke dets ansatte.

**Løsning**

1. Åpne **Hjem → Instruments → Legg til eller fjern (Home → Instruments → Add or Remove)**.
2. Velg instrumentet i poengets instrumentliste.
3. Flytt den opp eller ned.
4. Bekreft endringen.
5. Anmeldelsesparenteser, krage og barline gruppering.

Velg en ordre som passer til ensemblet og hjelper musikere å finne sine deler raskt.

### 38. Hvorfor er instrumentnavn feil eller mangler?

Instrumentnavn kan være forskjellig mellom det første systemet og senere systemer.

**Løsning**

1. Sjekk instrumentets fulle og korte navn.
2. Rediger det viste navnet eller instrumentinnstillingene etter behov.
3. Se gjennom poengets innstillinger for instrumentnavn.
4. Sjekk om en instrumentendring introduserer en annen etikett.

Bruk det fulle navnet der lesere trenger identifikasjon og en klar forkortelse på påfølgende systemer.

### 39. Hvorfor finnes det en uventet tom side?

En tom side kan skyldes en spesiell sidepause, tittelsideinnstillinger eller importert formatering.

**Løsning**

1. Vis layoutmerker.
2. Inspeksjon av slutten av den foregående siden.
3. Sjekk for en **Spesialsidepause (Special Page Break)** som setter tomme sider inn.
4. Fjerne eller justere ansvarlig pause.
5. Se gjennom følgende sider etter endring av layout.

Ikke slett musikk for å fjerne en side opprettet ved formatering.

### 40. Hvorfor starter eller starter streknumrene feil?

En pickup, bevegelsesgrense eller utilsiktet streknummerendring kan påvirke nummerering.

**Løsning**

1. Sjekk punktet hvor nummerering blir feil.
2. Sjekk etter en **Endring av linjenummer (Bar Number Change)**.
3. Rett eller fjern endringen.
4. Se gjennom innstillingene for visning av tall.
5. Sjekk nummerering i både poeng og deler.

Avgjør om en åpningsavhenting skal være unummerert eller telles, deretter gjelder det konvensjonen konsekvent.

## Deler, trykk og eksport {#parts-printing-and-exporting}

### 41. Hvordan kan jeg lage individuelle instrumenter?

**Dynamiske deler (Dynamic Parts)** tillater en score og dens instrumentale deler å dele musikalsk innhold.

**Løsning**

1. Åpne **Deler (Parts)**-kontrollene.
2. Sjekk hvilke deler som allerede eksisterer.
3. Åpne den nødvendige delen.
4. Når det støttes, opprette en ny del og velg stavene den bør inneholde.
5. Juster layouten for spilleren.

Behold musikalske redigeringer i den koblede score-og-deler arbeidsflyt i stedet for å opprettholde separate filer unødvendig.

### 42. Hvorfor har min instrumentelle del en annen utforming enn poenget?

Deler har selvstendige layoutkrav, inkludert sidesving, personalestørrelse og systembrudd.

**Løsning**

1. Åpne den berørte delen.
2. Sjekk **Dokumentoppsett (Document Setup)**.
3. Gjennomgang automatiske pauser og manuelle pauser.
4. Juster delens layout direkte.

Forskjellen i utformingen er normalt forventet. Hvis notater eller rytmer vises feil, sjekk at du ser den riktige lenkede delen og at innholdet ikke har blitt skjult.

### 43. Hvorfor mangler eller deler man seg i deler?

En multirest kan deles med musikalske instruksjoner eller objekter som må forbli synlige.

**Løsning**

1. Bekreft at multirests er aktivert i delen.
2. Sjekk barene der en multirest bryter.
3. Sjekk etter øvingsmerker, tekst, streklinjer, nøkkelendringer og tidssignaturer.
4. Fjerne utilsiktede objekter bare etter å ha bekreftet at de er unødvendige.

Noen pauser er riktig fordi spillerne må se en instruksjon på det tidspunktet.

### 44. Hvordan oppretter jeg bedre side vendinger i deler?

Spillere trenger nok tid til å slå på en side uten å miste neste oppføring.

**Løsning**

1. Åpne den enkelte delen.
2. Finn hviler egnet til sidesving.
3. Sett inn sidebrudd på praktiske posisjoner.
4. Sjekk automatiske side-turn alternativer der det er tilgjengelig.
5. Sjekk sluttsiden teller og systemavstand.

Unngå å skape ekstremt overfylte sider bare for å tvinge en tur. Test layout fra spillerens perspektiv.

### 45. Hvorfor har min PDF feil størrelse eller marginer?

Innstillingen for scoren og innstillingene for utskrift eller eksport kan ikke være enig.

**Løsning**

1. Sjekk sidestørrelse og orientering i **Dokumentoppsett (Document Setup)**.
2. Sjekk marginene og personalet.
3. Bekreft at du eksporterer den tiltenkte scoren eller delen.
4. Bruk innebygd PDF-eksport der det er tilgjengelig.
5. Åpne PDF og verifiser sidemålene.

Når du skriver ut, sjekk papirstørrelsen og skaleringen separat. «Fit til side» kan endre den endelige trykte personalestørrelsen.

### 46. Hvorfor er musikksymboler eller skrifter feil i PDF?

Manglende skrifttyper, substitusjoner eller font-relaterte eksportproblemer kan endre utseendet på notasjon.

**Løsning**

1. Sammenlign PDF-en med scoren på skjermen.
2. Bekreft at de nødvendige musikk- og tekstskriftene er installert.
3. Prøv Sibeliuss innebygde PDF-eksport der det er tilgjengelig.
4. Åpne resultatet i en annen PDF-viser.
5. Hvis symbolene også er feil inne i Sibelius, kan du undersøke programmets skriftinstallasjon.

Hvis bare en egendefinert skrift mislykkes, test en standardskrift i en kopi av poenget.

### 47. Hvorfor kan jeg ikke eksportere en lydfil?

Lydeksport krever en avspillingskonfigurasjon som kan gjenskape lyd inne i datamaskinen.

**Løsning**

1. Kontroller den valgte innstillingen for avspilling.
2. Bruke et støttet virtuell instrument eller intern lydkilde for avspilling.
3. Bekreft at vanlig avspilling virker.
4. Velg **Fil → Eksporter → Audio (File → Export → Audio)**, hvor det er tilgjengelig.

Hvis avspilling bruker en ekstern maskinvare synthesizer, kan lyden måtte registreres gjennom et lydgrensesnitt. Sender MIDI til enheten fanger ikke lyden.

## Sparing, gjenoppretting og ytelse {#saving-recovery-and-performance}

### 48. Hvordan gjenoppretter jeg en score etter en krasj?

Recovery avhenger av hva Sibelius lagret før avbruddet.

**Løsning**

1. Åpne Sibelius på nytt og sjekk for å få en gjenopprettingsprompt.
2. Sjekk tilgjengelige autolagrings- eller sikkerhetskopifiler.
3. Bruk stedene som vises i versjonens lagrepreferanser eller referanseguide.
4. Sammenlign tidsstempler og musikkinnhold.
5. Lagre den beste gjenopprettede versjonen under et nytt navn.

Unngå å overskrive originalen til du har bekreftet at den gjenopprettede filen inneholder det arbeidet du trenger.

### 49. Hvorfor er Sibelius langsom, friskende eller krasjende?

Årsaken kan involvere en bestemt score, avspillingsbibliotek, driver eller programvarekomponent.

**Løsning**

1. Lagre arbeidet og start Sibelius på nytt.
2. Test en liten ny score.
3. Sammenlign atferd med den problematiske scoren.
4. Test en enklere avspillingskonfigurasjon.
5. Koble fra unødvendige MIDI- og lydenheter.
6. Sjekk kompatible Sibelius- og driveroppdateringer.

Hvis bare én poengsum mislykkes, kan du jobbe på en kopi og senke den berørte passasjen. Hvis alle poeng mislykkes, registrerer du versjonen din, operativsystemet og nøyaktig feilmelding for støtte.

### 50. Hvorfor kan noen andre ikke åpne min Sibelius-fil?

Mottakeren kan ha en eldre versjon, en begrenset utgave eller en ufullstendig kopi av filen.

**Løsning**

1. Spør hvilken Sibelius-versjon og -utgave de bruker.
2. Når det støttes, bruk **Filen → Eksporter → Forrige versjon (File → Export → Previous Version)**.
3. Send den eksporterte kopien og behold originalen din.
4. Sjekk at den overførte filen er fullført.
5. Hvis de bruker et annet notatprogram, bør du vurdere MusicXML.

Older-version eksport og MusicXML kan endre formatering eller funksjoner som ikke støttes. Send en PDF ved siden av den redigerbare filen som en visuel referanse.

## Rask feilsøkingskontrollliste {#quick-troubleshooting-checklist}

Før du gjør store endringer:

1. Lagre en egen kopi av poenget.
2. Identifiser om problemet påvirker én score eller hver score.
3. Sjekk de valgte lyd- og MIDI-enhetene.
4. Sjekk avspillingskonfigurasjonen.
5. Inspeksjon av endringer i nylige notar eller layout.
6. Start Sibelius på nytt når det er aktuelt.
7. Sjekk versjon og operativsystemkompatibilitet.
8. Endre en innstilling om gangen og teste resultatet.

## Offisiell Sibelius Hjelp {#official-sibelius-help}

For instruksjoner som er spesifikke for din versjon og utgave, kontakt **Sibelius referanseguide (Sibelius Reference Guide)** som leveres med søknaden.

- [Avid Sibelius Lær og støtte](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Release Information](https://www.avid.com/resource-center/whats-new-in-sibelius)

Når du ber om hjelp, ta med Sibelius-versjonen, operativsystemet, avspillingsenheten, nøyaktig feilmeldingen og om problemet påvirker én score eller alle scorene.


---

## Sibelius nettsted lisensiering og installasjonshjelp til skolene {#sibelius-site-licensing-and-installation-help-for-schools}

Administrere Sibelius på tvers av en skole eller høyskole i stedet for å feilsøke en arbeidsstasjon? Softplanet Productions har 25 års erfaring med å støtte britiske musikkavdelinger. [Sammenlign Sibelius site lisensalternativer og be om et tilbud](/nb/services/sibelius-site-licenses/) for nye installasjoner, ekstra seter eller nettverksutplassering.
