---
title: 'Sibelius: soluții pentru 50 de probleme frecvente'
description: Rezolvă probleme de sunet, MIDI, introducere a notelor, aspect al partiturii, export PDF și recuperare
  a fișierelor.
draft: false
showTableOfContents: false
---

Găsiți soluții practice la 50 de probleme comune Sibelius, de la sunet de redare lipsă la decalaj scor ciudat și probleme de export PDF.

Aceste instrucţiuni sunt destinate desktop-ului Sibelius. Meniurile şi caracteristicile disponibile variază între versiuni şi ediţii, inclusiv Sibelius First, Artist şi Ultimate. Dacă lipseşte o comandă, căutaţi numele său în Sibelius sau consultaţi Ghidul de referinţă furnizat cu versiunea dumneavoastră.

Înainte de a face schimbări majore, salvați o copie separată a scorului.

## Sari la o categorie

- [Sunet și redare](#sound-and-playback)
- [MIDI și intrare notă](#midi-and-note-input)
- [Nation, Voices and Rhythm](#notation-voices-and-rhythm)
- [Schițarea și spațiul scorului](#score-layout-and-spacing)
- [Părți, imprimare și export](#parts-printing-and-exporting)
- [Economie, recuperare și performanță](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Sunet și redare {#sound-and-playback}

### 1. De ce nu există sunet în Sibelius?

Dacă linia de redare se mișcă, dar nu auzi nimic, verifică ieșirea audio, configurația de redare și Mixer.

**Soluţie**

1. Confirmați că boxele sau căștile funcționează într-o altă aplicație.
2. Deschide **Playback Devices** de la **Joacă** tab.
3. Deschide **Audio Engine Options** şi selectaţi interfaţa audio prevăzută.
4. Alegeți o configurație de redare care utilizează o sursă de sunet instalată.
5. Deschide. **Mixer** și verificați canalele muted, instrumentele soloate sau volumul scăzut de master.

Dacă ați conectat o interfață audio după lansarea Sibelius, reporniți programul cu interfața conectată.

**Legate:** Vezi problemele 2, 5 şi 6.

### 2. De ce joacă Sibelius printre vorbitorii sau căştile greşite?

Sibelius poate folosi o ieșire diferită de dispozitivul implicit al sistemului de operare.

**Soluţie**

1. Conectați și activați dispozitivul necesar.
2. Deschide **Audio Engine Options**.
3. Selectați interfața corespunzătoare.
4. Verificați ruta de ieșire în cazul în care interfața are mai multe ieșiri.
5. Reporneşte redarea.

Dacă dispozitivul lipseşte, închideţi Sibelius şi confirmaţi că sistemul de operare îl recunoaşte înainte de redeschiderea programului.

Dispozitivele Bluetooth pot introduce întârzieri suplimentare.

### 3. De ce Playback Crackle, Click sau Break Up?

Un tampon audio care este prea mic poate provoca redare întreruptă, în special cu biblioteci de sunet exigente.

**Soluţie**

1. Deschide **Audio Engine Options**.
2. Măriți dimensiunea tamponului cu un singur pas disponibil.
3. Joaca un pasaj exigent si asculta din nou.
4. Închideţi aplicaţiile inutile.
5. Verificați dacă driver-ul de interfață suportă sistemul de operare.

Repetaţi până când redarea este stabilă. În cazul în care sunetul rămâne distorsionat, verificaţi şi nivelurile Mixer: decupaj şi probleme tampon necesită diferite remedieri.

### 4. De ce există o întârziere atunci când am juca tastatura mea MIDI?

Timpul dintre a apăsa o cheie şi a auzi un sunet se numeşte latenţă.

**Soluţie**

1. Deschide **Audio Engine Options**.
2. Reduceți treptat dimensiunea tamponului.
3. Testați tastatura după fiecare schimbare.
4. Dacă apar clicuri, creşteţi uşor tamponul.

Pe Windows, utilizaţi driver-ul ASIO al producătorului de interfaţă atunci când este disponibil. Pe MacOS, folosiţi dispozitivul core Audio adecvat.

Evitați căștile Bluetooth atunci când aveți nevoie de monitorizarea tastatură receptivă.

### 5. De ce este un instrument tăcut?

Un singur personal silențios indică, de obicei, setările Mixer-ului, atributiile sonore sau proprietățile de redare.

**Soluţie**

1. Deschide. **Mixer**.
2. Verificați dacă instrumentul nu este dezactivat.
3. Verificați dacă un alt instrument este soloed.
4. Confirmă că personalul are un sunet adecvat atribuit.
5. Alegeți o notă afectată și verificați-l **Joacă pe pass** configurări în **Inspectore.**, acolo unde este disponibil .

De asemenea, caută o schimbare neintenţionată a instrumentului înainte de trecerea tăcută.

### 6. De ce lipsesc sunetele Sibelius sau nu sunt disponibile?

Aplicația de notare și biblioteca de sunet pot necesita instalare separată.

**Soluţie**

1. Verificați ce bibliotecă de sunet se așteaptă de la configurația de redare.
2. Confirmă că biblioteca este instalată.
3. Dacă este necesar, obțineți instalatorul adecvat din contul dvs. Avid.
4. Dacă ați mutat biblioteca, urmați procedura susținută pentru actualizarea locației sale.
5. Reporniţi Sibelius şi selectaţi configuraţia de redare de potrivire.

Nu presupuneți că reinstalarea aplicației principale va reinstala și o bibliotecă de sunet mare.

### 7. De ce joacă un instrument sunetul greşit?

Definiția instrumentului personalului sau atribuirea Mixer nu se potrivește cu sunetul vă așteptați.

**Soluţie**

1. Verificați care instrument este atribuit personalului.
2. Caută modificări de instrument în scor.
3. Verificaţi configuraţia de redare selectată.
4. Revizuiți misiunea de sunet a personalului în **Mixer**.

Dacă aveți nevoie pentru a schimba instrumentul în sine, creați un adecvat **Modificarea instrumentului**. Renaming personalul singur nu schimbă definiția muzicală sau sunet de redare.

### 8. De ce dinamica nu afectează redarea?

Dinamica introdusă într-un stil de text nepotrivit sau atașată la poziția greșită nu poate produce rezultatul preconizat.

**Soluţie**

1. Alegeți nota de unde ar trebui să înceapă dinamica.
2. Creează **Text expresie**.
3. Introduceți dinamica folosind meniul de cuvinte al stilului de text.
4. Verificați dacă este atașat la personalul vizat și bate.
5. Joaca pasajul de la ușor înainte de marcare.

Dacă dinamica are încă un efect mic, testați un alt sunet de redare. Bibliotecile de sunet diferă în modul în care acestea răspund la dinamica.

### 9. De ce îmi ignoră Sibelius marcarea tempoului?

Un titlu pe care scrie Allegro nu funcționează în mod necesar ca o pregătire tempo de redare.

**Soluţie**

1. Creează marcajul cu **Text Tempo** sau dacă este cazul **Marca Metronom** Stilul text.
2. Pentru o viteză precisă, includeți o unitate de bătaie recunoscută și o valoare tempo.
3. Verifică-i poziţia de ataşament.
4. Revizuire **Performanță** setările dacă redarea variază în mod intenționat tempo-ul.

În cazul în care întregul scor sună în mod constant prea repede sau lent, verificați și controlul tempo de redare.

### 10. De ce repetările sau primele şi cele de-a doua sfârşituri joacă incorect?

Redarea depinde de structura repetată, nu doar de aspectul vizual al unei linii sau eticheta de text.

**Soluţie**

1. Foloseşte barele corespunzătoare.
2. Creați linii finale utilizând tipurile corespunzătoare de linii de prim și al doilea capăt.
3. Verificați dacă fiecare capăt începe și se termină la barele prevăzute.
4. Revizuiţi setările de redare repetată şi orice secvenţă de repetare manuală.
5. Test de redare înainte de secțiunea repetată.

Utilizați instrucțiuni repetate recunoscute mai degrabă decât text obișnuit care arată doar ca

## MIDI și intrare notă {#midi-and-note-input}

### 11. De ce Sibelius nu-mi recunoaşte tastatura MIDI?

Dispozitivul poate fi deconectat, indisponibil la sistemul de operare sau dezactivat la Sibelius.

**Soluţie**

1. Conectați tastatura înainte de a deschide Sibelius.
2. Deschide **Preferințe → Dispozitive de intrare**.
3. Activează dispozitivul corect.
4. Joacă o cheie și verifică indicatorul de intrare.
5. În cazul în care dispozitivul lipsește, se testează un alt port sau cablu USB.

Dacă este implicat un hub, încercaţi să vă conectaţi direct la computer. Instalaţi un şofer de producător dacă tastatura necesită unul.

### 12. De ce pot auzi tastatura mea, dar nu apar note?

Audierea unui sunet nu înseamnă că Sibelius intră în prezent notație. Tastatura poate, de asemenea, să producă propriul sunet independent.

**Soluţie**

1. Selectați restul sau poziția în care trebuie să înceapă intrarea.
2. Introduceți modul de introducere a notei.
3. Alege o durată pe **Tastatură**.
4. Pune un bilet.

Pentru înregistrare live, utilizați **Flexi-time** mai degrabă decât intrare pas-timp. Confirmați că tastatura este activată în **Dispozitive de intrare** în cazul în care notele încă nu apar.

### 13. De ce sunt introduse notiţe în Octava greşită?

O schimbare de octavă poate proveni din setările de tastatură sau din convenţiile de notare ale instrumentului.

**Soluţie**

1. Verificați octava tastaturii și transpuneți comenzile.
2. Testați intrarea pe un personal de pian normal.
3. Verificați instrumentul atribuit personalului original.
4. Compară punctele de vedere ale concertului cu cele ale transpunerii.

Unele instrumente, inclusiv chitara şi piccolo, sună convenţional la o octavă distanţă de notele lor scrise. Alte instrumente de transpunere se schimbă la intervale diferite.

### 14. De ce sunt introduse notiţele MIDI de două ori?

Intrările duplicate pot apărea atunci când aceeași performanță ajunge la Sibelius prin mai multe rute MIDI.

**Soluţie**

1. Deschide **Dispozitive de intrare**.
2. Activați temporar doar intrarea prevăzută a tastaturii.
3. Deconectează conexiunile MIDI inutile.
4. Verificați orice aplicație de rutare MIDI sau setări de interfață.
5. Testează din nou o singură notă.

Dacă auziţi sunet dublat, dar apare doar o singură notă, investigaţi monitorizarea audio şi tastatura lui **Control local** Setarea în schimb.

### 15. De ce înregistrează Flexi-time producând ritmuri meschine?

Intrările live pot fi interpretate prea precis pentru muzica pe care o intenţionaţi, creând notiţe scurte nedorite, odihniri sau tupleţi.

**Soluţie**

1. Deschide **Opțiuni flexi-time**.
2. Setează valoarea minimă a notei pentru a se potrivi pasajului.
3. Streptococii dacă nu aveţi nevoie de ei.
4. Înregistrați la un tempo confortabil, cu un click clar.
5. Înregistraţi un scurt pasaj şi examinaţi-l înainte de a continua.

Pentru muzica complexa, intrare pas-timp poate necesita mai putin corectie decat inregistrare live.

### 16. Cum pot introduce coarde în loc de note separate?

Note jucat unul după altul în pas-timp de intrare ocupă în mod normal poziții ritmice succesive.

**Soluţie**

Pentru intrare MIDI, jucați notele coardei împreună după selectarea duratei necesare.

Pentru intrarea în tastatură:

1. Introduceți prima notă.
2. Alege-l.
3. Utilizați comenzile de interval pentru a adăuga note de mai sus sau de mai jos.

Se verifică dacă notele rezultate au o singură tulpină și o durată.

### 17. Cum pot introduce note fără un tastatură numerotică?

Poţi folosi ecranul lui Sibelius. **Tastatură** chiar dacă laptop-ul nu are pad-uri cu numere separate.

**Soluţie**

1. Afișează **Tastatură** de la comenzile panourilor.
2. Faceți clic pe durata necesară sau articulație.
3. Introduceți pitch-uri cu tastatura calculatorului sau o tastatură MIDI.
4. Revizuiți seturile disponibile de tastatură-scurtătură în **Preferințe**.

De asemenea, puteți personaliza comenzi rapide sau conectați o tastatură numerică USB dacă introduceți notația frecvent.

### 18. De ce noile note înlocuiesc muzica existentă?

Notă de intrare editează muzica la poziția ritmică selectată; aceasta nu creează automat bare suplimentare pentru fiecare idee nouă.

**Soluţie**

1. Anulează editarea nedorită.
2. Adăugaţi barele necesare înainte de a intra în noul pasaj.
3. Selectați primul rest în noile bare.
4. Începeți intrarea notă acolo.

Dacă doriţi un ritm independent suplimentar pentru acelaşi personal, folosiţi o altă voce în loc să înlocuiţi vocea existentă.

## Nation, Voices and Rhythm {#notation-voices-and-rhythm}

### 19. Cum pot adăuga sau șterge bare întregi?

Ștergerea notelor și ștergerea barelor sunt operațiuni diferite.

**Soluţie**

Pentru a adăuga bare, utilizați **Acasă → Baruri → Adăugați** şi alegeţi opţiunea potrivită.

Pentru a șterge barele:

1. Face o **selecție sistem** Dintre barele de peste toate dungile.
2. Verificați dacă selecția include exact barele pe care doriți eliminate.
3. Șterge selecția.

O selecție normală de pasaj poate șterge conținutul muzical în timp ce lăsați barele în loc.

### 20. Cum pot schimba o semnătură temporală fără notițe neașteptate în mișcare?

Schimbarea contorului îl poate determina pe Sibelius să reorganizeze muzica existentă în baruri noi.

**Soluţie**

1. Salvați o copie a scorului.
2. Selectați punctul în care trebuie să înceapă schimbarea.
3. Deschide. **Ora semnăturii** Comenzi.
4. Revizuiți opțiunea de rescriere a barelor existente.
5. Aplicaţi schimbarea şi inspectaţi pasajul afectat.

Dezactivarea rescriere păstrează structura barei existente, dar poate lăsa bare ale căror durate nu se potrivesc contorului afișat. Utilizați această opțiune în mod deliberat.

### 21. Cum pot crea un bar de pickup sau Anacrusis?

Un pickup este o bară de deschidere scurtată, cum ar fi o bătaie înainte de prima bară completă a unei piese în 4/4.

**Soluţie**

Atunci când se creează semnătura timpului de deschidere, utilizați **pickup/upbeat** opțiunea și să specifice durata acesteia.

Pentru un scor existent, creați o **bară neregulată** a lungimii necesare folosind comenzile de creare a barului, apoi transferaţi cu atenţie muzica de deschidere.

Verificați numerotarea barei și bara finală dacă piesa necesită un final complementar scurtat.

### 22. Cum pot pune două ritmuri independente pe un personal?

Folosiţi voci separate pentru linii muzicale simultane.

**Soluţie**

1. Introduceți prima linie în **Vocea 1**.
2. Selectaţi poziţia de pornire pentru a doua linie.
3. Alege **Vocea 2** privind **Tastatură**.
4. Introduceți notele sale și se bazează independent.

Vocile 1 și 2 oferă, de obicei, direcții opuse stem. Utilizați voci suplimentare numai atunci când notația are nevoie de ele.

Nu utilizaţi o coardă atunci când notele necesită ritmuri diferite.

### 23. De ce apar odihniri suplimentare în scorul meu?

Fiecare voce activă are nevoie de propria structură ritmică, astfel încât vocile suplimentare să poată introduce odihniri suplimentare.

**Soluţie**

1. Alegeţi o odihnă neaşteptată şi identificaţi vocea.
2. Verificați dacă această voce conține notele necesare în altă parte în bar.
3. Scoateți o voce creată accidental, dacă este cazul.
4. Ascundeți o odihnă numai atunci când este valabil din punct de vedere muzical pentru a face acest lucru.

Evitaţi ascunderea odihnei doar pentru a ascunde un ritm incomplet. Mai întâi asiguraţi-vă că fiecare voce reprezintă durata barei prevăzute.

### 24. Cum pot crea tripleți și alte Tupleți?

Tupleţii împart o întindere ritmică diferit de cea normală.

**Soluţie**

1. Alegeți o notă sau o odihnă cu durata de bază prevăzută.
2. Utilizare **Notă intrare → Tupleți**.
3. Alegeți tuplet necesar sau introduceți un raport personalizat.
4. Introduceți notele rămase.

Pentru un triplet obișnuit de a opta notă, începeți cu o valoare de a opta notă. Dacă tuplet ocupă intervalul greșit, anulați-l și verificați durata de pornire și raportul.

### 25. De ce notiţele mele sunt puse incorect?

Gruparea de fascicule depinde de contor, de setările sale de grupare şi de orice schimbare manuală a fasciculului.

**Soluţie**

1. Verifică grupul de bătăi al semnăturii timpului.
2. Selectaţi notele afectate.
3. Utilizaţi **Tastatură** sisteme de control al razelor pentru pornirea, continuarea sau ruperea grinzilor, după cum este necesar.
4. Pentru o problemă recurentă, reglați setările de grupare mai degrabă decât corectarea manuală a fiecărei fascicule.

De exemplu, 6/8 grupează în mod normal opt note în două grupuri de trei, în timp ce alți metri pot avea nevoie de un model diferit.

### 26. Cum să am note de Beam peste două stave?

Notaţia de personal încrucişat este utilă pentru pasajele pianului împărţite între mâini.

**Soluţie**

1. Introduceți pasajul pe personalul său de origine.
2. Selectați notele care ar trebui să apară pe celălalt personal.
3. Utilizaţi **Note de personal încrucişat** comenzi pentru a muta afișarea lor de mai sus sau de mai jos.
4. Revizuiţi tulpinile, grinzile şi spaţiile de lucru.

Mişcarea de personal încrucişat păstrează relaţia notelor cu vocea lor originală. Tăierea obişnuită şi pasta mută muzica la un alt personal şi nu poate produce aceeaşi notaţie.

### 27. De ce se comportă cravata mea ca un slur?

Legăturile şi slurs-urile au înţelesuri muzicale diferite.

**Soluţie**

Utilizaţi un **cravată** să se alăture notelor consecutive ale aceluiași pas într-o singură durată susținută. **Tastatură** controlul cravatei.

Utilizaţi un **slur** pentru a indica o frază sau o articulație între note. Creați-o folosind **SlurCity in Germany** Comanda.

Dacă o cravată nu se conectează corect, verificați pas nota următoare, accidental, voce și poziția ritmică.

### 28. De ce lipsesc accidentalele sau reapar?

Sibelius determină afișarea accidentală a semnăturii cheii, notele anterioare în setările barei și notației.

**Soluţie**

1. Verifică semnătura cheii.
2. Verificați evenimentele anterioare ale smoală în același bar.
3. Selectaţi nota şi inspectaţi-l accidental cu ajutorul **Tastatură**.
4. Adăugați un accident de precauție în cazul în care îmbunătățește lizibilitatea.

Nu schimba pas real doar pentru a forța un simbol să apară. Afișare accidentală și smoală muzicală trebuie să fie ambele corecte.

### 29. Cum pot schimba ortografia enharmonică a unei note?

Un pas poate fi introdus ca un ascuțit atunci când o ortografie plat s-ar potrivi mai bine armoniei.

**Soluţie**

1. Alegeți nota sau pasajul.
2. Utilizaţi **Reîmprospătează** Comanda.
3. Verifică ortografia împotriva corzii şi cheii.

De exemplu, o notă care sună ca F-harp poate fi scrisă ca G-flat într-un context armonic special.

Respins păstrează smoală de sondare. Transpozitia schimba pitch și rezolvă o problemă diferită.

### 30. De ce sunt Notiţele Roşii în Sibelius?

Notițe roșii indică de obicei faptul că un teren se află în afara intervalului definit pentru instrument.

**Soluţie**

1. Verificați instrumentul atribuit personalului.
2. Revizuiți pitch-urile scrise și sonore.
3. Verificați setarea ecranului cu rază de acțiune instrumentală.
4. Decide dacă pasajul este potrivit pentru jucătorul vizat.

Un avertisment de interval nu înseamnă automat notația este greșită. Cu toate acestea, ascunderea culorii nu face o notă nepractică redată.

## Schițarea și spațiul scorului {#score-layout-and-spacing}

### 31. Cum pot potrivi mai multe sau mai puține bare pe un singur sistem?

Sibelius calculează în mod normal lungimile sistemului automat, dar puteți controla pauze importante.

**Soluţie**

1. Selectați barele care ar trebui să împărtășească un sistem.
2. Utilizare **Aranjament → Format → Make into System**.
3. Inspectaţi rezultatul pentru notele aglomerate şi text.

Alternativ, selectați o linie de bare și adăugați o **Spargerea sistemului**.

Dacă multe sisteme sunt aglomerate, revizuiţi dimensiunea personalului, marginile paginii şi distanţa de note, în loc să forţaţi mai multe bare pe fiecare linie.

### 32. De ce Sibelius nu îmi va refluxa scorul?

Încuietorile și pauzele de formatare existente pot preveni modificările automate de dispunere.

**Soluţie**

1. Afișează marcajele de dispunere.
2. Caută pauze de sistem, pauze de pagină şi sisteme blocate.
3. Selectaţi pasajul afectat.
4. Utilizare **Deblochează formatul** după caz.
5. Reaplică doar pauze ai nevoie.

Salvează o copie mai întâi dacă scorul a pregătit deja pagina cu grijă întoarce sau publicări.

### 33. De ce există diferenţe uriaşe între dungi?

Spațiile mari pot fi cauzate de mișcarea manuală, de evitarea coliziunii sau de justificarea verticală.

**Soluţie**

1. Selectaţi sistemele afectate.
2. Utilizare **Optimizarea spaţiului de personal**.
3. Caută versuri, dinamici, linii sau text care ocupă golul.
4. Verificați setările de justificare verticală în cazul în care dungile sunt răspândite pe întreaga pagină.

În cazul în care modificările manuale anterioare sunt cauza, utilizați comanda de resetare corespunzătoare a personalului-spacing înainte de optimizarea din nou.

### 34. De ce Dynamics, Lyrics sau Text Collide?

Evitarea automata a coliziunii poate fi dezactivata, depasita sau incapabila sa rezolve un aspect aglomerat.

**Soluţie**

1. Verifică asta. **Magnetic Layout** este activat pentru obiectele afectate.
2. Resetează poziţionarea manuală inutilă.
3. Optimizează distanţa de personal.
4. Oferiţi sistemului mai mult spaţiu orizontal, dacă este necesar.
5. Asigurați mici ajustări manuale numai după verificarea aspectului automat.

Un sistem care conţine prea multă muzică poate avea nevoie de mai puţine bare, indiferent de setările de coliziune.

### 35. Cum pot recupera neunivers nota orizontală Spacing?

Notiţele de târâre sau schimbarea spaţiului pot lăsa în mod repetat un pasaj care să pară inconsistent.

**Soluţie**

1. Selectaţi pasajul afectat.
2. Alege **Aspect → Reset Note → Reset Note Spacing**.
3. Inspectaţi spaţiul în jurul versurilor, simboluri de coardă şi accidente.
4. Ajustează sistemul dacă pasajul rămâne aglomerat.

În cazul în care un anumit obiect se află încă neobișnuit de departe de nota sa, verificați poziția sa individuală, de asemenea.

### 36. Cum pot ascunde dungi goale?

Ascunderea de dungi neutilizate poate face un scor mare ansamblu mai ușor de citit.

**Soluţie**

1. Selectați sistemele sau pasajul în cauză.
2. Alege **Layout → Staves Ascunde → Ascundeți Staves goale**.
3. Verificați dacă toate instrumentele necesare rămân vizibile.

Un personal care conţine notiţe sau alte obiecte relevante nu se poate califica ca fiind gol.

Utilizare **Arată dungi goale** când ai nevoie de personal să apară din nou.

### 37. Cum pot schimba ordinea instrumentelor?

Schimbarea unei etichete instrumentale nu-şi mută personalul.

**Soluţie**

1. Deschide **Acasă → Instrumente → Adaugă sau Elimină**.
2. Alegeți instrumentul din lista de instrumente a scorului.
3. Mişcă-te în sus sau în jos.
4. Confirmă schimbarea.
5. Se revizuiesc parantezele, bretelele și gruparea barelor.

Alegeţi un ordin care se potriveşte ansamblului şi îi ajută pe muzicieni să-şi găsească rapid piesele.

### 38. De ce numele instrumentului sunt greşite sau lipsesc?

Numele instrumentelor pot fi diferite între primul sistem și sistemele ulterioare.

**Soluţie**

1. Verificați numele complete ale instrumentului și scurte.
2. Editează numele afișat sau setările instrumentului său, după caz.
3. Revizuiți setările de afișare a numelui de instrument al scorului.
4. Verificați dacă modificarea unui instrument introduce o altă etichetă.

Utilizați numele complet în cazul în care cititorii au nevoie de identificare și de o abreviere clară a sistemelor ulterioare.

### 39. De ce există o pagină neprevăzută?

O pagină goală poate rezulta dintr-o pauză de pagină specială, setări de pagină sau formatare importată.

**Soluţie**

1. Afișează marcajele de dispunere.
2. Inspectaţi sfârşitul paginii precedente.
3. Verificați pentru o **Pauză de pagini speciale** care introduce pagini goale.
4. Scoateți sau ajustați pauza responsabilă.
5. Revizuiți următoarele pagini după schimbarea aspectului.

Nu ștergeți muzica pentru a elimina o pagină creată prin formatare.

### 40. De ce încep numerele de bare sau repornesc incorect?

O preluare, o limită de mișcare sau o modificare accidentală a numărului de bare poate afecta numerotarea.

**Soluţie**

1. Inspectaţi punctul în care numerotarea devine incorectă.
2. Verificați pentru o **Schimbă numărul barei**.
3. Corectați sau eliminați schimbarea.
4. Revizuiți setările afișate cu numărul de bare.
5. Verificați numerotarea în ambele scor și părți.

Decideţi dacă un pickup de deschidere trebuie să fie nenumerotat sau numărat, apoi aplicaţi această convenţie în mod consecvent.

## Părți, imprimare și export {#parts-printing-and-exporting}

### 41. Cum pot crea piese individuale de instrumente?

**Părți dinamice** permite unui scor și părților sale instrumentale să împărtășească conținutul muzical.

**Soluţie**

1. Deschide. **Părți** Comenzi.
2. Verificați care părți există deja.
3. Deschideţi partea necesară.
4. În cazul în care este susținută, creați o nouă parte și alegeți dungile pe care ar trebui să le conțină.
5. Reglează aranjamentul pentru jucător.

Păstrați editări muzicale în fluxul de lucru legat scor-și-părți mai degrabă decât menținerea fișiere separate inutil.

### 42. De ce partea mea instrumentală are un aranjament diferit de scor?

Piesele au cerințe independente de dispunere, inclusiv rotiri de pagină, dimensiuni de personal și pauze de sistem.

**Soluţie**

1. Deschide partea afectată.
2. Verifică-l. **Configurare document**.
3. Revizuiți pauze automate și pauze manuale.
4. Reglați direct aspectul piesei.

În cazul în care notele sau ritmurile apar greșit, verificați dacă vizualizați partea corect legată și că conținutul său nu au fost ascunse.

### 43. De ce lipsesc Multiresturile sau sunt împărţite în piesele mele?

Un multirest poate fi împărţit prin instrucţiuni muzicale sau obiecte care trebuie să rămână vizibile.

**Soluţie**

1. Confirmați că multiresturile sunt activate în partea.
2. Inspectaţi barele unde se rupe o multirestaurant.
3. Verificați pentru semne repetiție, text, linii de bare, modificări cheie și semnături de timp.
4. Eliminați obiectele accidentale numai după confirmarea acestora sunt inutile.

Unele pauze sunt corecte pentru că jucătorii trebuie să vadă o instruire în acel moment.

### 44. Cum pot crea o pagină mai bună transformă în piese?

Jucătorii au nevoie de suficient timp pentru a întoarce o pagină fără a pierde următoarea intrare.

**Soluţie**

1. Deschideţi partea individuală.
2. Găsi odihni potrivit pentru rotiri de pagină.
3. Introduceți pauze de pagină la poziții practice.
4. Revizuiți opțiunile automate de întoarcere a paginilor, dacă sunt disponibile.
5. Verificaţi numărul paginii finale şi distanţa de sistem.

Evitați crearea de pagini extrem de aglomerate doar pentru a forța o întoarcere. Testați aspectul din perspectiva jucătorului.

### 45. De ce PDF-ul meu are mărimea sau marginile greșite?

Configurarea paginii scorului și setările de imprimare sau export nu sunt de acord.

**Soluţie**

1. Verificați dimensiunea paginii și orientarea în **Configurare document**.
2. Verificaţi marginile şi mărimea personalului.
3. Confirmaţi că exportaţi scorul sau partea dorită.
4. Utilizați exportul PDF încorporat acolo unde este disponibil.
5. Deschideți PDF și verificați dimensiunile paginii sale.

La imprimare, verificaţi dimensiunea hârtiei şi scalarea separat. ?Fit la pagina poate modifica dimensiunea finală a personalului tipărit.

### 46. De ce sunt simboluri muzicale sau fonturi greșite în PDF?

Fonturile lipsă, substituțiile sau problemele legate de export legate de fonturi pot modifica aspectul notației.

**Soluţie**

1. Comparați PDF cu scorul de pe ecran.
2. Confirmați că sunt instalate fonturile necesare pentru muzică și text.
3. Încearcă exportul PDF încorporat al lui Sibelius acolo unde este disponibil.
4. Deschideți rezultatul într-un alt vizualizator PDF.
5. Dacă simbolurile sunt, de asemenea, greșite în interiorul Sibelius, investiga instalarea fontului aplicației.

Dacă doar un font personalizat nu reușește, testați un font standard într-o copie a scorului.

### 47. De ce nu pot exporta un fișier audio?

Exportul audio necesită o configuraţie de redare a sunetului în calculator.

**Soluţie**

1. Verificaţi configuraţia de redare selectată.
2. Utilizați un instrument virtual sprijinit sau o sursă de sunet de redare internă.
3. Confirmă că redarea obişnuită funcţionează.
4. Alege **Fișier → Export → Audio**, acolo unde este disponibil .

În cazul în care redarea utilizează un sintetizator hardware extern, sunetul său poate fi necesar pentru a fi înregistrat printr-o interfață audio. Trimiterea MIDI pe dispozitiv nu surprinde audio.

## Economie, recuperare și performanță {#saving-recovery-and-performance}

### 48. Cum pot recupera un scor după un accident?

Recuperarea depinde de ce a salvat Sibelius înainte de întrerupere.

**Soluţie**

1. Redeschideţi Sibelius şi verificaţi pentru o recuperare promptă.
2. Inspectaţi fişierele de salvare automată sau de rezervă disponibile.
3. Utilizați locațiile afișate în preferințele de salvare ale versiunii dumneavoastră sau Ghidul de referință.
4. Comparați marcajele temporale și conținutul muzical.
5. Salvează cea mai bună versiune recuperată sub un nume nou.

Evitați suprascrierea originalului până când ați confirmat că fișierul recuperat conține munca de care aveți nevoie.

### 49. De ce este Sibelius lent, îngheţat sau crashing?

Cauza poate implica un anumit scor, biblioteca de redare, driver sau componentă software.

**Soluţie**

1. Păstrează-ţi munca şi reporneşte-l pe Sibelius.
2. Testați un scor mic nou.
3. Compară comportamentul cu scorul problematic.
4. Testați o configurație de redare mai simplă.
5. Deconectați MIDI inutile și dispozitive audio.
6. Verificați actualizări compatibile Sibelius și drivere.

Dacă doar un singur scor nu reuşeşte, lucraţi la o copie şi restrângeţi pasajul afectat. Dacă fiecare scor eşuează, înregistraţi versiunea dvs., sistem de operare şi mesaj de eroare exactă pentru sprijin.

### 50. De ce poate altcineva să nu-mi deschidă dosarul Sibelius?

Destinatarul poate avea o versiune mai veche, o ediție restrânsă sau o copie incompletă a fișierului.

**Soluţie**

1. Întreabă ce versiune şi ediţie Sibelius folosesc.
2. În cazul în care se acordă sprijin, se utilizează **Fișier → Export → Versiunea anterioară**.
3. Trimite copia exportată şi păstrează originalul.
4. Verificați dacă fișierul transferat este complet.
5. În cazul în care folosesc o altă aplicație notație, ia în considerare MusicXML.

Export mai vechi-versiune și MusicXML poate schimba formatarea sau caracteristicile nesuportate. Trimite un PDF alături de fișierul editabil ca o referință vizuală.

## Lista de verificare rapidă de depanare

Înainte de a face schimbări majore:

1. Salvați o copie separată a scorului.
2. Identificați dacă problema afectează un scor sau fiecare scor.
3. Verificați dispozitivele audio selectate și MIDI.
4. Verificaţi configuraţia de redare.
5. Inspectaţi recentele modificări de notaţie sau de aspect.
6. Reporneşte-l pe Sibelius când este cazul.
7. Verificați versiunea și compatibilitatea sistemului de operare.
8. Schimbați o setare la un moment dat și testați rezultatul.

## Ajutor oficial Sibelius

Pentru instrucţiuni specifice versiunii şi ediţiei dumneavoastră, consultaţi **Ghid de referință Sibelius** furnizate împreună cu cererea.

- [Avid Sibelius învaţă şi sprijină](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Informații de lansare](https://www.avid.com/resource-center/whats-new-in-sibelius)

Atunci când solicitați ajutor, includeți versiunea Sibelius, sistemul de operare, dispozitivul de redare, mesajul de eroare exactă și dacă problema afectează un scor sau toate scorurile.


---

## Sibelius licențierea site-ului și ajutor de instalare pentru școli

Gestionarea Sibelius peste o școală sau colegiu, mai degrabă decât de a crea probleme o stație de lucru? Softplanet Productions are 25 de ani de experiență de sprijin departamente de muzică din Marea Britanie. [Compară opțiunile de licență pentru site-ul Sibelius și cere un citat](/ro/services/sibelius-site-licenses/) pentru instalații noi, scaune suplimentare sau instalarea rețelei.
