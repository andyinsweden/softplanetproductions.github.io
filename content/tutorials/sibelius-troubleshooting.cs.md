---
title: 'Sibelius: řešení 50 běžných problémů'
description: Najděte řešení potíží se zvukem, MIDI, zápisem not, sazbou partitury, exportem PDF a obnovou souborů.
draft: false
showTableOfContents: false
---

Najít praktická řešení 50 běžných problémů Sibelius, od chybějící přehrávání zvuku až trapné skóre rozestupy a PDF exportních problémů.

Tyto pokyny jsou určeny pro stolní Sibelius. Názvy menu a dostupné funkce se liší mezi verzemi a vydáními, včetně Sibelius First, Artist a Ultimate. Pokud příkaz chybí, vyhledejte jeho jméno v Sibelius nebo se poraďte s referenční příručkou dodávanou s vaší verzí.

Před provedením velkých změn, uložit samostatnou kopii svého skóre.

## Přeskočit do kategorie

- [Zvuk a přehrávání](#sound-and-playback)
- [MIDI a notový vstup](#midi-and-note-input)
- [Poznámka, hlasy a rytmus](#notation-voices-and-rhythm)
- [Skóre Rozvržení a Spacing](#score-layout-and-spacing)
- [Díly, tisk a export](#parts-printing-and-exporting)
- [Úspora, obnova a výkonnost](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Zvuk a přehrávání {#sound-and-playback}

### 1. Proč není v Sibelia žádný zvuk?

Pokud se řádek přehrávání pohybuje, ale nic neslyšíte, zkontrolujte audio výstup, konfiguraci přehrávání a Mixer.

**Roztok**

1. Potvrďte, že vaše reproduktory nebo sluchátka pracují v jiné aplikaci.
2. Otevřít **Playback Devices** od **Přehrát** Účet.
3. Otevřít **Audio Engine Options** a vyberte zamýšlené audio rozhraní.
4. Vyberte konfiguraci přehrávání, která používá nainstalovaný zdroj zvuku.
5. Otevřete **Směšovač** a zkontrolujte tlumené kanály, sólové nástroje nebo nízký master objem.

Pokud jste po spuštění Sibelius připojili audio rozhraní, restartujte program s připojeným rozhraním.

**Související:** Viz problémy2,5 a6.

### 2. Proč Sibelius hraje přes špatné reproduktory nebo sluchátka?

Sibelius může použít jiný výstup než výchozí zařízení operačního systému.

**Roztok**

1. Připojte a zapněte požadované zařízení.
2. Otevřít **Audio Engine Options**.
3. Vyberte vhodné rozhraní.
4. Zkontrolujte směrování výstupu, pokud vaše rozhraní má několik výstupů.
5. Obnovit přehrávání.

Pokud zařízení chybí, zavřete Sibelius a potvrďte, že operační systém ho rozpozná před opětovným otevřením programu.

Zařízení Bluetooth mohou zavést další zpoždění.

### 3. Proč se přehrávání crackle, klepněte na tlačítko nebo rozchod?

Zvukový buffer, který je příliš malý, může způsobit přerušení přehrávání, zejména s náročnými zvukovými knihovnami.

**Roztok**

1. Otevřít **Audio Engine Options**.
2. Zvyšte velikost bufferu o jeden dostupný krok.
3. Zahrajte si náročnou pasáž a znovu poslouchejte.
4. Uzavřít zbytečné aplikace.
5. Zkontrolujte, zda ovladač rozhraní podporuje Váš operační systém.

Opakujte, dokud není přehrávání stabilní. Pokud zvuk zůstane zkreslený, zkontrolujte také hladiny Mixeru: problémy s odstřihováním a bufferem vyžadují různé opravy.

### 4. Proč je tam zpoždění, když jsem hrát můj MIDI klávesnice?

Čas mezi stisknutím klíče a slyšením zvuku se nazývá latence.

**Roztok**

1. Otevřít **Audio Engine Options**.
2. Postupně snižte velikost pufru.
3. Otestujte klávesnici po každé změně.
4. Pokud se objeví kliknutí, mírně zvyšte buffer.

Na Windows použijte ASIO ovladač výrobce rozhraní, pokud je k dispozici. Na macosu použijte příslušné Core Audio zařízení.

Vyhněte se sluchátka Bluetooth, když potřebujete reagovat na monitorování klávesnice.

### 5. Proč je jeden nástroj tichý?

Jednotný tichý personál obvykle ukazuje na jeho nastavení mixéru, zvukové přiřazení nebo přehrávání.

**Roztok**

1. Otevřete **Směšovač**.
2. Zkontrolujte, zda není nástroj tlumený.
3. Zkontrolujte, zda je jiný nástroj vystřízlivěn.
4. Potvrďte, že zaměstnanci mají přidělený vhodný zvuk.
5. Zvolte postiženou poznámku a zkontrolujte její **Přehrát na přihrávku** nastavení v **Inspektore.**, je-li k dispozici.

Před tichým průchodem také vyhledejte nechtěnou změnu přístroje.

### 6. Proč je Sibelius nezvěstný nebo nedostupný?

Aplikace notace a její zvuková knihovna mohou vyžadovat samostatnou instalaci.

**Roztok**

1. Zkontrolujte, který zvuk knihovna vaše konfigurace přehrávání očekává.
2. Potvrďte, že knihovna je nainstalována.
3. Pokud je to nutné, získejte příslušný instalátor z vašeho účtu Avid.
4. Pokud jste přemístili knihovnu, postupujte podle podporovaného postupu pro aktualizaci jeho umístění.
5. Restartujte Sibelius a zvolte odpovídající konfiguraci přehrávání.

Nepředpokládejte, že přeinstalování hlavní aplikace také přeinstaluje velkou zvukovou knihovnu.

### 7. Proč nástroj hraje špatný zvuk?

Definice nástroje zaměstnance nebo zadání Mixeru nemusí odpovídat zvuku, který očekáváte.

**Roztok**

1. Zkontrolovat, který nástroj je přidělen zaměstnancům.
2. Hledejte změny nástrojů v skóre.
3. Zkontrolujte zvolenou konfiguraci přehrávání.
4. Recenze zvukového zadání zaměstnanců v **Směšovač**.

Pokud potřebujete změnit nástroj sám, vytvořit správné **Změna nástroje**Přejmenování samotného personálu nemění jeho hudební definici ani přehrávání zvuku.

### 8. Proč dynamika nemá vliv na přehrávání?

Dynamika zadaná s nevhodným textovým stylem nebo připojená ke špatné poloze nesmí vést k zamýšlenému výsledku.

**Roztok**

1. Zvolte poznámku, kde by dynamika měla začít.
2. Vytvořit **Výraz Text**.
3. Vložte dynamiku pomocí slovní nabídky textového stylu.
4. Zkontrolujte, zda je připojena k zamýšlenému personálu a porazit.
5. Přehrajte průchod z mírně před označením.

Pokud má dynamika stále malý efekt, vyzkoušejte jiný zvuk přehrávání. Zvukové knihovny se liší v tom, jak reagují na dynamiku.

### 9. Proč Sibelius ignoruje mé Tempo značení?

Nadpis s nápisem "Allegro" nemusí nutně fungovat jako návod k přehrávání.

**Roztok**

1. Vytvořit označení s **Tempo Text** nebo vhodné **Metronome Mark** textový styl.
2. Pro přesnou rychlost, zahrnují uznávanou beat jednotku a tempo hodnotu.
3. Zkontrolujte jeho připevňovací polohu.
4. Přezkum **Výkonnost** nastavení, pokud přehrávání záměrně mění tempo.

Pokud celé skóre zní důsledně příliš rychle nebo pomalu, zkontrolujte také tempo přehrávání.

### 10. Proč se opakování nebo první a druhé konce hrát špatně?

Přehrávání závisí na opakující se struktuře, nejen na vizuálním vzhledu řádku nebo textového štítku.

**Roztok**

1. Používejte správné opakující se barlines.
2. Vytvořit koncové řádky s použitím příslušných prvních a druhých koncových typů řádků.
3. Zkontrolujte, zda každý konec začíná a končí na zamýšlených tyčích.
4. Překontrolujte opakované nastavení přehrávání a libovolnou manuální opakovanou sekvenci.
5. Test přehrávání z doby před opakovaným úsekem.

Použít uznávané opakující se instrukce spíše než obyčejný text, který pouze vypadá jako "D.S." nebo "D.C"

## MIDI a notový vstup {#midi-and-note-input}

### 11. Proč Sibelius nepoznává můj MIDI klávesnice?

Zařízení může být odpojeno, nedostupné k operačnímu systému nebo vyřazeno v Sibeliu.

**Roztok**

1. Připojte klávesnici před otevřením Sibelia.
2. Otevřít **Nastavení → Vstupní zařízení**.
3. Povolit správné zařízení.
4. Přehrát klíč a zkontrolovat vstupní indikátor.
5. Pokud zařízení chybí, otestujte jiný USB port nebo kabel.

Je-li zapojena hub, zkuste se připojit přímo k počítači. Nainstalujte ovladač výrobce, pokud klávesnice vyžaduje jeden.

### 12. Proč mohu slyšet můj klávesnice, ale žádné poznámky Applear?

Slyšení zvuku neznamená, že Sibelius v současné době zadává notaci. Klávesnice může také produkovat svůj vlastní zvuk nezávisle.

**Roztok**

1. Vyberte zbytek nebo pozici, kde by měl vstup začít.
2. Zadejte režim note-input.
3. Vyberte dobu trvání na **Klávesnice**.
4. Přehraj vzkaz.

Pro živé nahrávání, použití **Flexi-time** spíše než krok-čas vstup. Potvrďte, že klávesnice je povolena v **Vstupní zařízení** pokud se poznámky stále neobjevují.

### 13. Proč jsou poznámky zadány do nesprávného Octave?

Octave posun může vzniknout v nastavení klávesnice nebo notace nástroje konvence.

**Roztok**

1. Zkontrolujte oktávu klávesnice a ovládání transpozice.
2. Testovací vstup na normální klavírní personál.
3. Zkontrolujte nástroj přidělený původnímu personálu.
4. Porovnat concert- smogh a transposing- score zobrazení.

Některé nástroje, včetně kytary a piccola, obvykle zní jako oktáva daleko od svých písemných poznámek. Jiné transpoziční nástroje se mění v různých intervalech.

### 14. Proč jsou poznámky MIDI zadány dvakrát?

Duplikovat vstup může nastat, když stejný výkon dosáhne Sibelius přes více než jednu MIDI trasu.

**Roztok**

1. Otevřít **Vstupní zařízení**.
2. Dočasně povolit pouze zamýšlený vstup do klávesnice.
3. Odpojte zbytečná spojení MIDI.
4. Zkontrolujte libovolnou MIDI-routing aplikaci nebo nastavení rozhraní.
5. Otestujte ještě jednu poznámku.

Pokud uslyšíte dvojnásobný zvuk, ale objeví se pouze jedna poznámka, prozkoumejte audio monitoring a klávesnici **Místní kontrola** místo toho nastavení.

### 15. Proč je Flexi- time nahrávání produkuje Messy Rhynms?

Živý vstup může být interpretován příliš přesně pro hudbu, kterou jste zamýšleli, vytváření nechtěných krátkých bankovek, odpočinku nebo tuleňů.

**Roztok**

1. Otevřít **Volby flexibilního času**.
2. Nastavte minimální hodnotu poznámky tak, aby vyhovovala průchodu.
3. Omezte tuplety, pokud je nepotřebujete.
4. Nahrávat v pohodlném tempu s jasným kliknutím.
5. Zaznamenejte krátkou pasáž a před pokračováním ji zkontrolujte.

Pro složitou hudbu, krok-čas vstup může vyžadovat méně korekce než živé nahrávání.

### 16. Jak mohu zadat Chords místo samostatných poznámek?

Poznámky hrály jeden po druhém v postupném vstupu obvykle zabírají po sobě jdoucí rytmické pozice.

**Roztok**

Pro vstup MIDI, hrát akord poznámky společně po výběru požadované doby trvání.

Pro vstup do počítačové klávesnice:

1. Zadejte první poznámku.
2. Vyberte si ji.
3. Pomocí příkazů intervalu přidejte poznámky nad nebo pod něj.

Zkontrolujte, zda výsledné poznámky sdílejí jeden stonek a dobu trvání.

### 17. Jak mohu zadat poznámky bez číselného klávesnice?

Můžete použít Sibelius na obrazovce **Klávesnice** i když váš laptop nemá oddělené číslo.

**Roztok**

1. Zobrazit **Klávesnice** z ovládání panelů.
2. Klikněte na požadovanou dobu trvání nebo artikulaci.
3. Zadejte nadhozy s klávesnicí počítače nebo klávesnicí MIDI.
4. Recenze k dispozici keyboard- zkratky sady v **Předvolby**.

Můžete také přizpůsobit zkratky nebo připojit číselnou klávesnici USB, pokud zadáte notaci často.

### 18. Proč nové poznámky nahrazují existující hudbu?

Poznámka vstup edituje hudbu ve zvolené rytmické poloze; nevytváří automaticky další tyče pro každou novou myšlenku.

**Roztok**

1. Zrušte nechtěnou úpravu.
2. Před vstupem do nové pasáže přidejte požadované tyče.
3. Vyberte první odpočinek v nových tyčích.
4. Začátek záznamu vstup tam.

Pokud chcete další nezávislý rytmus na stejném personálu, použijte jiný hlas než nahrazení stávajícího hlasu.

## Poznámka, hlasy a rytmus {#notation-voices-and-rhythm}

### 19. Jak mohu přidat nebo smazat celé bary?

Mazání bankovek a smazání tyčí jsou různé operace.

**Roztok**

Pro přidání sloupců použijte **Home → Bary → Přidat** a zvolte vhodnou možnost.

Odstranit lišty:

1. Udělat... **výběr systému** ze všech barů přes všechny hole.
2. Zkontrolujte, zda výběr obsahuje přesně ty tyče, které chcete odstranit.
3. Smazat výběr.

Normální výběr pasáže může odstranit hudební obsah při opuštění barů na místě.

### 20. Jak změním podpis času bez nečekaného posunu poznámek?

Měnič může způsobit, že Sibelius přeorganizuje stávající hudbu do nových barů.

**Roztok**

1. Uložit kopii skóre.
2. Vyberte bod, kde by změna měla začít.
3. Otevřete **Podpis času** řízení.
4. Prohlédněte si možnost přepsání stávajících sloupců.
5. Aplikujte změnu a zkontrolujte ovlivněný průchod.

Zakázání přepisování zachovává stávající strukturu lišty, ale může opustit tyče, jejichž trvání neodpovídá zobrazenému měřiči. Použijte tuto volbu záměrně.

### 21. Jak vytvořím bar vyzvednutí nebo Anacrusis?

Pickup je zkrácený otevírací bar, jako je jeden beat před první plný bar kusu v4 /4.

**Roztok**

Při vytváření podpisu otevírací doby použijte **pickup / upbeat** možnost a specifikovat dobu jeho trvání.

Pro existující skóre, vytvořit **nepravidelná tyč** požadované délky pomocí ovládacích prvků bar- creation, poté opatrně přenášejte úvodní hudbu.

Zkontrolujte číslování lišty a poslední lištu, pokud kus vyžaduje doplňkový zkrácený konec.

### 22. Jak mám dát dva nezávislé Rhynms na jeden personál?

Pro simultánní hudební linie použijte oddělené hlasy.

**Roztok**

1. Zadejte první řádek v **Hlas 1**.
2. Vyberte výchozí pozici pro druhý řádek.
3. Vyberte **Hlas 2** n vá **Klávesnice**.
4. Zadejte jeho poznámky a odpočívá nezávisle.

Hlasy 1 a 2 obvykle poskytují opačné směry stonku. Použijte další hlasy pouze tehdy, když notace potřebuje.

Nepoužívejte akord, když poznámky vyžadují různé rytmy.

### 23. Proč se v mém skóre objevují další resty?

Každý aktivní hlas potřebuje svou vlastní rytmickou strukturu, takže další hlasy mohou zavést další odpočinek.

**Roztok**

1. Vyberte neočekávaný odpočinek a identifikujte jeho hlas.
2. Zkontrolujte, zda tento hlas obsahuje požadované poznámky jinde v baru.
3. V případě potřeby odstraňte náhodně vytvořený hlas.
4. Skrýt odpočinek pouze tehdy, je-li to hudebně platné.

Vyhněte se skrývání spočívá prostě skrýt neúplný rytmus. Nejprve ujistěte se, že každý hlas odpovídá za zamýšlené trvání baru.

### 24. Jak mohu vytvořit trojčata a další trojčata?

Tuplety dělí rytmické rozpětí odlišně od jeho normálního seskupení.

**Roztok**

1. Vyberte si poznámku nebo odpočívejte s předpokládanou dobou trvání základny.
2. Použití **Poznámka → Pouzdra**.
3. Vyberte požadovaný tuplet nebo zadejte vlastní poměr.
4. Zadejte zbývající poznámky.

Pro obyčejné osminožkové trojnožky, začít s osmou-notovou hodnotou. Pokud tupoun zaujímá nesprávné rozpětí, zopakujte ho a zkontrolujte dobu začátku a poměr.

### 25. Proč jsou mé poznámky přepravovány nesprávně?

Seskupování paprsků závisí na měřiči, jeho nastavení seskupování a všech manuálních změnách paprsku.

**Roztok**

1. Zkontroluj časovou signaturu.
2. Vyberte postižené poznámky.
3. Používejte **Klávesnice** ovládání paprsku pro spuštění, pokračování nebo přerušení paprsků podle potřeby.
4. Pro opakující se problém, nastavit nastavení seskupování spíše než opravit každý paprsek ručně.

Například, 6 / 8 obvykle skupiny osmé noty do dvou skupin po třech, zatímco jiné metry mohou potřebovat jiný vzor.

### 26. Jak mohu přenášet poznámky přes dvě stojany?

Křížová notace zaměstnanců je užitečná pro klavírní pasáže rozdělené mezi ruce.

**Roztok**

1. Zadejte průchod na jeho původní zaměstnance.
2. Vyberte poznámky, které by se měly objevit na ostatních zaměstnanců.
3. Používejte **Poznámky pro zaměstnance v přístavech** příkazy k pohybu jejich displeje nad nebo pod.
4. Recenze stonky, trámy a mezery zaměstnanců.

Pohyb pracovníků Cross- zachovává vztah bankovek k jejich původnímu hlasu. Běžný střih a pasta přesune hudbu k jinému personálu a nemusí produkovat stejné notace.

### 27. Proč je moje kravata jako coura?

Kravaty a pomluvy mají různý hudební význam.

**Roztok**

Použít **kravata** připojit po sobě jdoucí poznámky stejné rozteč do jedné trvalé trvání. Aplikujte ji s **Klávesnice** Ovládání kravaty.

Použít **brurGenericName** k označení fráze nebo artikulace přes poznámky. Vytvořte ji pomocí **Slur** Příkaz.

Pokud se kravata nespojí správně, zkontrolujte výšku, náhodnou, hlasovou a rytmickou polohu následující poznámky.

### 28. Proč jsou nehody chybí nebo Reappearing?

Sibelius určuje náhodné zobrazení z podpisu klíče, dřívější poznámky v baru a nastavení notace.

**Roztok**

1. Zkontroluj podpis klíče.
2. Zkontrolujte předchozí výskyt nadhozu ve stejném baru.
3. Zvolte poznámku a zkontrolujte její náhodu pomocí **Klávesnice**.
4. Přidejte varovnou náhodu, kde se zlepší čitelnost.

Neměňte skutečnou výšku jen proto, abyste donutili symbol se objevit. Náhodné zobrazení i hudební nadhoz musí být správné.

### 29. Jak změním Enharmonické hláskování poznámky?

Výška může být zadán jako ostrý, když plochý pravopis by lépe odpovídal harmonii.

**Roztok**

1. Zvolte poznámku nebo průchod.
2. Používejte **Obnovit** Příkaz.
3. Zkontrolujte pravopis proti akordu a klíči.

Například poznámka znějící jako F-Sharp může být třeba zapsat jako G-plochý v konkrétním harmonickém kontextu.

Obnovení zachovává zvukovou výšku. Přenášení změny výšky a řeší jiný problém.

### 30. Proč jsou poznámky červená v Sibelius?

Červené zápisníky obvykle ukazují, že rozteč leží mimo rozsah definovaný pro nástroj.

**Roztok**

1. Zkontrolujte nástroj přidělený zaměstnancům.
2. Přečti si ty napsané a znějící nadhozy.
3. Zkontrolujte nastavení indikátoru rozsahu.
4. Rozhodněte se, zda je průchod vhodný pro zamýšleného hráče.

Výstraha dosahu neznamená automaticky, že je zápis chybný. Zakrytí barvy však nedělá nepraktickou notu hratelnou.

## Skóre Rozvržení a Spacing {#score-layout-and-spacing}

### 31. Jak se dostanu více nebo méně barů na jednom systému?

Sibelius obvykle počítá délky systému automaticky, ale můžete ovládat důležité přestávky.

**Roztok**

1. Vyberte tyče, které by měly sdílet jeden systém.
2. Použití **Rozvržení → Formát → Do systému**.
3. Prohlédněte si výsledek pro přeplněné poznámky a text.

Alternativně zvolte čárovou linku a přidejte **Přerušení systému**.

Pokud je mnoho systémů přeplněných, zkontrolujte velikost zaměstnanců, okraje stránek a rozteč poznámek spíše než nutit více barů na každém řádku.

### 32. Proč Sibelius neoživí mé skóre?

Stávající formátování zámků a přestávek může zabránit automatickým změnám rozložení.

**Roztok**

1. Zobrazovat značky rozložení.
2. Hledejte přerušení systému, přerušení stránky a zablokované systémy.
3. Zvolte postižený průchod.
4. Použití **Odemknout formát** případně.
5. Zopakuj jen ty přestávky, které potřebuješ.

Nejprve si uložte kopii, pokud již skóre pečlivě připravilo pořadí stránky nebo rozložení publikací.

### 33. Proč jsou mezi stávkami obrovské výhry?

Velké mezery mohou být způsobeny ručním pohybem, vyhýbáním se kolizím nebo vertikálním zdůvodněním.

**Roztok**

1. Vyberte postižené systémy.
2. Použití **Optimalizovat mezery zaměstnanců**.
3. Hledejte texty, dynamiku, řádky nebo text obsazující mezeru.
4. Zkontrolujte vertikální nastavení zdůvodnění, pokud jsou páčky rozloženy na celou stránku.

Pokud jsou příčinou dřívější manuální změny, použijte příslušný příkaz resetovat personální mezery před tím, než se znovu optimalizuje.

### 34. Proč Dynamika, Texty nebo Text Collide?

Automatické zabránění kolizím lze vypnout, převrátit nebo vyřešit přeplněné rozložení.

**Roztok**

1. Zkontroluj to. **Magnetic Layout** je povoleno pro postižené objekty.
2. Obnovit zbytečné ruční umístění.
3. Optimalizujte rozestup zaměstnanců.
4. V případě potřeby poskytněte systému horizontální prostor.
5. Proveďte malé manuální úpravy pouze po kontrole automatického rozložení.

Systém obsahující příliš mnoho hudby může potřebovat méně prutů, bez ohledu na nastavení kolize.

### 35. Jak mohu obnovit nerovnoměrné horizontální notové spektrum?

Tahání poznámek nebo opakovaná změna rozestupu může opustit průchod, který vypadá nekonzistentně.

**Roztok**

1. Zvolte postižený průchod.
2. Vyberte **Vzhled → Obnovit poznámky → Obnovit notový prostor**.
3. Prozkoumejte prostor kolem textů, akordů a náhodných událostí.
4. Nastavit systém se přeruší, pokud průchod zůstane přeplněný.

Pokud určitý objekt stále sedí neobvykle daleko od svého vzkazu, zkontrolujte také jeho individuální pozici.

### 36. Jak se skrývají prázdné stožáry?

Skrývání nepoužitých páčidel může usnadnit čtení velkého souboru.

**Roztok**

1. Vyberte příslušné systémy nebo průchod.
2. Vyberte **Rozvržení → Skrývací stojany → Skrýt prázdné kůly**.
3. Zkontrolujte, zda jsou všechny potřebné přístroje viditelné.

Personál obsahující poznámky nebo jiné relevantní předměty nesmí být považován za prázdný.

Použití **Zobrazit prázdná místa** když potřebujete, aby se personál objevil znovu.

### 37. Jak změním pořadí nástrojů?

Změna označení nástroje nepovoluje jeho zaměstnance.

**Roztok**

1. Otevřít **Home → Nástroje → Přidat nebo odstranit**.
2. Vyberte nástroj v seznamu nástrojů skóre.
3. Posuň to nahoru nebo dolů.
4. Potvrďte změnu.
5. Recenze závorek, rovnátek a skupiny čárových čárek.

Vyberte si pořadí, které vyhovuje souboru a pomáhá hudebníkům najít své části rychle.

### 38. Proč jsou jména přístrojů špatná nebo chybí?

Názvy nástrojů se mohou lišit mezi prvním a pozdějším systémem.

**Roztok**

1. Zkontrolujte, zda je nástroj plný a krátký jména.
2. Upravit zobrazený název nebo jeho nastavení přístroje podle potřeby.
3. Prohlédněte si nastavení nástrojového jména.
4. Zkontrolujte, zda změna nástroje zavádí další štítek.

Použijte celé jméno, pokud čtenáři potřebují identifikaci a jasnou zkratku následujících systémů.

### 39. Proč existuje neočekávaná slepá stránka?

Prázdná stránka může vyplývat ze zvláštního přerušení stránky, nastavení titulkové stránky nebo importovaného formátování.

**Roztok**

1. Zobrazovat značky rozložení.
2. Zkontrolujte konec předchozí stránky.
3. Zkontrolujte, zda se na **Přestávka na zvláštní stránku** které vloží prázdné stránky.
4. Odstranit nebo upravit odpovědné přerušení.
5. Po změně rozložení si přečtěte následující stránky.

Nemažte hudbu, abyste odstranili stránku vytvořenou formátováním.

### 40. Proč čísla sloupců začínají nebo obnovují nesprávně?

Výzva, hranice pohybu nebo náhodná změna čísla může ovlivnit číslování.

**Roztok**

1. Zkontrolujte bod, kde se číslování stává nesprávným.
2. Zkontrolujte, zda se na **Změna čísla sloupce**.
3. Opravte nebo odstraňte změnu.
4. Prohlédněte si nastavení zobrazení čárového čísla.
5. Zkontrolujte číslování v obou skóre a částí.

Rozhodněte se, zda má být otevírací pickup nečíslován nebo započítán, a poté tuto úmluvu důsledně uplatňujte.

## Díly, tisk a export {#parts-printing-and-exporting}

### 41. Jak vytvořím individuální součástky?

**Dynamické části** umožní skóre a jeho instrumentální části sdílet hudební obsah.

**Roztok**

1. Otevřete **Díly** řízení.
2. Zkontrolujte, které části již existují.
3. Otevřete požadovanou část.
4. Tam, kde je podporována, vytvořte novou část a zvolte hole, které by měla obsahovat.
5. Upravte jeho rozvržení pro hráče.

Udržujte hudební edity v propojené skóre-a-díly pracovní tok spíše než udržovat oddělené soubory zbytečně.

### 42. Proč má má má instrumentální část jiný rozvržení od skóre?

Části mají nezávislé požadavky na rozvržení, včetně závitů stránek, velikosti zaměstnanců a přerušení systému.

**Roztok**

1. Otevřete postiženou část.
2. Zkontrolujte to. **Nastavení dokumentů**.
3. Zkontrolujte automatické přestávky a manuální přestávky.
4. Upravte tu část přímo.

Pokud se noty nebo rytmy objeví špatně, zkontrolujte, zda sledujete správně spojenou část a zda její obsah nebyl skryt.

### 43. Proč jsou Multiresty chybí nebo Split v mých částech?

Multirest lze rozdělit podle hudebních instrukcí nebo předmětů, které musí zůstat viditelné.

**Roztok**

1. Potvrďte, že v části jsou povoleny multiresty.
2. Prohlédněte si mříže, kde se rozbíjí vícelůžkové pokoje.
3. Zkontrolujte zkušební značky, text, čárové čáry, změny klíčů a časové podpisy.
4. Odstranit náhodné objekty pouze po potvrzení, že jsou zbytečné.

Některé přestávky jsou správné, protože hráči potřebují vidět instrukce v tomto bodě.

### 44. Jak mohu vytvořit lepší stránky otočí v částech?

Hráči potřebují dostatek času, aby otočili stránku, aniž by prošvihli svůj další záznam.

**Roztok**

1. Otevřete jednotlivé části.
2. Najít resty vhodné pro stránku otáčky.
3. Vložte přestávky stránky na praktických pozicích.
4. Recenze automatických stránek-otočení možnosti, pokud jsou k dispozici.
5. Zkontrolujte konečný počet stran a rozteč systému.

Vyhněte se vytváření extrémně přeplněných stránek jen k vynucení zatáčky. Otestujte rozložení z pohledu hráče.

### 45. Proč má můj PDF špatnou velikost nebo margins?

Nastavení stránky skóre a nastavení tisku nebo exportu nemusí souhlasit.

**Roztok**

1. Zaškrtněte velikost stránky a orientaci v **Nastavení dokumentů**.
2. Zkontrolujte okraje a velikost personálu.
3. Potvrďte, že exportujete zamýšlené skóre nebo část.
4. Použijte built- ve formátu PDF export, pokud je k dispozici.
5. Otevřete PDF a ověřte rozměry stránky.

Při tisku zkontrolujte velikost papíru a škálování zvlášť. "Fit to page" může změnit finální velikost tištěných zaměstnanců.

### 46. Proč jsou hudební symboly nebo fonty špatné ve formátu PDF?

Chybějící písma, náhrady nebo problémy s exportem související s fontem mohou změnit vzhled notace.

**Roztok**

1. Porovnejte PDF s skóre na obrazovce.
2. Potvrďte, že jsou nainstalována požadovaná hudební a textová písma.
3. Zkuste Sibelius 's built- v PDF export, kde je k dispozici.
4. Otevřete výsledek v jiném prohlížeči PDF.
5. Pokud se symboly také mýlí uvnitř Sibelia, prostudujte instalaci písma aplikace.

Pokud selže pouze vlastní font, otestujte standardní font v kopii skóre.

### 47. Proč nemohu exportovat zvukový soubor?

Audio export vyžaduje konfiguraci přehrávání schopnou vykreslovat zvuk uvnitř počítače.

**Roztok**

1. Zkontrolujte zvolenou konfiguraci přehrávání.
2. Použijte podporovaný virtuální nástroj nebo vnitřní zvukový zdroj přehrávání.
3. Potvrďte, že normální přehrávání funguje.
4. Vyberte **Soubor → Export → Audio**, je-li k dispozici.

Pokud přehrávání používá externí hardwarový syntetizér, jeho zvuk může být třeba zaznamenat přes audio rozhraní. Odeslání MIDI do zařízení nezachycuje jeho zvuk.

## Úspora, obnova a výkonnost {#saving-recovery-and-performance}

### 48. Jak získám skóre po havárii?

Zotavení závisí na tom, co Sibelius zachránil před přerušením.

**Roztok**

1. Znovu otevřít Sibelius a zkontrolujte, zda pro zotavení rychle.
2. Zkontrolujte dostupné soubory pro automatické ukládání nebo zálohování.
3. Použijte místa uvedená v preferencích vaší verze nebo referenční příručce.
4. Porovnejte časová razítka a hudební obsah.
5. Uložit nejlepší vrácenou verzi pod novým názvem.

Vyvarujte se přepisování originálu, dokud vám není potvrzeno, že navrácený soubor obsahuje práci, kterou potřebujete.

### 49. Proč je Sibelius pomalý, mrznoucí nebo rozbitý?

Příčina může zahrnovat konkrétní skóre, knihovnu přehrávání, řidiče nebo softwarovou složku.

**Roztok**

1. Ušetřete si práci a začněte znovu se Sibeliem.
2. Otestujte malé nové skóre.
3. Porovnejte chování s problematickým skóre.
4. Otestujte jednodušší konfiguraci přehrávání.
5. Odpojte zbytečné MIDI a audio zařízení.
6. Zkontrolujte kompatibilní Sibelius a aktualizace ovladače.

Pokud selže pouze jedno skóre, zapracujte na kopii a zúžte postiženou pasáž. Pokud selže každé skóre, zaznamenejte svou verzi, operační systém a přesnou chybovou zprávu pro podporu.

### 50. Proč někdo jiný nemůže otevřít můj Sibelius soubor?

Příjemce může mít starší verzi, omezené vydání nebo neúplnou kopii souboru.

**Roztok**

1. Zeptejte se, kterou Sibelius verzi a vydání používají.
2. Pokud je podporováno, použijte **Soubor → Export → Předchozí verze**.
3. Odeslat vyváženou kopii a nechat si originál.
4. Zkontrolujte, zda je převedený soubor kompletní.
5. Pokud používají jinou aplikaci notace, zvažte MusicXML.

Starší verze export a MusicXML může změnit formátování nebo nepodporované funkce. Poslat PDF vedle editable souboru jako vizuální reference.

## Rychlý kontrolní seznam řešení problémů

Před zásadními změnami:

1. Uložit samostatnou kopii skóre.
2. Identifikovat, zda problém ovlivňuje jedno skóre nebo každé skóre.
3. Zkontrolujte vybraná zvuková zařízení a zařízení MIDI.
4. Zkontrolujte konfiguraci přehrávání.
5. Zkontrolovat změny v nedávné notaci nebo rozložení.
6. V případě potřeby restartujte Sibelia.
7. Zkontrolujte kompatibilitu verze a provozu- systému.
8. Změňte jedno nastavení najednou a otestujte výsledek.

## Oficiální pomoc Sibelius

Pokud jde o pokyny specifické pro vaši verzi a vydání, navštivte **Referenční příručka Sibelius** dodané spolu s žádostí.

- [AVID Sibelius Učit se a podporovat](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Informace o uvolnění](https://www.avid.com/resource-center/whats-new-in-sibelius)

Pokud žádáte o pomoc, uveďte svou verzi Sibelius, operační systém, přehrávací zařízení, přesnou chybovou zprávu a zda problém ovlivňuje jedno nebo všechny skóre.


---

## Sibelius licence na stránky a instalační pomoc pro školy

Správa Sibelius přes školu nebo vysokou školu spíše než problémy na jedné pracovní stanici? Softplanet Productions má 25 let zkušeností s podporou britských hudebních oddělení. [Porovnejte možnosti licence Sibelius site a požádejte o nabídku](/cs/services/sibelius-site-licenses/) pro nová zařízení, dodatečná sedadla nebo nasazení sítě.
