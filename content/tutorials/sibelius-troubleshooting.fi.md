---
title: 'Sibeliuksen vianmääritys: 50 yleistä ongelmaa'
description: Ratkaise 50 Sibeliuksen ääneen, MIDIin, nuottien syöttöön, asetteluun ja PDF-vientiin liittyvää ongelmaa.
  Hae ja suodata aiheittain.
draft: false
showTableOfContents: false
---

Löydä käytännön ratkaisuja 50 yleiseen Sibelius-ongelmaan, puuttuvasta soittoäänestä hankalaan pistemäärään ja PDF-vientiin.

Nämä ohjeet on tarkoitettu Sibeliukselle. Valikkonimet ja käytettävissä olevat ominaisuudet vaihtelevat eri versioiden ja painosten välillä, kuten Sibelius First, Taiteilija ja Ultimate. Jos komento puuttuu, etsi sen nimi Sibeliuksesta tai ota yhteys versiosi mukana toimitettuun Reference Guide -oppaaseen.

Ennen suurten muutosten tekemistä, tallenna erillinen kopio pisteet.

## Siirry kategoriaan {#jump-to-a-category}

- [Ääni ja toisto](#sound-and-playback)
- [MIDI- ja Note-syöte](#midi-and-note-input)
- [Notaatio, äänet ja rytmi](#notation-voices-and-rhythm)
- [Pisteiden asettelu ja välilyönti](#score-layout-and-spacing)
- [Osat, painaminen ja vienti](#parts-printing-and-exporting)
- [Säästäminen, hyödyntäminen ja suorituskyky](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Ääni ja toisto {#sound-and-playback}

### 1. Miksi Sibeliuksessa ei ole ääntä?

Jos toistolinja liikkuu, mutta et kuule mitään, tarkista äänen lähtö, toiston asetukset ja Mixer.

**Liuos**

1. Varmista, että kaiuttimet tai kuulokkeet toimivat toisessa sovelluksessa.
2. Avaa **Soittolaitteet (Playback Devices)** **Soita (Play)** -välilehdestä.
3. Avaa **Äänimoottorin valinnat (Audio Engine Options)** ja valitse suunniteltu audio-käyttöliittymä.
4. Valitse toistoasetukset, joissa käytetään asennettua äänilähdettä.
5. Avaa **Sekoitin (Mixer)** ja tarkista, onko kanavat, soitot tai master tilavuus alhainen.

Jos liitit ääniliittymän Sibeliuksen käynnistämisen jälkeen, käynnistä ohjelma uudelleen kytketyllä käyttöliittymällä.

**Aiheeseen liittyvät:** Katso ongelmat 2, 5 ja 6.

### 2. Miksi Sibelius pelaa väärien puhujien tai kuulokkeiden kautta?

Sibelius voi käyttää eri ulostuloa kuin käyttöjärjestelmän oletuslaite.

**Liuos**

1. Kytke ja kytke tarvittava laite päälle.
2. Avaa **Äänimoottorin valinnat (Audio Engine Options)**.
3. Valitse sopiva käyttöliittymä.
4. Tarkista lähtöreititys, jos käyttöliittymässäsi on useita lähtöjä.
5. Aloita toisto.

Jos laite puuttuu, sulje Sibelius ja varmista, että käyttöjärjestelmä tunnistaa sen ennen ohjelman uudelleen avaamista.

Bluetooth-laitteet voivat aiheuttaa lisäviivettä.

### 3. Miksi toistaa Crackle, Click tai hajota?

Liian pieni äänipuskuri voi aiheuttaa keskeytyksen toistossa, erityisesti vaativissa äänikirjastoissa.

**Liuos**

1. Avaa **Äänimoottorin valinnat (Audio Engine Options)**.
2. Lisätään puskurin kokoa yhdellä käytettävissä olevalla askeleella.
3. Soita vaativa kohta ja kuuntele uudelleen.
4. Sulje tarpeettomat hakemukset.
5. Tarkista, että käyttöliittymän kuljettaja tukee käyttöjärjestelmääsi.

Toista, kunnes toisto on vakaa. Jos ääni pysyy vääristyneenä, tarkista myös Mixer-tasot: leikkaus ja puskuriongelmat vaativat eri korjauksia.

### 4. Miksi Myöhästyn, kun soitan MIDI-näppäimistöä?

Avaimen painamisen ja äänen kuultamisen välistä aikaa kutsutaan latenssiksi.

**Liuos**

1. Avaa **Äänimoottorin valinnat (Audio Engine Options)**.
2. Vähennä puskurin kokoa vähitellen.
3. Testaa näppäimistö jokaisen muutoksen jälkeen.
4. Jos naksahduksia tulee näkyviin, puskuria nostetaan hieman.

Windowsissa käytä käyttöliittymän valmistajan ASIO-ajuria, kun se on käytettävissä. MacOS, käytä asianmukaista Core Audio-laite.

Vältä Bluetooth kuulokkeet, kun tarvitset reagoiva näppäimistön seuranta.

### 5. Miksi yksi instrumentti on hiljainen?

Yksi hiljainen henkilökunta viittaa yleensä sen mikseriasetuksiin, äänitehtävään tai soittoominaisuuksiin.

**Liuos**

1. Avaa **Sekoitin (Mixer)**.
2. Tarkista, ettei laite ole mykkä.
3. Tarkista, onko toinen laite soittimella.
4. Varmista, että henkilöstöllä on sopiva ääni.
5. Valitse vaurioitunut viesti ja tarkista **Soita syötössä (Play on pass)**-asetukset **Tarkastaja (Inspector)**:sta, jos saatavilla.

Etsi myös tahatonta instrumenttimuutosta ennen hiljaista kulkua.

### 6. Miksi Sibelius kuulostaa kadonneelta tai ei ole saatavilla?

Ilmoitussovellus ja sen äänikirjasto voivat edellyttää erillistä asennusta.

**Liuos**

1. Tarkista, mikä äänikirjasto on soiton asetusodotuksesi.
2. Vahvista, että kirjasto on asennettu.
3. Tarvittaessa hanki asianmukainen asentaja Avid-tililtäsi.
4. Jos siirsit kirjastoa, noudata tuettua menettelyä sen sijainnin päivittämiseksi.
5. Käynnistä Sibelius uudelleen ja valitse vastaavat soittosarjat.

Älä oleta, että pääsovelluksen asentaminen uudelleen asentaa myös suuren äänikirjaston.

### 7. Miksi instrumentti soittaa väärää ääntä?

Henkilökunnan mittarin määrittely tai Mixer-tehtävä ei välttämättä vastaa odottamaasi ääntä.

**Liuos**

1. Tarkastetaan, mikä väline on annettu henkilöstölle.
2. Etsi instrumentti muutoksia pisteet.
3. Tarkista valittu soiton asetus.
4. Tarkasta henkilöstön äänitehtävä **Sekoitin (Mixer)**:ssä.

Jos haluat muuttaa itse instrumenttia, luo oikea **Instrumentin muutos (Instrument Change)**. Henkilökunnan nimeäminen yksin ei muuta sen musiikillista määritelmää tai soittoääntä.

### 8. Miksi Dynamics ei vaikuta toistoon?

Sopimattomalla tekstityylillä syötetty tai väärään asentoon kiinnitetty dynamiikka ei saa tuottaa aiottua tulosta.

**Liuos**

1. Valitse muistilappu, josta dynaamisuuden pitäisi alkaa.
2. Luo **Ilmausteksti (Expression Text)**.
3. Lisää dynaaminen tekstityylin sanavalikolla.
4. Tarkista, että se on kiinnitetty aiottuun henkilökuntaan ja tangolle.
5. Pelaa kulku hieman ennen merkintää.

Jos dynamiikalla on vielä vähän vaikutusta, testaa toinen toistoääni. Äänikirjastot ovat erilaisia siinä, miten ne reagoivat dynamiikkaan.

### 9. Miksi Sibelius ei välitä Tempo-merkinnöistäni?

Otsikko, jossa lukee "Allegro" ei välttämättä toimi toisto tempo-ohjeena.

**Liuos**

1. Luo merkintä **Tempon teksti (Tempo Text)** tai sopiva **Metronome Mark** tekstityyli.
2. Täsmällisellä nopeudella, sisältää tunnustettu bat yksikkö ja tempo arvo.
3. Tarkista sen kiinnityspaikka.
4. Tarkista **Tulos (Performance)**:n asetukset, jos soitto on tarkoituksella vaihtelemassa tempoa.

Jos koko pistemäärä kuulostaa jatkuvasti liian nopealta tai hitaalta, tarkista myös toiston tempo-ohjaus.

### 10. Miksi toistot tai First and Second Endings pelaavat väärin?

Toisto riippuu toistuvasta rakenteesta, ei vain rivin tai tekstin ulkonäön.

**Liuos**

1. Käytä oikeaa toista viivaa.
2. Luo loppuviivoja käyttäen asianmukaisia ensimmäisen ja toisen rivin tyyppejä.
3. Tarkista, että jokainen loppu alkaa ja päättyy aiottuun baareihin.
4. Tarkista toistoasetukset ja manuaalinen toistojakso.
5. Testisoitto ennen toistuvaa jaksoa.

Käytä tunnistettuja toistuvan ohjeiden sijaan tavallinen teksti, joka vain näyttää ... tai...

## MIDI- ja Note-syöte {#midi-and-note-input}

### 11. Miksi Sibelius ei tunnista MIDI-näppäimistöäni?

Laite voidaan kytkeä pois päältä, se ei ole käytettävissä Sibeliuksen käyttöjärjestelmään tai se ei ole käytössä.

**Liuos**

1. Yhdistä näppäimistö ennen kuin avaat Sibeliuksen.
2. Avaa **Asetukset → syötelaitteet (Preferences → Input Devices)**.
3. Käytä oikeaa laitetta.
4. Soita avain ja tarkista syöteindikaattori.
5. Jos laite puuttuu, testaa toinen USB-portti tai kaapeli.

Jos solmukohta on mukana, yritä yhdistää se suoraan tietokoneeseen. Asenna valmistaja kuljettaja, jos näppäimistö vaatii yhden.

### 12. Miksi voin kuulla näppäimistöäni, mutta ei muistiinpanoja?

Äänen kuuleminen ei tarkoita, että Sibelius on tällä hetkellä astumassa notaatioon. Näppäimistö voi myös tuottaa omaa ääntään itsenäisesti.

**Liuos**

1. Valitse loput tai paikka, josta syöte tulee aloittaa.
2. Syötä muistiinpanotila.
3. Valitse **Näppäimistö (Keypad)**:n kesto.
4. Soita viesti.

Live-tallennukseen on käytettävä **Flexi-aika (Flexi-time)**:tä eikä vaiheaikasyöttöä. Varmista, että näppäimistö on käytössä **Syöttölaitteet (Input Devices)**:ssa, jos muistiinpanoja ei näy.

### 13. Miksi muistiinpanot on kirjoitettu väärään Octaveen?

Octave-siirtymä voi olla peräisin näppäimistöasetuksista tai instrumentin merkintäkäytännöistä.

**Liuos**

1. Tarkista näppäimistön oktaavi ja siirrä ohjaimet.
2. Testaa pianon normaalin henkilökunnan.
3. Tarkista alkuperäiselle henkilöstölle osoitettu väline.
4. Vertaa konsertti-pitch ja osaksi kansallistaminen-score näkymiä.

Jotkut soittimet, kuten kitara ja piccolo, perinteisesti kuulostaa oktaavin pois niiden kirjallisia muistiinpanoja. Muut täytäntöönpanosäädökset muuttuvat eri väliajoin.

### 14. Miksi MIDI-muistiinpanoja on syötetty kahdesti?

Kaksinkertainen panos voi tapahtua, kun sama suorituskyky saavuttaa Sibeliuksen useamman kuin yhden MIDI-reitin kautta.

**Liuos**

1. Avaa **Syöttölaitteet (Input Devices)**.
2. Ota väliaikaisesti käyttöön vain suunniteltu näppäimistösyöte.
3. Irrota tarpeettomat MIDI-yhteydet.
4. Tarkista MIDI-reitityssovelluksen tai käyttöliittymän asetukset.
5. Testaa vielä yksi viesti.

Jos kuulet tuplaäänen, mutta vain yksi note näkyy, tutki äänivalvonta ja näppäimistön **Paikallinen valvonta (Local Control)** asetus.

### 15. Miksi Flexi-aika tallennus tuottaa sotkuisia rytmejä?

Live-syöte voidaan tulkita liian tarkasti haluamasi musiikin mukaan, luoden ei-toivottuja lyhyitä muistiinpanoja, leppuja tai tupletteja.

**Liuos**

1. Avaa **Flexi-aikavalinnat (Flexi-time Options)**.
2. Aseta vähimmäismuistilapun arvo kohdan mukaiseksi.
3. Rajoita tupletteja, jos et tarvitse niitä.
4. Tallenna mukava tempo selkeällä napsautuksella.
5. Nauhoita lyhyt kulku ja tarkista se ennen kuin jatkat.

Monimutkaisen musiikin osalta vaiheaikapanos voi vaatia vähemmän korjausta kuin livenauhoitus.

### 16. Miten syötän Chords sijaan erilliset huomautukset?

Notes pelataan yksi toisensa jälkeen vaihe-aika panos yleensä miehittää peräkkäisiä rytminen kantoja.

**Liuos**

MIDI-syötteen osalta soita soinnun muistiinpanot yhdessä, kun olet valinnut vaaditun keston.

Tietokone-näppäimistön syöttäminen:

1. Kirjoita ensimmäinen viesti.
2. Valitse se.
3. Käytä välikomentoja lisätäksesi muistiinpanoja sen ylä- tai alapuolelle.

Tarkista, että sillä on yksi kanta ja kesto.

### 17. Miten syötän muistiinpanoja ilman näppäimistöä?

Voit käyttää Sibeliuksen **Näppäimistö (Keypad)**-näyttöä, vaikka kannettavallasi ei olisi erillistä numeroa.

**Liuos**

1. Näytä **Näppäimistö (Keypad)** paneelien ohjaimista.
2. Klikkaa vaadittua kestoa tai niveltymistä.
3. Syötä syötteitä tietokoneen näppäimistöllä tai MIDI-näppäimistöllä.
4. Tarkista saatavilla olevat näppäimistö-pikavalinnat **Asetukset (Preferences)**:ssä.

Voit myös muokata pikanäppäimiä tai liittää USB-näppäimistön, jos syötät notaatio usein.

### 18. Miksi uudet muistiinpanot korvaavat olemassa olevan musiikin?

Huomaa syöte muokkaa musiikkia valitussa rytmiasennossa; se ei automaattisesti luo ylimääräisiä baareja jokaiselle uudelle idealle.

**Liuos**

1. Peru ei-toivottu muokkaus.
2. Lisää tarvittavat palkit ennen uuteen kohtaan tuloa.
3. Valitse ensimmäinen lepo uusissa baareissa.
4. Aloita muistiinpanot sieltä.

Jos haluat ylimääräisen itsenäisen rytmin samalle henkilöstölle, käytä toista ääntä sen sijaan, että korvaisit nykyisen äänen.

## Notaatio, äänet ja rytmi {#notation-voices-and-rhythm}

### 19. Miten Lisään tai poistan koko baareja?

Muistilappujen poisto ja tankojen poistaminen ovat erilaisia toimintoja.

**Liuos**

Lisätäksesi palkit, käytä **Koti → Bars → Lisää (Home → Bars → Add)**:tä ja valitse sopiva vaihtoehto.

Poistaaksesi palkit:

1. Tehkää **järjestelmän valinta** kaltereista.
2. Tarkista, että valinta sisältää juuri haluamasi baarit.
3. Poista valinta.

Normaali kulkuvalinta voi tyhjentää musiikillisen sisällön jättäen baarit paikoilleen.

### 20. Miten voin muuttaa aika-allekirjoitusta ilman odottamatonta muuttoa?

Muuttuva mittari voi saada Sibeliuksen organisoimaan olemassa olevan musiikin uusiksi baareiksi.

**Liuos**

1. Tallenna kopio pisteet.
2. Valitse kohta, josta muutoksen pitäisi alkaa.
3. Avaa **Aika Allekirjoitus (Time Signature)**-ohjaimet.
4. Tarkista vaihtoehto kirjoittaa olemassa olevia baareja.
5. Käytä muutosta ja tarkista kyseinen kulkureitti.

Uudelleenkirjoituksen poistaminen säilyttää olemassa olevan palkin rakenteen, mutta se voi jättää baareja, joiden kestot eivät vastaa näkyvää mittaria. Käytä sitä vaihtoehtoa tarkoituksella.

### 21. Miten voin luoda noutobaarin tai Anacrusiksen?

Nouto on lyhennetty avauspalkki, kuten yksi lyönti ennen ensimmäistä täyttä palan 4/4.

**Liuos**

Kun luot avausaika allekirjoituksen, käytä **nouto/nopeus**-valitsinta ja määritä sen kesto.

Jotta olemassa pisteet, luoda **epäsäännöllinen palkki** vaadittu pituus käyttäen bar-luontiohjaimia, sitten siirtää avausmusiikkia huolellisesti.

Tarkista viivan numerointi ja viimeinen palkki, jos työ vaatii täydentävän lyhennetyn lopun.

### 22. Miten voin laittaa kaksi itsenäistä rytmiä yhteen sauvaan?

Käytä erillisiä ääniä samanaikaisiin musiikkilinjoihin.

**Liuos**

1. Syötä ensimmäinen rivi **Ääni 1**:een.
2. Valitse toisen rivin aloitusasento.
3. Valitse **Ääni 2** **Näppäimistö (Keypad)**:ssa.
4. Kirjoita muistiinpanot ja lepää itsenäisesti.

Äänet 1 ja 2 tarjoavat yleensä vastakkaisia varren suuntiin. Käytä lisäääniä vain, kun notaatio tarvitsee niitä.

Älä käytä sointua, kun muistiinpanot vaativat erilaisia rytmejä.

### 23. Miksi ylimääräisiä lepoja esiintyy minun pistemäärä?

Jokainen aktiivinen ääni tarvitsee oman rytmisen rakenteensa, joten lisääänet voivat tuoda lisäleppuja.

**Liuos**

1. Valitse odottamaton lepo ja tunnista sen ääni.
2. Tarkista, sisältääkö tuo ääni tarvittavat muistiinpanot muualla baarissa.
3. Poista tarvittaessa vahingossa luotu ääni.
4. Piilota lepo vain silloin, kun se on musiikillisesti pätevä tekemään niin.

Vältä piiloutua yksinkertaisesti salata keskeneräinen rytmi. Varmista ensin, että jokainen ääni kirjataan suunnitellun baarin keston.

### 24. Miten luon Triplets ja muut Tuplets?

Tuplets jakaa rytminen span eri kuin sen normaali ryhmittely.

**Liuos**

1. Valitse muistiinpano tai levätä haluamallasi pohjan kesto.
2. Käytä **Huomautus syöte → Tuplets (Note Input → Tuplets)**:tä.
3. Valitse vaadittu tuplet tai kirjoita mukautettu suhde.
4. Anna loput muistiinpanot.

Tavalliselle kahdeksannen setelin kolmoselle, aloittakaa kahdeksannen setelin arvosta. Jos tuplet on väärä span, peru se ja tarkista alkamisen kesto ja suhde.

### 25. Miksi muistiinpanoni ovat väärin?

Säteen ryhmittely riippuu mittarista, sen ryhmittelyasetuksista ja kaikista manuaalisista sädemuutoksista.

**Liuos**

1. Tarkista aikaleiman rytmiryhmä.
2. Valitse vaikuttavat muistiinpanot.
3. Käytä **Näppäimistö (Keypad)**-säteen säätimiä käynnistääksesi, jatkaaksesi tai katkaistakseen valoja tarpeen mukaan.
4. Toistuvassa numerossa säädä ryhmittelyasetuksia sen sijaan, että korjaisit jokaisen säteen käsin.

Esimerkiksi, 6/8 yleensä ryhmittää kahdeksannen muistiinpanot kahteen ryhmään kolme, kun taas muut mittarit voivat tarvita eri kuvio.

### 26. Miten kirjoitan muistiinpanoja kahden lavan poikki?

Cross-staff notaatio on hyödyllinen piano kohdissa jaettu käsien.

**Liuos**

1. Merkitse kohtaan sen henkilöstö, joka on otettu palvelukseen.
2. Valitse muistiinpanot, jotka pitäisi näkyä toisessa henkilöstössä.
3. Käytä **Henkilöstön väliset huomautukset (Cross-staff Notes)**:n komentoja siirtääksesi näytön ylä- tai alapuolella.
4. Tarkista varret, palkit ja henkilöstön välit.

Cross-staff liike säilyttää nuottien suhde niiden alkuperäiseen ääneen. Tavallinen leikkaus ja liitä siirtää musiikin toiseen henkilökuntaan eikä saa tuottaa samaa merkintää.

### 27. - Miksi solmioni käyttäytyy kuin Slur?

Solmioilla ja loisteilla on erilaiset musiikilliset merkitykset.

**Liuos**

Käytä **Tasapeli** liittyä peräkkäisiä muistiinpanoja saman piki yhteen pitkä kesto. Käytä sitä **Näppäimistö (Keypad)**-liitolla.

Käytä **liekki**:tä osoittamaan lause tai viestitys muistiinpanojen välillä. Luo se **SlurCity name (optional, probably does not need a translation) (Slur)**-komennolla.

Jos solmio ei ole oikein, tarkista seuraavan nuotin korkeus, vahingossa, ääni ja rytminen sijainti.

### 28. Miksi sattumalta puuttuu tai ilmestyy?

Sibelius määrittää vahingossa näytöt avainmerkistä, aikaisemmat muistiinpanot baarissa ja merkintäasetukset.

**Liuos**

1. Tarkista avain.
2. Tarkista aiemmat tapahtumat piki samassa baarissa.
3. Valitse viesti ja tarkasta sen vahingossa käyttäen **Näppäimistö (Keypad)**.
4. Lisää varoen tapaturma, jos se parantaa luettavuutta.

Älä muuta varsinaista kenttää vain pakottaaksesi symbolin ilmestymään. Vahinkonäytön ja musiikin on oltava oikeassa.

### 29. Miten voin muuttaa enharmonisen kirjaimen?

Kenttä voidaan syöttää terävänä, kun tasainen kirjoitusasu sopisi paremmin harmoniaan.

**Liuos**

1. Valitse muistilappu tai käytävä.
2. Käytä **RespellCity name (optional, probably does not need a translation) (Respell)**-komentoa.
3. Tarkista oikeinkirjoitus soinnusta ja avainta vasten.

Esimerkiksi F-harp-äänimerkki voidaan joutua kirjoittamaan G-flatena tietyssä harmonisessa kontekstissa.

Vastustaminen säilöo kuulostaa. Muutosten muuttaminen pikittää ja ratkaisee toisen ongelman.

### 30. Miksi nuotit ovat Sibeliuksessa punaisia?

Punaiset muistilaput osoittavat yleisesti, että piki sijaitsee instrumentille määritellyn alueen ulkopuolella.

**Liuos**

1. Tarkasta henkilöstölle osoitettu väline.
2. -Kirjallinen ja kuulostava.
3. Tarkasta laitealueen näyttöasetukset.
4. Päätä, sopiiko kohta pelaajalle.

Aluevaroitus ei automaattisesti tarkoita, että merkintä olisi väärä. Värin piilottaminen ei kuitenkaan tee epäkäytännöllistä nuottia soitettavaksi.

## Pisteiden asettelu ja välilyönti {#score-layout-and-spacing}

### 31. Miten voin sovittaa enemmän tai vähemmän baareja One System?

Sibelius laskee yleensä järjestelmän pituuden automaattisesti, mutta voit hallita tärkeitä taukoja.

**Liuos**

1. Valitse baarit, joiden pitäisi jakaa yksi järjestelmä.
2. Käytä **Layout → Format → Tee järjestelmään (Layout → Format → Make Into System)**:tä.
3. Tarkastaa tuloksen tungosta muistiinpanoja ja tekstiä.

Vaihtoehtoisesti valitse viivaviiva ja lisää **Järjestelmäkatkos (System Break)**.

Jos monet järjestelmät ovat täynnä, tarkista henkilöstön koko, sivun marginaaleja ja muistiinpanojen väli pikemminkin kuin pakottaa enemmän baareja jokaiselle riville.

### 32. Miksi Sibelius ei palauta pisteitäni?

Olemassa olevat muotoilu lukot ja taukoja voi estää automaattiset layout muutoksia.

**Liuos**

1. Näytä layout-merkit.
2. Etsikää järjestelmäkatkoja, sivukatkoja ja lukittuja järjestelmiä.
3. Valitse kyseinen käytävä.
4. Tarvittaessa käytetään **Avaa tiedostomuoto (Unlock Format)**:tä.
5. Käytä vain tarvitsemasi tauot.

Tallenna kopio ensin, jos tulos on jo huolellisesti valmistellut sivun pyörii tai julkaisun ulkoasu.

### 33. Miksi Stavesien välillä on valtavat aukot?

Suuret aukot voivat johtua manuaalisesta liikkumisesta, törmäysten välttämisestä tai pystysuuntaisista perusteluista.

**Liuos**

1. Valitse vaikuttavat järjestelmät.
2. Käytä **Optimoi henkilökunnan välilyönti (Optimize Staff Spacing)**:tä.
3. Etsi sanoituksia, dynamiikkaa, viivoja tai tekstiä, jotka peittävät kuilun.
4. Tarkista pystysuorat perustelut, jos haarat ovat levinneet koko sivulle.

Jos aiemmat manuaaliset muutokset ovat syynä, käytä asianmukaista henkilökunnan spacing nollauskomentoa ennen kuin optimoit uudelleen.

### 34. Miksi Dynamics, Lyrics tai teksti törmää?

Automaattinen törmäysten välttäminen voidaan kytkeä pois päältä, ohittaa tai se ei pysty ratkaisemaan tungosta.

**Liuos**

1. Tarkista, että **Magneettinen asettelu (Magnetic Layout)** on käytössä kyseisten objektien osalta.
2. Nollaa tarpeeton manuaalinen paikannus.
3. Optimoi henkilökunnan välit.
4. Anna järjestelmälle tarvittaessa enemmän vaakasuoraa tilaa.
5. Tee pieniä manuaalisia säätöjä vasta automaattisen ulkoasun tarkistuksen jälkeen.

Liian paljon musiikkia sisältävä järjestelmä voi tarvita vähemmän baareja törmäyksen asetuksista riippumatta.

### 35. Miten palautan epäyhtenäisen vaakamuistilapun?

Raahaus muistiinpanoja tai vaihtamalla väli toistuvasti voi jättää välimatkan näyttää epäjohdonmukaista.

**Liuos**

1. Valitse kyseinen käytävä.
2. Valitse **Ulkoasu → Nollaa muistiinpanot → Nollaa muistilappu (Appearance → Reset Notes → Reset Note Spacing)**.
3. Tarkasta välit sanoitusten, sointusymboleiden ja onnettomuuksien ympärille.
4. Säädä järjestelmä hajoaa, jos käytävä on täynnä.

Jos tietty esine on vielä epätavallisen kaukana sen muistilapusta, tarkista myös sen yksilöllinen sijainti.

### 36. Miten piilotan tyhjät Staves?

Käyttämättömien tappien piilottaminen voi helpottaa suuren ensemble-pistemäärän lukemista.

**Liuos**

1. Valitse kyseiset järjestelmät tai käytävä.
2. Valitse **Asettelu → Piilota Staves → Piilota tyhjät Staves (Layout → Hiding Staves → Hide Empty Staves)**.
3. Tarkista, että kaikki tarvittavat välineet pysyvät näkyvissä.

Henkilökunta, joka sisältää muistiinpanoja tai muita merkityksellisiä esineitä, ei saa katsoa tyhjäksi. Tarkasta se ennen kuin poistat mitään.

Käytä **Näytä tyhjät tahdit (Show Empty Staves)**:tä, kun tarvitset henkilökuntaa ilmaantumaan uudelleen.

### 37. Miten muutan instrumenttien järjestystä?

Laitemerkin muuttaminen ei liikuta sen henkilökuntaa.

**Liuos**

1. Avaa **Koti → instrumentit → Lisää tai poista (Home → Instruments → Add or Remove)**.
2. Valitse instrumentti pisteytyksen instrumenttilistasta.
3. Liikuta sitä ylös tai alas.
4. Vahvista muutos.
5. Tarkista sulut, hammasraudat ja barline ryhmittely.

Valitse kokoonpanoon sopiva tilaus ja auta muusikoita löytämään osat nopeasti.

### 38. Miksi instrumentin nimi on väärä tai puuttuu?

Mittarien nimet voivat vaihdella ensimmäisen järjestelmän ja myöhempien järjestelmien välillä.

**Liuos**

1. Tarkista, että instrumentti on täynnä ja lyhytnimiä.
2. Muokkaa tarvittaessa näkyvää nimeä tai sen laiteasetuksia.
3. Tarkista pisteet instrumentti-nimi näyttöasetuksista.
4. Tarkista, ottaako laitemuutos käyttöön toisen merkinnän.

Käytä koko nimeä, jossa lukijat tarvitsevat tunnistusta, ja selkeä lyhenne myöhemmistä järjestelmistä.

### 39. Miksi odottamaton sivu?

Tyhjä sivu voi olla seurausta erityisestä sivun tauosta, otsikko-sivun asetuksista tai tuodusta muotoilusta.

**Liuos**

1. Näytä layout-merkit.
2. Tarkasta edellisen sivun loppu.
3. Etsi **Erikoissivun tauko (Special Page Break)**:tä, joka lisää tyhjät sivut.
4. Poista tai säädä vastuullinen tauko.
5. Tarkista seuraavat sivut layout-muutosten jälkeen.

Älä poista musiikkia poistaaksesi sivun luotu muotoilu.

### 40. Miksi Bar numerot alkavat tai uudelleenkäynnistä väärin?

Nouto-, liikeraja- tai vahingossa tapahtuva viivanumeron muutos voi vaikuttaa numerointiin.

**Liuos**

1. Tarkasta kohta, jossa numerointi muuttuu virheelliseksi.
2. Etsi **Palkin numeron muutos (Bar Number Change)**:tä.
3. Korjaa tai poista muutos.
4. Tarkista rivinumeron näyttöasetukset.
5. Tarkista numerointi sekä pisteissä että osissa.

Päättäkää, onko avausnouto laskettava numeroimatta vai lasketaanko se, ja soveltakaa tätä sopimusta johdonmukaisesti.

## Osat, painaminen ja vienti {#parts-printing-and-exporting}

### 41. Miten voin luoda yksittäisiä instrumenttiosia?

**Dynaaminen osa (Dynamic Parts)** antaa pisteet ja sen instrumentaaliset osat jakaa musiikillinen sisältö.

**Liuos**

1. Avaa **Osat (Parts)**-ohjaimet.
2. Tarkista, mitkä osat ovat jo olemassa.
3. Avaa vaadittu osa.
4. Jos tukea, luo uusi osa ja valitse sauvat sen pitäisi sisältää.
5. Säädä sen ulkoasua pelaajalle.

Pidä musiikin muokkaukset linkitetyissä piste-ja-osa työnkulku pikemminkin kuin säilyttää erillisiä tiedostoja tarpeettomasti.

### 42. Miksi minun instrumentti osa on erilainen asettelu kuin pisteytys?

Osissa on erilliset ulkoasuvaatimukset, kuten sivukierrosten, henkilökunnan koon ja järjestelmäkatkojen osalta.

**Liuos**

1. Avaa se osa.
2. Tarkistakaa sen **Asiakirjan asetukset (Document Setup)**.
3. Tarkista automaattiset tauot ja manuaaliset tauot.
4. Säädä osan ulkoasua suoraan.

Yleensä odotetaan eroja ulkoasussa. Jos muistiinpanot tai rytmit näyttävät vääriltä, tarkista, että katselet oikeaa linkitettyä osaa ja että sen sisältöä ei ole piilotettu.

### 43. Miksi Multirests puuttuu tai jakaa minun osat?

Multirest voidaan jakaa musiikillisia ohjeita tai esineitä, joiden on pysyttävä näkyvissä.

**Liuos**

1. Varmista, että moninostot ovat käytössä osassa.
2. Tutkikaa kalterit, joissa moninosto katkeaa.
3. Tarkista harjoitusmerkit, teksti, viivat, keskeiset muutokset ja aika allekirjoitukset.
4. Poista vahingossa esineitä vasta sen jälkeen, kun olet vahvistanut niiden olevan tarpeettomia.

Jotkut tauot ovat oikein, koska pelaajien täytyy nähdä ohjeen siinä vaiheessa.

### 44. Miten voin luoda paremman sivun kääntyy osat?

Pelaajat tarvitsevat tarpeeksi aikaa kääntää sivun ilman, että seuraava merkintä puuttuu.

**Liuos**

1. Avatkaa yksilöllinen osa.
2. Etsi lepää sopivat sivun käännöksiä.
3. Lisää sivun taukoja käytännön paikoissa.
4. Tarkista automaattiset sivu-käännösvalinnat, jos mahdollista.
5. Tarkista viimeinen sivumäärä ja järjestelmäväli.

Vältä luomasta erittäin täynnä sivuja vain pakottaa kääntyä. Testaa asettelua pelaajan näkökulmasta.

### 45. Miksi minun PDF on väärä koko tai marginaalit?

Pisteen sivun asetukset ja tulostus- tai vientiasetukset eivät ehkä sovi.

**Liuos**

1. Tarkista sivun koko ja suunta **Asiakirjan asetukset (Document Setup)**:ssä.
2. Tarkistakaa marginaalit ja henkilöstön koko.
3. Varmista, että viet haluamasi pisteet tai osan.
4. Käytä sisäänrakennettua PDF-vientiä, jos mahdollista.
5. Avaa PDF ja tarkista sen sivun mitat.

Kun painat, tarkista paperin koko ja skaalaamalla erikseen. Soveltuvuus sivulle. Voit muuttaa lopullista tulostetun henkilöstön kokoa.

### 46. Miksi musiikkisymbolit tai fontit ovat väärin PDF:ssä?

Puuttuvat kirjasimet, substituutiot tai fonttiin liittyvät vientiongelmat voivat muuttaa merkinnän ulkonäköä.

**Liuos**

1. Vertaa PDF pisteet näytöllä.
2. Varmista, että tarvittavat musiikki- ja tekstifontit on asennettu.
3. Kokeile Sibeliuksen sisäänrakennettua PDF-vientiä, jos mahdollista.
4. Avaa tulos toisessa PDF-katselussa.
5. Jos symbolit ovat myös Sibeliuksen sisällä vääriä, tutki sovelluksen kirjasinasennus.

Jos vain mukautettu kirjasin epäonnistuu, testaa standardikirjasin kopioon pistemäärästä.

### 47. Miksi en voi viedä äänitiedostoa?

Äänen vienti vaatii toiston konfiguroinnin, joka voi tehdä äänen tietokoneen sisällä.

**Liuos**

1. Tarkista valittu soiton asetus.
2. Käytä tuettua virtuaalista instrumenttia tai sisäistä toiston äänilähdettä.
3. Varmista, että tavallinen toisto toimii.
4. Valitse **Tiedosto → Vie → Ääni (File → Export → Audio)**, jos saatavilla.

Jos toisto käyttää ulkoista laitteisto syntetisaattoria, sen ääni voi olla tarpeen tallentaa audio-liittymän kautta. MIDI:n lähettäminen laitteeseen ei kuvaa sen ääntä.

## Säästäminen, hyödyntäminen ja suorituskyky {#saving-recovery-and-performance}

### 48. Miten saan pisteet takaisin törmäyksen jälkeen?

Toipuminen riippuu siitä, mitä Sibelius säästi ennen keskeytystä.

**Liuos**

1. Avaa Sibelius uudelleen ja tarkista toipumiskehotus.
2. Tarkista käytettävissä olevat automaattiset tallennus- tai varmuuskopiotiedostot.
3. Käytä versiosi tallennusasetuksissa tai Reference Guide -oppaassa esitettyjä paikkoja.
4. Vertaa aikaleimat ja musiikin sisältö.
5. Tallenna paras palautettu versio uudella nimellä.

Vältä kirjoittamasta alkuperäistä, kunnes olet vahvistanut, että takaisin saatu tiedosto sisältää tarvitsemasi työn.

### 49. Miksi Sibelius Hidas, jäätyy tai törmäilee?

Syy voi olla tietty pistemäärä, toistokirjasto, kuljettaja tai ohjelmistokomponentti.

**Liuos**

1. Säästä työsi ja käynnistä Sibelius uudelleen.
2. Testaa pieni uusi pistemäärä.
3. Vertaa käyttäytymistä ongelmapisteisiin.
4. Testaa yksinkertaisempaa toistoa.
5. Poista tarpeettomat MIDI- ja äänilaitteet.
6. Tarkista yhteensopivat Sibelius- ja kuljettajapäivitykset.

Jos vain yksi pistemäärä epäonnistuu, työstä kopio ja kaventaa vaikuttaa kulkua. Jos jokainen tulos epäonnistuu, tallenna versiosi, käyttöjärjestelmä ja tarkka virheviesti tukea.

### 50. Miksi joku muu ei voi avata Sibelius-tiedostoani?

Vastaanottajalla voi olla vanhempi versio, rajoitettu painos tai puutteellinen kopio tiedostosta.

**Liuos**

1. Kysy, mitä Sibeliuksen versiota ja painosta he käyttävät.
2. Jos tuet, käytä **Tiedosto → Export → Edellinen versio (File → Export → Previous Version)**:tä.
3. Lähetä viety kopio ja pidä alkuperäinen.
4. Tarkista, että siirretty tiedosto on valmis.
5. Jos he käyttävät toista notaatiosovellusta, harkitse MusicXML:ää.

Vanhempi-versio vienti ja MusicXML voi muuttaa muotoilua tai tuettomia ominaisuuksia. Lähetä PDF muokattavissa olevan tiedoston vieressä visuaalisena referenssinä.

## Nopea vianmääritys tarkistuslista {#quick-troubleshooting-checklist}

Ennen suurten muutosten tekemistä:

1. Tallenna erillinen kopio pisteet.
2. Tunnista, vaikuttaako ongelma yhteen pisteeseen vai jokaiseen pisteeseen.
3. Tarkista valitut ääni- ja MIDI-laitteet.
4. Tarkista soiton asetukset.
5. Tarkasta viimeaikaiset notaatio tai layout muutokset.
6. Käynnistä Sibelius uudelleen tarvittaessa.
7. Tarkista versio ja käyttöjärjestelmän yhteensopivuus.
8. Vaihda yksi asetus kerrallaan ja testaa tulos.

## Virallinen Sibelius-tuki {#official-sibelius-help}

Saat erityisesti versiosi ja painoksesi käyttöohjeet, jotka ovat mukana hakemuksen mukana toimitetussa **Sibeliuksen viiteopas (Sibelius Reference Guide)**:ssä.

- [Avid Sibelius Opi ja tue](https://www.avid.com/sibelius/learn-and-support)
- [Sibelius-julkaisutiedot](https://www.avid.com/resource-center/whats-new-in-sibelius)

Kun pyydät apua, ota mukaan Sibelius-versio, käyttöjärjestelmä, toistolaite, tarkka virheviesti ja se, vaikuttaako ongelma yhteen pisteeseen vai kaikkiin pisteisiin.


---

## Sibelius-sivustojen lisensointi- ja asennusapu kouluille {#sibelius-site-licensing-and-installation-help-for-schools}

Sibeliuksen johtaminen koulun tai yliopiston halki sen sijaan, että vianetsin yhtä työpistettä? Softplanet Productions:llä on 25 vuoden kokemus Yhdistyneen kuningaskunnan musiikkiosastojen tukemisesta. [Vertaa Sibelius-sivuston lisenssivaihtoehtoja ja pyydä tarjousta](/fi/services/sibelius-site-licenses/) uusille asennuksille, lisäistuimille tai verkon käyttöönotolle.
