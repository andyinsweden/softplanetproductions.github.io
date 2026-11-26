---
title: 'Sibelius: 50 problemi comuni e soluzioni'
description: Risolvi 50 problemi di Sibelius relativi ad audio, MIDI, inserimento delle note, impaginazione ed esportazione
  PDF. Cerca per argomento.
draft: false
showTableOfContents: false
---

Trova soluzioni pratiche a 50 problemi Sibelius comuni, dal suono di riproduzione mancante alla spaziatura di partiture scomode e problemi di esportazione PDF.

Queste istruzioni sono destinate per desktop Sibelius. I nomi dei menu e le caratteristiche disponibili variano tra le versioni e le edizioni, tra cui Sibelius First, Artist e Ultimate. Se manca un comando, cerca il suo nome in Sibelius o consulta la Guida di Riferimento fornita con la tua versione.

Prima di effettuare modifiche importanti, salvare una copia separata del tuo punteggio.

## Vai a una categoria {#jump-to-a-category}

- [Suono e riproduzione](#sound-and-playback)
- [Ingresso MIDI e Note](#midi-and-note-input)
- [Notazione, Voci e Ritmo](#notation-voices-and-rhythm)
- [Score Layout e Spacing](#score-layout-and-spacing)
- [Parti, stampa ed esportazione](#parts-printing-and-exporting)
- [Risparmio, Recupero e Prestazioni](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Suono e riproduzione {#sound-and-playback}

### 1. Perché non c'è nessun suono in Sibelius?

Se la linea di riproduzione si muove ma non si sente nulla, controllare l'uscita audio, la configurazione di riproduzione e Mixer.

**Soluzione**

1. Confermare che i vostri altoparlanti o cuffie funzionano in un'altra applicazione.
2. Aprire **Dispositivi di riproduzione (Playback Devices)** dalla scheda **Suona (Play)**.
3. Aprire **Opzioni del motore audio (Audio Engine Options)** e selezionare l'interfaccia audio progettata.
4. Scegliere una configurazione di riproduzione che utilizza una sorgente audio installata.
5. Aprire lo **Mixer** e controllare i canali disattivati, gli strumenti soli o il volume master basso.

Se hai collegato un'interfaccia audio dopo aver lanciato Sibelius, riavviare il programma con l'interfaccia collegata.

**Correlati:** Vedi i problemi 2, 5 e 6.

### 2. Perché Sibelius sta giocando attraverso i diffusori Wrong o cuffie?

Sibelius può utilizzare un output diverso dal dispositivo predefinito del sistema operativo.

**Soluzione**

1. Collegare e attivare il dispositivo richiesto.
2. Aprire **Opzioni del motore audio (Audio Engine Options)**.
3. Selezionare l'interfaccia appropriata.
4. Controllare il routing di uscita se l'interfaccia ha diverse uscite.
5. Riavviare la riproduzione.

Se il dispositivo manca, chiudi Sibelius e conferma che il sistema operativo lo riconosce prima di riaprire il programma.

I dispositivi Bluetooth possono introdurre un ulteriore ritardo.

### 3. Perché Playback Crackle, Fare clic o Ripartire?

Un buffer audio troppo piccolo può causare la riproduzione interrotta, soprattutto con librerie audio esigenti.

**Soluzione**

1. Aprire **Opzioni del motore audio (Audio Engine Options)**.
2. Aumentare la dimensione del buffer per un passo disponibile.
3. Suona a un passaggio impegnativo e ascolta di nuovo.
4. Chiudere applicazioni inutili.
5. Controllare che il driver di interfaccia supporta il sistema operativo.

Ripeti finché la riproduzione non è stabile. Se il suono rimane distorto, controlla anche i livelli di Mixer: i problemi di clipping e buffer richiedono diverse correzioni.

### 4. Perché c'è un ritardo quando gioco la mia tastiera MIDI?

Il tempo tra la pressione di una chiave e l'ascolto di un suono è chiamato latenza.

**Soluzione**

1. Aprire **Opzioni del motore audio (Audio Engine Options)**.
2. Ridurre gradualmente la dimensione del buffer.
3. Testare la tastiera dopo ogni cambiamento.
4. Se vengono visualizzati dei clic, aumenta leggermente il buffer.

Su Windows, utilizzare il driver ASIO del produttore di interfaccia quando disponibile. Su macOS, utilizzare l'apposito dispositivo Core Audio.

Evitare le cuffie Bluetooth quando è necessario un monitoraggio della tastiera reattiva.

### 5. Perché uno strumento è silenzioso?

Un singolo personale silenzioso di solito indica le sue impostazioni Mixer, l'assegnazione del suono o le proprietà di riproduzione.

**Soluzione**

1. Aprire la **Mixer**.
2. Controllare che lo strumento non sia disattivato.
3. Controllare se un altro strumento è solo.
4. Confermare che il personale ha un suono adatto assegnato.
5. Selezionare una nota interessata e controllare le impostazioni **Suonare sul pass (Play on pass)** nella **Ispettore (Inspector)**, dove disponibile.

Cerca anche un cambio di strumento involontario prima del passaggio silenzioso.

### 6. Perché Sibelius suona mancante o non disponibile?

L'applicazione notazione e la sua libreria sonora possono richiedere un'installazione separata.

**Soluzione**

1. Controlla quale libreria sonora si aspetta la configurazione di riproduzione.
2. Confermare che la libreria è installata.
3. Se necessario, ottenere l'installatore appropriato dal tuo account Avid.
4. Se hai spostato la libreria, segui la procedura supportata per aggiornare la sua posizione.
5. Riavvia Sibelius e seleziona la configurazione di riproduzione corrispondente.

Non presumere che reinstallare l'applicazione principale reinstallerà anche una grande libreria audio.

### 7. Perché uno strumento suona il suono sbagliato?

La definizione dello strumento del personale o l'assegnazione del Mixer potrebbe non corrispondere al suono che ti aspetti.

**Soluzione**

1. Controllare quale strumento è assegnato al personale.
2. Cercare modifiche dello strumento nel punteggio.
3. Controllare la configurazione di riproduzione selezionata.
4. Rivedere l'assegnazione sonora dello staff nella **Mixer**.

Se è necessario modificare lo strumento stesso, creare un **Cambiamento dello strumento (Instrument Change)** corretto. Rinominare il personale da solo non cambia la sua definizione musicale o suono di riproduzione.

### 8. Perché le dinamiche non influiscono sul Riproduzione?

Le dinamiche inserite con uno stile di testo inadatto o attaccate alla posizione sbagliata non possono produrre il risultato desiderato.

**Soluzione**

1. Selezionare la nota in cui la dinamica dovrebbe iniziare.
2. Crea **Testo di espressione (Expression Text)**.
3. Inserire la dinamica utilizzando il menu di parole dello stile di testo.
4. Controllare che è attaccato al personale previsto e battere.
5. Suonare il passaggio da poco prima della marcatura.

Se la dinamica ha ancora poco effetto, testa un altro suono di riproduzione. Le librerie sonore differiscono in come rispondono alle dinamiche.

### 9. Perché Sibelius Ignora il mio Tempo di Marcatura?

Una voce che dice “Allegro” non funziona necessariamente come un'istruzione di tempo di riproduzione.

**Soluzione**

1. Creare la marcatura con **Tempo di testo (Tempo Text)** o l'appropriato stile di testo **Metronomo Mark (Metronome Mark)**.
2. Per una velocità precisa, includere un'unità di battito riconosciuta e un valore di tempo.
3. Controllare la posizione di attacco.
4. Verificare le impostazioni **Prestazioni (Performance)** se la riproduzione è intenzionalmente variabile il tempo.

Se l'intero punteggio suona costantemente troppo veloce o lento, controllare anche il controllo del tempo di riproduzione.

### 10. Perché Ripeti o Primo e Secondo Fine giocano in modo non corretto?

La riproduzione dipende dalla struttura di ripetizione, non solo dall'aspetto visivo di una linea o di un'etichetta di testo.

**Soluzione**

1. Utilizzare correttamente le barre di ripetizione.
2. Creare linee finali utilizzando i tipi di linea di primo e secondo appropriati.
3. Controllare che ogni fine inizia e finisce alle barre previste.
4. Rivedere le impostazioni di riproduzione ripetute e qualsiasi sequenza di ripetizione manuale.
5. Prova la riproduzione prima della sezione ripetuta.

Utilizzare le istruzioni di ripetizione riconosciute piuttosto che il testo ordinario che sembra semplicemente “D.S.” o “D.C.”.

## Ingresso MIDI e Note {#midi-and-note-input}

### 11. Perché Sibelius non riconosce la mia tastiera MIDI?

Il dispositivo può essere scollegato, non disponibile per il sistema operativo o disabilitato in Sibelius.

**Soluzione**

1. Collegare la tastiera prima di aprire Sibelius.
2. Aprire **Preferenze → Dispositivi di ingresso (Preferences → Input Devices)**.
3. Abilitare il dispositivo corretto.
4. Suona una chiave e controlla l'indicatore di input.
5. Se il dispositivo manca, testa un'altra porta USB o un cavo.

Se un hub è coinvolto, provare a connettersi direttamente al computer. Installare un driver del produttore se la tastiera ne richiede uno.

### 12. Perché posso sentire la mia tastiera ma non appaiono note?

L'ascolto di un suono non significa che Sibelius stia entrando in notazione. La tastiera può anche produrre il proprio suono indipendentemente.

**Soluzione**

1. Selezionare il resto o la posizione in cui l'ingresso dovrebbe iniziare.
2. Inserire la modalità di ingresso delle note.
3. Scegli una durata sulla **Tastiera (Keypad)**.
4. Suona a un biglietto.

Per la registrazione live, utilizzare **Flexi-time** piuttosto che l'ingresso passo-tempo. Confermare che la tastiera è abilitata in **Dispositivi di ingresso (Input Devices)** se le note non appaiono ancora.

### 13. Perché le note sono inserite nell'ottava sbagliata?

Un cambio di ottava può avere origine nelle impostazioni della tastiera o nelle convenzioni di notazione dello strumento.

**Soluzione**

1. Controllare l'ottava della tastiera e trasporre i controlli.
2. Input di prova su un normale personale piano.
3. Controllare lo strumento assegnato al personale originale.
4. Confrontare le viste di concerto-pitch e transposing-score.

Alcuni strumenti, tra cui chitarra e piccolo, suonano convenzionalmente un ottavo lontano dalle loro note scritte. Altri strumenti di trasposizione si spostano a intervalli diversi.

### 14. Perché le note MIDI sono entrate due volte?

L'ingresso duplicato può verificarsi quando la stessa prestazione raggiunge Sibelius attraverso più di un percorso MIDI.

**Soluzione**

1. Aprire **Dispositivi di ingresso (Input Devices)**.
2. Temporaneamente abilitare solo l'ingresso della tastiera previsto.
3. Scollegare connessioni MIDI inutili.
4. Controllare qualsiasi applicazione MIDI-routing o impostazioni di interfaccia.
5. Riprova una singola nota.

Se si sente il suono raddoppiato, ma appare solo una nota, indagare il monitoraggio audio e l'impostazione **Controllo locale (Local Control)** della tastiera.

### 15. Perché Flexi-time Recording produce Rhythms disordinati?

L'ingresso live può essere interpretato troppo precisamente per la musica che hai voluto, creando brevi note indesiderate, riposa o tuplets.

**Soluzione**

1. Aprire **Opzioni Flexi-time (Flexi-time Options)**.
2. Impostare il valore minimo della nota per adattarsi al passaggio.
3. Restrict tuplets se non avete bisogno di loro.
4. Registrare a un tempo confortevole con un click chiaro.
5. Registrare un breve passaggio e rivederlo prima di continuare.

Per la musica complessa, l'ingresso passo-tempo può richiedere meno correzione rispetto alla registrazione dal vivo.

### 16. Come faccio a entrare accordi invece di note separate?

Le note suonate uno dopo l'altro in input step-time normalmente occupano posizioni ritmiche successive.

**Soluzione**

Per l'ingresso MIDI, giocare le note dell'accordo insieme dopo aver selezionato la durata richiesta.

Per l'ingresso del computer-chiavi:

1. Inserisci la prima nota.
2. Selezionalo.
3. Utilizzare i comandi di intervallo per aggiungere note sopra o sotto di esso.

Controllare che le note risultanti condividano uno stelo e la durata.

### 17. Come faccio a inserire note senza tastiera numerica?

È possibile utilizzare il **Tastiera (Keypad)** di Sibelius sullo schermo anche se il computer portatile non ha un pad di numeri separati.

**Soluzione**

1. Visualizzare lo **Tastiera (Keypad)** dai controlli dei pannelli.
2. Fare clic sulla durata o l'articolazione richiesta.
3. Inserire i campi con la tastiera del computer o una tastiera MIDI.
4. Rivedere i set di tastiere-cortcut disponibili in **Preferenze (Preferences)**.

È inoltre possibile personalizzare le scorciatoie o collegare un tastierino numerico USB se si immette spesso notazione.

### 18. Perché le nuove note sostituiscono la musica esistente?

Nota input modifica la musica nella posizione ritmica selezionata; non crea automaticamente barre extra per ogni nuova idea.

**Soluzione**

1. Annullare la modifica indesiderata.
2. Aggiungere le barre richieste prima di entrare nel nuovo passaggio.
3. Selezionare il primo riposo nelle nuove barre.
4. Iniziare l'ingresso nota lì.

Se si desidera un ritmo indipendente aggiuntivo sullo stesso personale, utilizzare un'altra voce piuttosto che sostituire la voce esistente.

## Notazione, Voci e Ritmo {#notation-voices-and-rhythm}

### 19. Come faccio ad aggiungere o eliminare le barre intere?

Eliminare note e sbarre di cancellazione sono operazioni diverse.

**Soluzione**

Per aggiungere barre, utilizzare **Home → Barre → Aggiungere (Home → Bars → Add)** e scegliere l'opzione appropriata.

Per eliminare le barre:

1. Fare una **selezione del sistema** delle barre attraverso tutte le statistiche.
2. Controllare che la selezione include esattamente le barre che si desidera rimuovere.
3. Cancella la selezione.

Una selezione di passaggi normale può cancellare i contenuti musicali mentre si lasciano i bar in posizione.

### 20. Come faccio a cambiare una firma del tempo senza note inaspettatamente commoventi?

Il misuratore di cambiamento può causare Sibelius a riorganizzare la musica esistente in nuovi bar.

**Soluzione**

1. Salva una copia del punteggio.
2. Selezionare il punto in cui il cambiamento dovrebbe iniziare.
3. Aprire i controlli **Firma del tempo (Time Signature)**.
4. Rivedere l'opzione per riscrivere le barre esistenti.
5. Applicare il cambiamento e ispezionare il passaggio interessato.

Disabilitare la riscrittura conserva la struttura della barra esistente, ma può lasciare le barre le cui durate non corrispondono al metro visualizzato. Usa questa opzione deliberatamente.

### 21. Come faccio a creare un Pickup Bar o Anacrusis?

Un pick-up è una barra di apertura accorciata, come un battito prima del primo bar completo di un pezzo in 4/4.

**Soluzione**

Quando si crea la firma dell'orario di apertura, utilizzare l'opzione **pick-up/upbeat** e specificare la sua durata.

Per un punteggio esistente, creare uno **barra irregolare** della lunghezza richiesta utilizzando i controlli di creazione barra, quindi trasferire la musica di apertura con attenzione.

Controllare la numerazione della barra e la barra finale se il pezzo richiede un finale accorciato complementare.

### 22. Come faccio a mettere due ritmi indipendenti su uno staff?

Utilizzare voci separate per linee musicali simultanee.

**Soluzione**

1. Immettere la prima riga in **Voce 1**.
2. Selezionare la posizione di partenza per la seconda linea.
3. Scegliere **Voce 2** sulla **Tastiera (Keypad)**.
4. Inserisci le sue note e riposa in modo indipendente.

Le voci 1 e 2 di solito forniscono direzioni staminali opposte. Utilizzare voci aggiuntive solo quando la notazione ha bisogno di loro.

Non usare un accordo quando le note richiedono ritmi diversi.

### 23. Perché sono più riposanti Apparendo nel mio punteggio?

Ogni voce attiva ha bisogno della propria struttura ritmica, così voci aggiuntive possono introdurre ulteriori riposanti.

**Soluzione**

1. Selezionare un riposo inaspettato e identificare la sua voce.
2. Controllare se quella voce contiene note richieste altrove nel bar.
3. Rimuovere una voce accidentalmente creata, se del caso.
4. Nascondere un riposo solo quando è musicalmente valido per farlo.

Evitare di nascondere riposa semplicemente per nascondere un ritmo incompleto. Prima assicurarsi che ogni voce conti per la durata della barra prevista.

### 24. Come faccio a creare triplette e altre tuplets?

Le tuplets dividono un arco ritmico in modo diverso dal suo normale raggruppamento.

**Soluzione**

1. Selezionare una nota o un riposo con la durata di base prevista.
2. Utilizzare **Note Input → Tuplet (Note Input → Tuplets)**.
3. Scegliere il tuplet richiesto o inserire un rapporto personalizzato.
4. Inserisci le note rimanenti.

Per una normale tripletta a ottava nota, inizia con un valore di ottava nota. Se il tuplet occupa l'intervallo sbagliato, annullarlo e controllare la durata e il rapporto di partenza.

### 25. Perché le mie note sono carente correttamente?

Il raggruppamento di fascio dipende dal misuratore, dalle impostazioni di raggruppamento e da eventuali modifiche manuali del fascio.

**Soluzione**

1. Controlla il battito della firma del tempo.
2. Selezionare le note interessate.
3. Utilizzare i controlli del fascio **Tastiera (Keypad)** per avviare, continuare o rompere i raggi come richiesto.
4. Per un problema ricorrente, regolare le impostazioni di raggruppamento piuttosto che correggere manualmente ogni fascio.

Ad esempio, 6/8 normalmente raggruppa ottavo note in due gruppi di tre, mentre altri metri possono avere bisogno di un modello diverso.

### 26. Come faccio a sentire le note tra due onde?

La notazione di balestra è utile per i passaggi di pianoforte condivisi tra le mani.

**Soluzione**

1. Immettere il passaggio sul suo personale originario.
2. Selezionare le note che dovrebbero apparire sull'altro personale.
3. Utilizzare i comandi **Note di cross-staff (Cross-staff Notes)** per spostare il display sopra o sotto.
4. La recensione è steli, travi e spaziatura del personale.

Il movimento cross-staff conserva il rapporto delle note con la loro voce originale. Il taglio ordinario e la pasta sposta la musica in un altro personale e non possono produrre la stessa notazione.

### 27. Perche' il mio pareggio e' come una sgualdrina?

Le cravatte e gli slurs hanno diversi significati musicali.

**Soluzione**

Utilizzare una **cravatta** per unire note consecutive dello stesso pitch in una durata sostenuta. Applicalo con il controllo della cravatta **Tastiera (Keypad)**.

Utilizzare una **Sfido** per indicare una frase o articolazione tra le note. Crealo usando il comando **Slur**.

Se una cravatta non si connette correttamente, controllare il passo della nota seguente, la posizione accidentale, vocale e ritmica.

### 28. Perché gli incidenti sono mancanti o riapparire?

Sibelius determina la visualizzazione accidentale dalla firma chiave, note precedenti nelle impostazioni della barra e notazione.

**Soluzione**

1. Controlla la firma chiave.
2. Controllare gli eventi precedenti del campo nella stessa barra.
3. Selezionare la nota e ispezionare il suo accidentale utilizzando lo **Tastiera (Keypad)**.
4. Aggiungete un incidente cautelare in cui migliora la leggibilità.

Non cambiare il campo reale solo per costringere un simbolo a comparire. La visualizzazione accidentale e il campo musicale devono essere entrambi corretti.

### 29. Come posso cambiare la conversazione ermenonica di una nota?

Un passo può essere inserito come un tagliente quando un incantesimo piatto migliorerebbe adattarsi all'armonia.

**Soluzione**

1. Selezionare la nota o il passaggio.
2. Utilizzare il comando **Respell**.
3. Controlla l'ortografia contro la corda e la chiave.

Per esempio, una nota che suona come F-sharp potrebbe essere necessario essere scritta come G-flat in un particolare contesto armonico.

Il respelling preserva il suono del pitch. Trasporre modifiche passo e risolve un problema diverso.

### 30. Perché le note sono rosse a Sibelius?

Le note rosse indicano comunemente che un pitch si trova al di fuori della gamma definita per lo strumento.

**Soluzione**

1. Controllare lo strumento assegnato al personale.
2. Esaminare le piazzole scritte e suonanti.
3. Controllare l'impostazione del display.
4. Decidi se il passaggio è adatto per il giocatore in questione.

Un avviso di intervallo non significa automaticamente che la notazione è sbagliata. Tuttavia, nascondere il colore non rende una nota impraticabile.

## Score Layout e Spacing {#score-layout-and-spacing}

### 31. Come faccio ad adattare più o meno bar su un sistema?

Sibelius calcola normalmente le lunghezze di sistema automaticamente, ma è possibile controllare le interruzioni importanti.

**Soluzione**

1. Selezionare le barre che dovrebbero condividere un sistema.
2. Utilizzare **Layout → Formato → Make Into System (Layout → Format → Make Into System)**.
3. Ispezionare il risultato per le note affollate e il testo.

In alternativa, selezionare una linea di barra e aggiungere una **Interruzione del sistema (System Break)**.

Se molti sistemi sono affollati, rivedere la dimensione del personale, i margini di pagina e la spaziatura delle note piuttosto che costringere più barre su ogni linea.

### 32. Perche' Sibelius non rifluira' il mio Punteggio?

Le serrature e le interruzioni di formattazione esistenti possono impedire modifiche automatiche del layout.

**Soluzione**

1. Visualizzazione dei segni di layout.
2. Cerca interruzioni di sistema, interruzioni di pagina e sistemi bloccati.
3. Selezionare il passaggio interessato.
4. Utilizzare **Sblocca il formato (Unlock Format)** se del caso.
5. Riapplicare solo le pause di cui hai bisogno.

Salvare prima una copia se il punteggio già ha accuratamente preparato pagina gira o layout di pubblicazione.

### 33. Perché ci sono enormi gaps tra le onde?

Grandi lacune possono essere causate da movimento manuale, evitare collisioni o giustificazione verticale.

**Soluzione**

1. Selezionare i sistemi interessati.
2. Utilizzare **Ottimizzare lo spazio del personale (Optimize Staff Spacing)**.
3. Cerca testi, dinamiche, linee o testo che occupano il gap.
4. Controllare le impostazioni di giustificazione verticale se le statistiche sono diffuse in un'intera pagina.

Se le modifiche manuali precedenti sono la causa, utilizzare il comando di reset di spedizione del personale appropriato prima di ottimizzare di nuovo.

### 34. Perché le dinamiche, i testi o i testi collide?

L'elusione automatica della collisione può essere disattivata, sovrastinta o incapace di risolvere un layout affollato.

**Soluzione**

1. Controllare che **Telaio magnetico (Magnetic Layout)** sia abilitato per gli oggetti interessati.
2. Reimpostare il posizionamento manuale non necessario.
3. Ottimizzare la spaziatura del personale.
4. Dare al sistema più spazio orizzontale se necessario.
5. Fare piccole regolazioni manuali solo dopo aver controllato il layout automatico.

Un sistema che contiene troppa musica potrebbe avere bisogno di meno barre, indipendentemente dalle impostazioni di collisione.

### 35. Come faccio a ripristinare un irregolare spazio orizzontale note?

Scolare note o cambiare spaziatura ripetutamente può lasciare un passaggio che sembra inconsistente.

**Soluzione**

1. Selezionare il passaggio interessato.
2. Scegli **Appearance → Ripristina note → Ripristinare la spaziatura delle note (Appearance → Reset Notes → Reset Note Spacing)**.
3. Ispezionare la spaziatura intorno a testi, simboli di accordi e accidentali.
4. Regolare le interruzioni di sistema se il passaggio rimane affollato.

Se un oggetto particolare si trova ancora insolitamente lontano dalla sua nota, controlla anche la sua posizione individuale.

### 36. Come faccio a nascondere le onde vuote?

Nascondere le statistiche non utilizzate può rendere più facile da leggere un grande punteggio di ensemble.

**Soluzione**

1. Selezionare i sistemi o il passaggio interessato.
2. Scegli **Layout → Hiding Staves → Nasconde le onde vuote (Layout → Hiding Staves → Hide Empty Staves)**.
3. Controllare che tutti gli strumenti necessari rimangano visibili.

Un personale contenente note o altri oggetti rilevanti non può qualificarsi come vuoto. Ispezionare prima di eliminare qualsiasi cosa.

Utilizzare **Mostra le onde vuote (Show Empty Staves)** quando è necessario che il personale di comparire di nuovo.

### 37. Come posso cambiare l'ordine degli strumenti?

Cambiare un'etichetta di strumenti non sposta il suo personale.

**Soluzione**

1. Aprire **Home → Strumenti → Aggiungere o rimuovere (Home → Instruments → Add or Remove)**.
2. Selezionare lo strumento nella lista degli strumenti del punteggio.
3. Muovetevi su o giù.
4. Conferma il cambiamento.
5. Staffe di revisione, bretelle e raggruppamento barline.

Scegli un ordine che si adatta all'ensemble e aiuta i musicisti a trovare rapidamente le loro parti.

### 38. Perché i nomi degli strumenti sono sbagliato o mancante?

I nomi degli strumenti possono differire tra il primo sistema e i sistemi successivi.

**Soluzione**

1. Controllare i nomi completi e brevi dello strumento.
2. Modificare il nome visualizzato o le impostazioni dello strumento come appropriato.
3. Rivedere le impostazioni del display del nome strumento del punteggio.
4. Controllare se un cambiamento di strumento introduce un'altra etichetta.

Utilizzare il nome completo in cui i lettori hanno bisogno di identificazione e una chiara abbreviazione sui sistemi successivi.

### 39. Perché c'è una pagina vuota inaspettata?

Una pagina vuota può derivare da un'interruzione di pagina speciale, dalle impostazioni della pagina del titolo o dalla formattazione importata.

**Soluzione**

1. Visualizzazione dei segni di layout.
2. Ispezionare la fine della pagina precedente.
3. Controllare un **Pagine speciali (Special Page Break)** che inserisce le pagine vuote.
4. Rimuovere o regolare la rottura responsabile.
5. Rivedere le pagine seguenti dopo le modifiche del layout.

Non eliminare la musica per rimuovere una pagina creata dalla formattazione.

### 40. Perché i numeri della barra iniziano o riavviano in modo non corretto?

Un pick-up, limite di movimento o cambiamento accidentale di numero di barra può influenzare la numerazione.

**Soluzione**

1. Ispezionare il punto in cui la numerazione diventa errata.
2. Controllare un **Cambiamento del numero di barra (Bar Number Change)**.
3. Correggere o rimuovere il cambiamento.
4. Verificare le impostazioni di visualizzazione del numero di barra.
5. Controllare la numerazione sia nel punteggio che nelle parti.

Decidere se un pickup di apertura dovrebbe essere non numerato o contato, quindi applicare tale convenzione in modo coerente.

## Parti, stampa ed esportazione {#parts-printing-and-exporting}

### 41. Come faccio a creare singole parti strumentali?

**Parti dinamiche (Dynamic Parts)** consente a un punteggio e alle sue parti strumentali di condividere contenuti musicali.

**Soluzione**

1. Aprire i controlli **Parti (Parts)**.
2. Controllare quali parti esistono già.
3. Aprire la parte richiesta.
4. Dove supportato, creare una nuova parte e scegliere le statistiche che dovrebbe contenere.
5. Regolare il suo layout per il giocatore.

Mantenere modifiche musicali nel flusso di lavoro di parti e parti legate piuttosto che mantenere i file separati inutilmente.

### 42. Perché la mia parte strumentale ha un layout diverso dallo Score?

Le parti hanno requisiti di layout indipendenti, comprese le curve di pagina, le dimensioni del personale e le interruzioni di sistema.

**Soluzione**

1. Aprire la parte interessata.
2. Controlla la sua **Impostazione documenti (Document Setup)**.
3. Rivedere interruzioni automatiche e interruzioni manuali.
4. Regolare il layout della parte direttamente.

Differenze nel layout sono normalmente previste. Se le note o i ritmi appaiono sbagliati, controlla che si sta visualizzando la parte collegata corretta e che il suo contenuto non è stato nascosto.

### 43. Perché i Multirest sono dispersi o divisi nelle mie parti?

Un multirest può essere diviso per istruzioni musicali o oggetti che devono rimanere visibili.

**Soluzione**

1. Confermare che i multirests sono abilitati nella parte.
2. Ispezionare le barre dove si rompe un multiretro.
3. Controllare i segni delle prove, il testo, le linee guida, i cambiamenti chiave e le firme del tempo.
4. Rimuovere gli oggetti accidentali solo dopo la conferma che sono inutili.

Alcune pause sono corrette perché i giocatori devono vedere un'istruzione a quel punto.

### 44. Come faccio a creare una pagina migliore gira in parti?

I giocatori hanno bisogno di tempo sufficiente per girare una pagina senza perdere la loro prossima voce.

**Soluzione**

1. Aprire la parte individuale.
2. Trova riposo adatto per le curve di pagina.
3. Inserisci interruzioni di pagina in posizioni pratiche.
4. Rivedere le opzioni automatiche di pagina-turn dove disponibile.
5. Controllare il conteggio della pagina finale e la spaziatura del sistema.

Evitare di creare pagine estremamente affollate solo per forzare una svolta. Testare il layout dalla prospettiva del giocatore.

### 45. Perché il mio PDF ha la dimensione sbagliato o margini?

L'impostazione della pagina del punteggio e le impostazioni di stampa o di esportazione potrebbero non essere d'accordo.

**Soluzione**

1. Controlla la dimensione e l'orientamento della pagina in **Impostazione documenti (Document Setup)**.
2. Controllare i margini e le dimensioni del personale.
3. Confermare che si sta esportando il punteggio o parte previsto.
4. Utilizzare l'esportazione PDF integrata, dove disponibile.
5. Aprire il PDF e verificare le dimensioni della pagina.

Quando si stampa, controllare la dimensione della carta e scalare separatamente. “Fit to page” può modificare la dimensione del personale stampata finale.

### 46. Perché i Simboli di Musica o i Caratteri hanno sbagliato nel PDF?

I font mancanti, le sostituzioni o i problemi legati all'esportazione dei caratteri possono cambiare l'aspetto della notazione.

**Soluzione**

1. Confronta il PDF con il punteggio sullo schermo.
2. Confermare che vengono installati i caratteri musicali e di testo richiesti.
3. Prova l'esportazione PDF integrata di Sibelius, dove disponibile.
4. Aprire il risultato in un altro visualizzatore PDF.
5. Se i simboli sono anche errati all'interno di Sibelius, indagare l'installazione dei font dell'applicazione.

Se solo un carattere personalizzato fallisce, prova un carattere standard in una copia del punteggio.

### 47. Perché non posso esportare un file audio?

L'esportazione audio richiede una configurazione di riproduzione in grado di rendere il suono all'interno del computer.

**Soluzione**

1. Controllare la configurazione di riproduzione selezionata.
2. Utilizzare uno strumento virtuale supportato o una sorgente audio di riproduzione interna.
3. Confermare che la riproduzione ordinaria funziona.
4. Scegliere **File → Esportare → Audio (File → Export → Audio)**, dove disponibile.

Se la riproduzione utilizza un sintetizzatore hardware esterno, il suo suono potrebbe essere necessario per essere registrato tramite un'interfaccia audio. L'invio di MIDI al dispositivo non cattura il suo audio.

## Risparmio, Recupero e Prestazioni {#saving-recovery-and-performance}

### 48. Come Recuperare uno Score Dopo un Crash?

Il recupero dipende da ciò che Sibelius ha salvato prima dell'interruzione.

**Soluzione**

1. Riaprire Sibelius e controllare un prompt di recupero.
2. Ispezionare i file di autosave disponibili o di backup.
3. Utilizzare le posizioni visualizzate nelle preferenze di salvataggio della tua versione o Guida di riferimento.
4. Confronta timestamp e contenuti musicali.
5. Salvare la migliore versione recuperata sotto un nuovo nome.

Evita di sovrascrivere l'originale fino a quando non hai confermato che il file recuperato contiene il lavoro di cui hai bisogno.

### 49. Perché Sibelius è lenta, congelata o schivata?

La causa può comportare un particolare punteggio, libreria di riproduzione, driver o componente software.

**Soluzione**

1. Risparmia il tuo lavoro e riavvia Sibelius.
2. Prova un piccolo nuovo punteggio.
3. Confrontare il comportamento con il punteggio problematico.
4. Prova una configurazione di riproduzione più semplice.
5. Scollegare non necessari MIDI e dispositivi audio.
6. Controllare gli aggiornamenti compatibili Sibelius e driver.

Se solo un punteggio fallisce, lavorare su una copia e restringere il passaggio interessato. Se ogni punteggio non riesce, registrare la versione, il sistema operativo e il messaggio di errore esatto per il supporto.

### 50. Perché qualcuno non può aprire il mio file Sibelius?

Il destinatario può avere una versione precedente, un'edizione limitata o una copia incompleta del file.

**Soluzione**

1. Chiedi quale versione di Sibelius e l'edizione che usano.
2. Dove supportato, utilizzare **File → Export → Versione precedente (File → Export → Previous Version)**.
3. Inviare la copia esportata e mantenere il vostro originale.
4. Controllare che il file trasferito è completo.
5. Se utilizzano un'altra applicazione di notazione, prendere in considerazione MusicXML.

Esportazione di versioni precedenti e MusicXML possono cambiare le funzioni di formattazione o non supportate. Inviare un PDF insieme al file modificabile come riferimento visivo.

## Selezione rapida dei problemi {#quick-troubleshooting-checklist}

Prima di apportare modifiche importanti:

1. Salvare una copia separata del punteggio.
2. Identificare se il problema colpisce un punteggio o ogni punteggio.
3. Controllare i dispositivi audio e MIDI selezionati.
4. Controllare la configurazione di riproduzione.
5. Ispezionare recenti modifiche notazioni o layout.
6. Riavvia Sibelius quando è opportuno.
7. Controllare la versione e la compatibilità del sistema operativo.
8. Cambiare una impostazione alla volta e testare il risultato.

## Aiuto ufficiale di Sibelius {#official-sibelius-help}

Per istruzioni specifiche per la versione e l'edizione, consultare la **Guida di riferimento di Sibelius (Sibelius Reference Guide)** fornita con l'applicazione.

- [Avid Sibelius Imparare e sostenere](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Informazioni di rilascio](https://www.avid.com/resource-center/whats-new-in-sibelius)

Quando si richiede aiuto, includere la versione Sibelius, il sistema operativo, il dispositivo di riproduzione, il messaggio di errore esatto e se il problema colpisce un punteggio o tutti i punteggi.


---

## Sibelius sito licenza e aiuto di installazione per le scuole {#sibelius-site-licensing-and-installation-help-for-schools}

Gestire Sibelius attraverso una scuola o un college piuttosto che risolvere una workstation? Softplanet Productions ha 25 anni di esperienza a supporto dei dipartimenti musicali del Regno Unito. [Confronta le opzioni di licenza del sito di Sibelius e richiedi una quotazione](/it/services/sibelius-site-licenses/) per nuove installazioni, sedili aggiuntivi o distribuzione di rete.
