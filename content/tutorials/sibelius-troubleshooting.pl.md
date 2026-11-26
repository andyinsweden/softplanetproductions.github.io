---
title: 'Sibelius: 50 typowych problemów i rozwiązań'
description: Rozwiąż wspólne problemy Sibelius z odtwarzaniem, klawiatury MIDI, wprowadzenie notatki, notacja, układ
  punktów, części, eksport PDF i odzyskiwania plików.
draft: false
showTableOfContents: false
---

Znajdź praktyczne rozwiązania dla 50 problemów Sibeliusa, od brakującego dźwięku odtwarzania do niezręcznego odstępu punktów i problemów eksportu PDF.

Instrukcje te przeznaczone są dla pulpitu Sibelius. Nazwy menu i dostępne funkcje różnią się w zależności od wersji i edycji, w tym Sibelius First, Artist i Ultimate. Jeśli brakuje polecenia, wyszukaj jego nazwę w Sibelius lub skorzystaj z Przewodnika Reference dostarczonego wraz z Twoją wersją.

Przed dokonaniem większych zmian, zapisz osobną kopię swojego wyniku.

## Przejdź do kategorii {#jump-to-a-category}

- [Dźwięk i odtwarzanie](#sound-and-playback)
- [MIDI i wejście uwagi](#midi-and-note-input)
- [Notatki, głosy i rytmy](#notation-voices-and-rhythm)
- [Ocena układu i odstępów](#score-layout-and-spacing)
- [Części, drukowanie i eksportowanie](#parts-printing-and-exporting)
- [Oszczędność, odzysk i wydajność](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Dźwięk i odtwarzanie {#sound-and-playback}

### 1. Dlaczego w Sibeliusie nie ma dźwięku?

Jeśli linia odtwarzania się porusza, ale nic nie słyszysz, sprawdź wyjście audio, konfigurację odtwarzania i Mixer.

**Roztwór**

1. Potwierdź, że Twoje głośniki lub słuchawki działają w innej aplikacji.
2. Otwórz **Urządzenia do odtwarzania (Playback Devices)** z zakładki **Zagraj (Play)**.
3. Otwórz **Opcje silnika audio (Audio Engine Options)** i wybierz zamierzony interfejs audio.
4. Wybierz konfigurację odtwarzania wykorzystującą zainstalowane źródło dźwięku.
5. Otwórz **Mikser (Mixer)** i sprawdź, czy nie ma kanałów mutowanych, instrumentów solowych lub niskiej głośności master.

Jeśli podłączyłeś interfejs audio po uruchomieniu Sibelius, uruchom ponownie program z podłączonym interfejsem.

**Powiązane:** Zobacz problemy 2, 5 i 6.

### 2. Dlaczego Sibelius gra przez niewłaściwe głośniki lub słuchawki?

Sibelius może użyć innego wyjścia niż domyślne urządzenie systemu operacyjnego.

**Roztwór**

1. Podłącz i włącz wymagane urządzenie.
2. Otwórz **Opcje silnika audio (Audio Engine Options)**.
3. Wybierz odpowiedni interfejs.
4. Sprawdź routing wyjściowy, jeśli Twój interfejs ma kilka wyjść.
5. Wznawiaj odtwarzanie.

Jeśli urządzenie jest brakujące, zamknij Sibelius i potwierdź, że system operacyjny rozpoznaje go przed ponownym otwarciem programu.

Urządzenia Bluetooth mogą powodować dodatkowe opóźnienie.

### 3. Dlaczego odtwarzanie crackle, Click lub Break Up?

Bufor audio, który jest zbyt mały, może spowodować przerwanie odtwarzania, szczególnie w przypadku wymagających bibliotek dźwiękowych.

**Roztwór**

1. Otwórz **Opcje silnika audio (Audio Engine Options)**.
2. Zwiększ rozmiar bufora o jeden dostępny krok.
3. Zagraj wymagający fragment i posłuchaj ponownie.
4. Zamknij niepotrzebne aplikacje.
5. Sprawdź, czy sterownik interfejsu obsługuje Twój system operacyjny.

Powtarzaj do czasu, aż odtwarzanie będzie stabilne. Jeśli dźwięk pozostaje zniekształcony, sprawdź również poziomy miksera: problemy z wyciskaniem i buforem wymagają różnych poprawek.

### 4. Dlaczego jest opóźnienie, kiedy gram moją klawiaturę MIDI?

Czas pomiędzy naciśnięciem klucza a usłyszeniem dźwięku nazywa się opóźnieniem.

**Roztwór**

1. Otwórz **Opcje silnika audio (Audio Engine Options)**.
2. Należy stopniowo zmniejszać rozmiar bufora.
3. Po każdej zmianie należy sprawdzić klawiaturę.
4. Jeśli pojawią się kliknięcia, lekko zwiększyć bufor.

W systemie Windows należy używać sterownika ASIO producenta interfejsu, gdy jest on dostępny. W systemie Mac-OS należy użyć odpowiedniego urządzenia Core Audio.

Unikaj słuchawek Bluetooth, gdy potrzebujesz monitorowania klawiatury.

### 5. Dlaczego jeden instrument jest cichy?

Pojedynczy, cichy personel zazwyczaj wskazuje na ustawienia Miksera, przypisanie dźwięku lub właściwości odtwarzania.

**Roztwór**

1. Otwórz **Mikser (Mixer)**.
2. Sprawdzić, czy przyrząd nie jest wyciszony.
3. Sprawdź, czy inny instrument jest zasolony.
4. Potwierdź, że personel ma odpowiedni dźwięk przypisany.
5. Wybierz dotkniętą nutę i sprawdź ustawienia **Graj na przepustce (Play on pass)** w **Inspektor (Inspector)**, jeśli są dostępne.

Również szukać niezamierzonej zmiany instrumentu przed cichym przejściem.

### 6. Dlaczego Sibelius brzmi brakujące lub niedostępne?

Aplikacja notacji i jej biblioteka dźwiękowa mogą wymagać odrębnej instalacji.

**Roztwór**

1. Sprawdź, jakiej biblioteki dźwiękowej oczekuje konfiguracja odtwarzania.
2. Potwierdź, że biblioteka jest zainstalowana.
3. W razie potrzeby należy uzyskać odpowiedniego instalatora z konta Avid.
4. Jeśli przeniosłeś bibliotekę, postępuj zgodnie ze wspieraną procedurą aktualizacji jej lokalizacji.
5. Przywróć Sibelius i wybierz odpowiednią konfigurację odtwarzania.

Nie zakładaj, że ponowne zainstalowanie aplikacji głównej będzie również ponownie zainstalować dużą bibliotekę dźwiękową.

### 7. Dlaczego instrument odtwarza zły dźwięk?

Definicja instrumentu lub przydział Miksera może nie odpowiadać dźwiękowi, którego oczekujesz.

**Roztwór**

1. Sprawdzić, który instrument jest przypisany do personelu.
2. Szukaj zmian w wynikach.
3. Zaznacz wybraną konfigurację odtwarzania.
4. Przejrzyj zadanie zespołu w **Mikser (Mixer)**.

Jeśli chcesz zmienić sam instrument, utwórz odpowiedni **Zmiana instrumentu (Instrument Change)**. Sama zmiana nazwy personelu nie zmienia jego definicji muzycznej ani dźwięku odtwarzania.

### 8. Dlaczego Dynamics nie ma wpływu na odtwarzanie?

Dynamika wprowadzona w nieodpowiedni sposób lub przymocowana do niewłaściwej pozycji nie może spowodować zamierzonego rezultatu.

**Roztwór**

1. Wybierz notatkę, gdzie powinna rozpocząć się dynamika.
2. Utwórz **Tekst ekspresji (Expression Text)**.
3. Wstaw dynamikę za pomocą menu słownego w stylu tekstowym.
4. Sprawdź, czy jest przymocowany do planowanego personelu i bić.
5. Odtwarzać przejście od nieco przed oznakowaniem.

Jeśli dynamika nadal ma niewielki efekt, przetestować inny dźwięk odtwarzania. Biblioteki dźwiękowe różnią się w jaki sposób reagują na dynamikę.

### 9. Dlaczego Sibelius ignoruje mój znak Tempo?

Nagłówek "Allegro" niekoniecznie funkcjonuje jako instrukcja tempa odtwarzania.

**Roztwór**

1. Utwórz oznakowanie za pomocą **Tekst programu Tempo (Tempo Text)** lub odpowiedniego stylu tekstowego **Oznakowanie metronomu (Metronome Mark)**.
2. Dla dokładnej prędkości, zawierać rozpoznaną jednostkę uderzeniową i wartość tempo.
3. Sprawdź pozycję mocowania.
4. Przejrzyj ustawienia **Wydajność (Performance)**, jeśli odtwarzanie jest celowo zróżnicowane tempo.

Jeśli cały wynik brzmi konsekwentnie zbyt szybko lub wolno, sprawdź również kontrolę tempa odtwarzania.

### 10. Dlaczego Repeats lub First i Seconds Endings grają nieprawidłowo?

Odtwarzanie zależy od powtarzającej się struktury, nie tylko od wyglądu linii lub etykiety tekstowej.

**Roztwór**

1. Użyj odpowiednich linii barierowych.
2. Tworzenie linii końcowych przy użyciu odpowiednich typów linii pierwszego i drugiego zakończenia.
3. Sprawdzić, czy każde zakończenie zaczyna się i kończy w zamierzonych prętach.
4. Przejrzyj ustawienia odtwarzania i dowolną sekwencję ręczną.
5. Próba odtwarzania sprzed powtórzenia sekcji.

Użyj rozpoznawanych instrukcji powtarzania zamiast zwykłego tekstu, który tylko wygląda jak "D.S.". lub "D.C.".

## MIDI i wejście uwagi {#midi-and-note-input}

### 11. Dlaczego Sibelius nie rozpoznaje mojej klawiatury MIDI?

Urządzenie może być odłączone, niedostępne dla systemu operacyjnego lub wyłączone w Sibelius.

**Roztwór**

1. Podłącz klawiaturę przed otwarciem Sibeliusa.
2. Otwórz **Preferencje urządzeń wejścia → (Preferences → Input Devices)**.
3. Włącz odpowiednie urządzenie.
4. Zagraj w klucz i sprawdź wskaźnik wejścia.
5. Jeżeli urządzenie nie działa, należy sprawdzić inny port USB lub kabel.

Jeśli jest w to zaangażowany hub, spróbuj połączyć się bezpośrednio z komputerem. Zainstaluj sterownik producenta, jeśli klawiatura go wymaga.

### 12. Dlaczego słyszę moją klawiaturę, ale bez notatek?

Słuchanie dźwięku nie oznacza, że Sibelius wchodzi obecnie w zapis. Klawiatura może również wytwarzać swój własny dźwięk niezależnie.

**Roztwór**

1. Wybierz resztę lub pozycję, w której należy rozpocząć wejście.
2. Wprowadź tryb note- input.
3. Wybierz czas trwania na **Klawiatura (Keypad)**.
4. Puśćcie liścik.

Do nagrywania na żywo używaj **Czas elastyczny (Flexi-time)** zamiast wprowadzania czasu krokowego. Potwierdź, że klawiatura jest włączona w **Urządzenia wejścia (Input Devices)**, jeśli notatki nadal się nie pojawiają.

### 13. Dlaczego Notatki są w złej Oktawie?

Oktawa zmiana może być źródłem ustawień klawiatury lub konwencji notacji instrumentu.

**Roztwór**

1. Sprawdź oktawę klawiatury i przenieś stery.
2. Test wejściowy na normalnej kadrze fortepianu.
3. Sprawdzić przyrząd przypisany do pierwotnego personelu.
4. Porównuj widoki concert- pitch i transposing- score.

Niektóre instrumenty, w tym gitara i piccolo, brzmią w sposób konwencjonalny oktawę od ich napisanych notatek. Inne instrumenty transponujące zmieniają się w różnych odstępach czasu.

### 14. Dlaczego MIDI Notes jest zapisana dwa razy?

Duplikaty wejścia mogą wystąpić, gdy ta sama wydajność dociera do Sibelius przez więcej niż jedną trasę MIDI.

**Roztwór**

1. Otwórz **Urządzenia wejścia (Input Devices)**.
2. Tymczasowo włącza tylko zamierzone wejście klawiatury.
3. Odłącz niepotrzebne połączenia MIDI.
4. Sprawdź wszystkie ustawienia MIDI- routing aplikacji lub interfejsu.
5. Sprawdź jeszcze raz jedną nutę.

Jeśli usłyszysz podwojony dźwięk, ale pojawia się tylko jedna nuta, sprawdź monitoring audio i ustawienie klawiatury **Kontrola lokalna (Local Control)** zamiast.

### 15. Dlaczego Flexitime Recording Producing Messy Rhythms?

Live input może być interpretowany zbyt dokładnie dla muzyki, którą zamierzałeś, tworząc niechciane krótkie notatki, odpoczynek lub tupety.

**Roztwór**

1. Otwórz **Opcje elastycznego czasu (Flexi-time Options)**.
2. Ustaw minimalną wartość nut, aby odpowiadała przejściu.
3. Restrict tuplets, jeśli nie są potrzebne.
4. Nagrywaj w wygodnym tempie z wyraźnym kliknięciem.
5. Nagrać krótki fragment i przejrzeć go przed kontynuowaniem.

Dla muzyki złożonej wejście w czasie kroku może wymagać mniejszej korekty niż nagrywanie na żywo.

### 16. Jak wprowadzić akordy zamiast oddzielnych notatek?

Notatki grane jeden za drugim w wejsciu krotnym zwykle zajmuja kolejno rytmiczne pozycje.

**Roztwór**

Dla wejścia MIDI, odtworzyć notatki akordu razem po wybraniu wymaganego czasu trwania.

Dla wejścia do komputera-klawiatury:

1. Wpisz pierwszą nutę.
2. Wybierz.
3. Użyj komend interval, aby dodać uwagi powyżej lub poniżej.

Sprawdź, czy wynikające z tego uwagi mają jeden pień i czas trwania.

### 17. Jak mogę wprowadzić notatki bez numerycznej klawiatury?

Możesz użyć Sibeliusa na ekranie **Klawiatura (Keypad)**, nawet jeśli laptop nie ma oddzielnego numeru.

**Roztwór**

1. Wyświetla **Klawiatura (Keypad)** z panelu sterującego.
2. Kliknij wymagany czas trwania lub artykulacji.
3. Wprowadź rzuty za pomocą klawiatury komputera lub klawiatury MIDI.
4. Przegląd dostępnych skrótów klawiszowych w **Preferencje (Preferences)**.

Możesz również dostosować skróty lub podłączyć klawiaturę numeryczną USB, jeśli często wprowadzasz notację.

### 18. Dlaczego nowe nuty zastępują istniejącą muzykę?

Uwaga wejście edytuje muzykę w wybranej pozycji rytmicznej; nie tworzy automatycznie dodatkowych barów dla każdego nowego pomysłu.

**Roztwór**

1. Cofnij niechcianą edycję.
2. Dodaj wymagane pręty przed wejściem do nowego przejścia.
3. Wybierz pierwszy odpoczynek w nowych paskach.
4. Rozpocząć wejście do notatki.

Jeśli chcesz dodatkowego niezależnego rytmu na tym samym personelu, użyj innego głosu zamiast zastępować istniejący głos.

## Notatki, głosy i rytmy {#notation-voices-and-rhythm}

### 19. Jak dodawać lub usuwać całe bary?

Usuwanie notatek i pasków to różne operacje.

**Roztwór**

Aby dodać paski, użyj **Strona główna → Bary → Dodaj (Home → Bars → Add)** i wybierz odpowiednią opcję.

Usuwanie pasków:

1. Zrobić **wybór systemu** z prętów we wszystkich stawach.
2. Sprawdź, czy wybór zawiera dokładnie te bary, które chcesz usunąć.
3. Usuń wybór.

Normalny wybór przejść może oczyścić zawartość muzyczną, pozostawiając bary w miejscu.

### 20. Jak zmienić podpis czasu bez niespodziewanych notatek?

Zmiana miernika może spowodować, że Sibelius zreorganizuje istniejącą muzykę w nowe bary.

**Roztwór**

1. Zapisz kopię wyniku.
2. Wybierz punkt, w którym powinna rozpocząć się zmiana.
3. Otwórz sterownik **Podpis czasu (Time Signature)**.
4. Przegląd opcji przepisywania istniejących pasków.
5. Zastosuj zmianę i sprawdź dotknięty przejazd.

Wyłączenie przepisywania zachowuje istniejącą strukturę paska, ale może pozostawić pręty, których czas trwania nie pasuje do wyświetlanego miernika. Użyj tej opcji celowo.

### 21. W jaki sposób mogę stworzyć bar z pickupem lub anacrusis?

Pickup to skrócony bar otwierający, taki jak jeden rytm przed pierwszym pełnym prętem kawałka w 4/4.

**Roztwór**

Przy tworzeniu podpisu czasu otwarcia, użyj opcji **pickup / upbeat** i określić jej czas trwania.

Dla istniejącego wyniku, utworzyć **nieregularny pasek** wymaganej długości za pomocą kontroli kreacji barowej, a następnie przesłać muzykę otwierającą ostrożnie.

Sprawdź numerację paska i ostatni pasek, jeśli element wymaga uzupełniającego skróconego zakończenia.

### 22. Jak umieścić dwa niezależne rytmy na jednym sztabie?

Używaj oddzielnych głosów do jednoczesnej linii muzycznej.

**Roztwór**

1. Wprowadź pierwszą linię w **Głos 1**.
2. Wybierz pozycję początkową dla drugiej linii.
3. Wybierz **Głos 2** na **Klawiatura (Keypad)**.
4. Wprowadź jego notatki i odpocznij niezależnie.

Głosy 1 i 2 zazwyczaj zapewniają przeciwstawne kierunki łodyg. Używaj dodatkowych głosów tylko wtedy, gdy jest ich potrzebny zapis.

Nie używaj akordu, gdy nuty wymagają różnych rytmów.

### 23. Dlaczego w mojej ocenie pojawiają się dodatkowe resty?

Każdy aktywny głos potrzebuje własnej struktury rytmicznej, więc dodatkowe głosy mogą wprowadzić dodatkowe spoczynku.

**Roztwór**

1. Wybierz niespodziewany odpoczynek i zidentyfikuj jego głos.
2. Sprawdź, czy ten głos zawiera wymagane notatki gdzie indziej w barze.
3. W razie potrzeby należy usunąć przypadkowo utworzony głos.
4. Ukryj odpoczynek tylko wtedy, gdy jest to uzasadnione muzycznie.

Unikaj ukrywania się po prostu ukryć niekompletny rytm. Najpierw upewnij się, że każdy głos konta dla zamierzonego czasu trwania bar.

### 24. Jak tworzyć trojaczki i inne tupety?

Tuplety dzielą zakres rytmiczny inaczej niż jego normalne grupowanie.

**Roztwór**

1. Wybierz notatkę lub odpoczynek z planowanym czasem trwania podstawy.
2. Użyj **Notatka Wstęp Zeszyty → (Note Input → Tuplets)**.
3. Wybierz wymagany tuplet lub wprowadź niestandardowy stosunek.
4. Wprowadź pozostałe notatki.

W przypadku zwykłego trójkąta z nutą osiemnastą, należy zacząć od wartości nuty osiemnastej. Jeśli tuplet zajmuje niewłaściwy zakres, cofnij go i sprawdź czas rozpoczęcia i stosunek.

### 25. Dlaczego moje notatki są źle beamed?

Grupowanie wiązki zależy od miernika, jego ustawienia grupowania i wszelkich zmian wiązki ręcznej.

**Roztwór**

1. Sprawdź grupę uderzeniową sygnatury czasu.
2. Wybierz dotknięte uwagi.
3. W razie potrzeby należy użyć regulatorów wiązki **Klawiatura (Keypad)** do uruchamiania, kontynuowania lub przerywania wiązki.
4. W przypadku powtarzającego się problemu, należy dostosować ustawienia grupowania zamiast ręcznie korygować każdą belkę.

Na przykład, 6/8 zwykle grupuje ósemki na dwie grupy po trzy, podczas gdy inne metry mogą potrzebować innego wzoru.

### 26. Jak mam przenosić notatki przez dwa stawy?

Notacja pracowników jest przydatna dla fragmentów fortepianu dzielonych między ręce.

**Roztwór**

1. Wpisać fragment na jego sztabie pochodzącym.
2. Wybierz notatki, które powinny pojawić się na innych pracowników.
3. Użyj poleceń **Notatki dla personelu (Cross-staff Notes)**, aby przesunąć ich wyświetlacz powyżej lub poniżej.
4. Rama przeglądowa, belki i odstęp między pracownikami.

Ruch Cross- staff zachowuje relację notatek z ich oryginalnym głosem. Zwyczajne cięcie i wklejanie przenosi muzykę do innego personelu i nie może wytwarzać tej samej notacji.

### 27. Dlaczego mój krawat zachowuje się jak żul?

Krawaty i slumsy mają różne znaczenia muzyczne.

**Roztwór**

Użyj **krawat**, aby połączyć kolejne notatki o tym samym skoku w jeden trwały czas trwania. Zastosować za pomocą regulatora krawata **Klawiatura (Keypad)**.

Użyj **osad**, aby wskazać wyrażenie lub artykulację w uwagach. Utwórz go za pomocą polecenia **Suma (Slur)**.

Jeżeli krawat nie jest prawidłowo połączony, należy sprawdzić pozycję tonacyjną, przypadkową, głosową i rytmiczną poniższej notatki.

### 28. Dlaczego brak wypadków lub ponowny odbiór?

Sibelius determinuje przypadkowy wyświetlacz z podpisu klucza, wcześniejszych notatek w pasku i ustawień notacji.

**Roztwór**

1. Sprawdź podpis klucza.
2. Sprawdzić wcześniejsze wystąpienia rzutu w tym samym pasku.
3. Wybierz notatkę i sprawdź jej przypadkowe użycie za pomocą **Klawiatura (Keypad)**.
4. Dodać przypadkowe ostrzeżenie, w którym poprawi czytelność.

Nie zmieniaj rzeczywistego boiska tylko po to, aby zmusić symbol do pojawienia się. Przypadkowy wyświetlacz i muzyczny rzut muszą być poprawne.

### 29. Jak zmienić Enharmoniczne Opowiadanie Notatki?

Piłka może być wprowadzona jako ostry, gdy płaska pisownia lepiej pasuje do harmonii.

**Roztwór**

1. Wybierz notatkę lub przejście.
2. Użyj polecenia **Respell**.
3. Sprawdź pisownię pod akordem i kluczem.

Na przykład, nota brzmiąca jako F- scue może wymagać zapisu jako G- flat w konkretnym kontekście harmonicznym.

Repelling zachowuje dźwięk. Transpozycja zmian boisko i rozwiązuje inny problem.

### 30. Dlaczego Notatki są czerwone w Sibelius?

Czerwone notesy często wskazują, że rzut znajduje się poza zakresem określonym dla danego instrumentu.

**Roztwór**

1. Sprawdzić przyrząd przypisany do personelu.
2. Przejrzyjcie to, co napisano i brzmiące.
3. Sprawdź ustawienia wyświetlacza zakresu narzędzi.
4. Zdecyduj, czy przejście jest odpowiednie dla zamierzonego gracza.

Ostrzeżenie zakresu nie oznacza automatycznie, że zapis jest nieprawidłowy. Jednak ukrywanie koloru nie sprawia, że niepraktyczna notatka jest odtwarzalna.

## Ocena układu i odstępów {#score-layout-and-spacing}

### 31. Jak dopasować więcej lub mniej barów w jednym systemie?

Sibelius zwykle oblicza długość systemu automatycznie, ale można kontrolować ważne przerwy.

**Roztwór**

1. Wybierz paski, które powinny dzielić jeden system.
2. Użyj **Układ → Format → Make Into System (Layout → Format → Make Into System)**.
3. Sprawdź wynik zatłoczonych notatek i tekstu.

Alternatywnie, wybierz linię barową i dodaj **Przerwa systemowa (System Break)**.

Jeśli wiele systemów jest zatłoczonych, sprawdź rozmiar personelu, marginesy stron i odstępy notatek zamiast zmuszania większej liczby barów do każdej linii.

### 32. Dlaczego Sibelius nie odpowie na moje pytanie?

Istniejące blokady formatowania i przerwy mogą zapobiec automatycznym zmianom układu.

**Roztwór**

1. Wyświetl znaki układu.
2. Szukaj przerw w systemie, przerw na stronie i zablokowanych systemów.
3. Wybierz dotknięty przejście.
4. W stosownych przypadkach należy stosować **Odblokuj format (Unlock Format)**.
5. Tylko te przerwy, których potrzebujesz.

Zapisz najpierw kopię, jeśli wynik już starannie przygotowany strony obraca lub układ publikacji.

### 33. Dlaczego istnieją ogromne luki między stawami?

Duże luki mogą być spowodowane ruchem ręcznym, unikaniem kolizji lub uzasadnieniem wertykalnym.

**Roztwór**

1. Wybierz systemy dotknięte chorobą.
2. Użyj **Optymalizacja odstępów między pracownikami (Optimize Staff Spacing)**.
3. Szukaj tekstu, dynamiki, linii lub tekstu zajmującego lukę.
4. Sprawdź ustawienia usprawiedliwienia pionowego, jeśli kije są rozłożone na całą stronę.

Jeśli wcześniejszymi zmianami ręcznymi są przyczyny, użyj odpowiedniego polecenia resetowania odstępu kadrowego przed ponownym optymalizacją.

### 34. Dlaczego Dynamics, Lyrics czy Text Collide?

Automatyczne unikanie kolizji może być wyłączone, uchylone lub niemożliwe do rozwiązania zatłoczonego układu.

**Roztwór**

1. Sprawdź, czy **Układ magnetyczny (Magnetic Layout)** jest włączony dla obiektów dotkniętych.
2. Resetuj niepotrzebne ręczne pozycjonowanie.
3. Optymalizacja odstępów między pracownikami.
4. W razie potrzeby należy zapewnić systemowi większą przestrzeń poziomą.
5. Dokonaj małych regulacji ręcznych tylko po sprawdzeniu układu automatycznego.

System zawierający zbyt dużo muzyki może potrzebować mniejszej liczby barów, niezależnie od ustawień kolizji.

### 35. Jak przywracać nierówne poziome odstępy między nutami?

Przeciąganie notatek lub zmienianie odstępów wielokrotnie może zostawić przejście wyglądające niekonsekwentnie.

**Roztwór**

1. Wybierz dotknięty przejście.
2. Wybierz **Wygląd → Reset Notatki → Reset Rozstaw notatek (Appearance → Reset Notes → Reset Note Spacing)**.
3. Sprawdź odstępy pomiędzy tekstami, symbolami akordów i wypadkami.
4. Regulacja systemu się łamie, jeśli przejście pozostaje zatłoczone.

Jeśli dany obiekt nadal siedzi niezwykle daleko od swojej notatki, sprawdź jego indywidualne położenie.

### 36. Jak ukryć puste stawy?

Ukrywanie niewykorzystanych kijów może sprawić, że duży wynik zespołu łatwiej odczytać.

**Roztwór**

1. Wybierz odpowiednie systemy lub przejście.
2. Wybierz **Układ → Ukrywanie stanowisk → Ukryj puste miejsca (Layout → Hiding Staves → Hide Empty Staves)**.
3. Sprawdzić, czy wszystkie niezbędne instrumenty pozostają widoczne.

Personel zawierający notatki lub inne istotne przedmioty nie może kwalifikować się jako pusty. Sprawdź to, zanim cokolwiek skasuję.

Użyj **Pokaż puste stanowiska (Show Empty Staves)**, gdy potrzebujesz, aby personel pojawił się ponownie.

### 37. Jak mam zmienić porządek instrumentów?

Zmiana etykiety nie przenosi personelu.

**Roztwór**

1. Otwórz **Home → Instrumenty → Dodaj lub Usuń (Home → Instruments → Add or Remove)**.
2. Wybierz instrument na liście punktów.
3. Przesuń to w górę lub w dół.
4. Potwierdź resztę.
5. Wsporniki przeglądowe, aparaty ortopedyczne i grupowanie prętów.

Wybierz kolejność, która odpowiada zespołowi i pomaga muzykom znaleźć swoje części szybko.

### 38. Dlaczego nazwy instrumentów są błędne lub zaginione?

Nazwy instrumentów mogą różnić się między pierwszym a późniejszym systemem.

**Roztwór**

1. Sprawdź pełne i krótkie nazwy instrumentu.
2. Edytuj odpowiednio wyświetlaną nazwę lub ustawienia instrumentu.
3. Przejrzyj ustawienia wyświetlania nazw punktów.
4. Sprawdzić, czy zmiana instrumentu wprowadza inną etykietę.

Należy używać pełnej nazwy, w której czytelnik potrzebuje identyfikacji i wyraźnego skrótu na kolejnych systemach.

### 39. Dlaczego jest nieoczekiwana strona?

Puste strony mogą wynikać ze specjalnej przerwy na stronie, ustawień strony title- lub zaimportowanych formatowania.

**Roztwór**

1. Wyświetl znaki układu.
2. Sprawdź koniec poprzedniej strony.
3. Sprawdź **Specjalna przerwa na stronie (Special Page Break)**, który umieszcza puste strony.
4. Usuń lub dostroić odpowiedzialne przerwy.
5. Przejrzyj następujące strony po zmianie układu.

Nie usuwaj muzyki, aby usunąć stronę utworzoną przez formatowanie.

### 40. Dlaczego cyfry barów startują lub niepoprawnie przywracają?

Pickup, granica ruchu lub przypadkowa zmiana numeru barowego może mieć wpływ na numerację.

**Roztwór**

1. Sprawdź punkt, w którym numeracja staje się nieprawidłowa.
2. Sprawdź **Zmiana numeru paska (Bar Number Change)**.
3. Popraw lub usuń resztę.
4. Przejrzyj ustawienia wyświetlania numeru barowego.
5. Sprawdź numerację zarówno punktów, jak i części.

Zdecyduj, czy początkowy odbiór powinien być nienumerowany lub policzony, a następnie stosować tę konwencję konsekwentnie.

## Części, drukowanie i eksportowanie {#parts-printing-and-exporting}

### 41. Jak tworzyć poszczególne części Instrumentalne?

**Części dynamiczne (Dynamic Parts)** pozwala na dzielenie się muzyczną treścią.

**Roztwór**

1. Otwórz sterownik **Części (Parts)**.
2. Sprawdź, które części już istnieją.
3. Otwórz wymaganą część.
4. Tam, gdzie jest obsługiwane, należy utworzyć nową część i wybrać kije, które powinna zawierać.
5. Ustaw układ dla gracza.

Utrzymuj edycje muzyczne w powiązanym strumieniu wyników i części, zamiast niepotrzebnie utrzymywać oddzielne pliki.

### 42. Dlaczego moja część Instrumentalna ma inny układ niż wynik?

Części posiadają niezależne wymagania dotyczące układu, w tym obroty stron, rozmiar personelu i przerwy systemowe.

**Roztwór**

1. Otwórz dotkniętą część.
2. Sprawdź jego **Konfiguracja dokumentu (Document Setup)**.
3. Przejrzyj automatyczne przerwy i ręczne przerwy.
4. Dostosuj układ części bezpośrednio.

Różnice w układzie są zwykle oczekiwane. Jeśli notatki lub rytmy wydają się błędne, sprawdź, czy przeglądasz poprawną powiązaną część i czy jej zawartość nie została ukryta.

### 43. Dlaczego Multiresides brakuje lub podzielili się w moich częściach?

Multirest może być podzielony przez instrukcje muzyczne lub obiekty, które muszą pozostać widoczne.

**Roztwór**

1. Potwierdź, że wieloskładniki są włączone w części.
2. Sprawdź bary, gdzie łamie się wieloraki.
3. Sprawdź czy nie ma śladów prób, tekstu, barów, zmian klucza i podpisów czasowych.
4. Usuwać przypadkowe przedmioty tylko po potwierdzeniu, że są niepotrzebne.

Niektóre przerwy są prawidłowe, ponieważ gracze muszą zobaczyć instrukcję w tym momencie.

### 44. Jak stworzyć lepszą stronę zamienia się w części?

Gracze potrzebują wystarczająco dużo czasu, aby obrócić stronę bez utraty swojego następnego wpisu.

**Roztwór**

1. Otwórz pojedynczą część.
2. Znajdź odpoczynek odpowiedni do obracania stron.
3. Wstaw przerwy na stronie w praktycznych pozycjach.
4. Przegląd automatycznych opcji konkursu- turn tam, gdzie są dostępne.
5. Sprawdź ostatnią liczbę stron i odstępy systemowe.

Unikaj tworzenia niezwykle zatłoczonych stron tylko po to, aby wymusić skręt. Sprawdź układ z perspektywy gracza.

### 45. Dlaczego mój PDF ma zły rozmiar lub marginesy?

Ustawienie strony wyniku oraz ustawienia drukowania lub eksportu mogą się nie zgadzać.

**Roztwór**

1. Sprawdź rozmiar i orientację strony w **Konfiguracja dokumentu (Document Setup)**.
2. Sprawdź marginesy i rozmiar personelu.
3. Potwierdź, że eksportujesz zamierzony wynik lub część.
4. Użyj built- w formacie PDF eksportu tam, gdzie jest dostępny.
5. Otwórz PDF i zweryfikuj jego wymiary stron.

Podczas drukowania, sprawdzić rozmiar papieru i skalowanie oddzielnie. "Dopasowanie do strony" może zmienić ostateczny rozmiar drukowanego personelu.

### 46. Dlaczego symbole muzyczne lub czcionki są błędne w formacie PDF?

Brakujące czcionki, zastępstwa lub związane z fontem problemy eksportowe mogą zmienić wygląd notacji.

**Roztwór**

1. Porównaj PDF z wynikami na ekranie.
2. Potwierdź zainstalowanie wymaganej czcionki muzycznej i tekstowej.
3. Spróbuj Sibelius built- w eksporcie PDF, jeśli jest dostępny.
4. Otwórz wynik w innej przeglądarce PDF.
5. Jeśli symbole są również błędne wewnątrz Sibelius, zbadać instalację czcionek aplikacji.

Jeśli tylko niestandardowa czcionka nie powiodła się, należy sprawdzić standardową czcionkę w kopii wyniku.

### 47. Dlaczego nie mogę eksportować pliku audio?

Eksport dźwięku wymaga konfiguracji odtwarzania zdolnej do renderowania dźwięku wewnątrz komputera.

**Roztwór**

1. Zaznacz wybraną konfigurację odtwarzania.
2. Użyj obsługiwanego wirtualnego instrumentu lub wewnętrznego źródła dźwięku odtwarzania.
3. Potwierdź, że zwykły odtwarzacz działa.
4. Wybierz **Plik → Eksport → Audio (File → Export → Audio)**, jeśli jest dostępny.

Jeśli odtwarzanie wykorzystuje zewnętrzny syntezator sprzętowy, jego dźwięk może wymagać zapisu przez interfejs audio. Wysyłanie MIDI do urządzenia nie przechwytuje jego dźwięku.

## Oszczędność, odzysk i wydajność {#saving-recovery-and-performance}

### 48. Jak odzyskać wynik po wypadku?

Odzyskanie zależy od tego, co Sibelius uratował przed przerwaniem.

**Roztwór**

1. Otwórz Sibelius i sprawdź czy nie ma czasu na powrót do zdrowia.
2. Sprawdź dostępne pliki autosave lub backup.
3. Użyj lokalizacji pokazanych w preferencjach oszczędzania wersji lub przewodniku referencyjnym.
4. Porównaj znaczniki czasu i treści muzyczne.
5. Zapisz najlepiej odzyskaną wersję pod nową nazwą.

Unikaj nadpisywania oryginału, dopóki nie potwierdzisz, że odzyskany plik zawiera pracę, której potrzebujesz.

### 49. Dlaczego Sibelius jest powolny, mroźny czy rozbity?

Przyczyna może obejmować określony wynik, bibliotekę odtwarzania, sterownika lub komponentu oprogramowania.

**Roztwór**

1. Oszczędzaj pracę i włącz Sibeliusa.
2. Przetestuj mały nowy wynik.
3. Porównaj zachowanie z problematycznym wynikiem.
4. Sprawdź prostszą konfigurację odtwarzania.
5. Odłącz niepotrzebne urządzenia MIDI i audio.
6. Sprawdź kompatybilne aktualizacje Sibelius i sterownika.

Jeśli tylko jeden wynik zawiedzie, należy pracować nad kopią i zawęzić dotknięty przejść. Jeśli każdy wynik zawiedzie, zapisz swoją wersję, system operacyjny i dokładny komunikat błędu dla wsparcia.

### 50. Dlaczego ktoś inny nie może otworzyć mojego pliku Sibeliusa?

Odbiorca może mieć wersję starszą, wydanie ograniczone lub niekompletną kopię pliku.

**Roztwór**

1. Zapytaj, której wersji i wydania używają Sibelius.
2. Tam, gdzie jest obsługiwane, należy użyć **Plik → Eksport → Poprzednia wersja (File → Export → Previous Version)**.
3. Wyślij eksportowaną kopię i zatrzymaj oryginał.
4. Sprawdź, czy przesłany plik jest kompletny.
5. Jeśli używają innej aplikacji notacji, należy rozważyć MusicXML.

Eksport wersji older- i MusicXML mogą zmieniać formatowanie lub funkcje nieobsługiwane. Wyślij PDF obok edytowalnego pliku jako odniesienie wizualne.

## Szybka lista kontrolna rozwiązywania problemów {#quick-troubleshooting-checklist}

Przed dokonaniem istotnych zmian:

1. Zapisz osobną kopię wyniku.
2. Określić, czy problem wpływa na jeden wynik lub każdy wynik.
3. Sprawdź wybrane urządzenia audio i MIDI.
4. Sprawdź konfigurację odtwarzania.
5. Sprawdź najnowszą notację lub zmiany układu.
6. Przywróć Sibeliusa, gdy będzie to stosowne.
7. Sprawdź kompatybilność wersji i systemu operacyjnego.
8. Zmień jedno ustawienie na raz i przetestuj wynik.

## Oficjalna pomoc Sibeliusa {#official-sibelius-help}

W celu uzyskania instrukcji dotyczących wersji i wydania, należy zapoznać się z załączonym do aplikacji **Przewodnik informacyjny Sibelius (Sibelius Reference Guide)**.

- [Avid Sibelius Nauka i wsparcie](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Informacje o uwolnieniu](https://www.avid.com/resource-center/whats-new-in-sibelius)

Podczas zwracania się o pomoc, należy dołączyć wersję Sibelius, system operacyjny, odtwarzacz, dokładny komunikat błędu i czy problem wpływa na jeden wynik lub wszystkie wyniki.


---

## Pomoc w zakresie licencjonowania i instalowania stron Sibelius dla szkół {#sibelius-site-licensing-and-installation-help-for-schools}

Zarządzanie Sibeliusem przez szkołę czy koledż zamiast rozwiązywanie problemów z jedną stacją roboczą? Softplanet Productions ma 25 lat doświadczenia w obsłudze brytyjskich działów muzycznych. [Porównaj opcje licencji Sibelius na stronie i poproś o ofertę](/pl/services/sibelius-site-licenses/) dla nowych instalacji, dodatkowych siedzeń lub rozmieszczania sieci.
