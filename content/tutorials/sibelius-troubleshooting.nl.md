---
title: Sibelius-problemen oplossen | 50 vragen en oplossingen
description: Los 50 veelvoorkomende Sibelius-problemen op, van audio, MIDI en noteninvoer tot partituuropmaak, partijen,
  PDF-export en bestandsherstel.
draft: false
showTableOfContents: false
---

Vind praktische oplossingen voor 50 veel voorkomende Sibelius problemen, van ontbrekende afspeelgeluid tot lastige scoreafstand en PDF-exportproblemen.

Deze instructies zijn bedoeld voor desktop Sibelius. Menunamen en beschikbare functies variëren tussen versies en edities, waaronder Sibelius First, Artiest en Ultimate. Als een opdracht ontbreekt, zoek dan naar de naam in Sibelius of raadpleeg de referentiegids die bij uw versie wordt geleverd.

Voordat belangrijke wijzigingen worden aangebracht, slaat u een aparte kopie van uw score op.

## Naar een categorie springen

- [Geluid en afspelen](#sound-and-playback)
- [MIDI en noteninvoer](#midi-and-note-input)
- [Notatie, stemmen en ritme](#notation-voices-and-rhythm)
- [Partituuropmaak en afstanden](#score-layout-and-spacing)
- [Partijen, afdrukken en exporteren](#parts-printing-and-exporting)
- [Opslaan, herstellen en prestaties](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Geluid en afspelen {#sound-and-playback}

### 1. Waarom hoor ik geen geluid in Sibelius?

Als de afspeelregel beweegt maar je hoort niets, controleer dan de audio-uitvoer, afspeelconfiguratie en Mixer.

**Oplossing**

1. Bevestig dat uw luidsprekers of hoofdtelefoons werken in een andere toepassing.
2. Open **Playback Devices** van de **Play** tab.
3. Open **Audio Engine Options** en selecteer de beoogde audio-interface.
4. Kies een afspeelconfiguratie die een geïnstalleerde geluidsbron gebruikt.
5. Open de **Mixer** en controleer op gedempte kanalen, solo instrumenten of laag master volume.

Als je een audio-interface hebt aangesloten na de lancering van Sibelius, herstart dan het programma met de interface verbonden.

**Zie ook:** Zie de problemen 2, 5 en 6.

### 2. Waarom speelt Sibelius af via de verkeerde luidsprekers of koptelefoon?

Sibelius kan een andere uitgang gebruiken dan het standaardapparaat van het besturingssysteem.

**Oplossing**

1. Verbind en schakel het gewenste apparaat in.
2. Open **Audio Engine Options**.
3. Selecteer de juiste interface.
4. Controleer de uitvoer routing als uw interface meerdere uitgangen heeft.
5. Herstart het afspelen.

Als het apparaat ontbreekt, sluit Sibelius en bevestig dat het besturingssysteem het herkent voordat het programma wordt heropend.

Bluetooth-apparaten kunnen extra vertraging veroorzaken.

### 3. Waarom kraakt, tikt of hapert het geluid?

Een te kleine audiobuffer kan onderbroken afspelen veroorzaken, vooral bij veeleisende geluidsbibliotheken.

**Oplossing**

1. Open **Audio Engine Options**.
2. Verhoog de buffergrootte met één beschikbare stap.
3. Speel een veeleisende passage en luister nog eens.
4. Sluit onnodige toepassingen.
5. Controleer of het interface stuurprogramma uw besturingssysteem ondersteunt.

Herhaal tot het afspelen stabiel is. Als het geluid vervormd blijft, controleer ook Mixer niveaus: knippen en buffer problemen vereisen verschillende oplossingen.

### 4. Waarom hoor ik vertraging als ik op mijn MIDI-klavier speel?

De tijd tussen het indrukken van een toets en het horen van een geluid heet latency.

**Oplossing**

1. Open **Audio Engine Options**.
2. Verminder de buffergrootte geleidelijk.
3. Test het toetsenbord na elke verandering.
4. Als klikken verschijnen, verhoog de buffer licht.

Gebruik op Windows het ASIO-stuurprogramma van de interfacefabrikant indien beschikbaar. Gebruik op macOS het juiste Core Audio-apparaat.

Vermijd Bluetooth hoofdtelefoons wanneer u responsieve toetsenbord monitoring nodig.

### 5. Waarom hoor ik één instrument niet?

Een enkele stille notenbalk wijst meestal op de Mixer-instellingen, geluidstoewijzing of afspeeleigenschappen.

**Oplossing**

1. Open de **Mixer**.
2. Controleer of het instrument niet gedempt is.
3. Controleer of een ander instrument solo is.
4. Bevestig dat het personeel een geschikt geluid heeft toegewezen.
5. Selecteer een getroffen noot en controleer de **Play on pass** instellingen in de **Inspector**, indien beschikbaar.

Zoek ook naar een onbedoelde instrumentverandering voor de stille passage.

### 6. Waarom ontbreken Sibelius Sounds of zijn ze niet beschikbaar?

De notatietoepassing en de geluidsbibliotheek kunnen een aparte installatie vereisen.

**Oplossing**

1. Controleer welke geluidsbibliotheek uw afspeelconfiguratie verwacht.
2. Bevestig dat de bibliotheek is geïnstalleerd.
3. Indien nodig, de juiste installateur te verkrijgen van uw Avid-account.
4. Als u de bibliotheek verplaatst, volg de ondersteunde procedure voor het bijwerken van de locatie.
5. Herstart Sibelius en selecteer de bijbehorende afspeelconfiguratie.

Ga er niet van uit dat het opnieuw installeren van de hoofdtoepassing ook een grote geluidsbibliotheek opnieuw zal installeren.

### 7. Waarom gebruikt een instrument de verkeerde klank?

De instrumentdefinitie van de notenbalk of Mixer-opdracht komt misschien niet overeen met het geluid dat u verwacht.

**Oplossing**

1. Controleer welk instrument aan het personeel wordt toegewezen.
2. Zoek naar instrumentwijzigingen in de score.
3. Controleer de geselecteerde afspeelconfiguratie.
4. Bekijk de geluidsopdracht van het personeel in de **Mixer**.

Als je het instrument zelf moet veranderen, creëer dan een juiste **Instrumentwijziging**. Het hernoemen van het personeel alleen verandert niets aan de muzikale definitie of het afspelen van het geluid.

### 8. Waarom hoor ik geen verschil bij dynamische tekens?

Dynamieken die met een ongeschikte tekststijl zijn ingevoerd of die aan de verkeerde positie zijn bevestigd, mogen het beoogde resultaat niet opleveren.

**Oplossing**

1. Selecteer de noot waar de dynamiek moet beginnen.
2. Aanmaken **Expression Text**.
3. Voeg de dynamiek in met het woordmenu van de tekststijl.
4. Controleer of het is bevestigd aan het beoogde personeel en beat.
5. Speel de passage van iets voor de markering.

Als de dynamiek nog steeds weinig effect heeft, test dan een ander afspeelgeluid. Geluidsbibliotheken verschillen qua reactie op dynamiek.

### 9. Waarom negeert Sibelius mijn tempoaanduiding?

Een koers die zegt dat .Allegro het niet noodzakelijk functioneert als een afspeeltempo instructie.

**Oplossing**

1. Maak de markering aan met **Tempo Text** of de juiste **Metronome Mark** tekststijl.
2. Voor een precieze snelheid, neem een erkende beat unit en tempo waarde.
3. Controleer de bevestigingspositie.
4. Evaluatie van de **Performance** instellingen als het afspelen opzettelijk het tempo varieert.

Als de hele score constant te snel of langzaam klinkt, controleer dan ook de afspeeltemporegeling.

### 10. Waarom klinken herhalingen of eerste en tweede eindes verkeerd?

Afspelen hangt af van de herhalingsstructuur, niet alleen het visuele uiterlijk van een regel of tekstlabel.

**Oplossing**

1. Gebruik de juiste repeat barlines.
2. Maak eindstrepen aan met behulp van de juiste eerste- en tweede-eindregeltypes.
3. Controleer of elk einde begint en eindigt bij de beoogde bars.
4. Bekijk herhalingsinstellingen en elke handmatige herhalingsreeks.
5. Test het afspelen van vóór de herhaalde sectie.

Gebruik erkende herhaalinstructies in plaats van gewone tekst die er alleen maar uitziet als D.S. of D.C.

## MIDI en noteninvoer {#midi-and-note-input}

### 11. Waarom herkent Sibelius mijn MIDI-klavier niet?

Het apparaat kan worden losgekoppeld, niet beschikbaar voor het besturingssysteem of uitgeschakeld in Sibelius.

**Oplossing**

1. Sluit het toetsenbord aan voordat u Sibelius opent.
2. Open **Preferences → Input Devices**.
3. Schakel het juiste apparaat in.
4. Speel een sleutel af en controleer de invoer indicator.
5. Als het apparaat ontbreekt, test dan een andere USB-poort of -kabel.

Als er een hub bij betrokken is, probeer dan direct verbinding te maken met de computer. Installeer een fabrikantstuurprogramma als het toetsenbord er een nodig heeft.

### 12. Waarom hoor ik mijn klavier terwijl er geen noten verschijnen?

Het horen van een geluid betekent niet dat Sibelius momenteel in de notatie zit. Het toetsenbord kan ook zelfstandig zijn eigen geluid produceren.

**Oplossing**

1. Selecteer de rest of positie waar de invoer moet beginnen.
2. Voer de note-input-modus in.
3. Kies een duur op de **Keypad**.
4. Speel een nootje.

Voor live opname, gebruik **Flexi-time** in plaats van stap-tijd invoer. Bevestig dat het toetsenbord is ingeschakeld in **Invoerapparaten** als er nog steeds geen aantekeningen verschijnen.

### 13. Waarom verschijnen de noten in het verkeerde octaaf?

Een octaafverschuiving kan voortkomen uit de toetsenbordinstellingen of de notatieconventies van het instrument.

**Oplossing**

1. Controleer de octaaf van het toetsenbord en transponeer controles.
2. Test input op een normale pianostaf.
3. Controleer het instrument dat aan de oorspronkelijke notenbalk is toegewezen.
4. Vergelijk concert-pitch en omzetten-score views.

Sommige instrumenten, waaronder gitaar en piccolo, klinken gewoonlijk een octaaf verwijderd van hun geschreven noten. Andere omzettingsinstrumenten verschuiven met verschillende tussenpozen.

### 14. Waarom voert Sibelius MIDI-noten dubbel in?

Dubbele invoer kan optreden wanneer dezelfde prestaties via meer dan één MIDI-route Sibelius bereiken.

**Oplossing**

1. Open **Input Devices**.
2. Schakel tijdelijk alleen de gewenste toetsenbordinvoer in.
3. Onnodige MIDI-verbindingen verbreken.
4. Controleer elke MIDI-routing toepassing of interface-instellingen.
5. Test nog eens één noot.

Als je dubbel geluid hoort, maar slechts één noot verschijnt, onderzoek audio monitoring en het toetsenbord **Lokale controle** in plaats daarvan instellen.

### 15. Waarom levert een Flexi-time-opname slordige ritmes op?

Live input kan te precies worden geïnterpreteerd voor de muziek die je bedoeld, het creëren van ongewenste korte noten, rust of tuplets.

**Oplossing**

1. Open **Flexi-time Options**.
2. Stel de minimale waarde van de noot in die bij de passage past.
3. Tuplets beperken als je ze niet nodig hebt.
4. Neem op een comfortabel tempo op met een duidelijke klik.
5. Neem een korte passage op en bekijk deze alvorens verder te gaan.

Voor complexe muziek kan step-time input minder correctie vereisen dan live opname.

### 16. Hoe voer ik akkoorden in in plaats van losse noten?

Notes gespeeld na elkaar in stap-tijd input normaal nemen opeenvolgende ritmische posities.

**Oplossing**

Voor MIDI input, speel de noten van het akkoord samen na het selecteren van de vereiste duur.

Voor computertoetsenbordinvoer:

1. Voer de eerste noot in.
2. Selecteer het.
3. Gebruik de interval commando's om noten boven of onder het toe te voegen.

Controleer of de resulterende noten één stam en duur delen.

### 17. Hoe voer ik noten in zonder numeriek toetsenblok?

Je kunt Sibelius' scherm gebruiken. **Toetsenbord** zelfs als uw laptop geen apart nummerpad heeft.

**Oplossing**

1. Toon het **Keypad** van de panelen bediening.
2. Klik op de gewenste duur of articulatie.
3. Voer de toonhoogtes in met het toetsenbord of een MIDI-toetsenbord.
4. Bekijk beschikbare toetsenbord-korte sets in **Preferences**.

U kunt ook snelkoppelingen aanpassen of een USB numerieke toetsenbord verbinden als u vaak een notatie invoert.

### 18. Waarom vervangen nieuwe noten de bestaande muziek?

Note input bewerkt de muziek op de geselecteerde ritmische positie; het maakt niet automatisch extra bars voor elk nieuw idee.

**Oplossing**

1. Maak de ongewenste bewerking ongedaan.
2. Voeg de vereiste bars toe voordat u de nieuwe passage binnengaat.
3. Selecteer de eerste rest in de nieuwe bars.
4. Begin daar met notitieinvoer.

Als u een extra onafhankelijk ritme op dezelfde notenbalk wilt, gebruik dan een andere stem in plaats van de bestaande stem te vervangen.

## Notatie, stemmen en ritme {#notation-voices-and-rhythm}

### 19. Hoe voeg ik hele maten toe of verwijder ik ze?

Het verwijderen van notities en het verwijderen van bars zijn verschillende bewerkingen.

**Oplossing**

Om bars toe te voegen, gebruiken **Home → Bars → Toevoegen** en kies de juiste optie.

Balk verwijderen:

1. Maak een **systeemselectie** van de tralies over alle notenbalken.
2. Controleer of de selectie precies de bars bevat die u wilt verwijderen.
3. Verwijder de selectie.

Een normale passageselectie kan de muzikale inhoud wissen terwijl de bars op hun plaats blijven.

### 20. Hoe verander ik de maatsoort zonder dat noten onverwacht verschuiven?

Veranderende meter kan ervoor zorgen dat Sibelius bestaande muziek reorganiseert in nieuwe bars.

**Oplossing**

1. Bewaar een kopie van de score.
2. Selecteer het punt waar de verandering moet beginnen.
3. Open de **Time Signature** controles.
4. Bekijk de optie voor het herschrijven van bestaande bars.
5. Pas de verandering toe en inspecteer de betreffende passage.

Het uitschakelen van het herschrijven behoudt de bestaande barstructuur, maar het kan bars verlaten waarvan de duur niet overeenkomt met de weergegeven meter. Gebruik deze optie bewust.

### 21. Hoe maak ik een opmaat?

Een pick-up is een verkorte openingsbalk, zoals een beat voor de eerste volledige bar van een stuk in 4/4.

**Oplossing**

Bij het aanmaken van de openingstijd handtekening, gebruik de **pickup/upbeat** optie en de duur ervan te specificeren.

Voor een bestaande score, maak een **onregelmatige balk** van de vereiste lengte met behulp van de bar-creatie controles, dan de openingsmuziek zorgvuldig overbrengen.

Controleer de nummering van de balk en de laatste balk als het stuk een aanvullend verkort einde vereist.

### 22. Hoe plaats ik twee onafhankelijke ritmes op één notenbalk?

Gebruik aparte stemmen voor gelijktijdige muzikale lijnen.

**Oplossing**

1. Voer de eerste regel in **Voice 1**.
2. Selecteer de startpositie voor de tweede regel.
3. Kies **Voice 2** over het **Keypad**.
4. Voer zijn notities in en rust onafhankelijk.

Voices 1 en 2 geven meestal tegengestelde stamrichtingen. Gebruik extra stemmen alleen wanneer de notatie ze nodig heeft.

Gebruik geen akkoord als de noten verschillende ritmes vereisen.

### 23. Waarom verschijnen er extra rusten in mijn partituur?

Elke actieve stem heeft een eigen ritmische structuur nodig, zodat extra stemmen extra rust kunnen introduceren.

**Oplossing**

1. Selecteer een onverwachte rust en identificeer zijn stem.
2. Controleer of die stem de benodigde noten elders in de bar bevat.
3. Verwijder een per ongeluk aangemaakte stem waar nodig.
4. Verberg een rustplaats alleen als het muzikaal geldig is om dat te doen.

Vermijd verbergen rust gewoon om een onvolledig ritme te verbergen. Zorg er eerst voor dat elke stem accounts voor de beoogde duur van de balk.

### 24. Hoe maak ik triolen en andere onregelmatige nootgroepen?

Tuplets verdelen een ritmische spanwijdte anders dan zijn normale groep.

**Oplossing**

1. Selecteer een noot of rust met de beoogde basisduur.
2. Gebruik **Note Input → Tuplets**.
3. Kies de gewenste tuplet of voer een aangepaste verhouding in.
4. Voer de overige notities in.

Voor een gewone achtste-noot drieling, begin met een achtste-noot waarde. Als de tuplet de verkeerde spant bezet, maak het ongedaan en controleer de beginduur en -verhouding.

### 25. Waarom zijn de waardestrepen tussen mijn noten onjuist?

De bundelgroep is afhankelijk van de meter, de groeperingsinstellingen en eventuele handmatige bundelveranderingen.

**Oplossing**

1. Controleer de tijdsaanduiding van de ritmegroep.
2. Selecteer de betreffende notities.
3. Gebruik de **Keypad** balkbedieningen om lichtbundels te starten, voort te zetten of te breken indien nodig.
4. Voor een terugkerend probleem, stel groeperingsinstellingen in plaats van elke bundel handmatig te corrigeren.

Bijvoorbeeld, 6/8 groepen normaal achtste noten in twee groepen van drie, terwijl andere meters een ander patroon nodig hebben.

### 26. Hoe verbind ik noten op twee notenbalken met waardestrepen?

Cross-staf notatie is nuttig voor piano passages gedeeld tussen de handen.

**Oplossing**

1. Voer de passage in bij het personeel dat van oorsprong is.
2. Selecteer de noten die op de andere notenbalk moeten verschijnen.
3. Gebruik de **Cross-staff Notes** commando's om hun display boven of onder te verplaatsen.
4. Bekijk stengels, balken en afstand tussen het personeel.

Cross-staff beweging behoudt de relatie van de noten met hun oorspronkelijke stem. Gewone knippen en plakken verplaatst de muziek naar een andere notenbalk en mag niet dezelfde notatie produceren.

### 27. Waarom gedraagt een overbindingsboog zich als een legatoboog?

Ties en slurs hebben verschillende muzikale betekenissen.

**Oplossing**

Gebruik a **das** om opeenvolgende noten van dezelfde toonhoogte in één duurzame duur te voegen. **Toetsenbord** stropdas controle.

Gebruik a **slur** om een zin of articulatie over noten aan te geven. Maak deze aan met behulp van de **Slur** Commando.

Als een stropdas niet correct aansluit, controleer dan de toonhoogte van de volgende noot, toevallige, stem en ritmische positie.

### 28. Waarom ontbreken voortekens of verschijnen ze opnieuw?

Sibelius bepaalt toevallige weergave van de sleutelhandtekening, eerdere noten in de balk en notatie-instellingen.

**Oplossing**

1. Controleer de sleutel handtekening.
2. Controleer eerdere gebeurtenissen van de toonhoogte in dezelfde bar.
3. Selecteer de notitie en inspecteer het ongeluk met behulp van de **Keypad**.
4. Voeg een waarschuwend ongeluk toe waar het de leesbaarheid verbetert.

Verander niet de werkelijke toonhoogte alleen om een symbool te dwingen te verschijnen. Per ongeluk display en muzikale toonhoogte moeten beide correct zijn.

### 29. Hoe wijzig ik de enharmonische schrijfwijze van een noot?

Een worp kan worden ingevoerd als een scherpe wanneer een platte spelling beter past bij de harmonie.

**Oplossing**

1. Selecteer de notitie of passage.
2. Gebruik de **Respell** Commando.
3. Controleer de spelling tegen het akkoord en de sleutel.

Bijvoorbeeld, een noot die klinkt als F-scherp kan nodig zijn om te worden geschreven als G-flat in een bepaalde harmonische context.

Respelling behoudt klinkende toonhoogte. Transponeren verandert toonhoogte en lost een ander probleem.

### 30. Waarom worden noten rood in Sibelius?

Rode noteheads geven vaak aan dat een toonhoogte buiten het bereik ligt dat voor het instrument is gedefinieerd.

**Oplossing**

1. Controleer het aan het personeel toegewezen instrument.
2. Bekijk de geschreven en klinkende toonhoogtes.
3. Controleer de instelling van het instrumentenbereik.
4. Bepaal of de passage geschikt is voor de beoogde speler.

Een bereikwaarschuwing betekent niet automatisch dat de notatie fout is. Echter, het verbergen van de kleur maakt geen onpraktische noot speelbaar.

## Partituuropmaak en afstanden {#score-layout-and-spacing}

### 31. Hoe plaats ik meer of minder maten op één systeem?

Sibelius berekent normaal gesproken automatisch de lengte van het systeem, maar u kunt belangrijke breuken controleren.

**Oplossing**

1. Selecteer de bars die één systeem moeten delen.
2. Gebruik **Layout → Format → Make Into System**.
3. Controleer het resultaat voor drukke notities en tekst.

Selecteer een barline en voeg een **Systeemdoorbraak**.

Als veel systemen zijn overvol, controleer de grootte van het personeel, pagina marges en notitieafstand in plaats van het dwingen van meer bars op elke lijn.

### 32. Waarom deelt Sibelius mijn partituur niet opnieuw in?

Bestaande formattering sloten en pauzes kunnen automatische lay-out veranderingen voorkomen.

**Oplossing**

1. Opmaakmarkeringen weergeven.
2. Zoek naar systeemonderbrekingen, paginapauzes en vergrendelde systemen.
3. Selecteer de betreffende passage.
4. Gebruik **Unlock Format** in voorkomend geval.
5. Gebruik alleen de pauzes die je nodig hebt.

Sla eerst een kopie op als de score al zorgvuldig is voorbereid pagina draaien of publicatie lay-out.

### 33. Waarom zit er zoveel ruimte tussen de notenbalken?

Grote gaten kunnen worden veroorzaakt door handmatige beweging, het vermijden van botsingen of verticale rechtvaardiging.

**Oplossing**

1. Selecteer de getroffen systemen.
2. Gebruik **Optimize Staff Spacing**.
3. Zoek naar teksten, dynamiek, regels of tekst die de kloof dichten.
4. Controleer verticale rechtvaardigingsinstellingen als de notenbalken over een hele pagina zijn verspreid.

Als eerdere handmatige wijzigingen de oorzaak zijn, gebruik dan het juiste personeel-spacing reset commando voordat u opnieuw optimaliseert.

### 34. Waarom overlappen dynamiek, liedtekst en andere tekst?

Automatisch voorkomen van botsingen kan worden uitgeschakeld, overbelast of niet in staat om een drukke lay-out op te lossen.

**Oplossing**

1. Controleer dat. **Magnetic Layout** is ingeschakeld voor de getroffen objecten.
2. Onnodige handmatige positionering herstellen.
3. Optimaliseer de afstand tussen de medewerkers.
4. Geef het systeem indien nodig meer horizontale ruimte.
5. Maak kleine handmatige aanpassingen alleen na het controleren van de automatische layout.

Een systeem met te veel muziek kan minder bars nodig hebben, ongeacht botsingsinstellingen.

### 35. Hoe herstel ik ongelijke horizontale nootafstanden?

Dragging notities of het veranderen van de afstand herhaaldelijk kan een passage kijken inconsistent laten.

**Oplossing**

1. Selecteer de betreffende passage.
2. Kies **Appearance → Reset Notes → Reset Note Spacing**.
3. Inspecteer de afstand tussen teksten, akkoordensymbolen en toevalligheden.
4. Pas het systeem aan als de doorgang vol blijft.

Als een bepaald object nog steeds ongewoon ver van zijn noot zit, controleer dan ook zijn individuele positie.

### 36. Hoe verberg ik lege notenbalken?

Het verbergen van ongebruikte notenbalken kan een grote ensemble score gemakkelijker te lezen.

**Oplossing**

1. Selecteer de betrokken systemen of doorgang.
2. Kies **Layout → Hiding Staves → Hide Empty Staves**.
3. Controleer of alle benodigde instrumenten zichtbaar blijven.

Een notenbalk met notities of andere relevante objecten kan niet als leeg worden aangemerkt. Inspecteer het voordat u iets verwijdert.

Gebruik **Lege Staves tonen** als je het personeel weer nodig hebt om te verschijnen.

### 37. Hoe wijzig ik de volgorde van de instrumenten?

Het veranderen van een instrumentlabel verplaatst zijn personeel niet.

**Oplossing**

1. Open **Home → Instruments → Add or Remove**.
2. Selecteer het instrument in de lijst met instrumenten van de score.
3. Omhoog of omlaag.
4. Bevestig het wisselgeld.
5. Recensiebeugels, beugels en barlines.

Kies een bestelling die past bij het ensemble en helpt muzikanten snel hun onderdelen te vinden.

### 38. Waarom kloppen of ontbreken de instrumentnamen?

Instrumentnamen kunnen verschillen tussen het eerste systeem en latere systemen.

**Oplossing**

1. Controleer de volledige en korte namen van het instrument.
2. Bewerk de getoonde naam of de instrumenten zoals van toepassing.
3. Bekijk de instellingen van de instrumentennaamweergave van de score.
4. Controleer of een instrumentwijziging een ander label invoert.

Gebruik de volledige naam waar lezers identificatie nodig hebben en een duidelijke afkorting op volgende systemen.

### 39. Waarom verschijnt er onverwacht een lege pagina?

Een blanco pagina kan het gevolg zijn van een speciale pagina-uitbraak, titel-pagina-instellingen of geïmporteerde opmaak.

**Oplossing**

1. Opmaakmarkeringen weergeven.
2. Controleer het einde van de vorige pagina.
3. Controleren op een **Special Page Break** dat lege pagina's invoegt.
4. Verwijderen of aanpassen van de verantwoordelijke pauze.
5. Bekijk de volgende pagina's na de lay-out wijzigingen.

Verwijder geen muziek om een pagina te verwijderen die is gemaakt door het formatteren.

### 40. Waarom begint de maatnummering op de verkeerde plek?

Een pick-up, bewegingsgrens of toevallige bar-aantal verandering kan de nummering beïnvloeden.

**Oplossing**

1. Controleer het punt waar nummering onjuist wordt.
2. Controleren op een **Bar Number Change**.
3. Corrigeer of verwijder de wijziging.
4. Bekijk de instellingen voor het weergeven van het bar-nummer.
5. Controleer de nummering in zowel de score en delen.

Beslis of een opening pick-up niet genummerd of geteld moet worden, en pas die conventie consequent toe.

## Partijen, afdrukken en exporteren {#parts-printing-and-exporting}

### 41. Hoe maak ik losse instrumentpartijen?

**Dynamische delen** laat een partituur en zijn instrumentale delen muzikale inhoud delen.

**Oplossing**

1. Open de **Parts** controles.
2. Controleer welke onderdelen al bestaan.
3. Open het gewenste deel.
4. Wanneer ondersteund, maak een nieuw onderdeel en kies de notenbalken die het moet bevatten.
5. Pas de layout voor de speler aan.

Houd muzikale bewerkingen in de gekoppelde score-en-parts workflow in plaats van het onderhouden van afzonderlijke bestanden onnodig.

### 42. Waarom ziet mijn instrumentpartij er anders uit dan de partituur?

Onderdelen hebben onafhankelijke lay-out-eisen, waaronder paginadraaiingen, personeelsgrootte en systeemonderbrekingen.

**Oplossing**

1. Open het aangetaste deel.
2. Controleer zijn **Document Setup**.
3. Bekijk automatische pauzes en handmatige pauzes.
4. De indeling van het onderdeel direct aanpassen.

Verschillen in layout worden normaal gesproken verwacht. Als noten of ritmes fout lijken te zijn, controleer dan of u het juiste gekoppelde deel bekijkt en of de inhoud ervan niet verborgen is.

### 43. Waarom ontbreken meermaatsrusten of worden ze gesplitst in mijn partijen?

Een multirest kan worden gedeeld door muziekinstructies of objecten die zichtbaar moeten blijven.

**Oplossing**

1. Bevestig dat multiresten zijn ingeschakeld in het onderdeel.
2. Controleer de bars waar een multirest breekt.
3. Controleer op oefensporen, tekst, barlines, belangrijke wijzigingen en tijdsaanduidingen.
4. Verwijder toevallige objecten alleen na bevestiging dat ze niet nodig zijn.

Sommige pauzes zijn correct omdat spelers een instructie moeten zien op dat punt.

### 44. Hoe kies ik betere momenten om een pagina om te slaan?

Spelers hebben genoeg tijd nodig om een pagina te draaien zonder hun volgende item te missen.

**Oplossing**

1. Open het individuele deel.
2. Rusten vinden die geschikt zijn voor paginadraaiingen.
3. Paginapauzes invoegen op praktische posities.
4. Bekijk automatische pagina-omslag opties waar beschikbaar.
5. Controleer het aantal pagina's en de afstand tussen het systeem.

Vermijd het maken van extreem drukke pagina's gewoon om een draai te forceren. Test de lay-out vanuit het perspectief van de speler.

### 45. Waarom heeft mijn PDF het verkeerde formaat of de verkeerde marges?

De pagina-instellingen van de score en de instellingen voor afdrukken of exporteren kunnen niet overeenkomen.

**Oplossing**

1. Paginagrootte en oriëntatie controleren in **Document Setup**.
2. Controleer de marges en de grootte van het personeel.
3. Bevestig dat u de beoogde score of onderdeel exporteert.
4. Gebruik ingebouwde PDF-export waar beschikbaar.
5. Open de PDF en controleer de paginaafmetingen.

Controleer bij het afdrukken de papiergrootte en de schaalverdeling apart. De uiteindelijke grootte van het afgedrukte personeel kan veranderen.

### 46. Waarom wijken muzieksymbolen of lettertypen af in de PDF?

Ontbrekende lettertypen, substituties of lettertype-gerelateerde exportproblemen kunnen het uiterlijk van notatie veranderen.

**Oplossing**

1. Vergelijk de PDF met de score op het scherm.
2. Bevestig dat de benodigde muziek- en tekstlettertypen zijn geïnstalleerd.
3. Probeer de ingebouwde PDF-export van Sibelius waar beschikbaar.
4. Open het resultaat in een andere PDF-viewer.
5. Als symbolen ook verkeerd zijn binnen Sibelius, onderzoek dan de font installatie van de toepassing.

Als alleen een aangepast lettertype faalt, test dan een standaardlettertype in een kopie van de score.

### 47. Waarom kan ik geen audiobestand exporteren?

Audio-export vereist een afspeelconfiguratie die geluid in de computer kan weergeven.

**Oplossing**

1. Controleer de geselecteerde afspeelconfiguratie.
2. Gebruik een ondersteund virtueel instrument of interne geluidsbron.
3. Bevestig dat gewoon afspelen werkt.
4. Kies **File → Export → Audio**, indien beschikbaar.

Als het afspelen van een externe hardware synthesizer gebruikt, kan het nodig zijn om het geluid via een audio-interface op te nemen. MIDI naar het apparaat sturen maakt geen opname van zijn audio.

## Opslaan, herstellen en prestaties {#saving-recovery-and-performance}

### 48. Hoe herstel ik een partituur na een crash?

Het herstel hangt af van wat Sibelius voor de onderbreking heeft gered.

**Oplossing**

1. Open Sibelius en controleer op een herstelprompt.
2. Controleer de beschikbare autosave- of reservekopiebestanden.
3. Gebruik de locaties die getoond worden in de opslagvoorkeuren van uw versie of de referentiegids.
4. Vergelijk tijdstempels en muzikale inhoud.
5. Sla de best herstelde versie op onder een nieuwe naam.

Vermijd het overschrijven van het origineel totdat u hebt bevestigd dat het herstelde bestand bevat het werk dat u nodig hebt.

### 49. Waarom is Sibelius traag, loopt het vast of crasht het?

De oorzaak kan een bepaalde score, afspeelbibliotheek, stuurprogramma of softwarecomponent.

**Oplossing**

1. Bewaar je werk en herstart Sibelius.
2. Test een kleine nieuwe score.
3. Vergelijk gedrag met de problematische score.
4. Test een eenvoudiger afspeelconfiguratie.
5. Onnodige MIDI- en audio-apparaten loskoppelen.
6. Controleer compatibele Sibelius en driver updates.

Als slechts één score faalt, werk dan aan een kopie en vernauw de betreffende passage. Als elke score mislukt, neem dan uw versie, besturingssysteem en exacte foutmelding voor ondersteuning op.

### 50. Waarom kan iemand anders mijn Sibelius-bestand niet openen?

De ontvanger kan een oudere versie, een beperkte editie of een onvolledige kopie van het bestand hebben.

**Oplossing**

1. Vraag welke Sibelius versie en editie ze gebruiken.
2. Waar ondersteund, gebruik **File → Export → Previous Version**.
3. Stuur de geëxporteerde kopie en bewaar uw origineel.
4. Controleer of het overgedragen bestand volledig is.
5. Als ze een andere notatie applicatie gebruiken, denk dan aan MusicXML.

Exporteren van oudere versies en MusicXML kan formatteren of niet-ondersteunde functies wijzigen. Stuur een PDF naast het bewerkbare bestand als visuele referentie.

## Controlelijst voor snel oplossen van problemen

Voordat belangrijke wijzigingen worden aangebracht:

1. Sla een aparte kopie van de score op.
2. Identificeer of het probleem een score of elke score beïnvloedt.
3. Controleer de geselecteerde audio- en MIDI-apparaten.
4. Controleer de afspeelconfiguratie.
5. Inspecteer recente notatie- of lay-outwijzigingen.
6. Herstart Sibelius indien van toepassing.
7. Controleer versie en compatibiliteit van het besturingssysteem.
8. Verander één instelling tegelijk en test het resultaat.

## Officiële Sibelius-hulp

Voor instructies specifiek voor uw versie en editie, raadpleeg de **Referentiegids Sibelius** geleverd met de aanvraag.

- [Avid Sibelius Leren en ondersteunen](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Release Information](https://www.avid.com/resource-center/whats-new-in-sibelius)

Bij het aanvragen van hulp, omvatten uw Sibelius-versie, besturingssysteem, afspeelapparaat, de exacte foutmelding en of het probleem een score of alle scores beïnvloedt.


---

## Sibelius-schoollicentie en installatie hulp voor scholen

Het beheren van Sibelius over een school of universiteit in plaats van het oplossen van problemen op een werkplek? Softplanet Productions heeft 25 jaar ervaring met het ondersteunen van Britse muziekafdelingen. [Vergelijk Sibelius-schoollicentie opties en vraag een offerte](/nl/services/sibelius-site-licenses/) voor nieuwe installaties, extra werkplekken of netwerkuitrol.
