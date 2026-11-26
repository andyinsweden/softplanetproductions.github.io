---
title: 'Dépannage de Sibelius : 50 problèmes courants'
description: Trouvez des solutions à 50 problèmes de son, de MIDI, de saisie de notes, de mise en page ou d’export PDF
  dans Sibelius. Filtrez par sujet.
draft: false
showTableOfContents: false
---

Trouver des solutions pratiques à 50 problèmes courants de Sibelius, du son manquant à l'espacement des scores gênant et aux problèmes d'exportation PDF.

Ces instructions sont destinées au bureau Sibelius. Les noms de menu et les fonctionnalités disponibles varient entre les versions et les éditions, y compris Sibelius First, Artist et Ultimate. Si une commande manque, recherchez son nom dans Sibelius ou consultez le Guide de référence fourni avec votre version.

Avant d'apporter des modifications majeures, enregistrez une copie séparée de votre partition.

## Aller à une catégorie {#jump-to-a-category}

- [Son et lecture](#sound-and-playback)
- [Entrée MIDI et note](#midi-and-note-input)
- [Notation, voix et rythme](#notation-voices-and-rhythm)
- [Structure et espacement des scores](#score-layout-and-spacing)
- [Pièces, impression et exportation](#parts-printing-and-exporting)
- [Économie, rétablissement et performance](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Son et lecture {#sound-and-playback}

### 1. Pourquoi n'y a-t-il pas de bruit à Sibelius ?

Si la ligne de lecture se déplace mais que vous n'entendez rien, vérifiez la sortie audio, la configuration de lecture et Mixer.

**Solution**

1. Confirmez que vos haut-parleurs ou casques fonctionnent dans une autre application.
2. Ouvrez **Dispositifs de lecture (Playback Devices)** depuis l'onglet **Jouer (Play)**.
3. Ouvrez **Options du moteur audio (Audio Engine Options)** et sélectionnez l'interface audio prévue.
4. Choisissez une configuration de lecture qui utilise une source de son installée.
5. Ouvrez le **Mélangeur (Mixer)** et vérifiez que les canaux sont muets, les instruments solos ou le faible volume maître.

Si vous avez connecté une interface audio après le lancement de Sibelius, redémarrez le programme avec l'interface connectée.

**Related:** Voir les problèmes 2, 5 et 6.

### 2. Pourquoi Sibelius joue - t - il par les mauvais haut -parleurs ou les mauvais écouteurs?

Sibelius peut utiliser une sortie différente de l'appareil par défaut du système d'exploitation.

**Solution**

1. Connectez-vous et allumez l'appareil requis.
2. Ouvrir **Options du moteur audio (Audio Engine Options)**.
3. Sélectionnez l'interface appropriée.
4. Vérifiez le routage des sorties si votre interface a plusieurs sorties.
5. Redémarrer la lecture.

Si l'appareil manque, fermez Sibelius et confirmez que le système d'exploitation le reconnaît avant de rouvrir le programme.

Les dispositifs Bluetooth peuvent introduire un retard supplémentaire.

### 3. Pourquoi est-ce que Playback Crackle, Click ou Break Up?

Un tampon audio trop petit peut causer une lecture interrompue, en particulier avec des bibliothèques sonores exigeantes.

**Solution**

1. Ouvrir **Options du moteur audio (Audio Engine Options)**.
2. Augmentez la taille du tampon d'une étape disponible.
3. Jouez un passage exigeant et écoutez à nouveau.
4. Fermez les applications inutiles.
5. Vérifiez que le pilote d'interface prend en charge votre système d'exploitation.

Répéter jusqu'à ce que la lecture soit stable. Si le son reste déformé, vérifiez également les niveaux de Mixer : les problèmes de clipping et de tampon nécessitent des corrections différentes.

### 4. Pourquoi y a-t-il un retard lorsque je joue mon clavier MIDI?

Le temps entre appuyer sur une clé et entendre un son est appelé latence.

**Solution**

1. Ouvrir **Options du moteur audio (Audio Engine Options)**.
2. Réduire progressivement la taille du tampon.
3. Testez le clavier après chaque changement.
4. Si des clics apparaissent, augmentez légèrement le tampon.

Sur Windows, utilisez le pilote ASIO du fabricant de l'interface lorsque disponible. Sur macOS, utilisez le périphérique Core Audio approprié.

Évitez les écouteurs Bluetooth lorsque vous avez besoin d'une surveillance de clavier réactive.

### 5. Pourquoi un instrument est-il silencieux?

Une seule portée silencieuse pointe habituellement vers ses paramètres Mixer, son affectation ou propriétés de lecture.

**Solution**

1. Ouvrez le **Mélangeur (Mixer)**.
2. Vérifiez que l'instrument n'est pas muté.
3. Vérifiez si un autre instrument est en solo.
4. Confirmer que le personnel a un son approprié assigné.
5. Sélectionnez une note affectée et vérifiez ses paramètres **Jouer sur le passage (Play on pass)** dans le **Inspecteur (Inspector)**, le cas échéant.

Cherchez aussi un changement d'instrument involontaire avant le passage silencieux.

### 6. Pourquoi les sons Sibelius manquent-ils ou sont-ils indisponibles?

L'application de notation et sa bibliothèque sonore peuvent nécessiter une installation séparée.

**Solution**

1. Vérifiez la bibliothèque de sons que votre configuration de lecture attend.
2. Confirmez que la bibliothèque est installée.
3. Si nécessaire, obtenir l'installateur approprié auprès de votre compte Avid.
4. Si vous avez déplacé la bibliothèque, suivez la procédure prise en charge pour mettre à jour son emplacement.
5. Redémarrez Sibelius et sélectionnez la configuration de lecture correspondante.

Ne présumez pas que réinstaller l'application principale va également réinstaller une grande bibliothèque sonore.

### 7. Pourquoi un instrument joue - t - il le mauvais son?

La définition de l'instrument de l'équipe ou l'affectation Mixer ne correspond peut-être pas au son que vous attendez.

**Solution**

1. Vérifier quel instrument est assigné au personnel.
2. Recherchez les changements d'instrument dans le score.
3. Vérifiez la configuration de lecture sélectionnée.
4. Revoir l'affectation sonore du personnel dans le **Mélangeur (Mixer)**.

Si vous devez changer l'instrument lui-même, créez un **Changement d'instrument (Instrument Change)** approprié. Le fait de renommer le personnel seul ne change pas sa définition musicale ou son de lecture.

### 8. Pourquoi la dynamique n'affecte-t-elle pas la lecture?

Les dynamiques entrées avec un style de texte inapproprié ou attachées à la mauvaise position peuvent ne pas produire le résultat souhaité.

**Solution**

1. Sélectionnez la note où la dynamique doit commencer.
2. Créer **Texte d'expression (Expression Text)**.
3. Insérez la dynamique à l'aide du menu de mots du style texte.
4. Vérifiez qu'il est attaché au personnel prévu et battre.
5. Jouer le passage de légèrement avant le marquage.

Si la dynamique a encore peu d'effet, testez un autre son de lecture. Les bibliothèques sonores diffèrent dans la façon dont elles réagissent à la dynamique.

### 9. Pourquoi Sibelius ignore - t - il mon marquage tempo?

Un titre qui dit -Allegro - n'est pas nécessairement fonctionner comme une instruction de tempo de lecture.

**Solution**

1. Créez le marquage avec **Texte Tempo (Tempo Text)** ou le style de texte approprié **Marque Metronome (Metronome Mark)**.
2. Pour une vitesse précise, inclure une unité de rythme et une valeur de tempo reconnues.
3. Vérifiez sa position de fixation.
4. Passez en revue les paramètres de **Rendement (Performance)** si la lecture varie intentionnellement le tempo.

Si l'ensemble de la partition sonne toujours trop vite ou lentement, vérifiez également le contrôle du tempo de lecture.

### 10. Pourquoi les répétitions ou les première et deuxième fin jouent - elles incorrectement?

La lecture dépend de la structure de répétition, et pas seulement de l'apparence visuelle d'une ligne ou d'une étiquette de texte.

**Solution**

1. Utilisez les lignes de barres correctes.
2. Créer des lignes de fin en utilisant les types de lignes de premier et de deuxième fin appropriés.
3. Vérifiez que chaque fin commence et se termine aux barres prévues.
4. Revoir les paramètres de lecture répétés et toute séquence de répétition manuelle.
5. Testez la lecture avant la section répétée.

Utiliser des instructions de répétition reconnues plutôt que du texte ordinaire qui ressemble simplement à D.S.

## Entrée MIDI et note {#midi-and-note-input}

### 11. Pourquoi Sibelius ne reconnaît-il pas mon clavier MIDI ?

L'appareil peut être déconnecté, indisponible au système d'exploitation ou désactivé à Sibelius.

**Solution**

1. Connectez le clavier avant d'ouvrir Sibelius.
2. Ouvrir **Préférences → Périphériques d'entrée (Preferences → Input Devices)**.
3. Activer le bon périphérique.
4. Jouez une clé et vérifiez l'indicateur d'entrée.
5. Si l'appareil manque, testez un autre port USB ou un autre câble.

Si un hub est impliqué, essayez de vous connecter directement à l'ordinateur. Installez un pilote fabricant si le clavier en a besoin.

### 12. Pourquoi puis-je entendre mon clavier, mais pas de notes ?

L'audition d'un son ne signifie pas que Sibelius entre actuellement dans la notation. Le clavier peut également produire son propre son indépendamment.

**Solution**

1. Sélectionnez le reste ou la position où l'entrée doit commencer.
2. Entrez le mode entrée de note.
3. Choisissez une durée sur le **Clavier (Keypad)**.
4. Joue un mot.

Pour l'enregistrement en direct, utilisez **Flexi-temps (Flexi-time)** plutôt que l'entrée à temps partiel. Confirmez que le clavier est activé dans **Dispositifs d'entrée (Input Devices)** si les notes n'apparaissent toujours pas.

### 13. Pourquoi les notes sont-elles entrées dans le mauvais octave?

Un changement d'octave peut provenir des paramètres du clavier ou des conventions de notation de l'instrument.

**Solution**

1. Vérifiez l'octave du clavier et transposez les commandes.
2. Testez l'entrée sur un personnel de piano normal.
3. Vérifiez l'instrument assigné à l'équipe d'origine.
4. Comparez les vues concert-pitch et transposing-score.

Certains instruments, dont la guitare et le piccolo, sonnent traditionnellement une octave loin de leurs notes écrites. D'autres instruments de transposition se déplacent à différents intervalles.

### 14. Pourquoi les notes MIDI sont-elles entrées deux fois?

L'entrée en double peut se produire lorsque la même performance atteint Sibelius par plus d'une route MIDI.

**Solution**

1. Ouvrir **Dispositifs d'entrée (Input Devices)**.
2. Activer temporairement seulement l'entrée du clavier prévue.
3. Déconnectez les connexions MIDI inutiles.
4. Vérifiez les paramètres d'application ou d'interface MIDI.
5. Testez encore une seule note.

Si vous entendez un double son mais qu'une seule note apparaît, étudiez plutôt la surveillance audio et le réglage **Contrôle local (Local Control)** du clavier.

### 15. Pourquoi l'enregistrement Flexi-time produit-il des rythmes de mess ?

L'entrée en direct peut être interprétée trop précisément pour la musique que vous vouliez, créant des notes courtes, des restes ou des tuplets indésirables.

**Solution**

1. Ouvrir **Options de Flexi-time (Flexi-time Options)**.
2. Définissez la valeur minimale de la note en fonction du passage.
3. Restreindre les tuplets si vous n'en avez pas besoin.
4. Enregistrez à un tempo confortable avec un clic clair.
5. Enregistrer un court passage et le revoir avant de continuer.

Pour la musique complexe, l'entrée pas à pas peut nécessiter moins de correction que l'enregistrement en direct.

### 16. Comment puis-je entrer des chords au lieu de notes séparées?

Les notes jouées l'une après l'autre dans l'entrée pas à pas occupent normalement des positions rythmiques successives.

**Solution**

Pour l'entrée MIDI, jouer les notes de l'accord ensemble après avoir sélectionné la durée requise.

Pour l'entrée de clavier d'ordinateur:

1. Entrez la première note.
2. Sélectionnez-le.
3. Utilisez les commandes d'intervalle pour ajouter des notes au-dessus ou au-dessous.

Vérifiez que les notes résultantes partagent une tige et une durée.

### 17. Comment puis-je entrer des notes sans clavier numérique?

Vous pouvez utiliser le **Clavier (Keypad)** à l'écran de Sibelius même si votre ordinateur portable n'a pas de bloc-notes séparé.

**Solution**

1. Affichez le **Clavier (Keypad)** depuis les commandes des panneaux.
2. Cliquez sur la durée ou l'articulation requise.
3. Entrez les emplacements avec le clavier de l'ordinateur ou un clavier MIDI.
4. Consultez les jeux de raccourci clavier disponibles dans **Préférences (Preferences)**.

Vous pouvez également personnaliser des raccourcis ou connecter un clavier numérique USB si vous entrez fréquemment la notation.

### 18. Pourquoi les nouvelles notes remplacent-elles la musique existante?

Note entrée modifie la musique à la position rythmique sélectionnée; il ne crée pas automatiquement des barres supplémentaires pour chaque nouvelle idée.

**Solution**

1. Annulez l'édition non désirée.
2. Ajouter les barres requises avant d'entrer dans le nouveau passage.
3. Sélectionnez le premier reste dans les nouvelles barres.
4. Commencez l'entrée de la note là-bas.

Si vous voulez un rythme indépendant supplémentaire sur la même portée, utilisez une autre voix plutôt que de remplacer la voix existante.

## Notation, voix et rythme {#notation-voices-and-rhythm}

### 19. Comment puis-je ajouter ou supprimer des barres entières?

Supprimer des notes et supprimer des barres sont des opérations différentes.

**Solution**

Pour ajouter des barres, utilisez **Accueil Barres → → Ajouter (Home → Bars → Add)** et choisissez l'option appropriée.

Pour supprimer les barres :

1. Faites un **sélection du système** des barres sur toutes les portées.
2. Vérifiez que la sélection inclut exactement les barres que vous voulez supprimer.
3. Supprimer la sélection.

Une sélection de passages normale peut effacer le contenu musical tout en laissant les barres en place.

### 20. Comment puis-je changer une signature de temps sans des notes de mouvement inattendues?

Changer de compteur peut amener Sibelius à réorganiser la musique existante en de nouvelles barres.

**Solution**

1. Enregistrez une copie de la partition.
2. Sélectionnez le point où le changement doit commencer.
3. Ouvrez les commandes **Date de signature (Time Signature)**.
4. Examiner l'option pour réécrire les barres existantes.
5. Appliquer le changement et inspecter le passage touché.

Désactivation de la réécriture préserve la structure de la barre existante, mais elle peut laisser des barres dont la durée ne correspond pas au compteur affiché. Utilisez cette option délibérément.

### 21. Comment puis-je créer une barre de ramassage ou un anacrus?

Un pick-up est une barre d'ouverture raccourcie, comme un battement avant la première barre complète d'un morceau en 4/4.

**Solution**

Lors de la création de la signature de l'heure d'ouverture, utilisez l'option **Pick-up/upbeat** et spécifiez sa durée.

Pour une partition existante, créez un **barre irrégulière** de la longueur requise à l'aide des commandes de création de bar, puis transférez la musique d'ouverture avec soin.

Vérifiez la numérotation de la barre et la barre finale si la pièce nécessite une fin raccourcie complémentaire.

### 22. Comment puis-je mettre deux rythmes indépendants sur un seul personnel?

Utilisez des voix séparées pour les lignes musicales simultanées.

**Solution**

1. Saisissez la première ligne dans **Voix 1**.
2. Sélectionnez la position de départ pour la deuxième ligne.
3. Choisissez **Voix 2** sur le **Clavier (Keypad)**.
4. Entrez ses notes et reposez-vous indépendamment.

Les voix 1 et 2 donnent généralement des directions opposées. Utilisez des voix supplémentaires seulement lorsque la notation en a besoin.

Ne pas utiliser un accord lorsque les notes nécessitent des rythmes différents.

### 23. Pourquoi des repos supplémentaires apparaissent-ils dans mon score?

Chaque voix active a besoin de sa propre structure rythmique, de sorte que des voix supplémentaires peuvent introduire des repos supplémentaires.

**Solution**

1. Sélectionnez un repos inattendu et identifiez sa voix.
2. Vérifiez si cette voix contient des notes obligatoires ailleurs dans la barre.
3. Enlever une voix créée accidentellement le cas échéant.
4. Cacher un repos seulement lorsqu'il est valable sur le plan musical de le faire.

Évitez de cacher des reposes simplement pour cacher un rythme incomplet. Assurez-vous d'abord que chaque voix corresponde à la durée de la barre prévue.

### 24. Comment puis-je créer des Triplets et d'autres Tuplets?

Les tuplets divisent une étendue rythmique différemment de son groupe normal.

**Solution**

1. Sélectionnez une note ou un repos avec la durée de base prévue.
2. Utilisez **Note Entrée Tuplets → (Note Input → Tuplets)**.
3. Choisissez le tuplet requis ou entrez un ratio personnalisé.
4. Entrez les notes restantes.

Pour un triplet de huitième note ordinaire, commencez par une valeur de huitième note. Si le tuplet occupe la mauvaise plage, défaire et vérifier la durée et le rapport de départ.

### 25. Pourquoi mes notes sont - elles mal reçues?

Le regroupement des faisceaux dépend du compteur, de ses paramètres de regroupement et de tout changement de faisceau manuel.

**Solution**

1. Vérifiez le rythme de la signature.
2. Sélectionnez les notes concernées.
3. Utilisez les commandes de faisceau **Clavier (Keypad)** pour démarrer, continuer ou casser les faisceaux selon les besoins.
4. Pour un problème récurrent, ajustez les paramètres de regroupement plutôt que de corriger chaque faisceau manuellement.

Par exemple, 6/8 regroupe normalement les huitièmes notes en deux groupes de trois, tandis que d'autres compteurs peuvent avoir besoin d'un motif différent.

### 26. Comment puis-je faire des remarques sur deux portées?

La notation croisée du personnel est utile pour les passages de piano partagés entre les mains.

**Solution**

1. Entrez le passage sur son personnel d'origine.
2. Sélectionnez les notes qui devraient apparaître sur l'autre personnel.
3. Utilisez les commandes **Notes concernant les fonctionnaires de l ' Organisation (Cross-staff Notes)** pour déplacer leur affichage au-dessus ou au-dessous.
4. Examiner les tiges, les poutres et l'espacement du personnel.

Le mouvement croisé du personnel préserve la relation entre les notes et leur voix originale. La coupe et la pâte ordinaires déplacent la musique à une autre portée et peuvent ne pas produire la même notation.

### 27. Pourquoi ma cravate se comporte-t-elle comme une souillure ?

Les liens et les limaces ont des significations musicales différentes.

**Solution**

Utilisez un **cravate** pour joindre des notes consécutives du même pas en une durée prolongée. Appliquez-le avec le contrôle des attaches **Clavier (Keypad)**.

Utilisez un **Luxure** pour indiquer une phrase ou une articulation entre les notes. Créez-le en utilisant la commande **Slur**.

Si une cravate ne se connecte pas correctement, vérifiez la position de la note suivante, la position, la voix et la position rythmique.

### 28. Pourquoi les accidents manquent - ils ou réapparaissent - ils?

Sibelius détermine l'affichage accidentel à partir de la signature de la clé, les notes antérieures dans la barre et les paramètres de notation.

**Solution**

1. Vérifiez la signature de la clé.
2. Vérifiez les occurrences précédentes de la hauteur dans la même barre.
3. Sélectionnez la note et inspectez son accident en utilisant le **Clavier (Keypad)**.
4. Ajouter un avertissement accidentel où il améliore la lisibilité.

Ne changez pas le pas réel juste pour forcer un symbole à apparaître. L'affichage accidentel et le pas musical doivent être corrects.

### 29. Comment puis-je changer l'orthographe enharmonique d'une note?

Un pas peut être entré comme un point fort quand une orthographe plate serait mieux correspondre à l'harmonie.

**Solution**

1. Sélectionnez la note ou le passage.
2. Utilisez la commande **Répondeur (Respell)**.
3. Vérifiez l'orthographe de l'accord et de la clé.

Par exemple, une note sonnant comme F-sharp peut avoir besoin d'être écrite comme G-flat dans un contexte harmonique particulier.

L'adaptation préserve le son du son. Transposer les changements pitch et résoudre un problème différent.

### 30. Pourquoi les notes sont - elles rouges à Sibelius?

Les têtes de note rouges indiquent généralement qu'un pas se trouve à l'extérieur de la plage définie pour l'instrument.

**Solution**

1. Vérifiez l'instrument attribué au personnel.
2. Passez en revue les emplacements écrits et sonores.
3. Vérifiez le réglage de l'affichage de la portée des instruments.
4. Décidez si le passage est adapté au joueur prévu.

Un avertissement de portée ne signifie pas automatiquement que la notation est erronée. Cependant, cacher la couleur ne rend pas une note impraticable jouable.

## Structure et espacement des scores {#score-layout-and-spacing}

### 31. Comment puis-je mettre plus ou moins de barres sur un système?

Sibelius calcule normalement les longueurs du système automatiquement, mais vous pouvez contrôler les ruptures importantes.

**Solution**

1. Sélectionnez les barres qui devraient partager un système.
2. Utilisez **Disposition → Format → Faire entrer le système (Layout → Format → Make Into System)**.
3. Inspectez le résultat pour les notes bondées et le texte.

Sinon, sélectionnez une ligne de bar et ajoutez une **Arrêt du système (System Break)**.

Si de nombreux systèmes sont encombrés, examinez la taille du personnel, les marges des pages et l'espacement des notes plutôt que de forcer plus de barres sur chaque ligne.

### 32. Pourquoi Sibelius ne va-t-il pas revenir sur mon score?

Les verrous et les pauses de formatage existants peuvent empêcher les changements de disposition automatiques.

**Solution**

1. Affiche les marques de mise en page.
2. Recherchez les pannes système, les pannes page et les systèmes verrouillés.
3. Sélectionnez le passage affecté.
4. Utiliser **Déverrouiller le format (Unlock Format)** le cas échéant.
5. Réappliquez seulement les pauses dont vous avez besoin.

Enregistrez d'abord une copie si la partition a déjà soigneusement préparé les tours de page ou la mise en page de publication.

### 33. Pourquoi y a-t-il d'énormes écarts entre les portées?

De grandes lacunes peuvent être causées par le mouvement manuel, l'évitement des collisions ou la justification verticale.

**Solution**

1. Sélectionnez les systèmes touchés.
2. Utilisez **Optimiser l'espacement du personnel (Optimize Staff Spacing)**.
3. Recherchez les paroles, les dynamiques, les lignes ou le texte qui occupent l'écart.
4. Vérifiez les paramètres de justification verticale si les portées sont réparties sur toute une page.

Si des modifications manuelles antérieures sont la cause, utilisez la commande de réinitialisation de l'espacement du personnel appropriée avant d'optimiser à nouveau.

### 34. Pourquoi la dynamique, les lyriques ou le collide de texte?

L'évitement automatique des collisions peut être désactivé, dépassé ou incapable de résoudre une configuration bondée.

**Solution**

1. Vérifiez que **Mise en page magnétique (Magnetic Layout)** est activé pour les objets touchés.
2. Réinitialisez le positionnement manuel inutile.
3. Optimiser l'espacement du personnel.
4. Donnez au système plus d'espace horizontal si nécessaire.
5. Effectuer de petits réglages manuels seulement après vérification de la disposition automatique.

Un système contenant trop de musique peut nécessiter moins de barres, peu importe les réglages de collision.

### 35. Comment puis-je rétablir un même espacement horizontal des notes?

Le fait de faire glisser des notes ou de changer d'espacement à plusieurs reprises peut laisser un passage à l'air incohérent.

**Solution**

1. Sélectionnez le passage affecté.
2. Choisissez **Apparence → Réinitialiser les notes → Réinitialiser l'espacement des notes (Appearance → Reset Notes → Reset Note Spacing)**.
3. Inspectez l'espacement autour des paroles, des symboles d'accords et des accidents.
4. Réglez le système si le passage reste bondé.

Si un objet particulier se trouve encore exceptionnellement loin de sa note, vérifiez aussi sa position individuelle.

### 36. Comment puis-je cacher les barres vides?

Cacher les portées inutilisées peut rendre plus facile la lecture d'un grand score d'ensemble.

**Solution**

1. Sélectionnez les systèmes ou le passage concernés.
2. Choisissez **Layout → Cacher les barres vides → Cacher les barres vides (Layout → Hiding Staves → Hide Empty Staves)**.
3. Vérifiez que tous les instruments nécessaires restent visibles.

Un personnel contenant des notes ou d'autres objets pertinents ne peut pas être considéré comme vide. Inspectez-le avant de supprimer quoi que ce soit.

Utilisez **Afficher les portées vides (Show Empty Staves)** lorsque vous avez besoin que le personnel s'affiche à nouveau.

### 37. Comment changer l'ordre des instruments?

Changer d'étiquette d'instrument ne déplace pas son personnel.

**Solution**

1. Ouvrir **Accueil Instruments → → Ajouter ou supprimer (Home → Instruments → Add or Remove)**.
2. Sélectionnez l'instrument dans la liste des instruments du score.
3. Remontez ou descendez-le.
4. Confirmez le changement.
5. Revoir les crochets, les bretelles et le regroupement des barres.

Choisissez une commande qui convient à l'ensemble et aide les musiciens à trouver leurs pièces rapidement.

### 38. Pourquoi les noms d'instruments sont - ils erronés ou manquants?

Les noms d'instruments peuvent différer entre le premier système et les systèmes ultérieurs.

**Solution**

1. Vérifiez les noms complets et courts de l'instrument.
2. Modifier le nom affiché ou les paramètres de son instrument selon le cas.
3. Passez en revue les paramètres d'affichage du nom d'instrument de la partition.
4. Vérifiez si un changement d'instrument introduit une autre étiquette.

Utilisez le nom complet où les lecteurs ont besoin d'une identification et d'une abréviation claire sur les systèmes suivants.

### 39. Pourquoi y a-t-il une page vierge inattendue ?

Une page vierge peut résulter d'une pause spéciale, de paramètres de page de titre ou de formatage importé.

**Solution**

1. Affiche les marques de mise en page.
2. Inspectez la fin de la page précédente.
3. Vérifiez un **Pause de page spéciale (Special Page Break)** qui insère des pages vides.
4. Supprimer ou ajuster la pause responsable.
5. Consultez les pages suivantes après les modifications de la disposition.

Ne supprimez pas de musique pour supprimer une page créée par formatage.

### 40. Pourquoi les nombres de barres démarrent-ils ou redémarrent-ils incorrectement?

Un changement accidentel de nombre de barres peut affecter la numérotation.

**Solution**

1. Inspectez le point où la numérotation devient incorrecte.
2. Vérifiez un **Numéro de barre (Bar Number Change)**.
3. Corriger ou supprimer le changement.
4. Consultez les paramètres d'affichage des numéros de barre.
5. Vérifiez la numérotation dans le score et les parties.

Décider si un pick-up d'ouverture ne doit pas être numéroté ou compté, puis appliquer cette convention de façon cohérente.

## Pièces, impression et exportation {#parts-printing-and-exporting}

### 41. Comment créer des pièces instrumentales individuelles?

**Pièces dynamiques (Dynamic Parts)** permet à une partition et à ses parties instrumentales de partager du contenu musical.

**Solution**

1. Ouvrez les commandes **Pièces (Parts)**.
2. Vérifiez quelles pièces existent déjà.
3. Ouvrez la partie requise.
4. Lorsqu'elle est supportée, créez une nouvelle partie et choisissez les portées qu'elle doit contenir.
5. Réglez sa mise en page pour le lecteur.

Conservez les modifications musicales dans le flux de travail de partitions et de pièces lié plutôt que de maintenir des fichiers séparés inutilement.

### 42. Pourquoi ma partie instrumentale a-t-elle une disposition différente de la partition?

Les pièces ont des exigences de mise en page indépendantes, y compris les tours de page, la taille du personnel et les ruptures système.

**Solution**

1. Ouvrez la partie affectée.
2. Vérifiez son **Configuration des documents (Document Setup)**.
3. Examiner les pauses automatiques et les pauses manuelles.
4. Ajustez la mise en page de la pièce directement.

Des différences de présentation sont normalement attendues. Si des notes ou des rythmes apparaissent mal, vérifiez que vous visualisez la partie liée correcte et que son contenu n'a pas été caché.

### 43. Pourquoi les multirestes manquent-ils ou se divisent-ils dans mes pièces?

Un multirest peut être divisé par des instructions musicales ou des objets qui doivent rester visibles.

**Solution**

1. Confirmer que les multisièges sont activés dans la pièce.
2. Inspectez les barres où un multirest se brise.
3. Vérifiez les marques de répétition, le texte, les lignes de bar, les changements clés et les signatures temporelles.
4. Enlever les objets accidentels seulement après avoir confirmé qu'ils sont inutiles.

Certaines pauses sont correctes parce que les joueurs doivent voir une instruction à ce moment-là.

### 44. Comment créer de meilleurs retournements de page dans des pièces?

Les joueurs ont besoin de suffisamment de temps pour tourner une page sans manquer leur prochaine entrée.

**Solution**

1. Ouvrez la partie individuelle.
2. Trouver des restes appropriés pour les tours de page.
3. Insérez les pauses de page à des positions pratiques.
4. Revoir les options de changement automatique de page lorsque disponibles.
5. Vérifiez le nombre de pages et l'espacement du système.

Évitez de créer des pages extrêmement bondées juste pour forcer un tour. Testez la mise en page du point de vue du joueur.

### 45. Pourquoi mon PDF a-t-il la mauvaise taille ou des marges?

La configuration de la page du score et les paramètres d'impression ou d'exportation peuvent ne pas être d'accord.

**Solution**

1. Vérifiez la taille et l'orientation de la page dans **Configuration des documents (Document Setup)**.
2. Vérifiez les marges et la taille du personnel.
3. Confirmez que vous exportez le score ou la partie souhaité.
4. Utilisez l'exportation PDF intégrée lorsque disponible.
5. Ouvrez le PDF et vérifiez ses dimensions de page.

Lors de l'impression, vérifiez la taille du papier et l'échelle séparément.

### 46. Pourquoi les symboles ou les polices de musique sont-ils erronés dans le PDF?

Les polices manquantes, les substitutions ou les problèmes d'exportation liés aux polices peuvent changer l'apparence de la notation.

**Solution**

1. Comparer le PDF avec le score à l'écran.
2. Confirmez que les polices de musique et de texte requises sont installées.
3. Essayez l'exportation PDF intégrée de Sibelius là où elle est disponible.
4. Ouvrez le résultat dans un autre visionneur PDF.
5. Si les symboles se trompent également à l'intérieur de Sibelius, étudiez l'installation de la police de l'application.

Si seulement une police personnalisée échoue, testez une police standard dans une copie de la partition.

### 47. Pourquoi ne puis-je pas exporter un fichier audio?

L'exportation audio nécessite une configuration de lecture capable de rendre le son à l'intérieur de l'ordinateur.

**Solution**

1. Vérifiez la configuration de lecture sélectionnée.
2. Utilisez un instrument virtuel pris en charge ou une source interne de lecture du son.
3. Confirmez que la lecture ordinaire fonctionne.
4. Choisissez **Fichier → Exporter → Audio (File → Export → Audio)**, le cas échéant.

Si la lecture utilise un synthétiseur matériel externe, son son peut devoir être enregistré via une interface audio. L'envoi de MIDI au périphérique ne capte pas son audio.

## Économie, rétablissement et performance {#saving-recovery-and-performance}

### 48. Comment puis-je récupérer un score après un crash?

La récupération dépend de ce que Sibelius a sauvé avant l'interruption.

**Solution**

1. Réouvrez Sibelius et vérifiez une prompte récupération.
2. Inspectez les fichiers d'enregistrement automatique ou de sauvegarde disponibles.
3. Utilisez les emplacements affichés dans les préférences de sauvegarde de votre version ou le Guide de référence.
4. Comparer les horodatages et les contenus musicaux.
5. Enregistrer la meilleure version récupérée sous un nouveau nom.

Évitez d'écraser l'original jusqu'à ce que vous ayez confirmé que le fichier récupéré contient le travail dont vous avez besoin.

### 49. Pourquoi Sibelius est - il lent, gelé ou encrassant?

La cause peut impliquer une partition, une bibliothèque de lecture, un pilote ou un composant logiciel particulier.

**Solution**

1. Sauvegardez votre travail et redémarrez Sibelius.
2. Testez un petit nouveau score.
3. Comparer le comportement avec le score problématique.
4. Testez une configuration de lecture plus simple.
5. Déconnectez les périphériques MIDI et audio inutiles.
6. Vérifiez les mises à jour de Sibelius et du pilote compatibles.

Si une seule partition échoue, travailler sur une copie et réduire le passage touché. Si chaque partition échoue, enregistrez votre version, votre système d'exploitation et le message d'erreur exact pour le support.

### 50. Pourquoi quelqu'un d'autre n'ouvre pas mon fichier Sibelius ?

Le destinataire peut avoir une ancienne version, une édition restreinte ou une copie incomplète du dossier.

**Solution**

1. Demandez quelle version et quelle édition Sibelius ils utilisent.
2. Lorsqu'elle est prise en charge, utilisez **Fichier → Exporter → Version précédente (File → Export → Previous Version)**.
3. Envoyez la copie exportée et conservez votre original.
4. Vérifiez que le fichier transféré est complet.
5. S'ils utilisent une autre application de notation, considérez MusicXML.

Export de versions plus anciennes et MusicXML peuvent modifier le formatage ou des fonctionnalités non prises en charge. Envoyer un PDF à côté du fichier modifiable comme référence visuelle.

## Liste de contrôle pour le dépannage rapide {#quick-troubleshooting-checklist}

Avant d'apporter des changements majeurs:

1. Enregistrez une copie séparée de la partition.
2. Déterminer si le problème affecte un score ou chaque score.
3. Vérifiez les périphériques audio et MIDI sélectionnés.
4. Vérifiez la configuration de lecture.
5. Inspecter les changements récents de notation ou de disposition.
6. Redémarrer Sibelius le cas échéant.
7. Vérifier la compatibilité version et système d'exploitation.
8. Changer un réglage à la fois et tester le résultat.

## Aide officielle Sibelius {#official-sibelius-help}

Pour des instructions spécifiques à votre version et édition, consultez le **Guide de référence de Sibelius (Sibelius Reference Guide)** fourni avec l'application.

- [Avid Sibelius Apprendre et soutenir](https://www.avid.com/sibelius/learn-and-support)
- [Avid Sibelius Information sur la publication](https://www.avid.com/resource-center/whats-new-in-sibelius)

Lorsque vous demandez de l'aide, incluez votre version Sibelius, votre système d'exploitation, votre appareil de lecture, le message d'erreur exact et si le problème affecte une partition ou tous les scores.


---

## Aide à l'installation et à l'octroi de licences sur le site Sibelius pour les écoles {#sibelius-site-licensing-and-installation-help-for-schools}

Gérer Sibelius à travers une école ou un collège plutôt que de dépanner un poste de travail? Softplanet Productions possède 25 ans d'expérience en soutien aux départements de musique britanniques. [Comparer les options de licence de site Sibelius et demander un devis](/fr/services/sibelius-site-licenses/) pour les nouvelles installations, les sièges supplémentaires ou le déploiement réseau.
