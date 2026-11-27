---
title: 'Sibelius hibaelhárítás: 50 gyakori probléma megoldása'
description: Találj megoldást a lejátszás, a MIDI, a hangbevitel, a kottaelrendezés, a PDF-export és a fájl-visszaállítás
  hibáira.
draft: false
showTableOfContents: false
---

Keressen gyakorlati megoldásokat 50 közös Sibelius problémák, a hiányzó lejátszási hang, a kínos pontosztás és PDF exportproblémák.

Ezek az utasítások az asztali Sibelius. Menü nevek és a rendelkezésre álló funkciók változatos verziók és kiadványok, beleértve a Sibelius First, Artist és Ultimate. Ha egy parancs hiányzik, keresni a nevét Sibelius, vagy nézd meg a Reference Guide az Ön verziója.

Mielőtt jelentős változtatásokat eszközölne, mentsen meg egy külön másolatot a pontszámáról.

## Ugrás egy kategóriára

- [Hang és lejátszás](#sound-and-playback)
- [MIDI és Note Input](#midi-and-note-input)
- [Notation, Voices and Ritmus](#notation-voices-and-rhythm)
- [A pontszám elrendezése és elhelyezése](#score-layout-and-spacing)
- [Alkatrész, Nyomdai és Exportáló](#parts-printing-and-exporting)
- [Mentés, helyreállítás és teljesítmény](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Hang és lejátszás {#sound-and-playback}

### 1. Miért nincs hang Sibeliusban?

Ha a lejátszási sor mozog, de nem hall semmit, ellenőrizze az audió kimenetet, lejátszási konfigurációt és a Mixer.

**Oldatos injekció**

1. Erősítse meg, hogy hangszórói vagy fülhallgatói más alkalmazásban működnek.
2. Megnyitás **Playback Devices** január 1-jétől június 30-ig **Lejátszás** Tap.
3. Megnyitás **Audio Engine Options** és válassza ki a tervezett audió felületet.
4. Válassza ki a lejátszási beállítást, amely egy telepített hangforrást használ.
5. Nyissa ki a **Keverék** és ellenőrizze a tompított csatornákat, a talpas műszereket vagy az alacsony főtérfogatot.

Ha a Sibelius elindítása után csatlakoztatott egy audió interfészt, indítsa újra a programot a csatlakoztatott interfésszel.

**Kapcsolódó:** Lásd a 2., 5. és 6. problémát.

### 2. Miért játszik Sibelius rossz hangszórókon vagy fejhallgatókon keresztül?

A Sibelius más kimenetet is használhat, mint az operációs rendszer alapértelmezett eszköze.

**Oldatos injekció**

1. Csatlakoztassa és kapcsolja be a szükséges eszközt.
2. Megnyitás **Audio Engine Options**.
3. Válassza ki a megfelelő felületet.
4. Ellenőrizze a kimeneti útvonalat, ha az interfész több kimenettel rendelkezik.
5. Visszaszámlálás.

Ha az eszköz hiányzik, zárja be Sibelius-t, és erősítse meg, hogy az operációs rendszer felismeri, mielőtt újra megnyitná a programot.

A Bluetooth eszközök további késedelmet okozhatnak.

### 3. Miért van Playback Crackle, kattintson vagy szakítás?

Egy audió puffer, hogy túl kicsi okozhat megszakított lejátszás, különösen az igényes hangkönyvtárak.

**Oldatos injekció**

1. Megnyitás **Audio Engine Options**.
2. Növelje a pufferméretet egy lehetséges lépéssel.
3. Játsszon egy igényes átjárót, és hallgassa meg újra.
4. Zárja le a szükségtelen alkalmazásokat.
5. Ellenőrizze, hogy az interfész meghajtó támogatja-e az operációs rendszert.

Ismételje meg, amíg a lejátszás stabil. Ha a hang továbbra is torzult, akkor ellenőrizze a keverőszintek: vágás és pufferproblémák igényel különböző javításokat.

### 4. Miért van egy késés, amikor játszom a MIDI billentyűzet?

A kulcs megnyomása és a hang hallása közötti időt latenciának hívják.

**Oldatos injekció**

1. Megnyitás **Audio Engine Options**.
2. A pufferméret fokozatos csökkentése.
3. Minden váltás után ellenőrizze a billentyűzetet.
4. Ha kattanás jelenik meg, enyhén növelje a puffert.

A Windows-on használja az interfész gyártó ASIO meghajtóját, ha rendelkezésre áll. A MacOS-on használja a megfelelő Core Audio eszközt.

Kerülje a Bluetooth fejhallgatót, ha a billentyűzet reagálását ellenőrizni kell.

### 5. Miért van egy hangszer csendes?

Az egyetlen csendes személyzet általában a Mixer beállításaira, hangkiosztására vagy lejátszási tulajdonságaira mutat.

**Oldatos injekció**

1. Nyissa ki a **Keverék**.
2. Ellenőrizze, hogy a műszer nem tompult-e.
3. Ellenőrizd, hogy van-e másik hangszer.
4. Erősítse meg, hogy a személyzet megfelelő hanggal rendelkezik.
5. Válassza ki az érintett jegyzetet, és ellenőrizze a **Lejátszás a passzon** beállítások a **Felügyelő**, amennyiben rendelkezésre áll.

Keressen egy nem kívánt hangszercserét is a csendes átjáró előtt.

### 6. Miért tűnnek el a Sibelius hangok vagy miért nem elérhetőek?

A jelölési alkalmazás és a hangkönyvtár külön telepítést igényelhet.

**Oldatos injekció**

1. Jelölje be, melyik hangkönyvtárat várja a lejátszási konfigurációja.
2. Erősítse meg, hogy a könyvtár be van telepítve.
3. Szükség esetén szerezze be az Avid számlájáról a megfelelő telepítőt.
4. Ha elmozdította a könyvtárat, kövesse a támogatott eljárást a hely frissítéséhez.
5. Sibelius újraindítása és a megfelelő lejátszási konfiguráció kiválasztása.

Ne feltételezzük, hogy a fő alkalmazás újratelepítése is újra telepíteni egy nagy hangkönyvtár.

### 7. Miért játszik egy eszköz rossz hangot?

A személyzet műszerének meghatározása vagy a Mixer megbízása nem feltétlenül egyezik meg az elvárt hanggal.

**Oldatos injekció**

1. Ellenőrizzék, hogy melyik eszközt jelölték ki a személyzetre.
2. Keressen hangszerváltozásokat a pontszámban.
3. Ellenőrizze a kijelölt lejátszási beállításokat.
4. A személyzet megbízható megbízatásának felülvizsgálata a következő témában: **Keverék**.

Ha meg kell változtatni az eszköz maga, hozzon létre egy megfelelő **Eszközmódosítás**A személyzet átnevezése önmagában nem változtatja meg zenei definícióját vagy lejátszási hangját.

### 8. Miért nem Dynamics Lejátszás?

A nem megfelelő szövegstílusú vagy rossz pozícióba kapcsolt dinamikák nem eredményezhetik a kívánt eredményt.

**Oldatos injekció**

1. Válassza ki azt a jegyzetet, ahol a dinamikának el kell kezdődnie.
2. Létrehozás **Kiprózó szöveg**.
3. Helyezze be a dinamikus a szöveg stílus szó menü.
4. Ellenőrizze, hogy a tervezett személyzet és a beat.
5. Játszd le az átjáró kissé a jelölés előtt.

Ha a dinamikus még mindig kevés hatása van, tesztelje egy másik lejátszási hang. Hangkönyvtárak különböznek, hogyan reagálnak a dinamikára.

### 9. Miért hagyja figyelmen kívül Sibelius a Tempo jelölést?

Az "Allegro" feliratú cím nem feltétlenül működik lejátszási tempó utasításként.

**Oldatos injekció**

1. A jelölés létrehozása **Tempo szöveg** vagy a megfelelő **Metronóm jelölése** szöveges stílus.
2. A pontos sebesség, tartalmazza az elismert beat egység és tempo érték.
3. Ellenőrizze a rögzítési helyzetét.
4. Felülvizsgálat **Teljesítmény** beállítások, ha a lejátszás szándékosan megváltoztatja a tempót.

Ha az egész pontszám túl gyorsan vagy lassan hangzik, ellenőrizze a lejátszási tempó vezérlését is.

### 10. Miért ismétlések vagy első és második befejezések játszik rosszul?

Playback függ ismétlődő szerkezet, nem csak a vizuális megjelenését egy sor vagy szöveges címke.

**Oldatos injekció**

1. Használják a megfelelő ismétlődő korlátokat.
2. Végsorok létrehozása a megfelelő első és második vonaltípusokkal.
3. Ellenőrizze, hogy minden befejezés a tervezett bároknál kezdődik és ér véget.
4. Ismételd meg a lejátszási beállításokat és a kézi ismétléseket.
5. A lejátszást az ismétlődő szakasz előttről teszteljük.

Használjon elismert ismétlődő utasításokat ahelyett, hogy a szokásos szöveg, hogy csak úgy néz ki, mint "D.S" vagy "D.C"

## MIDI és Note Input {#midi-and-note-input}

### 11. Miért nem ismeri fel Sibelius a MIDI billentyűzetemet?

Az eszköz kikapcsolható, nem áll rendelkezésre az operációs rendszerre, vagy Sibelius-ban kikapcsolható.

**Oldatos injekció**

1. Csatlakoztassa a billentyűzetet, mielőtt kinyitja Sibelius.
2. Megnyitás **Előirányzatok → Bemeneti eszközök**.
3. A megfelelő eszköz engedélyezése.
4. Játssz egy kulcsot, és ellenőrizze a bemeneti mutató.
5. Ha a készülék hiányzik, vizsgáljon meg egy másik USB portot vagy kábelt.

Ha egy csomópont van benne, próbálja meg közvetlenül a számítógéphez csatlakoztatni. Telepítse a gyártó vezetőjét, ha a billentyűzetnek szüksége van rá.

### 12. Miért lehet hallani a billentyűzetem, de nincs megjegyzés megjelenés?

Egy hang meghallása nem jelenti azt, hogy Sibelius most lép be a jelölésbe. A billentyűzet önállóan is létrehozhatja a saját hangját.

**Oldatos injekció**

1. Válassza ki a többi vagy a pozíció, ahol a bemenet kell kezdeni.
2. Jegyzetbeviteli mód.
3. Válassza ki az időtartamot a **Billentyűzet**.
4. Játsszon egy cetlit.

Élő felvételhez **Flexi-time** inkább, mint a step-time input. Ellenőrizze, hogy a billentyűzet be van-e kapcsolva **Bemeneti eszközök** ha a jegyzetek még mindig nem jelennek meg.

### 13. Miért kerültek be a rossz Octave-ba?

Egy oktávváltás származhat a billentyűzet beállítások vagy a műszer jelölési egyezmények.

**Oldatos injekció**

1. Ellenőrizze a billentyűzet oktávját, és ültesse át a vezérlőket.
2. Egy normális zongorista személyzet tesztje.
3. Ellenőrizze az eredeti személyzethez rendelt eszközt.
4. Hasonlítsa össze a concert- point és a transposing- score nézeteket.

Néhány hangszer, beleértve a gitár és a pikoló, hagyományosan hangzik egy oktávot távol az írott jegyzetek. Más átültető hangszerek eltolódik különböző időközönként.

### 14. Miért kerülnek be kétszer a MIDI feljegyzések?

Duplikált bemenet akkor fordulhat elő, amikor ugyanaz a teljesítmény eléri Sibelius több MIDI útvonalon.

**Oldatos injekció**

1. Megnyitás **Bemeneti eszközök**.
2. Ideiglenesen csak a kívánt billentyűzet bemenet engedélyezhető.
3. Szüntesse meg a felesleges MIDI-kapcsolatokat.
4. Ellenőrizze a MIDI- routing alkalmazásokat vagy az interfész beállításokat.
5. Teszteljenek még egy hangot.

Ha megduplázódott hangot hall, de csak egy hang jelenik meg, vizsgálja meg az audió monitoring és a billentyűzet **Helyi ellenőrzés** Helyette beállítás.

### 15. Miért Rugalmas-idő felvétel Producing Messy Reterms?

Élő bemenet lehet értelmezni túl pontosan a zene kívánt, létrehozva nem kívánt rövid jegyzetek, nyugszik, vagy kétlábú.

**Oldatos injekció**

1. Megnyitás **Rugalmas időbeállítások**.
2. Állítsuk be a minimális jegyértéket, hogy megfeleljen az áthaladásnak.
3. Ha nincs rá szüksége, ne legyen túl szigorú.
4. Jegyezze fel a kényelmes tempó egy tiszta kattintás.
5. Jegyezzen fel egy rövid áthaladást, és vizsgálja át, mielőtt folytatná.

A komplex zenéhez a lépés- idő bemenet kevesebb korrekciót igényelhet, mint az élő felvétel.

### 16. Hogyan léphetek be az akkordokba külön megjegyzések helyett?

Egymás után lejátszott jegyzetek lépésekben-időben általában egymást követő ritmikus pozíciókat foglalnak el.

**Oldatos injekció**

A MIDI bemeneténél a szükséges időtartam kiválasztását követően játszd együtt az akkord jegyzeteit.

Számítógépes billentyűzet bemenetéhez:

1. Írja be az első megjegyzést.
2. Válassza ki.
3. Használja a intervallum parancsokat, hogy a jegyzetek fölé vagy alá.

Ellenőrizzük, hogy a kapott jegyzetek egy szár és időtartam.

### 17. Hogyan írhatom be a jegyzeteket numerikus billentyűzet nélkül?

Használhatod Sibelius képernyőjén **Billentyűzet** Még akkor is, ha a laptopodnak nincs külön számtáblája.

**Oldatos injekció**

1. Megjeleníti a **Billentyűzet** a panelek vezérléséről.
2. Kattintson a kívánt időtartamra vagy csuklós.
3. Adja meg a beállítások a számítógép billentyűzet vagy a MIDI billentyűzet.
4. A rendelkezésre álló keyboard- rövidítős szettek felülvizsgálata **Előirányzatok**.

Azt is testreszabhatja rövidítések, vagy csatlakoztassa USB numerikus billentyűzet, ha adja meg jelölést gyakran.

### 18. Miért cseréli ki az új feljegyzéseket a meglévő zenére?

Megjegyzés: a bemenet szerkeszti a zenét a kiválasztott ritmikus pozícióban; nem hoz létre automatikusan extra sávokat minden új ötlethez.

**Oldatos injekció**

1. A nem kívánt szerkesztés visszavonása.
2. Adja hozzá a szükséges rudakat, mielőtt belépne az új szakaszba.
3. Válassza ki az első pihenőt az új bárokban.
4. Kezdje meg a feljegyzést.

Ha szeretne egy további független ritmust ugyanazon a személyzeten, használjon egy másik hangot helyett helyettesíti a meglévő hangot.

## Notation, Voices and Ritmus {#notation-voices-and-rhythm}

### 19. Hogyan írjam vagy töröljem az egész rudakat?

A jegyzetek és a sávok törlése különböző műveletek.

**Oldatos injekció**

A bárok hozzáadásához használja **Haza → Bars → Hozzáadás** és válassza ki a megfelelő lehetőséget.

A sávok törlése:

1. Készíts egy **rendszer kiválasztása** Az összes rúddal teli rácsok.
2. Ellenőrizze, hogy a kiválasztás tartalmazza-e pontosan azokat a sávokat, amelyeket el szeretne távolítani.
3. A kiválasztás törlése.

Egy normál átjáró kiválasztásával a zenei tartalmakat törölhetjük, miközben a bárokat a helyükön hagyjuk.

### 20. Hogyan lehet megváltoztatni az idő aláírás nélkül váratlanul mozgó megjegyzések?

Változó óra miatt Sibelius átszervezi a meglévő zenét új bárokba.

**Oldatos injekció**

1. Mentse meg a pontszám egy példányát.
2. Válassza ki azt a pontot, ahol a változásnak el kell kezdődnie.
3. Nyissa ki a **Időaláírás** Irányítás.
4. A meglévő rudak átírásának lehetősége.
5. Alkalmazza a változást, és ellenőrizze az érintett átjáró.

Az átírás kikapcsolása megőrzi a meglévő bárszerkezetet, de olyan rudakat hagyhat, amelyek időtartama nem egyezik a megjelenített mérővel. Ezt az opciót szándékosan használja.

### 21. Hogyan hozzak létre egy Pickup Bar vagy Anacrusis?

A pickup egy lerövidített nyitó bár, mint például egy ütés előtt az első teljes bar egy darab 4 / 4.

**Oldatos injekció**

Amikor a nyitóidő aláírás, használja a **pickup / upbeat** lehetőség, és adja meg annak időtartamát.

Egy meglévő pontszámért hozzon létre egy **szabálytalan sáv** a szükséges hosszúságot a bargeneráció vezérlésével, majd óvatosan továbbítsa a nyitó zenét.

Ellenőrizze a bárszámozást és az utolsó sávot, ha a darabhoz kiegészítő rövidített befejezés szükséges.

### 22. Hogyan állítsak két független jelöltet az egyik személyzetre?

Használjon külön hangokat egyidejű zenei sorok.

**Oldatos injekció**

1. Adja meg az első sort **Hang 1**.
2. Válassza ki a második sor kiindulási helyzetét.
3. Válasszon **Hang 2** július 1. **Billentyűzet**.
4. Írja be a jegyzeteit, és pihenjen függetlenül.

Az 1-es és 2-es hangok általában ellentétes irányokat biztosítanak. Csak akkor használjon további hangokat, ha a jelölésnek szüksége van rájuk.

Ne használjon akkordot, ha a jegyzetek különböző ritmusokat igényelnek.

### 23. Miért jelennek meg az Extra Rests-ek a pontszámomban?

Minden aktív hangnak szüksége van a saját ritmikus szerkezetére, így a további hangok további pihentetéseket vezethetnek be.

**Oldatos injekció**

1. Válasszon ki egy váratlan pihenést, és azonosítsa a hangját.
2. Ellenőrizze, hogy ez a hang tartalmaz-e szükséges jegyzetek máshol a bárban.
3. Adott esetben távolítson el egy véletlenül létrehozott hangot.
4. A pihenést csak akkor rejtse el, ha zeneileg érvényes erre.

Kerülje a rejtőzködést csak azért, hogy elrejtse a hiányos ritmust. Először győződjön meg róla, hogy minden hang elszámolja a kívánt bar időtartamot.

### 24. Hogyan hozzak létre hármasikreket és egyéb Tupleteket?

Tuplets osztja ritmikus span eltérő a normál csoportosítás.

**Oldatos injekció**

1. Válasszon ki egy jegyzetet vagy pihenjen a kívánt bázisidőtartammal.
2. Felhasználás **Megjegyzés Bemenet → Tuplets**.
3. Válassza ki a szükséges tuplet vagy adja meg az egyéni arány.
4. Adja meg a többi jegyzetet.

Egy átlagos nyolcjegyű hármas, kezdődik egy nyolcjegyű érték. Ha a tuplet foglalja el a rossz span, visszavonja, és ellenőrizze a kezdő időtartam és arány.

### 25. Miért vannak rosszul beágyazva a jegyzeteim?

A beam csoportosítás a mérőtől, a csoportosítási beállításoktól és a manuális sugár bármely változásától függ.

**Oldatos injekció**

1. Nézd meg, hogy van-e időjelzés.
2. Válassza ki az érintett megjegyzéseket.
3. Használjuk a **Billentyűzet** a gerendavezérlés indítására, folytatására vagy megszakítására, szükség szerint.
4. Egy visszatérő kérdés, állítsa csoportosítási beállítások helyett korrigálni minden gerenda manuálisan.

Például, 6 / 8 általában csoportosítja nyolcadik jegyzetek két csoport három, míg más mérők szüksége lehet egy másik mintát.

### 26. Hogyan sugározhatom a jegyzeteket két széken keresztül?

A Cross-staff jelölés hasznos a két kéz között megosztott zongoraszekrények esetében.

**Oldatos injekció**

1. Adja meg a származó személyzeten lévő részt.
2. Válassza ki azokat a megjegyzéseket, amelyeket a másik személyzeten fel kell tüntetni.
3. Használjuk a **Cross-staff Notes** parancsok, hogy a kijelző fölé vagy alá.
4. A szárak, gerendák és a személyzet távolsága áttekintése.

A Cross-staff mozgalom megőrzi a jegyzetek kapcsolatát az eredeti hangjukkal. A szokásos vágás és paszta átmozgatja a zenét egy másik személyzethez, és nem feltétlenül ugyanazt a jelölést adja elő.

### 27. Miért olyan a nyakkendőm, mint egy szlopa?

A nyakkendők és a slurok különböző zenei jelentéssel bírnak.

**Oldatos injekció**

A **nyakkendő** csatlakozzon az egymást követő megjegyzések azonos pályán egy hosszú ideig. Alkalmazza azt a **Billentyűzet** Kötözd meg!

A **Szürke** egy kifejezést vagy artikulációs jegyzetek. Hozzon létre a **Szürke** Parancs.

Ha egy nyakkendő nem megfelelően kapcsolódik, ellenőrizze a következő jegyzet szurok, véletlen, hang és ritmikus helyzetben.

### 28. Miért hiányoznak a balesetek, vagy miért fogyasztanak?

Sibelius határozza meg a véletlen megjelenítést a kulcs aláírás, korábbi jegyzetek a bárban és jelölési beállítások.

**Oldatos injekció**

1. Nézd meg a kulcs aláírását.
2. Ellenőrizzük a szurok korábbi előfordulásait ugyanabban a bárban.
3. Válassza ki a jegyzetet, és ellenőrizze balesetét a **Billentyűzet**.
4. Adjon hozzá egy véletlen figyelmeztetést, ha javítja az olvashatóságot.

Ne változtassa meg a tényleges szurkot csak azért, hogy egy szimbólum megjelenjen. A véletlen megjelenítésnek és a zenei dobásnak egyaránt helyesnek kell lennie.

### 29. Hogyan változtathatom meg egy megjegyzés Enharmonikus helyesírását?

A szurok lehet beírni, mint egy éles, ha egy lapos helyesírás jobban illeszkedik a harmónia.

**Oldatos injekció**

1. Válassza ki a jegyzetet vagy áthaladást.
2. Használjuk a **Respell** Parancs.
3. Ellenőrizze a helyesírás ellen az akkord és a kulcs.

Például egy F- éles hangú jegyzetet G- lapos szövegként kell leírni egy adott harmonikus összefüggésben.

A respelling megőrzi a hangszórást. A változtatások leadása és egy másik probléma megoldása.

### 30. Miért piros a jegyzet Sibelius-ban?

A piros notebook általában azt jelzi, hogy a hangszerre meghatározott tartományon kívül eső szögek vannak.

**Oldatos injekció**

1. Ellenőrizze a személyzethez rendelt eszközt.
2. Tekintse át az írott és hangzó dobásokat.
3. Ellenőrizze a műszerek hatótávolságának beállítását.
4. Döntse el, hogy az átjáró alkalmas-e a kívánt játékosnak.

A tartományjelzés nem jelenti automatikusan azt, hogy a jelölés hibás. A szín elrejtése azonban nem teszi praktikussá a lejátszható jegyzetet.

## A pontszám elrendezése és elhelyezése {#score-layout-and-spacing}

### 31. Hogyan férek több vagy kevesebb bárok egy rendszer?

Sibelius általában automatikusan számolja ki a rendszer hosszát, de fontos töréseket irányíthat.

**Oldatos injekció**

1. Válassza ki azokat a sávokat, amelyeknek egy rendszeren kell osztozniuk.
2. Felhasználás **Elrendezés → Format → Make into System**.
3. Vizsgálja meg az eredményt a zsúfolt jegyzetek és a szöveg.

Alternatívaként válasszon egy vonallal, és adjon hozzá egy **Rendszertörés**.

Ha sok rendszer zsúfolt, vizsgálja felül a személyzet mérete, oldalszélek és jegyzetek távolság helyett több rúd minden sorban.

### 32. Miért nem fogja Sibelius visszaforgatni a pontomat?

A meglévő formázózárak és törések megakadályozhatják az automatikus elrendezés megváltoztatását.

**Oldatos injekció**

1. A megjelenítési jelek megjelenítése.
2. Keressen rendszertöréseket, oldaltöréseket és zárt rendszereket.
3. Válassza ki az érintett átjárót.
4. Felhasználás **Formátum feloldása** adott esetben.
5. Csak a szükséges szünetek.

Elõször akkor mentsen el egy példányt, ha a pontszám már gondosan előkészített oldal fordulók vagy kiadvány elrendezés.

### 33. Miért vannak hatalmas kapcsok a Staves között?

Nagy hézagokat okozhat a kézi mozgás, az ütközés elkerülése vagy a vertikális indoklás.

**Oldatos injekció**

1. Válassza ki az érintett rendszereket.
2. Felhasználás **Optimalizálja a személyzeti űrt**.
3. Keressen dalszövegeket, dinamikákat, vonalakat vagy szövegeket, amelyek elfoglalják a rést.
4. Ellenőrizze a függőleges indokolási beállításokat, ha a tárcsa egy egész oldalra oszlik.

Ha a korábbi manuális változások az ok, használja a megfelelő személyzet-space reset parancs, mielőtt újra optimalizálja.

### 34. Miért Dynamics, Lyrics vagy SMS ütközik?

Az automatikus ütközéselhárítás letiltható, felülbírálható vagy nem lehet megoldani a zsúfolt elrendezést.

**Oldatos injekció**

1. Ellenőrizd! **Magnetic Layout** az érintett tárgyak esetében engedélyezett.
2. A szükségtelen kézi beállítás újraindítása.
3. Optimalizálja a személyzet távolságát.
4. Szükség esetén nagyobb vízszintes teret kell hagyni a rendszernek.
5. Kis kézi beállítások csak az automatikus elrendezés ellenőrzése után végezhetők.

A túl sok zenét tartalmazó rendszernek kevesebb rácsra lehet szüksége, függetlenül az ütközési beállításoktól.

### 35. Hogyan állíthatom vissza az egyenetlen vízszintes jegymegjelenítést?

A hangjegyek vagy a térközök többszöri megváltoztatása következetlennek tűnhet.

**Oldatos injekció**

1. Válassza ki az érintett átjárót.
2. Válasszon **Megjelenés → Visszaállítási megjegyzések → Áttekintés**.
3. Vizsgáljuk meg a szöveget, akkord szimbólumokat és baleseteket.
4. A rendszer megszakad, ha az átjáró zsúfolt marad.

Ha egy adott objektum még mindig szokatlanul messze ül a jegyzetétől, ellenőrizze az egyéni helyzetét is.

### 36. Hogyan rejtsem el az üres székeket?

A fel nem használt standok elrejtése megkönnyítheti egy nagy együttes olvasását.

**Oldatos injekció**

1. Válassza ki az érintett rendszereket vagy átjárókat.
2. Válasszon **Elrendezés → Rejtett Staves → Rejtsd el az üres Staves**.
3. Ellenőrizze, hogy minden szükséges eszköz látható-e.

A jegyzeteket vagy más releváns tárgyakat tartalmazó személyzet nem minősülhet üresnek. Vizsgálja meg, mielőtt bármit törölne.

Felhasználás **Üres szárak megjelenítése** amikor újra meg kell jelennie a személyzetnek.

### 37. Hogyan változtathatom meg a hangszerek rendjét?

A hangszer címkéjének megváltoztatása nem mozgatja a személyzetet.

**Oldatos injekció**

1. Megnyitás **Home → Eszközök → Hozzáadás vagy eltávolítás**.
2. Válassza ki a hangszer a pontszám hangszer lista.
3. Fel vagy le.
4. Erősítse meg a változást.
5. Felülvizsgálati zárójelek, fogszabályzó és vonórudas csoportosítás.

Válassza ki a sorrendet, amely megfelel az együttes, és segít a zenészek megtalálni a részüket gyorsan.

### 38. Miért tévednek a műszerek nevei vagy miért tűntek el?

Az eszköznevek eltérhetnek az első és a későbbi rendszerek között.

**Oldatos injekció**

1. Ellenőrizze a hangszer teljes és rövid nevét.
2. A megjelenített név vagy hangszer beállításainak módosítása, ha szükséges.
3. Tekintse át a pontszám hangszerek név kijelző beállításokat.
4. Annak ellenőrzése, hogy egy műszeres módosítás vezet-e be egy másik címkét.

Használja a teljes nevet, ahol az olvasóknak azonosításra és egyértelmű rövidítésre van szükségük a későbbi rendszereken.

### 39. Miért van egy váratlan üres oldal?

Az üres oldal egy speciális oldaltörésből, címoldal beállításból vagy importált formázásból származhat.

**Oldatos injekció**

1. A megjelenítési jelek megjelenítése.
2. Vizsgálja meg az előző oldal végét.
3. Ellenőrizze a **Special Page Break** ami üres oldalakat helyez el.
4. Távolítsa el vagy állítsa be a felelős törést.
5. Az elrendezés megváltozása után a következő oldalakat tekintse át.

A formázás által létrehozott oldal eltávolításához ne törölje a zenét.

### 40. Miért kezdődik a bár számokkal, vagy miért helytelenül újraindul?

A felvevő-, mozgáshatár- vagy véletlen barszámváltozás befolyásolhatja a számozást.

**Oldatos injekció**

1. Vizsgálja meg, hogy a számozás mikor válik helytelenné.
2. Ellenőrizze a **A bárszám módosítása**.
3. Javítsa ki vagy távolítsa el a változást.
4. Tekintse át a barszámkijelző beállításait.
5. Ellenőrizze számozás mind a pontszámot, mind az alkatrészeket.

Döntse el, hogy a nyitó felvevőt számozatlan vagy megszámolatlan legyen, majd következetesen alkalmazza ezt az egyezményt.

## Alkatrész, Nyomdai és Exportáló {#parts-printing-and-exporting}

### 41. Hogyan hozzak létre egyéni eszközöket?

**Dinamikus alkatrészek** lehetővé teszi, hogy a pontszám és a hangszeres részek osztozzanak a zenei tartalmakon.

**Oldatos injekció**

1. Nyissa ki a **Alkatrész** Irányítás.
2. Ellenőrizze, hogy mely alkatrészek léteznek már.
3. Nyissa ki a szükséges részt.
4. Amennyiben támogatja, hozzon létre egy új részt, és válassza ki a tárcsa kell tartalmaznia.
5. Állítsa be a játékos elrendezését.

Tartsa zenei szerkesztések a kapcsolódó pont- és -alkatrészek munkafolyamat helyett fenntartása külön fájlokat szükségtelenül.

### 42. Miért van az én műszeres része egy másik elrendezése a pontszám?

Az alkatrészekre független elrendezési követelmények vonatkoznak, beleértve az oldalfordítást, a személyzet méretét és a rendszertöréseket.

**Oldatos injekció**

1. Nyissa ki az érintett részt.
2. Ellenőrizzék le! **Dokumentum beállítása**.
3. Az automatikus és a kézi törések áttekintése.
4. Közvetlenül állítsd be a rész elrendezését.

Eltérések elrendezése általában várható. Ha a jegyzetek vagy ritmusok tűnnek rossz, ellenőrizze, hogy Ön megtekinti a megfelelő kapcsolódó részt, és a tartalmát nem volt elrejtve.

### 43. Miért tűnnek el a szorzók vagy oszlanak szét a részeim?

A többest oszthatja zenei utasítások vagy tárgyak, hogy meg kell maradni látható.

**Oldatos injekció**

1. Erősítse meg, hogy a szorzók engedélyezettek a részben.
2. Vizsgáld meg a rácsokat, ahol a többesszám eltörik.
3. Nézd meg a próbajeleket, szövegeket, vonalkódokat, a legfontosabb változtatásokat és az időaláírásokat.
4. A véletlen tárgyakat csak azután távolítsák el, hogy megerősítették, hogy azok feleslegesek.

Egyes szünetek helyesek, mert a játékosoknak meg kell nézniük egy utasítást.

### 44. Hogyan hozhatok létre jobb oldalakat részben?

A játékosoknak elég idő kell, hogy lapozzanak, anélkül, hogy kihagynák a következő bejegyzést.

**Oldatos injekció**

1. Nyisd ki az egyes részt.
2. Keressen pihenőt, ami alkalmas az oldalkanyarokhoz.
3. Az oldaltörések beszúrása gyakorlati helyzetekben.
4. Áttekintés automatikus verseny-turn opciók, ha rendelkezésre áll.
5. Ellenőrizze az utolsó oldalszámot és a rendszertávolságot.

Kerülje el, hogy rendkívül zsúfolt oldalak csak kényszeríteni a turn. Tesztelje az elrendezés a játékos szemszögéből.

### 45. Miért van a PDF a rossz méret vagy a Margins?

A pontszám beállítása és a nyomtatási vagy exportbeállítások nem egyeznek.

**Oldatos injekció**

1. Ellenőrizze az oldal méretét és az orientációt **Dokumentum beállítása**.
2. Ellenőrizd a szélességet és a személyzet méretét.
3. Igazolja, hogy exportálja a tervezett pontszámot vagy részt.
4. Használjon építmény- PDF export, ha van.
5. Nyissa meg a PDF és ellenőrizze annak oldalméreteit.

A nyomtatás során ellenőrizze a papír méretét és méreteit külön. A "Fit to page" megváltoztathatja a végleges nyomtatott személyzet méretét.

### 46. Miért vannak a zene szimbólumok vagy betűk rossz a PDF?

Hiányzó betűtípusok, helyettesítések vagy fond- kapcsolódó exportproblémák megváltoztathatják a megjelenését jelölések.

**Oldatos injekció**

1. Hasonlítsa össze a PDF a pontszámot a képernyőn.
2. Erősítse meg, hogy a szükséges zene és szöveges betűtípusok telepítve vannak.
3. Próbálja Sibelius építményét PDF export, ha rendelkezésre áll.
4. Nyissa meg az eredményt egy másik PDF nézővel.
5. Ha a szimbólumok Sibelius belsejében is tévednek, vizsgáljuk meg az alkalmazás betűtípus-installációját.

Ha csak egy egyedi betűtípus nem működik, teszteljünk egy standard betűtípust a pontszám másolatában.

### 47. Miért nem exportálhatok egy audio fájlt?

Az audio export olyan lejátszási konfigurációt igényel, amely képes hangot adni a számítógépen belül.

**Oldatos injekció**

1. Ellenőrizze a kijelölt lejátszási beállításokat.
2. Támogatott virtuális eszköz vagy belső lejátszó hangforrás használata.
3. Erősítse meg, hogy a megszokott lejátszás működik.
4. Válasszon **Fájl → Export → Hang**, amennyiben rendelkezésre áll.

Ha a lejátszás egy külső hardverszintetizátort használ, a hangot audió interfészen keresztül kell rögzíteni. A MIDI küldése az eszközre nem rögzíti a hangot.

## Mentés, helyreállítás és teljesítmény {#saving-recovery-and-performance}

### 48. Hogyan lehet visszaszerezni a pontszámot után összeomlás?

A felépülés attól függ, mit mentett meg Sibelius a megszakítás előtt.

**Oldatos injekció**

1. Nyissák ki újra Sibelius-t, és keressenek gyógymódot.
2. Vizsgálja meg a rendelkezésre álló automatikus mentési vagy mentési fájlokat.
3. Használja a helyszínen látható a verzió megtakarítási preferenciák vagy Reference Guide.
4. Hasonlítsa össze az időbélyeget és a zenei tartalmat.
5. Mentse meg a legjobb visszanyert verziót egy új név alatt.

Ne írja felül az eredetit, amíg meg nem erősítette, hogy a visszanyert fájl tartalmazza a szükséges munkát.

### 49. Miért sibelius lassú, fagyos vagy összeomlik?

Az ok magában foglalhat egy bizonyos pontszámot, lejátszási könyvtár, meghajtó vagy szoftver komponens.

**Oldatos injekció**

1. Mentsd meg a munkádat, és indítsd újra Sibeliust.
2. Teszteljünk egy kis új eredményt.
3. Hasonlítsa össze a viselkedést a problémás pontszámmal.
4. Teszteljünk egy egyszerűbb lejátszási konfigurációt.
5. A szükségtelen MIDI és audio eszközök kikapcsolása.
6. Ellenőrizze a kompatibilis Sibelius és a illesztőprogram frissítéseit.

Ha csak egy pontszám nem sikerül, dolgozzon egy másolat, és szűkítse le az érintett folyosón. Ha minden pontszám sikertelen, rögzítse a verziót, operációs rendszer és a pontos hibaüzenet támogatást.

### 50. Miért nem tudja valaki más megnyitni a Sibelius fájlt?

A címzett rendelkezhet egy régebbi verzióval, korlátozott kiadással vagy a fájl hiányos másolatával.

**Oldatos injekció**

1. Kérdezd meg, melyik Sibelius verziót és kiadást használják.
2. Támogatás esetén a felhasználás **Fájl → Export → Előző verzió**.
3. Küldje el az exportált példányt, és tartsa meg az eredetit.
4. Ellenőrizze, hogy az átadott fájl teljes-e.
5. Ha egy másik jelölési alkalmazást használnak, fontolják meg a MusicXML használatát.

Older- verzió export és MusicXML megváltoztathatja formázás vagy nem támogatott funkciók. Küldjön PDF mellett a szerkeszthető fájlt, mint egy vizuális referencia.

## Gyors hibaelhárítási ellenőrzőlista

Jelentős változtatások előtt:

1. Mentsen meg egy külön példányt a pontszámból.
2. Azonosítsa, hogy a probléma egy vagy minden pontszámot érint-e.
3. Ellenőrizze a kiválasztott audió és MIDI eszközöket.
4. Ellenőrizze a lejátszási beállítást.
5. Vizsgálja meg a legutóbbi jelölést vagy elrendezési változtatásokat.
6. Helyreállítani Sibeliust, ha szükséges.
7. Ellenõrizze a verziót és az operating- rendszer kompatibilitást.
8. Egyszerre egy beállítást kell megváltoztatni, és tesztelni az eredményt.

## Hivatalos Sibelius Segítség

Az Ön verziójára és kiadására vonatkozó utasításokat lásd a **Sibelius Reference Guide** a kérelemhez mellékelve.

- [Avid Sibelius Ismerje meg és támogassa](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius kiadási információ](https://www.avid.com/resource-center/whats-new-in-sibelius)

Segítségkérés esetén tartalmazza a Sibelius verziót, az operációs rendszert, a lejátszási eszközt, a pontos hibaüzenetet, és azt, hogy a probléma egy vagy minden pontszámot érint-e.


---

## Sibelius telephely engedélyezési és telepítési támogatás iskolák számára

Sibelius menedzselése egy iskolában vagy főiskolán, ahelyett, hogy egy munkaállomás problémamegoldásával foglalkozna? A SoftPlanet Productions 25 éves tapasztalattal rendelkezik az Egyesült Királyság zenei részlegeinek támogatásában. [Hasonlítsa össze a Sibelius webhely licenc opciók és kérjen árajánlatot](/hu/services/sibelius-site-licenses/) új berendezések, kiegészítő ülések vagy hálózati telepítés esetében.
