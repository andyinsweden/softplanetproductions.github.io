---
title: 'Sibelius: 50 problemas comuns e suas soluções'
description: Resolver problemas comuns Sibelius com reprodução, teclados MIDI, entrada de nota, notação, layout de pontuação,
  peças, exportação PDF e recuperação de arquivos.
draft: false
showTableOfContents: false
---

Encontre soluções práticas para 50 problemas comuns do Sibelius, desde som de reprodução ausente até espaçamento de pontuação estranho e problemas de exportação de PDF.

Estas instruções destinam-se ao ambiente de trabalho Sibelius. Nomes de menu e recursos disponíveis variam entre versões e edições, incluindo Sibelius First, Artist e Ultimate. Se faltar um comando, procure o seu nome em Sibelius ou consulte o Guia de Referência fornecido com a sua versão.

Antes de fazer grandes alterações, salve uma cópia separada da sua pontuação.

## Saltar para uma Categoria {#jump-to-a-category}

- [Som e reprodução](#sound-and-playback)
- [MIDI e entrada de notas](#midi-and-note-input)
- [Notação, Vozes e Ritmo](#notation-voices-and-rhythm)
- [Disposição de Pontuação e Espaçamento](#score-layout-and-spacing)
- [Peças, Impressão e Exportação](#parts-printing-and-exporting)
- [Poupança, Recuperação e Desempenho](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Som e reprodução {#sound-and-playback}

### 1. Por que não há som em Sibelius?

Se a linha de reprodução se mover mas você não ouvir nada, verifique a saída de áudio, configuração de reprodução e Mixer.

**Solução**

1. Confirme que seus alto-falantes ou fones de ouvido funcionam em outra aplicação.
2. Abra o **Dispositivos de reprodução (Playback Devices)** da aba **Reproduzir (Play)**.
3. Abra o **Opções do motor de áudio (Audio Engine Options)** e selecione a interface de áudio pretendida.
4. Escolha uma configuração de reprodução que use uma fonte de som instalada.
5. Abra o **Mistura (Mixer)** e verifique se há canais mudos, instrumentos solados ou baixo volume mestre.

Se você conectou uma interface de áudio após o lançamento do Sibelius, reinicie o programa com a interface conectada.

**Relacionados:** Veja os problemas 2, 5 e 6.

### 2. Por que Sibelius está tocando através dos alto-falantes ou fones de ouvido errados?

Sibelius pode usar uma saída diferente do dispositivo padrão do sistema operacional.

**Solução**

1. Conecte e ligue o dispositivo necessário.
2. Abre o **Opções do motor de áudio (Audio Engine Options)**.
3. Selecione a interface apropriada.
4. Verifique o roteamento de saída se sua interface tem várias saídas.
5. Reinicia a reprodução.

Se o dispositivo estiver faltando, feche Sibelius e confirme que o sistema operacional o reconhece antes de reabrir o programa.

Os dispositivos Bluetooth podem introduzir atraso adicional.

### 3. Por que o crackback playback, clique ou quebra?

Um buffer de áudio muito pequeno pode causar reprodução interrompida, especialmente com bibliotecas de som exigentes.

**Solução**

1. Abre o **Opções do motor de áudio (Audio Engine Options)**.
2. Aumente o tamanho do buffer em um passo disponível.
3. Toque uma passagem exigente e ouça novamente.
4. Fechar aplicações desnecessárias.
5. Verifique se o controlador de interface suporta seu sistema operacional.

Repita até que a reprodução esteja estável. Se o som permanecer distorcido, verifique também os níveis do misturador: o corte e os problemas de buffer requerem correções diferentes.

### 4. Por que há um atraso quando eu toco meu teclado MIDI?

O tempo entre pressionar uma tecla e ouvir um som é chamado latência.

**Solução**

1. Abre o **Opções do motor de áudio (Audio Engine Options)**.
2. Reduza gradualmente o tamanho do tampão.
3. Teste o teclado após cada mudança.
4. Se os cliques aparecerem, aumente o buffer ligeiramente.

No Windows, use o driver ASIO do fabricante da interface quando disponível. No macOS, use o dispositivo Core Audio apropriado.

Evite fones de ouvido Bluetooth quando você precisar de monitoramento de teclado responsivo.

### 5. Por que um instrumento é silencioso?

Uma única equipe silenciosa geralmente aponta para as suas configurações Mixer, atribuição de som ou propriedades de reprodução.

**Solução**

1. Abra o **Mistura (Mixer)**.
2. Verifique se o instrumento não está mudo.
3. Verifique se outro instrumento está solado.
4. Confirmar que o pessoal tem um som adequado atribuído.
5. Selecione uma nota afetada e verifique suas configurações **Jogar no passe (Play on pass)** no **Inspector**, quando disponível.

Também procure uma mudança de instrumento não intencional antes da passagem silenciosa.

### 6. Por que Sibelius parece estar faltando ou está indisponível?

A aplicação de notação e a sua biblioteca de som podem exigir uma instalação separada.

**Solução**

1. Verifique qual biblioteca de som sua configuração de reprodução espera.
2. Confirme se a biblioteca está instalada.
3. Se necessário, obtenha o instalador adequado na sua conta Avid.
4. Se você moveu a biblioteca, siga o procedimento suportado para atualizar sua localização.
5. Reinicie o Sibelius e selecione a configuração de reprodução correspondente.

Não assuma que reinstalar a aplicação principal também irá reinstalar uma grande biblioteca de som.

### 7. Por que um instrumento está tocando o som errado?

A definição do instrumento da equipe ou a atribuição do Mixer podem não corresponder ao som que você espera.

**Solução**

1. Verificar qual o instrumento atribuído ao pessoal.
2. Procure por mudanças de instrumentos na pontuação.
3. Verifique a configuração de reprodução selecionada.
4. Reveja a atribuição de som da equipe no **Mistura (Mixer)**.

Se você precisar mudar o próprio instrumento, crie um **Alteração do Instrumento (Instrument Change)**. Renomear o staff sozinho não muda sua definição musical ou som de reprodução.

### 8. Por que a Dynamics não afeta a reprodução?

A dinâmica introduzida com um estilo de texto inadequado ou ligada à posição errada pode não produzir o resultado pretendido.

**Solução**

1. Selecione a nota onde a dinâmica deve começar.
2. Criar **Texto da Expressão (Expression Text)**.
3. Inserir a dinâmica usando o menu de palavras do estilo de texto.
4. Verifique se está ligado à pauta pretendida e bata.
5. Toque a passagem de um pouco antes da marcação.

Se a dinâmica ainda tiver pouco efeito, teste outro som de reprodução. As bibliotecas sonoras diferem em como respondem à dinâmica.

### 9. Por que Sibelius ignora minha marcação temporal?

Um cabeçalho que diz “Allegro” não está necessariamente funcionando como uma instrução de tempo de reprodução.

**Solução**

1. Crie a marcação com **Texto Temporal (Tempo Text)** ou o estilo de texto apropriado do **Marca de Metronome (Metronome Mark)**.
2. Para uma velocidade precisa, inclua uma unidade de batida reconhecida e valor do tempo.
3. Verifiquem a posição de fixação.
4. Reveja as configurações do **Desempenho (Performance)** se a reprodução estiver intencionalmente variando o tempo.

Se toda a pontuação soar consistentemente muito rápido ou lento, verifique também o controle do tempo de reprodução.

### 10. Por que as repetições ou os primeiros e segundos fins estão sendo jogados de forma incorreta?

A reprodução depende da estrutura de repetição, não apenas da aparência visual de uma linha ou etiqueta de texto.

**Solução**

1. Use barras de repetição adequadas.
2. Criar linhas finais usando os tipos de linha de primeira e segunda.
3. Verifique se cada final começa e termina nas barras pretendidas.
4. Reveja as configurações de reprodução repetidas e qualquer sequência manual de repetição.
5. Teste a reprodução antes da seção repetida.

Use instruções de repetição reconhecidas em vez de texto comum que simplesmente se parece com “D.S.” ou “D.C.”.

## MIDI e entrada de notas {#midi-and-note-input}

### 11. Por que Sibelius não reconhece meu teclado MIDI?

O dispositivo pode ser desconectado, não estar disponível para o sistema operacional ou desativado em Sibelius.

**Solução**

1. Conecte o teclado antes de abrir Sibelius.
2. Abre o **Preferências Dispositivos de Entrada → (Preferences → Input Devices)**.
3. Activar o dispositivo correcto.
4. Toque uma tecla e verifique o indicador de entrada.
5. Se o dispositivo estiver faltando, teste outra porta USB ou cabo.

Se um hub estiver envolvido, tente conectar-se diretamente ao computador. Instale um driver do fabricante se o teclado necessitar de um.

### 12. Por que posso ouvir meu teclado, mas não aparecem notas?

Ouvir um som não significa que Sibelius está atualmente entrando em notação. O teclado também pode estar produzindo seu próprio som independentemente.

**Solução**

1. Selecione o resto ou posição onde a entrada deve começar.
2. Digite o modo de entrada da nota.
3. Escolha uma duração no **Teclado (Keypad)**.
4. Toca uma nota.

Para gravação ao vivo, use **Flexi- time (Flexi-time)** em vez de entrada passo-tempo. Confirme que o teclado está habilitado no **Dispositivos de Entrada (Input Devices)** se as notas ainda não aparecerem.

### 13. Por que as notas são inseridas na oitava errada?

Uma mudança de oitava pode se originar nas configurações do teclado ou nas convenções de notação do instrumento.

**Solução**

1. Verifique a oitava do teclado e transponha os controles.
2. Teste a entrada em uma equipe normal de piano.
3. Verificar o instrumento atribuído ao pessoal original.
4. Compare as vistas concerto-pitch e transpondo-score.

Alguns instrumentos, incluindo guitarra e piccolo, soam convencionalmente uma oitava longe de suas notas escritas. Outros instrumentos de transposição mudam por diferentes intervalos.

### 14. Por que as notas MIDI são inseridas duas vezes?

A entrada duplicada pode ocorrer quando o mesmo desempenho atinge Sibelius através de mais de uma rota MIDI.

**Solução**

1. Abre o **Dispositivos de Entrada (Input Devices)**.
2. Activar temporariamente apenas a entrada de teclado pretendida.
3. Desligar ligações MIDI desnecessárias.
4. Verifique qualquer aplicação ou configuração de interface MIDI-routing.
5. Teste uma única nota novamente.

Se você ouvir o som dobrado, mas apenas uma nota aparece, investigue o monitoramento de áudio e a configuração **Controle Local (Local Control)** do teclado.

### 15. Por que a gravação em tempo flexível está produzindo ritmos confusos?

Entrada ao vivo pode ser interpretada com muita precisão para a música que você pretendia, criando notas curtas, descansos ou tuplets indesejados.

**Solução**

1. Abre o **Opções de Flexi-time (Flexi-time Options)**.
2. Defina o valor mínimo da nota para se adequar à passagem.
3. Restrinja as tuples se não precisar delas.
4. Grave em um ritmo confortável com um clique claro.
5. Grave uma passagem curta e reveja-a antes de continuar.

Para música complexa, a entrada passo-tempo pode exigir menos correção do que gravação ao vivo.

### 16. Como eu entro em acordes em vez de notas separadas?

Notas tocadas uma após a outra na entrada passo-tempo normalmente ocupam posições rítmicas sucessivas.

**Solução**

Para entrada MIDI, toque as notas do acorde juntos após selecionar a duração necessária.

Para entrada do teclado do computador:

1. Digite a primeira nota.
2. - Seleciona.
3. Use os comandos de intervalo para adicionar notas acima ou abaixo dele.

Verifique se as notas resultantes compartilham um caule e duração.

### 17. Como faço para inserir notas sem um teclado numérico?

Você pode usar o **Teclado (Keypad)** do Sibelius na tela, mesmo que seu laptop não tenha um bloco de números separado.

**Solução**

1. Mostra o **Teclado (Keypad)** dos controles dos painéis.
2. Clique na duração ou articulação requeridas.
3. Digite os pitchs com o teclado do computador ou um teclado MIDI.
4. Reveja os conjuntos de atalhos de teclado disponíveis no **Preferências (Preferences)**.

Você também pode personalizar atalhos ou conectar um teclado numérico USB se você digitar notação com frequência.

### 18. Por que novas notas substituem a música existente?

A entrada de notas edita a música na posição rítmica selecionada; ela não cria automaticamente barras extras para cada nova ideia.

**Solução**

1. Desfaz a edição indesejada.
2. Adicione as barras necessárias antes de entrar na nova passagem.
3. Selecione o primeiro descanso nas novas barras.
4. Comecem a entrada de notas.

Se você quiser um ritmo independente adicional na mesma equipe, use outra voz em vez de substituir a voz existente.

## Notação, Vozes e Ritmo {#notation-voices-and-rhythm}

### 19. Como adicionar ou excluir barras inteiras?

Excluir notas e excluir barras são operações diferentes.

**Solução**

Para adicionar barras, use **Página inicial → Bares → Adicionar (Home → Bars → Add)** e escolha a opção apropriada.

Para apagar barras:

1. Faça um **seleção do sistema** das barras em todas as pautas.
2. Verifique se a seleção inclui exatamente as barras que você deseja remover.
3. Apagar a selecção.

Uma seleção de passagem normal pode limpar o conteúdo musical ao deixar as barras no lugar.

### 20. Como faço para mudar uma fórmula de compasso sem notas inesperadas?

Mudar o medidor pode fazer com que Sibelius reorganize a música existente em novas barras.

**Solução**

1. Gravar uma cópia da pontuação.
2. Selecione o ponto onde a mudança deve começar.
3. Abra os controles **Assinatura da hora (Time Signature)**.
4. Reveja a opção para reescrever as barras existentes.
5. Aplicar a mudança e inspecionar a passagem afetada.

Desactivar a reescrita preserva a estrutura de barras existente, mas pode deixar barras cujas durações não correspondem ao medidor mostrado. Usa essa opção deliberadamente.

### 21. Como faço para criar uma barra de coleta ou Anacrusis?

Uma pickup é uma barra de abertura encurtada, como uma batida antes da primeira barra completa de uma peça em 4/4.

**Solução**

Ao criar a fórmula de compasso de abertura, use a opção **captador/upbeat** e especifique sua duração.

Para uma partitura existente, crie um **barra irregular** do comprimento necessário usando os controles de criação de barras e, em seguida, transfira a música de abertura cuidadosamente.

Verifique a numeração da barra e a barra final se a peça necessita de um final complementar encurtado.

### 22. Como posso colocar dois ritmos independentes em um só pessoal?

Use vozes separadas para linhas musicais simultâneas.

**Solução**

1. Digite a primeira linha no **Voz 1**.
2. Selecione a posição inicial para a segunda linha.
3. Escolha **Voz 2** no **Teclado (Keypad)**.
4. Digite suas notas e descansa independentemente.

Vozes 1 e 2 geralmente fornecem direções de haste opostas. Use vozes adicionais apenas quando a notação precisar delas.

Não use um acorde quando as notas requerem ritmos diferentes.

### 23. Por que há descansos extras na minha pontuação?

Cada voz ativa precisa de sua própria estrutura rítmica, para que vozes adicionais possam introduzir descansos adicionais.

**Solução**

1. Selecione um descanso inesperado e identifique sua voz.
2. Verifique se essa voz contém notas necessárias em outro lugar no bar.
3. Remova uma voz criada acidentalmente, quando apropriado.
4. Esconder um descanso somente quando for musicalmente válido fazê-lo.

Evite esconder descansos simplesmente para ocultar um ritmo incompleto. Primeiro certifique-se de que cada voz conta para a duração da barra pretendida.

### 24. Como faço para criar trigêmeos e outros tuplets?

As tupletas dividem um espaço rítmico de forma diferente do seu agrupamento normal.

**Solução**

1. Selecione uma nota ou descanso com a duração de base pretendida.
2. Usar o **Tuplas de entrada → (Note Input → Tuplets)**.
3. Escolha o tuplet necessário ou insira uma relação personalizada.
4. Introduza as restantes notas.

Para um trigêmeo normal de oitava nota, comece com um valor de oitava nota. Se o tuplet ocupar o vão errado, desfaça-o e verifique a duração e a relação de início.

### 25. Por que minhas anotações são feitas de forma incorreta?

O agrupamento de feixes depende do medidor, das suas configurações de agrupamento e de quaisquer alterações manuais do feixe.

**Solução**

1. Verifique o agrupamento de batidas da assinatura temporal.
2. Selecione as notas afetadas.
3. Use os controles do feixe **Teclado (Keypad)** para iniciar, continuar ou quebrar vigas conforme necessário.
4. Para um problema recorrente, ajuste as configurações de agrupamento ao invés de corrigir cada feixe manualmente.

Por exemplo, 6/8 normalmente agrupa oito notas em dois grupos de três, enquanto outros metros podem precisar de um padrão diferente.

### 26. Como faço para transportar notas através de duas varas?

A notação cruzada é útil para passagens de piano compartilhadas entre as mãos.

**Solução**

1. Introduza a passagem no seu staff de origem.
2. Selecione as notas que devem aparecer na outra pauta.
3. Use os comandos **Notas cruzadas de pessoal (Cross-staff Notes)** para mover sua exibição acima ou abaixo.
4. Reveja hastes, vigas e espaçamento de pessoal.

O movimento entre funcionários preserva a relação das notas com sua voz original. Corte e cole comum move a música para outra pauta e pode não produzir a mesma notação.

### 27. Por que minha gravata está se comportando como uma lesma?

Gravatas e calúnias têm significados musicais diferentes.

**Solução**

Use um **gravata** para juntar notas consecutivas do mesmo passo em uma duração sustentada. Aplique-o com o controle de amarração **Teclado (Keypad)**.

Use um **slur** para indicar uma frase ou articulação entre notas. Crie-o usando o comando **Slur**.

Se um empate não se conectar corretamente, verifique o tom da nota seguinte, acidental, voz e posição rítmica.

### 28. Por que os acidentes estão faltando ou reaparecendo?

Sibelius determina exibição acidental a partir da assinatura da chave, notas anteriores na barra e configurações de notação.

**Solução**

1. Verifique a assinatura da chave.
2. Verifique as ocorrências anteriores do pitch na mesma barra.
3. Selecione a nota e inspecione seu acidente usando o **Teclado (Keypad)**.
4. Adicione um acidental de precaução onde melhora a legibilidade.

Não mude o tom real apenas para forçar um símbolo a aparecer. A exibição acidental e o arremesso musical devem estar corretos.

### 29. Como faço para mudar a ortografia enarmônica de uma nota?

Um passo pode ser introduzido como um afiado quando uma ortografia plana seria melhor se encaixar na harmonia.

**Solução**

1. Selecione a nota ou passagem.
2. Use o comando **Respell**.
3. Verifique a ortografia contra o acorde e a tecla.

Por exemplo, uma nota soando como F-sharp pode precisar ser escrita como G-flat em um contexto harmônico particular.

Repelir preserva tom sonoro. Transpor mudanças de pitch e resolve um problema diferente.

### 30. Por que as notas são vermelhas em Sibelius?

Cabeças de nota vermelhas comumente indicam que um pitch está fora do intervalo definido para o instrumento.

**Solução**

1. Verificar o instrumento atribuído ao pessoal.
2. Reveja os arremessos escritos e sonoros.
3. Verifique a configuração de visualização do intervalo de instrumentos.
4. Decida se a passagem é adequada para o jogador pretendido.

Um aviso de alcance não significa automaticamente que a notação esteja errada. No entanto, esconder a cor não torna uma nota impraticável jogável.

## Disposição de Pontuação e Espaçamento {#score-layout-and-spacing}

### 31. Como eu encaixo mais ou menos barras em um sistema?

Sibelius normalmente calcula os comprimentos do sistema automaticamente, mas você pode controlar quebras importantes.

**Solução**

1. Selecione as barras que devem compartilhar um sistema.
2. Usar o **Formato → do layout → Make Into System (Layout → Format → Make Into System)**.
3. Inspecione o resultado para notas e texto lotados.

Alternativamente, selecione uma barra e adicione um **Quebra de Sistema (System Break)**.

Se muitos sistemas estão lotados, reveja o tamanho da equipe, margens de página e espaçamento de notas em vez de forçar mais barras em cada linha.

### 32. Por que Sibelius não voltará a ter o meu resultado?

Fechaduras e quebras de formatação existentes podem evitar mudanças automáticas de layout.

**Solução**

1. Mostrar as marcas de disposição.
2. Procure quebras de sistema, quebras de página e sistemas bloqueados.
3. Selecione a passagem afetada.
4. Utilizar **Desbloquear o Formato (Unlock Format)** se necessário.
5. Reaplique apenas as pausas de que precisa.

Salve uma cópia primeiro se a pontuação já tiver cuidadosamente preparado turnos de página ou layout de publicação.

### 33. Por que há grandes aberturas entre as varas?

As grandes lacunas podem ser causadas por movimentos manuais, evitações de colisão ou justificação vertical.

**Solução**

1. Selecione os sistemas afetados.
2. Usar o **Otimizar o Espaço de Pessoal (Optimize Staff Spacing)**.
3. Procure letras, dinâmicas, linhas ou texto ocupando o espaço.
4. Verifique as configurações de justificação vertical se as pautas estão espalhadas por uma página inteira.

Se as alterações manuais anteriores são a causa, use o comando de reset apropriado para o escalonamento da equipe antes de otimizar novamente.

### 34. Por que a Dynamics, as letras ou o Collide de texto?

A evitação automática de colisão pode ser desabilitada, sobreposta ou incapaz de resolver um layout lotado.

**Solução**

1. Verifique se o **Disposição Magnética (Magnetic Layout)** está habilitado para os objetos afetados.
2. Reinicie o posicionamento manual desnecessário.
3. Otimizar o espaçamento da equipa.
4. Dê ao sistema mais espaço horizontal, se necessário.
5. Faça pequenos ajustes manuais apenas após verificar o layout automático.

Um sistema contendo música demais pode precisar de menos barras, independentemente das configurações de colisão.

### 35. Como faço para restaurar o espaçamento de notas horizontais irregulares?

Arrastar notas ou mudar de espaçamento repetidamente pode deixar uma passagem parecendo inconsistente.

**Solução**

1. Selecione a passagem afetada.
2. Escolha **Aparência → Notas de Reiniciação → Espaço de Notas de Reincidência (Appearance → Reset Notes → Reset Note Spacing)**.
3. Inspecione o espaçamento em torno de letras, símbolos de acordes e acidentais.
4. Ajuste as quebras do sistema se a passagem permanecer lotada.

Se um objeto em particular ainda estiver fora de sua nota, verifique também sua posição individual.

### 36. Como esconder as varas vazias?

Esconder pautas não utilizadas pode tornar uma grande pontuação ensemble mais fácil de ler.

**Solução**

1. Selecione os sistemas ou passagem em causa.
2. Escolha **Disposição → Ocultando Marcas → Esconder Marcas Vazias (Layout → Hiding Staves → Hide Empty Staves)**.
3. Verificar se todos os instrumentos necessários permanecem visíveis.

Os funcionários que contenham notas ou outros objectos relevantes não podem ser considerados vazios. Inspecione-o antes de apagar qualquer coisa.

Use o **Mostrar as Marcas Vazias (Show Empty Staves)** quando você precisar que a equipe apareça novamente.

### 37. Como mudo a ordem dos instrumentos?

A alteração de um rótulo de instrumento não move a sua equipa.

**Solução**

1. Abre o **Home → Instrumentos → Adicionar ou remover (Home → Instruments → Add or Remove)**.
2. Selecione o instrumento na lista de instrumentos da pontuação.
3. Subam ou desçam.
4. Confirme a mudança.
5. Reveja braquetes, chaves e agrupamento de barras.

Escolha uma ordem que se adapte ao conjunto e ajude os músicos a encontrar suas partes rapidamente.

### 38. Por que os nomes dos instrumentos estão errados ou desaparecidos?

Nomes de instrumentos podem diferir entre o primeiro sistema e sistemas posteriores.

**Solução**

1. Verifiquem os nomes completos e curtos do instrumento.
2. Edite o nome exibido ou as configurações do seu instrumento, conforme apropriado.
3. Reveja as configurações de exibição do nome do instrumento.
4. Verifique se uma alteração de instrumento introduz outro rótulo.

Use o nome completo onde os leitores precisam de identificação e uma abreviatura clara em sistemas subsequentes.

### 39. Por que existe uma página em branco inesperada?

Uma página em branco pode resultar de uma quebra de página especial, configurações de página de título ou formatação importada.

**Solução**

1. Mostrar as marcas de disposição.
2. Inspecione o fim da página anterior.
3. Verifique se há um **Quebra de Página Especial (Special Page Break)** que insira páginas em branco.
4. Remova ou ajuste a ruptura responsável.
5. Reveja as páginas seguintes após as alterações de layout.

Não excluir música para remover uma página criada pela formatação.

### 40. Por que os números de barras iniciam ou reiniciam incorretamente?

Um captador, limite de movimento ou alteração acidental do número de barras pode afetar a numeração.

**Solução**

1. Inspecione o ponto em que a numeração se torna incorreta.
2. Procurem um **Variação do Número da Barra (Bar Number Change)**.
3. Corrija ou remova a mudança.
4. Reveja as configurações de exibição do número de barras.
5. Verifique a numeração na pontuação e nas partes.

Decida se um captador de abertura não deve ser numerado ou contado, então aplique essa convenção de forma consistente.

## Peças, Impressão e Exportação {#parts-printing-and-exporting}

### 41. Como crio peças instrumentais individuais?

**Partes Dinâmicas (Dynamic Parts)** permite que uma partitura e suas partes instrumentais compartilhem conteúdo musical.

**Solução**

1. Abra os controles **Partes (Parts)**.
2. Verifique quais peças já existem.
3. Abra a parte necessária.
4. Onde suportado, criar uma nova parte e escolher as pautas que deve conter.
5. Ajuste o layout para o jogador.

Mantenha as edições musicais no fluxo de trabalho associado score-and-parts em vez de manter arquivos separados desnecessariamente.

### 42. Por que minha parte instrumental tem um layout diferente da pontuação?

As peças têm requisitos de layout independentes, incluindo turnos de página, tamanho da equipe e quebras do sistema.

**Solução**

1. Abra a parte afetada.
2. Verifique o **Configuração do Documento (Document Setup)**.
3. Reveja quebras automáticas e pausas manuais.
4. Ajuste diretamente o layout da peça.

As diferenças no layout são normalmente esperadas. Se as notas ou ritmos parecerem errados, verifique se você está visualizando a parte corretamente ligada e que seu conteúdo não foi oculto.

### 43. Por que os multirrestos estão faltando ou divididos em minhas partes?

Um multirest pode ser dividido por instruções musicais ou objetos que precisam permanecer visíveis.

**Solução**

1. Confirme que os multirrests estão habilitados na parte.
2. Inspecione as barras onde um multirrest quebra.
3. Verifique se há marcas de ensaio, texto, linhas de barras, mudanças-chave e assinaturas de tempo.
4. Remova objetos acidentais apenas após confirmar que são desnecessários.

Algumas pausas estão corretas porque os jogadores precisam ver uma instrução nesse ponto.

### 44. Como criar uma página melhor gira em partes?

Os jogadores precisam de tempo suficiente para virar uma página sem perder a próxima entrada.

**Solução**

1. Abra a parte individual.
2. Encontrar descansos adequados para turnos de página.
3. Inserir pausas de página em posições práticas.
4. Reveja as opções automáticas de retorno da página, quando disponível.
5. Verifique a contagem final de páginas e o espaçamento do sistema.

Evite criar páginas extremamente lotadas apenas para forçar uma virada. Teste o layout da perspectiva do jogador.

### 45. Por que meu PDF tem o tamanho errado ou margens?

A configuração da página da pontuação e as configurações de impressão ou exportação podem não concordar.

**Solução**

1. Verifique o tamanho e orientação da página no **Configuração do Documento (Document Setup)**.
2. Verifique as margens e o tamanho da equipe.
3. Confirme que você está exportando a pontuação ou parte pretendida.
4. Use a exportação de PDF incorporada quando disponível.
5. Abra o PDF e verifique suas dimensões de página.

Ao imprimir, verifique o tamanho do papel e escala separadamente. "Fit to page" pode alterar o tamanho final da pauta impressa.

### 46. Por que os símbolos de música ou fontes estão errados no PDF?

Faltam fontes, substituições ou problemas de exportação relacionados a fontes podem alterar o aspecto da notação.

**Solução**

1. Compare o PDF com a pontuação na tela.
2. Confirme que as músicas e fontes de texto necessárias estão instaladas.
3. Experimente a exportação de PDF integrada do Sibelius, quando disponível.
4. Abra o resultado em outro visualizador de PDF.
5. Se os símbolos também estiverem errados dentro do Sibelius, investigue a instalação da fonte da aplicação.

Se apenas uma fonte personalizada falhar, teste uma fonte padrão em uma cópia da pontuação.

### 47. Por que não posso exportar um arquivo de áudio?

A exportação de áudio requer uma configuração de reprodução capaz de renderizar som dentro do computador.

**Solução**

1. Verifique a configuração de reprodução selecionada.
2. Use um instrumento virtual suportado ou uma fonte de som de reprodução interna.
3. Confirme se a reprodução normal funciona.
4. Escolha **arquivo → Exportar Áudio → (File → Export → Audio)**, quando disponível.

Se a reprodução usar um sintetizador de hardware externo, seu som pode precisar ser gravado através de uma interface de áudio. O envio de MIDI para o dispositivo não captura seu áudio.

## Poupança, Recuperação e Desempenho {#saving-recovery-and-performance}

### 48. Como posso recuperar uma pontuação após um acidente?

A recuperação depende do que Sibelius salvou antes da interrupção.

**Solução**

1. Reabre o Sibelius e verifique se há uma chamada de recuperação.
2. Inspecione os arquivos de salvamento automático ou backup disponíveis.
3. Use os locais mostrados nas preferências de salvamento da sua versão ou Guia de Referência.
4. Compare as datas e o conteúdo musical.
5. Salve a melhor versão recuperada sob um novo nome.

Evite sobrescrever o original até que você tenha confirmado que o arquivo recuperado contém o trabalho que você precisa.

### 49. Por que Sibelius é lento, congelante ou destroçado?

A causa pode envolver uma determinada pontuação, biblioteca de reprodução, driver ou componente de software.

**Solução**

1. Salve o seu trabalho e reinicie Sibelius.
2. Teste uma pequena nova pontuação.
3. Compare o comportamento com a pontuação problemática.
4. Teste uma configuração de reprodução mais simples.
5. Desconecte MIDI desnecessário e dispositivos de áudio.
6. Verifique as atualizações compatíveis do Sibelius e do driver.

Se apenas uma pontuação falhar, trabalhe em uma cópia e reduza a passagem afetada. Se cada pontuação falhar, grave sua versão, sistema operacional e mensagem de erro exata para suporte.

### 50. Por que alguém não pode abrir meu arquivo Sibelius?

O destinatário pode ter uma versão mais antiga, uma edição restrita ou uma cópia incompleta do arquivo.

**Solução**

1. Pergunte qual versão e edição de Sibelius eles usam.
2. Onde suportado, use **Arquivo → Exportar a versão anterior do → (File → Export → Previous Version)**.
3. Envie a cópia exportada e mantenha o seu original.
4. Verifique se o arquivo transferido está completo.
5. Se usarem outra aplicação de notação, considere o MusicXML.

Exportação de versão antiga e MusicXML pode alterar a formatação ou recursos não suportados. Envie um PDF ao lado do arquivo editável como uma referência visual.

## Lista de Verificação Rápida de Problemas {#quick-troubleshooting-checklist}

Antes de fazer grandes alterações:

1. Gravar uma cópia separada da pontuação.
2. Identificar se o problema afeta uma pontuação ou cada pontuação.
3. Verifique os dispositivos de áudio e MIDI selecionados.
4. Verifique a configuração da reprodução.
5. Inspecione as alterações recentes de notação ou layout.
6. Reinicie Sibelius quando apropriado.
7. Verifique a compatibilidade da versão e do sistema operacional.
8. Altere uma configuração de cada vez e teste o resultado.

## Ajuda oficial de Sibelius {#official-sibelius-help}

Para instruções específicas da sua versão e edição, consulte o **Guia de Referência Sibelius (Sibelius Reference Guide)** fornecido com a aplicação.

- [Ávido Sibelius Aprenda e apoie](https://www.avid.com/sibelius/learn-and-support)
- [Informações de Lançamento do Avid Sibelius](https://www.avid.com/resource-center/whats-new-in-sibelius)

Ao solicitar ajuda, inclua sua versão Sibelius, sistema operacional, dispositivo de reprodução, a mensagem de erro exata e se o problema afeta uma pontuação ou todas as pontuações.


---

## Ajuda de licenciamento e instalação do site Sibelius para escolas {#sibelius-site-licensing-and-installation-help-for-schools}

Gerenciar Sibelius em uma escola ou faculdade, em vez de solucionar problemas em uma estação de trabalho? Softplanet Productions tem 25 anos de experiência apoiando departamentos de música do Reino Unido. [Compare as opções de licença do site Sibelius e solicite uma cotação](/pt-br/services/sibelius-site-licenses/) para novas instalações, assentos adicionais ou implantação de rede.
