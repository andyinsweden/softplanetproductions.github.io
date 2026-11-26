---
title: "Sibelius: 50 problemas frecuentes y sus soluciones"
description: "Resuelve problemas de sonido, MIDI, notación, maquetación o exportación a PDF en Sibelius. Busca por tema entre 50 preguntas y respuestas."
draft: false
showTableOfContents: false
---

Encuentre soluciones prácticas a 50 problemas comunes de Sibelius, desde la falta de sonido de reproducción hasta el incómodo espaciado de partituras y problemas de exportación de PDF.

Los nombres de los menús y las funciones disponibles varían entre versiones y ediciones, incluyendo Sibelius First, Artist y Ultimate. Si falta un comando, busque su nombre en Sibelius o consulte la Guía de referencia que se incluye con su versión.

Antes de realizar cambios importantes, guarde una copia por separado de su puntaje.

## Saltar a una categoría {#jump-to-a-category}

- [Sonido y reproducción](#sound-and-playback)
- [MIDI y entrada de notas](#midi-and-note-input)
- [Notación, voces y ritmo](#notation-voices-and-rhythm)
- [Diseño de partituras y espaciado](#score-layout-and-spacing)
- [Piezas, impresión y exportación](#parts-printing-and-exporting)
- [Ahorro, recuperación y rendimiento](#saving-recovery-and-performance)

{{< sibelius-troubleshooting-search >}}

## Sonido y reproducción {#sound-and-playback}

### 1. ¿Por qué no hay sonido en Sibelius?

Si la línea de reproducción se mueve pero no oye nada, compruebe la salida de audio, la configuración de reproducción y el mezclador.

**Solución**

1. Confirma que tus altavoces o auriculares funcionen en otra aplicación.
2. Abra **Dispositivos de reproducción (Playback Devices)** desde la pestaña **Reproducir (Play)**.
3. Abra **Opciones de motor de audio (Audio Engine Options)** y seleccione la interfaz de audio deseada.
4. Elija una configuración de reproducción que utilice una fuente de sonido instalada.
5. Abra el **Mezclador (Mixer)** y compruebe si hay canales silenciados, instrumentos solos o bajo volumen maestro.

Si conectó una interfaz de audio después de iniciar Sibelius, reinicie el programa con la interfaz conectada.

**Relacionado:** Vea los problemas 2, 5 y 6.

### 2. ¿Por qué Sibelius está tocando a través de los altavoces o auriculares equivocados?

Sibelius puede usar una salida diferente del dispositivo predeterminado del sistema operativo.

**Solución**

1. Conecte y encienda el dispositivo requerido.
2. Abrir **Opciones de motor de audio (Audio Engine Options)**.
3. Seleccione la interfaz adecuada.
4. Compruebe el enrutamiento de salida si su interfaz tiene varias salidas.
5. Reinicie la reproducción.

Si falta el dispositivo, cierre Sibelius y confirme que el sistema operativo lo reconoce antes de volver a abrir el programa.

Los dispositivos Bluetooth pueden introducir un retraso adicional.

### 3. ¿Por qué la reproducción se cruje, hace clic o se rompe?

Un búfer de audio demasiado pequeño puede causar una reproducción interrumpida, especialmente con bibliotecas de sonido exigentes.

**Solución**

1. Abrir **Opciones de motor de audio (Audio Engine Options)**.
2. Aumenta el tamaño del búfer en un paso disponible.
3. Toca un pasaje exigente y escucha de nuevo.
4. Cerrar aplicaciones innecesarias.
5. Compruebe que el controlador de interfaz es compatible con su sistema operativo.

Repita hasta que la reproducción sea estable. Si el sonido permanece distorsionado, también verifique los niveles de Mixer: los problemas de recorte y búfer requieren diferentes correcciones.

### 4. ¿Por qué hay un retraso cuando juego mi teclado MIDI?

El tiempo entre pulsar una tecla y escuchar un sonido se llama latencia.

**Solución**

1. Abrir **Opciones de motor de audio (Audio Engine Options)**.
2. Reduzca el tamaño del tampón gradualmente.
3. Pruebe el teclado después de cada cambio.
4. Si aparecen clics, aumente ligeramente el búfer.

En Windows, use el controlador ASIO del fabricante de la interfaz cuando esté disponible. En macOS, use el dispositivo Core Audio apropiado.

Evita los auriculares Bluetooth cuando necesites un monitoreo de teclado sensible.

### 5. ¿Por qué un instrumento es silencioso?

Un solo personal silencioso generalmente apunta a sus configuraciones de mezclador, asignación de sonido o propiedades de reproducción.

**Solución**

1. Abra el **Mezclador (Mixer)**.
2. Compruebe que el instrumento no esté silenciado.
3. Compruebe si otro instrumento está solo.
4. Confirme que el personal tiene asignado un sonido adecuado.
5. Seleccione una nota afectada y compruebe su configuración de **Jugar en el pase (Play on pass)** en el **Inspector**, donde esté disponible.

También busque un cambio de instrumento no deseado antes del pasaje silencioso.

### 6. ¿Por qué faltan o no están disponibles los sonidos de Sibelius?

La aplicación de notación y su biblioteca de sonido pueden requerir una instalación separada.

**Solución**

1. Compruebe qué biblioteca de sonido espera su configuración de reproducción.
2. Confirme que la biblioteca está instalada.
3. Si es necesario, obtenga el instalador adecuado de su cuenta de Avid.
4. Si ha movido la biblioteca, siga el procedimiento admitido para actualizar su ubicación.
5. Reinicie Sibelius y seleccione la configuración de reproducción correspondiente.

No asuma que reinstalar la aplicación principal también reinstalará una biblioteca de sonido grande.

### 7. ¿Por qué un instrumento está tocando el sonido equivocado?

La definición del instrumento del personal o la asignación del mezclador pueden no coincidir con el sonido que espera.

**Solución**

1. Verifique qué instrumento está asignado al personal.
2. Busca cambios de instrumento en la partitura.
3. Compruebe la configuración de reproducción seleccionada.
4. Revise la asignación de sonido del personal en el **Mezclador (Mixer)**.

Si necesita cambiar el instrumento en sí, cree un **Cambio de instrumento (Instrument Change)** adecuado. Renombrar el pentagrama solo no cambia su definición musical ni su sonido de reproducción.

### 8. ¿Por qué las dinámicas no afectan la reproducción?

Las dinámicas introducidas con un estilo de texto inadecuado o unidas a la posición incorrecta pueden no producir el resultado deseado.

**Solución**

1. Seleccione la nota donde debe comenzar la dinámica.
2. Crea **Texto de expresión (Expression Text)**.
3. Inserte la dinámica utilizando el menú de palabras del estilo de texto.
4. Verifique que esté unido al personal previsto y late.
5. Toca el pasaje ligeramente antes de la marca.

Si la dinámica aún tiene poco efecto, pruebe otro sonido de reproducción. Las bibliotecas de sonido difieren en la forma en que responden a la dinámica.

### 9. ¿Por qué Sibelius ignora mi marca de tempo?

Un encabezado que dice "Allegro" no funciona necesariamente como una instrucción de tempo de reproducción.

**Solución**

1. Cree la marca con **Texto Tempo (Tempo Text)** o el estilo de texto **Metrónomo Mark (Metronome Mark)** apropiado.
2. Para una velocidad precisa, incluye una unidad de tiempo reconocida y un valor de tempo.
3. Compruebe su posición de fijación.
4. Revise la configuración de **Rendimiento (Performance)** si la reproducción está variando intencionalmente el tempo.

Si toda la partitura suena demasiado rápida o lenta, comprueba también el control del tempo de reproducción.

### 10. ¿Por qué las repeticiones o los primeros y segundos finales juegan incorrectamente?

La reproducción depende de la estructura de repetición, no solo de la apariencia visual de una línea o etiqueta de texto.

**Solución**

1. Usar barras de repetición adecuadas.
2. Cree líneas finales utilizando los tipos de línea de primer y segundo final apropiados.
3. Compruebe que cada final comienza y termina en las barras previstas.
4. Revise la configuración de reproducción repetida y cualquier secuencia de repetición manual.
5. Pruebe la reproducción desde antes de la sección repetida.

Utilice instrucciones de repetición reconocidas en lugar de texto ordinario que simplemente se parece a “D.S.” o “D.C”.

## MIDI y entrada de notas {#midi-and-note-input}

### 11. ¿Por qué Sibelius no reconoce mi teclado MIDI?

El dispositivo puede estar desconectado, no disponible para el sistema operativo o inhabilitado en Sibelius.

**Solución**

1. Conecta el teclado antes de abrir Sibelius.
2. Abrir **Preferencias → Dispositivos de entrada (Preferences → Input Devices)**.
3. Habilita el dispositivo correcto.
4. Toca una tecla y comprueba el indicador de entrada.
5. Si falta el dispositivo, pruebe otro puerto o cable USB.

Si se trata de un concentrador, intente conectarse directamente a la computadora. Instale un controlador del fabricante si el teclado lo requiere.

### 12. ¿Por qué puedo escuchar mi teclado pero no aparecen notas?

Escuchar un sonido no significa que Sibelius esté entrando en notación, ya que el teclado también puede estar produciendo su propio sonido de forma independiente.

**Solución**

1. Seleccione el resto o la posición donde debe comenzar la entrada.
2. Introduzca el modo de entrada de notas.
3. Elija una duración en el **Teclado (Keypad)**.
4. Toca una nota.

Para la grabación en directo, utilice **Flexi-Time (Flexi-time)** en lugar de la entrada de tiempo de paso. Confirme que el teclado está habilitado en **Dispositivos de entrada (Input Devices)** si las notas aún no aparecen.

### 13. ¿Por qué se ingresan las notas en la octava incorrecta?

Un cambio de octava puede originarse en la configuración del teclado o en las convenciones de notación del instrumento.

**Solución**

1. Compruebe la octava del teclado y los controles de transposición.
2. Prueba de entrada en un personal de piano normal.
3. Verifique el instrumento asignado al personal original.
4. Compare las vistas de campo de concierto y de puntuación de transposición.

Algunos instrumentos, como la guitarra y el piccolo, suenan convencionalmente a una octava de distancia de sus notas escritas. Otros instrumentos de transposición cambian en diferentes intervalos.

### 14. ¿Por qué se ingresan los billetes MIDI dos veces?

La entrada duplicada puede ocurrir cuando el mismo rendimiento llega a Sibelius a través de más de una ruta MIDI.

**Solución**

1. Abrir **Dispositivos de entrada (Input Devices)**.
2. Habilite temporalmente solo la entrada de teclado prevista.
3. Desconecte las conexiones MIDI innecesarias.
4. Compruebe cualquier configuración de interfaz o aplicación de enrutamiento MIDI.
5. Vuelve a probar una sola nota.

Si escuchas un sonido duplicado pero solo aparece una nota, investiga la monitorización de audio y la configuración **Control local (Local Control)** del teclado.

### 15. ¿Por qué la grabación en tiempo flexible produce ritmos desordenados?

La entrada en vivo puede interpretarse con demasiada precisión para la música que pretendías, creando notas cortas, descansos o tuplets no deseados.

**Solución**

1. Abrir **Opciones de Flexi-Time (Flexi-time Options)**.
2. Establezca el valor mínimo de la nota para que se adapte al pasaje.
3. Restrinja las tuplas si no las necesita.
4. Graba a un ritmo cómodo con un clic claro.
5. Registra un pasaje corto y revísalo antes de continuar.

Para música compleja, la entrada de tiempo de paso puede requerir menos corrección que la grabación en vivo.

### 16. ¿Cómo ingreso acordes en lugar de notas separadas?

Las notas tocadas una tras otra en la entrada de paso-tiempo normalmente ocupan posiciones rítmicas sucesivas.

**Solución**

Para la entrada MIDI, toque las notas del acorde juntas después de seleccionar la duración requerida.

Para la entrada de teclado:

1. Introduzca la primera nota.
2. Selecciona.
3. Utilice los comandos de intervalo para agregar notas por encima o por debajo de él.

Verifique que las notas resultantes compartan un tallo y una duración.

### 17. ¿Cómo ingreso notas sin teclado numérico?

Puede usar el **Teclado (Keypad)** en pantalla de Sibelius incluso si su computadora portátil no tiene un teclado numérico separado.

**Solución**

1. Muestre el **Teclado (Keypad)** desde los controles de los paneles.
2. Haga clic en la duración o articulación requerida.
3. Introduzca los tonos con el teclado del ordenador o un teclado MIDI.
4. Revise los conjuntos de atajos de teclado disponibles en **Preferencias (Preferences)**.

También puede personalizar los accesos directos o conectar un teclado numérico USB si ingresa la notación con frecuencia.

### 18. ¿Por qué las notas nuevas reemplazan a la música existente?

La entrada de nota edita la música en la posición rítmica seleccionada; no crea automáticamente barras adicionales para cada nueva idea.

**Solución**

1. Deshacer la edición no deseada.
2. Añadir las barras necesarias antes de entrar en el nuevo pasaje.
3. Seleccione el primer resto en las nuevas barras.
4. Inicie la entrada de nota allí.

Si desea un ritmo independiente adicional en el mismo personal, use otra voz en lugar de reemplazar la voz existente.

## Notación, voces y ritmo {#notation-voices-and-rhythm}

### 19. ¿Cómo puedo añadir o eliminar barras enteras?

Eliminar notas y eliminar barras son operaciones diferentes.

**Solución**

Para agregar barras, use **Inicio → Compases → Añadir (Home → Bars → Add)** y elija la opción adecuada.

Para eliminar barras:

1. Haz un **selección del sistema** de las barras en todas las varas.
2. Compruebe que la selección incluye exactamente las barras que desea eliminar.
3. Eliminar la selección.

Una selección de pasaje normal puede borrar el contenido musical mientras deja las barras en su lugar.

### 20. ¿Cómo cambio una firma de tiempo sin notas móviles inesperadas?

Cambiar el medidor puede hacer que Sibelius reorganice la música existente en nuevas barras.

**Solución**

1. Guarda una copia de la partitura.
2. Seleccione el punto donde debe comenzar el cambio.
3. Abra los controles **Firma de tiempo (Time Signature)**.
4. Revise la opción para reescribir las barras existentes.
5. Aplique el cambio e inspeccione el pasaje afectado.

Deshabilitar la reescritura conserva la estructura de barras existente, pero puede dejar barras cuyas duraciones no coincidan con el medidor mostrado. Utilice esa opción deliberadamente.

### 21. ¿Cómo creo una barra de recogida o anacrusis?

Una pastilla es una barra de apertura acortada, como un latido antes de la primera barra completa de una pieza en 4/4.

**Solución**

Al crear la firma de tiempo de apertura, use la opción **pastilla/upbeat** y especifique su duración.

Para una partitura existente, crea un **barra irregular** de la longitud requerida usando los controles de creación de barras, luego transfiere la música de apertura con cuidado.

Verifique la numeración de la barra y la barra final si la pieza requiere un final acortado complementario.

### 22. ¿Cómo pongo dos ritmos independientes en un solo pentagrama?

Utilice voces separadas para líneas musicales simultáneas.

**Solución**

1. Introduzca la primera línea en **Voz 1**.
2. Seleccione la posición inicial para la segunda línea.
3. Elija **Voz 2** en el **Teclado (Keypad)**.
4. Introduzca sus notas y descanse independientemente.

Las voces 1 y 2 generalmente proporcionan direcciones opuestas. Use voces adicionales solo cuando la notación las necesite.

No uses un acorde cuando las notas requieran ritmos diferentes.

### 23. ¿Por qué aparecen descansos adicionales en mi puntuación?

Cada voz activa necesita su propia estructura rítmica, por lo que las voces adicionales pueden introducir descansos adicionales.

**Solución**

1. Selecciona un descanso inesperado e identifica su voz.
2. Compruebe si esa voz contiene notas requeridas en otra parte de la barra.
3. Quitar una voz creada accidentalmente cuando sea apropiado.
4. Esconde un descanso solo cuando sea musicalmente válido hacerlo.

Evite los descansos ocultos simplemente para ocultar un ritmo incompleto. Primero asegúrese de que cada voz tenga en cuenta la duración prevista de la barra.

### 24. ¿Cómo puedo crear trillizos y otros Tuplets?

Las tuplas dividen un tramo rítmico diferente de su agrupación normal.

**Solución**

1. Seleccione una nota o descanse con la duración base prevista.
2. Utilice **Introducción de notas → Grupos irregulares (Note Input → Tuplets)**.
3. Elija el tuplet requerido o ingrese una proporción personalizada.
4. Introduzca las notas restantes.

Para un triplete ordinario de octava nota, comience con un valor de octava nota. Si el tuplete ocupa el tramo equivocado, deshagalo y compruebe la duración y la relación de inicio.

### 25. ¿Por qué mis notas son oídas incorrectamente?

La agrupación de haces depende del medidor, su configuración de agrupación y cualquier cambio manual de haz.

**Solución**

1. Compruebe la agrupación de tiempos de la firma de tiempo.
2. Seleccione las notas afectadas.
3. Utilice los controles de haz **Teclado (Keypad)** para iniciar, continuar o romper haces según sea necesario.
4. Para un problema recurrente, ajuste la configuración de agrupación en lugar de corregir cada haz manualmente.

Por ejemplo, 6/8 normalmente agrupa las octavas notas en dos grupos de tres, mientras que otros medidores pueden necesitar un patrón diferente.

### 26. ¿Cómo hago notas de haz a través de dos pentagramas?

La notación cruzada es útil para pasajes de piano compartidos entre las manos.

**Solución**

1. Introduzca el pasaje en su personal de origen.
2. Seleccione las notas que deben aparecer en el otro personal.
3. Utilice los comandos **Notas cruzadas (Cross-staff Notes)** para mover su pantalla por encima o por debajo.
4. Repasa los tallos, las vigas y el espaciamiento del personal.

El movimiento entre pentagramas conserva la relación de las notas con su voz original. El corte y pegado ordinario mueve la música a otro pentagrama y puede no producir la misma notación.

### 27. ¿Por qué mi corbata se comporta como una babosa?

Los lazos y los insultos tienen diferentes significados musicales.

**Solución**

Utiliza un **lazo** para unir notas consecutivas del mismo tono en una duración sostenida. Aplícalo con el control de empate **Teclado (Keypad)**.

Utilice un **slur** para indicar una frase o articulación a través de notas. Creelo usando el comando **Slur**.

Si un empate no se conecta correctamente, revisa el tono, la voz y la posición rítmica de la siguiente nota.

### 28. ¿Por qué faltan o reaparecen los accidentes?

Sibelius determina la visualización accidental a partir de la firma de la clave, las notas anteriores en la barra y la configuración de notación.

**Solución**

1. Revisa la firma de la llave.
2. Compruebe las ocurrencias anteriores del tono en la misma barra.
3. Seleccione la nota e inspeccione su accidental usando el **Teclado (Keypad)**.
4. Agregue una advertencia accidental donde mejore la legibilidad.

No cambie el tono real solo para forzar la aparición de un símbolo. La visualización accidental y el tono musical deben ser correctos.

### 29. ¿Cómo cambio la ortografía enarmónica de una nota?

Un tono se puede introducir como agudo cuando una ortografía plana encajaría mejor con la armonía.

**Solución**

1. Seleccione la nota o el pasaje.
2. Utilice el comando **Respell**.
3. Compruebe la ortografía contra el acorde y la tecla.

Por ejemplo, una nota que suene como F-sharp puede necesitar escribirse como G-flat en un contexto armónico particular.

La transposición cambia el tono y resuelve un problema diferente.

### 30. ¿Por qué las notas son rojas en Sibelius?

Las notas rojas indican comúnmente que un tono se encuentra fuera del rango definido para el instrumento.

**Solución**

1. Compruebe el instrumento asignado al personal.
2. Revisa los tonos escritos y sonoros.
3. Compruebe la configuración de la pantalla del rango de instrumentos.
4. Decidir si el pase es adecuado para el jugador previsto.

Una advertencia de rango no significa automáticamente que la notación es incorrecta. Sin embargo, ocultar el color no hace que una nota poco práctica sea reproducible.

## Diseño de partituras y espaciado {#score-layout-and-spacing}

### 31. ¿Cómo puedo ajustar más o menos barras en un sistema?

Sibelius normalmente calcula las longitudes del sistema automáticamente, pero puedes controlar las pausas importantes.

**Solución**

1. Seleccione las barras que deben compartir un sistema.
2. Utilice **Maquetación → Formato → Crear sistema (Layout → Format → Make Into System)**.
3. Inspeccione el resultado para notas y texto abarrotados.

Alternativamente, seleccione una línea de barras y agregue un **Ruptura del sistema (System Break)**.

Si muchos sistemas están llenos, revise el tamaño del personal, los márgenes de página y el espaciado de las notas en lugar de forzar más barras en cada línea.

### 32. ¿Por qué Sibelius no devolverá mi puntuación?

Los bloqueos y roturas de formato existentes pueden evitar cambios automáticos en el diseño.

**Solución**

1. Muestra las marcas de diseño.
2. Busca saltos de sistema, saltos de página y sistemas bloqueados.
3. Seleccione el pasaje afectado.
4. Utilice **Desbloquear formato (Unlock Format)** cuando sea apropiado.
5. Vuelve a aplicar solo los descansos que necesites.

Guarde una copia primero si la puntuación ya ha preparado cuidadosamente los giros de página o el diseño de la publicación.

### 33. ¿Por qué hay grandes brechas entre los pentagramas?

Los huecos grandes pueden ser causados por movimiento manual, evitación de colisión o justificación vertical.

**Solución**

1. Seleccione los sistemas afectados.
2. Utilice **Optimizar el espaciamiento del personal (Optimize Staff Spacing)**.
3. Busca letras, dinámicas, líneas o texto ocupando la brecha.
4. Compruebe la configuración de justificación vertical si los pentagramas están repartidos por toda una página.

Si los cambios manuales anteriores son la causa, utilice el comando de restablecimiento de espacio de personal apropiado antes de optimizar nuevamente.

### 34. ¿Por qué chocan la dinámica, la letra o el texto?

Evitación automática de colisiones puede ser desactivado, anulado o incapaz de resolver un diseño lleno.

**Solución**

1. Compruebe que **Diseño magnético (Magnetic Layout)** está habilitado para los objetos afectados.
2. Restablecer el posicionamiento manual innecesario.
3. Optimiza el espacio entre el personal.
4. Dele al sistema más espacio horizontal si es necesario.
5. Realice pequeños ajustes manuales solo después de comprobar el diseño automático.

Un sistema que contiene demasiada música puede necesitar menos barras, independientemente de la configuración de colisión.

### 35. ¿Cómo restauro el espaciamiento desigual de notas horizontales?

Arrastrar notas o cambiar el espaciado repetidamente puede hacer que un pasaje parezca inconsistente.

**Solución**

1. Seleccione el pasaje afectado.
2. Elija **Apariencia → Restablecer notas → Restablecer espaciado (Appearance → Reset Notes → Reset Note Spacing)**.
3. Inspecciona el espaciado alrededor de letras, símbolos de acordes y accidentales.
4. Ajuste las interrupciones del sistema si el pasaje permanece abarrotado.

Si un objeto en particular todavía se encuentra inusualmente lejos de su nota, también verifique su posición individual.

### 36. ¿Cómo escondo las varas vacías?

Ocultar los pentagramas no utilizados puede hacer que una partitura de conjunto grande sea más fácil de leer.

**Solución**

1. Seleccione los sistemas o el pasaje en cuestión.
2. Elija **Maquetación → Ocultar pentagramas → Ocultar pentagramas vacíos (Layout → Hiding Staves → Hide Empty Staves)**.
3. Verifique que todos los instrumentos necesarios permanezcan visibles.

Un pentagrama que contenga notas u otros objetos relevantes puede no calificar como vacío. Inspeccionarlo antes de eliminar cualquier cosa.

Use **Mostrar pentagramas vacíos (Show Empty Staves)** cuando necesite que el personal aparezca de nuevo.

### 37. ¿Cómo cambio el orden de los instrumentos?

Cambiar la etiqueta de un instrumento no mueve a su personal.

**Solución**

1. Abrir **Inicio → Instrumentos → Añadir o eliminar (Home → Instruments → Add or Remove)**.
2. Selecciona el instrumento en la lista de instrumentos de la partitura.
3. Muévalo hacia arriba o hacia abajo.
4. Confirme el cambio.
5. Revise los brackets, los brackets y la agrupación de barras.

Elija un orden que se adapte al conjunto y ayude a los músicos a encontrar sus partes rápidamente.

### 38. ¿Por qué los nombres de instrumentos son incorrectos o faltan?

Los nombres de los instrumentos pueden diferir entre el primer sistema y los sistemas posteriores.

**Solución**

1. Compruebe los nombres completos y cortos del instrumento.
2. Edite el nombre mostrado o la configuración de su instrumento según corresponda.
3. Revisa la configuración de visualización del nombre del instrumento de la partitura.
4. Compruebe si un cambio de instrumento introduce otra etiqueta.

Use el nombre completo donde los lectores necesitan identificación y una abreviatura clara en los sistemas posteriores.

### 39. ¿Por qué hay una página en blanco inesperada?

Una página en blanco puede ser el resultado de un salto de página especial, configuración de página de título o formato importado.

**Solución**

1. Muestra las marcas de diseño.
2. Revisa el final de la página anterior.
3. Comprueba si hay un **Descanso de página especial (Special Page Break)** que inserte páginas en blanco.
4. Retire o ajuste el descanso responsable.
5. Revise las páginas siguientes después de los cambios de diseño.

No elimines música para eliminar una página creada por formato.

### 40. ¿Por qué los números de barras comienzan o reinician incorrectamente?

Una recolección, límite de movimiento o cambio accidental de número de barras puede afectar la numeración.

**Solución**

1. Inspeccione el punto donde la numeración se vuelve incorrecta.
2. Compruebe si hay un **Cambio de número de barra (Bar Number Change)**.
3. Corregir o eliminar el cambio.
4. Revise la configuración de visualización del número de barras.
5. Verifique la numeración tanto en la puntuación como en las partes.

Decide si una recolección de apertura debe ser numerada o contada, luego aplica esa convención de manera consistente.

## Piezas, impresión y exportación {#parts-printing-and-exporting}

### 41. ¿Cómo creo piezas instrumentales individuales?

**Piezas dinámicas (Dynamic Parts)** permite que una partitura y sus partes instrumentales compartan contenido musical.

**Solución**

1. Abra los controles **Partes (Parts)**.
2. Compruebe qué partes ya existen.
3. Abra la parte requerida.
4. Cuando sea compatible, cree una nueva pieza y elija las duelas que debe contener.
5. Ajustar su diseño para el jugador.

Mantenga las ediciones musicales en el flujo de trabajo de partituras vinculado en lugar de mantener archivos separados innecesariamente.

### 42. ¿Por qué mi parte instrumental tiene un diseño diferente al de la partitura?

Las piezas tienen requisitos de diseño independientes, incluidos turnos de página, tamaño del personal y descansos del sistema.

**Solución**

1. Abra la parte afectada.
2. Compruebe su **Configuración del documento (Document Setup)**.
3. Revisa los cortes automáticos y los cortes manuales.
4. Ajuste el diseño de la pieza directamente.

Normalmente se esperan diferencias en el diseño. Si las notas o los ritmos parecen incorrectos, compruebe que está viendo la parte vinculada correcta y que su contenido no se ha ocultado.

### 43. ¿Por qué faltan varios reposapiés o se dividen en mis partes?

Un multiresto se puede dividir por instrucciones musicales u objetos que necesitan permanecer visibles.

**Solución**

1. Confirme que los multirestos están habilitados en la parte.
2. Inspeccione las barras donde se rompe un multiresto.
3. Compruebe si hay marcas de ensayo, texto, barras, cambios de teclas y marcas de tiempo.
4. Retire los objetos accidentales solo después de confirmar que son innecesarios.

Algunas pausas son correctas porque los jugadores necesitan ver una instrucción en ese momento.

### 44. ¿Cómo creo mejores turnos de página en partes?

Los jugadores necesitan suficiente tiempo para pasar una página sin perder su próxima entrada.

**Solución**

1. Abra la parte individual.
2. Encuentre los descansos adecuados para los giros de página.
3. Insertar saltos de página en posiciones prácticas.
4. Revise las opciones automáticas de giro de página cuando estén disponibles.
5. Compruebe el recuento final de páginas y el espaciado del sistema.

Evita crear páginas muy concurridas solo para forzar un turno. Prueba el diseño desde la perspectiva del jugador.

### 45. ¿Por qué mi PDF tiene el tamaño o los márgenes incorrectos?

Es posible que la configuración de la página de la puntuación y la configuración de impresión o exportación no estén de acuerdo.

**Solución**

1. Compruebe el tamaño y la orientación de la página en **Configuración del documento (Document Setup)**.
2. Compruebe los márgenes y el tamaño del personal.
3. Confirme que está exportando la puntuación o parte prevista.
4. Utilice la exportación de PDF integrada cuando esté disponible.
5. Abra el PDF y verifique sus dimensiones de página.

Al imprimir, compruebe el tamaño del papel y la escala por separado. “Ajustar a página” puede alterar el tamaño final del personal impreso.

### 46. ¿Por qué están mal los símbolos o fuentes de música en el PDF?

La falta de fuentes, sustituciones o problemas de exportación relacionados con las fuentes pueden cambiar la apariencia de la notación.

**Solución**

1. Compare el PDF con la puntuación en pantalla.
2. Confirme que las fuentes de música y texto requeridas están instaladas.
3. Pruebe la exportación de PDF integrada de Sibelius cuando esté disponible.
4. Abra el resultado en otro visor de PDF.
5. Si los símbolos también están mal dentro de Sibelius, investiga la instalación de la fuente de la aplicación.

Si solo falla una fuente personalizada, pruebe una fuente estándar en una copia de la partitura.

### 47. ¿Por qué no puedo exportar un archivo de audio?

La exportación de audio requiere una configuración de reproducción capaz de reproducir sonido dentro del ordenador.

**Solución**

1. Compruebe la configuración de reproducción seleccionada.
2. Utilice un instrumento virtual compatible o una fuente de sonido de reproducción interna.
3. Confirme que la reproducción normal funciona.
4. Elija **Archivo → Exportar → Audio (File → Export → Audio)**, donde esté disponible.

Si la reproducción utiliza un sintetizador de hardware externo, es posible que su sonido deba grabarse a través de una interfaz de audio. El envío de MIDI al dispositivo no captura su audio.

## Ahorro, recuperación y rendimiento {#saving-recovery-and-performance}

### 48. ¿Cómo recupero una puntuación después de un accidente?

La recuperación depende de lo que Sibelius salvó antes de la interrupción.

**Solución**

1. Vuelva a abrir Sibelius y compruebe si hay un aviso de recuperación.
2. Inspeccione los archivos de guardado automático o copia de seguridad disponibles.
3. Utilice las ubicaciones que se muestran en las preferencias de guardado de su versión o en la Guía de referencia.
4. Comparar marcas de tiempo y contenidos musicales.
5. Guarde la mejor versión recuperada bajo un nuevo nombre.

Evite sobrescribir el original hasta que haya confirmado que el archivo recuperado contiene el trabajo que necesita.

### 49. ¿Por qué Sibelius es lento, se congela o se estrella?

La causa puede involucrar una partitura particular, biblioteca de reproducción, controlador o componente de software.

**Solución**

1. Guarda tu trabajo y reinicia Sibelius.
2. Prueba una nueva puntuación pequeña.
3. Compare el comportamiento con la puntuación problemática.
4. Pruebe una configuración de reproducción más sencilla.
5. Desconecte los dispositivos MIDI y de audio innecesarios.
6. Compruebe las actualizaciones de Sibelius y del controlador compatibles.

Si solo falla una puntuación, trabaje en una copia y reduzca el pasaje afectado. Si falla cada puntuación, registre su versión, sistema operativo y mensaje de error exacto para obtener soporte.

### 50. ¿Por qué otra persona no puede abrir mi archivo Sibelius?

El destinatario puede tener una versión anterior, una edición restringida o una copia incompleta del archivo.

**Solución**

1. Pregunte qué versión y edición de Sibelius usan.
2. Cuando sea compatible, utilice **Archivo → Exportar → Versión anterior (File → Export → Previous Version)**.
3. Envía la copia exportada y conserva el original.
4. Compruebe que el archivo transferido está completo.
5. Si usan otra aplicación de notación, considere MusicXML.

La exportación de la versión anterior y MusicXML pueden cambiar el formato o las características no compatibles. Envíe un PDF junto con el archivo editable como referencia visual.

## Lista de comprobación rápida de solución de problemas {#quick-troubleshooting-checklist}

Antes de realizar cambios importantes:

1. Guarde una copia separada de la partitura.
2. Identifique si el problema afecta a una puntuación o a cada puntuación.
3. Compruebe el audio seleccionado y los dispositivos MIDI.
4. Compruebe la configuración de reproducción.
5. Inspeccione los cambios recientes de notación o diseño.
6. Reinicie Sibelius cuando sea apropiado.
7. Compruebe la compatibilidad de la versión y del sistema operativo.
8. Cambie una configuración a la vez y pruebe el resultado.

## Ayuda oficial de Sibelius {#official-sibelius-help}

Para obtener instrucciones específicas para su versión y edición, consulte el **Guía de referencia de Sibelius (Sibelius Reference Guide)** suministrado con la aplicación.

- [Avid Sibelius Aprender y apoyar](https://www.avid.com/sibelius/learn-and-support)
- [Información de lanzamiento de Avid Sibelius](https://www.avid.com/resource-center/whats-new-in-sibelius)

Cuando solicite ayuda, incluya su versión de Sibelius, sistema operativo, dispositivo de reproducción, el mensaje de error exacto y si el problema afecta a una puntuación o a todas las puntuaciones.


---

## Sibelius sitio de licencias y ayuda de instalación para las escuelas {#sibelius-site-licensing-and-installation-help-for-schools}

¿Gestionando Sibelius en una escuela o universidad en lugar de solucionar problemas en una estación de trabajo? Softplanet Productions tiene 25 años de experiencia apoyando a los departamentos de música del Reino Unido. [Compare las opciones de licencia del sitio Sibelius y solicite un presupuesto](/es/services/sibelius-site-licenses/) para nuevas instalaciones, asientos adicionales o implementación de red.
