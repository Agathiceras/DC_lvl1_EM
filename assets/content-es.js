/* ============================================================
   EM course training · Digital Creativity 1 [2199] · SPANISH (LatAm)
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by language (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'es' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formación de curso EM',
  footer: 'kodland · Nuevo Modelo Educativo · Formación de curso',
  devLink: '🛠 Developer',
  logoSub: 'Nuevo Modelo Educativo',
  navHome: '← Inicio',
  navBackModule: '← Volver al módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Empezar →',
  badgeLocked: '🔒 Completa el Módulo {n}',
  badgeDone: '✓ Completado · {score}%',
  progLabel: 'módulos completados',
  progAllDone: 'Módulos completados 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificación del módulo',
  ctaText: '{n} preguntas cortas. Necesitas 70% o más para aprobar.',
  lockSim: '🔒 Completa la simulación de publicación en Kodland Sparks (arriba) para desbloquear la verificación.',
  startCheck: 'Empezar la verificación →',
  retake: '🔁 Repetir la verificación',
  qmeta: '{e} Verificación del Módulo {n} · Pregunta {i} de {total}',
  fbRight: '✅ <b>¡Correcto!</b> ',
  fbWrong: '❌ <b>No exactamente.</b> ',
  nextQuestion: 'Siguiente pregunta →',
  seeResult: 'Ver mi resultado →',
  passedTitle: '¡Aprobaste!',
  failTitle: 'Casi lo logras',
  scoreLine: 'Respondiste bien <b>{score} de {n}</b>.',
  failText: 'Necesitas 70% o más. Repasa el módulo y vuelve a intentarlo: puedes repetirlo las veces que necesites.',
  nextUnlocked: 'Se desbloqueó el <b>Módulo {n} · {title}</b>.',
  goModule: 'Ir al Módulo {n} →',
  allDoneText: 'Completaste los dos módulos de esta formación.',
  seeNext: 'Ver el siguiente paso →',
  reviewModule: '📖 Repasar el módulo',
  homeDoneTitle: '¡Módulos completados!',
  homeDoneText: 'Falta un último paso: el test DST en la página de la formación en el LMS.',
  homeDoneBtn: 'Ver qué hacer ahora →',
  doneBadge: '✓ Completado',
  doneBack: 'Volver a los módulos',
  lockedTitle: 'Todavía bloqueado',
  lockedModule: 'Primero completa el Módulo {n}.',
  lockedStep: 'Completa el paso anterior para desbloquear este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir en Kodland Sparks ↗',
  simOpen: '▶ Abrir la simulación aquí',
  simClose: '✕ Cerrar la simulación',
  simNewTab: 'Abrir en otra pestaña ↗',
  simDone: '✅ Simulación completada',
  simTodo: '○ Simulación pendiente',
  checkTag: 'Márcalos',
  mythTag: 'Mito',
  mythTap: 'Toca para ver la realidad →',
  mythReality: 'Realidad ✓',
  sortWrong: '✗ No exactamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'dc1';
COURSE.code = '2199';
COURSE.title = 'Creatividad Digital 1';
COURSE.color = '#8B5CF6';

COURSE.home = {
  kicker: '🎓 Formación de curso · [2199]',
  title: 'Creatividad Digital <span class="hl">1</span>',
  lead: 'Para estudiantes de 8–9 años: un viaje por el espacio y el tiempo en la máquina del tiempo de Lumi, donde dibujan, crean personajes, inventan historias y terminan con su propio cortometraje animado. Dos módulos: el contenido del curso y la parte técnica de las lecciones.',
  facts: [
    ['🧑‍💻', '<b>A tu ritmo.</b> Tu progreso se guarda en este navegador. Cada módulo termina con una verificación corta.'],
    ['⚡', '<b>Práctica incluida.</b> Una simulación de Kodland Sparks para practicar la publicación de proyectos y los problemas más comunes.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de empezar:</b> haz primero la <b>formación principal del Nuevo Modelo Educativo (EM)</b>. Esta formación del curso va después y parte de lo que ya viste allí: el Backoffice y las Teacher Notes, el Classroom con el Follow Mode, el recorrido por Kodland Sparks y la calidad de la lección.' },
  { kind:'warn', e:'🔄', html:'<b>El contenido de las lecciones en el Backoffice se actualiza constantemente.</b> Con el feedback de estudiantes y tutores, las lecciones se mejoran todo el tiempo. No te preocupes: cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'🎨', color:'#8B5CF6', title:'El contenido del curso',
    desc:'Los datos generales del curso, lo que logra el estudiante y la primera lección del Módulo 1.',
    obj:'Prepárate para dar la primera lección de Creatividad Digital 1. En ella, los estudiantes de 8–9 años llegan al Mundo Píxel, eligen el tema de su propio juego, dibujan su ícono en pixel art en Kodland Sparks y lo publican.',
    offer:[['🕰️','Conocer los datos generales del curso y su historia.'],['🏆','Saber qué logra el estudiante al final del curso.'],['📖','Saber qué pasa en la primera lección.'],['📘','Revisar la primera lección en el Backoffice.']],
    sections:[
      { id:'ov', e:'🕰️', title:'El curso', blocks:[
        { t:'meta', items:[['🧒','Edad','8–9 años'],['⏱️','Lección','60 min en grupo · 50 min individual'],['📚','Programa','40 lecciones · 10 módulos'],['🌱','Nivel','Principiante']] },
        { t:'p', html:'Los estudiantes viajan por el espacio y el tiempo en la <b>máquina del tiempo de Lumi</b>, la mascota del curso. Cada mundo es una nueva parada: el Mundo Píxel, la era de los dinosaurios, un reino mágico, un planeta lejano, la era de los descubrimientos científicos… En cada uno aprenden a usar herramientas digitales para crear algo propio.' },
        { t:'trio', items:[
          ['🎬','Primero el resultado','Cada lección empieza mostrando a dónde se llega: un ícono, un personaje, una animación. Luego el estudiante elige su propia idea y la hace realidad.'],
          ['🙋','La idea es del estudiante','El tema, el personaje y la historia los elige el estudiante. Tú le das opciones y pistas, pero <b>no dibujas por él</b>.'],
          ['🔍','Equivocarse es parte del proceso','No se exige un dibujo perfecto: se compara el antes y el después, y se celebra cada intento y cada mejora.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Desde la primera lección, los estudiantes trabajan y publican en <b>Kodland Sparks</b>: allí dibujan y allí empieza su portafolio.' }
      ]},
      { id:'achieve', e:'🏆', title:'Lo que logra el estudiante', blocks:[
        { t:'p', html:'Al terminar el curso, el estudiante:' },
        { t:'cards', cols:2, items:[
          ['👾','Dibuja en la computadora','Crea ilustraciones, desde el pixel art de las primeras lecciones hasta dibujos más completos.'],
          ['🦸','Diseña personajes','Inventa sus propios personajes y los dibuja con su pose, sus colores y sus detalles.'],
          ['💬','Cuenta historias','Aprende las reglas de la narración y las cuenta con cómics y guiones gráficos.'],
          ['🧊','Da sus primeros pasos en 3D','Desarrolla el pensamiento espacial y conoce lo básico del modelado 3D.'],
          ['🎬','Anima','Crea animaciones, primero cuadro por cuadro y luego con fotogramas clave.'],
          ['🎓','Presenta su cortometraje','Termina el curso con un <b>cortometraje animado con sonido</b> sobre su propia historia y lo presenta al grupo.']
        ]}
      ]},
      { id:'les', e:'📖', title:'La primera lección', blocks:[
        { t:'p', html:'El Módulo 1 transcurre en el <b>Mundo Píxel</b>, un videojuego de cuatro niveles; cada nivel es una lección. Abre la primera lección y lee lo que necesitas saber, el resultado clave, tu rol y los puntos a tener en cuenta:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'👾', h:'Lección 1 — Viaje al Mundo Píxel', p:'La primera lección del curso (7 tarjetas y una misión para la casa). Los estudiantes conocen a Lumi y al grupo, cargan la máquina del tiempo con sus intereses, llegan al Mundo Píxel, eligen el tema de su propio juego, dibujan su ícono en pixel art en Sparks y lo publican.',
            acc:[['📚','Lo que necesitas saber','<ul><li>El recorrido: revisión del equipo y emoji de ánimo → Lumi y la presentación del grupo → el Mundo Píxel y la idea del ícono → dibujar el ícono → mejorar el ícono (actividad adicional) → publicar y enviar el enlace → recorrido del curso → cierre y misión para la casa.</li><li>El editor de pixel art de <b>Sparks</b> se abre dentro de la tarjeta (botón <b>Expandir</b> para pantalla completa). El estudiante entra con <b>Entrar con Kodland</b>.</li><li>Herramientas: lápiz y borrador, relleno y deshacer, líneas y figuras, dibujo simétrico y paleta de colores. Lienzo recomendado: <b>64 × 64 píxeles</b>.</li><li>Si el estudiante no sabe qué dibujar, la pista propone un <b>emoji</b>.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>El estudiante conoce los acuerdos del equipo.</li><li>Eligió por su cuenta el tema de su juego y puede explicar cómo el ícono transmite ese tema o su ambiente.</li><li>Creó un dibujo en píxeles en Sparks y puede mencionar una posible mejora.</li><li>🏁 Guardó el proyecto, lo <b>publicó en Sparks</b> y <b>envió el enlace</b> en la tarjeta de la lección.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Motiva al grupo con el viaje y relaciona los proyectos con los intereses de cada estudiante.</li><li>Lee las instrucciones en voz alta, muestra <b>una acción a la vez</b> y da tiempo para repetirla.</li><li>Ayuda a desarrollar sus ideas <b>sin dibujar por ellos</b>. En la mejora, primero el estudiante muestra su dibujo y propone un cambio; después abres la pista.</li><li>Compara el antes y el después; no exijas un dibujo perfecto.</li></ul>'],
                 ['📌','Puntos a tener en cuenta','<ul><li>Mantén breve la presentación del grupo.</li><li>Activa el <b>modo de seguimiento</b> en las tarjetas: los estudiantes hacen clic, eligen y arrastran por sí mismos. Muestra el ejemplo de animación con sonido.</li><li>Las sombras y los brillos son opcionales.</li><li><b>Si no alcanza el tiempo:</b> reduce o salta la actividad de mejora. Si empieza después del minuto 00:37, pasen directamente a publicar y entregar. Reserva tiempo para el recorrido del curso y el cierre.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Pide guardar el trabajo en una <b>Ranura (Slot)</b> antes de pasar a la siguiente actividad. Si el editor aparece vacío: <b>Slot → elegir el trabajo → Cargar</b>.</li><li>Hay <b>dos botones «Publicar»</b>: uno en el editor y otro al final de la página de publicación.</li><li>El enlace que se envía es el del <b>proyecto publicado</b> (se abre con <b>Verlo en Kodland Sparks</b>), no la dirección del editor.</li><li>Misión para la casa: escribir tres frases sobre su juego o dibujo animado favorito y el proyecto que sueña crear, y unirse al chat del grupo.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La primera Teacher Note de la lección tiene el plan completo: descripción, misión de la historia, objetivo, resultado clave, la duración de cada etapa y un video de preparación. Cada tarjeta tiene además su propia nota. <b>Lee todas las Teacher Notes y mira el video antes de la clase.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Revisa la primera lección en el Backoffice', blocks:[
        { t:'p', html:'Antes de la verificación, abre el curso en el Backoffice y revisa la primera lección a tu ritmo: allí están todas las tarjetas de actividad y las Teacher Notes. No hay límite de tiempo.' },
        { t:'link', href:'https://bo.kodland.org/courses/2199', e:'📘', title:'Abrir el curso en el Backoffice', small:'[2199] Creatividad Digital 1 — las lecciones y sus Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'El contenido de las lecciones en el Backoffice se seguirá actualizando con el feedback de estudiantes y tutores. Cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'La parte técnica de las lecciones',
    desc:'Entrar a Sparks, guardar el trabajo, publicar con el enlace correcto y qué hacer cuando algo falla.',
    obj:'Conoce lo que hace que una lección de Creatividad Digital 1 funcione en la parte técnica: el acceso a Kodland Sparks, guardar el trabajo en una ranura, publicar y enviar el enlace del proyecto publicado, y cómo resolver los problemas más comunes.',
    needs:['sparksPublish'],
    offer:[['🔑','Ayudar a entrar a Sparks con la cuenta de Kodland.'],['💾','Hacer que nadie pierda su dibujo.'],['🔗','Publicar y enviar el enlace correcto.'],['🛠️','Resolver los problemas más comunes.']],
    sections:[
      { id:'focus', e:'🎯', title:'Los 3 puntos que hacen que la lección funcione', blocks:[
        { t:'p', html:'Estos puntos salen de las Teacher Notes de la primera lección. Abre cada uno:' },
        { t:'acc', items:[
          ['🌐','Publicar en Sparks y enviar el enlace correcto, desde la Lección 1','<p>El resultado de la lección es un proyecto <b>publicado en Kodland Sparks</b> y su <b>enlace enviado</b> en la tarjeta de la lección con el botón <b>Enviar</b>.</p><ul><li>Hay dos botones «Publicar»: el del editor abre la página de publicación; el de abajo de esa página publica el proyecto.</li><li>El enlace correcto es el del <b>proyecto publicado</b>, no la dirección del editor.</li><li>Abre algunos enlaces durante la clase para comprobar que funcionan.</li></ul>'],
          ['💾','Guardar en una ranura antes de cambiar de actividad','<p>El editor de Sparks está dentro de varias tarjetas. Si la página se recarga o el estudiante pasa a otra tarjeta sin guardar, el editor aparece vacío.</p><ul><li>Pide guardar en una <b>Ranura (Slot)</b> al terminar cada actividad: ícono de guardar → ranura vacía → <b>Guardar aquí</b>.</li><li>Si el editor está vacío: <b>Slot → elegir el trabajo → Cargar</b>.</li></ul>'],
          ['⏱️','Proteger el tiempo para publicar y cerrar','<p>La publicación y el envío del enlace (00:40–00:50), el recorrido del curso y el cierre <b>no se recortan</b>.</p><ul><li>Si el grupo va tarde, reduce o salta la actividad adicional de mejora.</li><li>Si la mejora empieza después de 00:37, pasen directamente a publicar y entregar.</li><li>Las sombras y los brillos son opcionales: el estudiante puede terminar un cambio pendiente después de la clase.</li></ul>']
        ]}
      ]},
      { id:'access', e:'🔑', title:'Entrar a Kodland Sparks', blocks:[
        { t:'p', html:'Los estudiantes no necesitan instalar nada: el editor de pixel art de Sparks se abre dentro de la tarjeta de la lección, en el navegador.' },
        { t:'steps', items:[
          ['Entrar con Kodland','El estudiante hace clic en <b>Entrar con Kodland</b> y usa el <b>mismo usuario y contraseña</b> de la plataforma de Kodland. No hace falta una cuenta nueva.'],
          ['Dejar de compartir pantalla','Si el estudiante está compartiendo pantalla, debe <b>dejar de compartirla antes de escribir la contraseña</b>.'],
          ['Expandir el editor','El botón <b>Expandir</b> abre el editor a pantalla completa para dibujar con más comodidad.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'¿No puede entrar? Que revise que usa los datos de la plataforma de Kodland, que pruebe <b>otro navegador</b> y que levante la mano para que lo ayudes. Para problemas técnicos importantes, contacta al equipo de soporte.' }
      ]},
      { id:'publish', e:'📤', title:'Publicar en Kodland Sparks', blocks:[
        { t:'p', html:'Estos son los pasos de cada entrega. Aquí aparecen los problemas que llegan a ti: el enlace que no abre o el enlace que lleva al editor.' },
        { t:'steps', items:[
          ['Publicar en el editor','El botón <b>Publicar</b> de la esquina superior derecha del editor abre la página de publicación.'],
          ['Ponerle nombre al proyecto','Un nombre que permita reconocer el trabajo. Un proyecto sin nombre es difícil de encontrar después en el portafolio.'],
          ['Publicar al final de la página','Bajar hasta el final y hacer clic en el segundo botón <b>Publicar</b>. La visibilidad: <b>Public</b> aparece en el portafolio; <b>Only me</b> deja el proyecto privado y nadie más puede abrir el enlace.'],
          ['Copiar el enlace del proyecto publicado','<b>Verlo en Kodland Sparks</b> abre la página del proyecto en una pestaña nueva: el enlace es la dirección de la <b>barra del navegador</b>. Si el estudiante lo perdió: <b>My projects</b> → abrir el proyecto publicado → copiar la dirección.'],
          ['Pegarlo y Enviar','El enlace se pega en el campo de la tarjeta y se envía con <b>Enviar</b>. Publicar en Sparks y enviar el enlace en la plataforma son <b>dos pasos diferentes</b>.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulación', title:'Publicar en Kodland Sparks', text:'Una réplica de Kodland Sparks: publicas un proyecto como una estudiante, conoces las tres opciones de visibilidad y resuelves los dos problemas más comunes. Unos 5 minutos. La verificación del módulo se desbloquea cuando terminas.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Cuando algo sale mal', blocks:[
        { t:'acc', open:false, items:[
          ['🔑','El estudiante no puede entrar a Sparks','Mismo usuario y contraseña de la plataforma de Kodland; si no funciona, otro navegador. Recuerda que deje de compartir pantalla antes de escribir la contraseña.'],
          ['🆘','El editor aparece vacío','El trabajo se guardó en una ranura: <b>Slot → elegir el trabajo → Cargar</b>. Por eso es clave guardar antes de cambiar de tarjeta.'],
          ['🔗','El enlace lleva al editor, no al proyecto','El estudiante copió la dirección del editor. Que abra <b>Verlo en Kodland Sparks</b> (o <b>My projects</b> → el proyecto publicado) y copie la dirección de esa página.'],
          ['🔒','El enlace del estudiante no abre','El proyecto se guardó como <b>Only me</b> (aparece la etiqueta <b>Private project</b>). Pídele: <b>My projects → abrir el proyecto → Edit → Public → Publish</b>. El enlace sigue siendo el mismo.'],
          ['📨','Publicó, pero el enlace no llegó','Publicar en Sparks no es entregar: falta pegar el enlace en la tarjeta y hacer clic en <b>Enviar</b>. Revisa en el Backoffice que los enlaces llegaron.'],
          ['🔍','Los píxeles se ven demasiado grandes','Revisa el tamaño del lienzo con su botón y elige <b>64 × 64 píxeles</b>.'],
          ['🪞','La sombra aparece en los dos lados','El dibujo simétrico está activado: hay que desactivarlo para dibujar solo en un lado.']
        ]}
      ]},
      { id:'req', e:'🖥️', title:'Requisitos del equipo', blocks:[
        { t:'p', html:'Recuérdalos a las familias y tenlos presentes si algo no funciona en la computadora del estudiante:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computadora','Laptop o computadora con <b>teclado y mouse</b>. No tablet ni teléfono.'],
          ['💻','Sistema y navegador','<b>Windows 10/11 (64 bits)</b> o <b>macOS 11.2 o posterior</b>, con <b>Google Chrome</b> instalado.'],
          ['🧠','Procesador y memoria','Procesador de 64 bits (mínimo 2 núcleos a 2 GHz; recomendado 4 núcleos a 2,5 GHz) y 8–16 GB de RAM.'],
          ['🎧','Conexión y equipo','Internet estable desde <b>10 Mbit/s</b>. Se recomiendan micrófono y cámara.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada lección', blocks:[
        { t:'check', title:'✅ Mi checklist técnico', groups:[
          { h:'☑️ Antes de la lección', items:['Leí todas las Teacher Notes de la lección y miré el video de preparación.','Recorrí yo mismo la lección en el editor de Sparks: dibujar, guardar, publicar y copiar el enlace.'] },
          { h:'🎬 Durante la lección', items:['Activé el modo de seguimiento en las tarjetas y mostré una acción a la vez.','Los estudiantes guardaron su trabajo en una ranura antes de cambiar de actividad.','Si el grupo iba tarde, reduje la actividad de mejora y protegí el tiempo de publicación.'] },
          { h:'📤 Al final de la lección', items:['Todos publicaron en Sparks y enviaron el enlace del <b>proyecto publicado</b> con el botón Enviar.','Abrí algunos enlaces para comprobar que funcionan.','Expliqué la misión para la casa y mostré dónde está en la plataforma.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ---------------- */
COURSE.quiz = {
  m1:[
    { q:'¿Para quién es Creatividad Digital 1 y cuánto dura cada lección?',
      o:['Para estudiantes de 8–9 años, con lecciones de 60 minutos en grupo (50 en formato individual).','Para estudiantes de 10–12 años, con lecciones de 90 minutos.','Para estudiantes de 13–17 años, con lecciones de 45 minutos.'],
      a:0, e:'El curso es para estudiantes de 8–9 años: 40 lecciones de 60 minutos en grupo o 50 en formato individual.' },
    { q:'¿Cuál es la historia del curso?',
      o:['Los estudiantes trabajan en una agencia creativa con briefings de clientes.','Los estudiantes viajan por el espacio y el tiempo en la máquina del tiempo de Lumi; la primera parada es el Mundo Píxel.','Los estudiantes son desarrolladores de videojuegos en una empresa.'],
      a:1, e:'Lumi y su máquina del tiempo llevan al grupo por distintos mundos y épocas; el Módulo 1 transcurre en el Mundo Píxel.' },
    { q:'¿Qué crea el estudiante en la Lección 1?',
      o:['Un personaje animado con sonido.','El ícono en pixel art de su propio juego imaginario, que publica en Kodland Sparks.','Un cómic de tres paneles.'],
      a:1, e:'Elige el tema de su juego, dibuja su ícono en el editor de pixel art de Sparks y lo publica.' },
    { ctx:'En la Lección 1, un estudiante no sabe qué dibujar para su ícono.',
      q:'¿Qué haces?',
      o:['Dibujas el ícono por él para no perder tiempo.','Le propones un objeto sencillo o la pista del emoji, y él lo dibuja.','Le pides que solo mire el trabajo de los demás.'],
      a:1, e:'La idea y el dibujo son del estudiante: si tiene dificultades, se le propone un objeto sencillo o dibujar un emoji.' },
    { ctx:'Son las 00:38 y el grupo todavía no empezó la actividad de mejorar el ícono.',
      q:'¿Qué haces?',
      o:['Hacen la mejora completa aunque no alcance el tiempo para publicar.','Pasan directamente a publicar y entregar; la mejora puede quedar para después.','Terminas la clase sin publicar.'],
      a:1, e:'Si la mejora empieza después de 00:37, se pasa a publicar y entregar. La publicación, el recorrido del curso y el cierre se protegen.' }
  ],
  m2:[
    { q:'¿Con qué cuenta entra el estudiante a Kodland Sparks?',
      o:['Con una cuenta nueva que crea el tutor en la clase.','Con <b>Entrar con Kodland</b>, usando el mismo usuario y contraseña de la plataforma de Kodland.','Con el correo de sus padres.'],
      a:1, e:'Se entra con Entrar con Kodland y los datos de la plataforma. Si comparte pantalla, debe dejar de compartirla antes de escribir la contraseña.' },
    { ctx:'Un estudiante vuelve a la tarjeta y el editor de Sparks aparece vacío.',
      q:'¿Qué debe hacer?',
      o:['Empezar el dibujo de nuevo.','Slot → elegir el trabajo guardado → Cargar.','Recargar la página varias veces.'],
      a:1, e:'El trabajo se guarda en una ranura y se recupera con Slot → Cargar. Por eso hay que guardar antes de cambiar de actividad.' },
    { q:'¿Qué enlace envía el estudiante en la tarjeta de la lección?',
      o:['La dirección del editor de Sparks.','El enlace del proyecto publicado, que se abre con Verlo en Kodland Sparks.','Una captura de pantalla del dibujo.'],
      a:1, e:'El enlace correcto es el de la página del proyecto publicado, no el del editor.' },
    { ctx:'Un estudiante publicó su ícono en Sparks, pero en el Backoffice no aparece su entrega.',
      q:'¿Qué faltó?',
      o:['Pegar el enlace en el campo de la tarjeta y hacer clic en Enviar.','Volver a publicar el proyecto.','Nada: publicar en Sparks ya es entregar.'],
      a:0, e:'Publicar en Sparks y enviar el enlace en la plataforma son dos pasos diferentes.' },
    { ctx:'El enlace de un estudiante no abre, y en su portafolio el proyecto aparece como «Private project».',
      q:'¿Qué debe hacer?',
      o:['My projects → abrir el proyecto → Edit → Public → Publish.','Enviar el dibujo por el chat.','Crear un proyecto nuevo.'],
      a:0, e:'El proyecto se guardó como Only me. Con Edit → Public, el mismo enlace se abre para todos.' }
  ]
};

/* ---------------- Final screen ---------------- */
COURSE.done = {
  title: '¡Módulos completados!',
  html: `<p>¡Ya casi terminas! Vuelve a la página de la formación en el LMS, desde donde entraste a esta formación. El test DST está justo debajo de la formación.</p>
    <p>👉 <b>Debes hacer y aprobar el test DST para que la formación se considere completada.</b> Si no haces el DST, la formación quedará incompleta y puede vencer.</p>
    <p>La nota mínima para aprobar es <b>80%</b>.</p>
    <p>¡Mucha suerte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada lección:</b> lee las Teacher Notes en el Backoffice y mira el video de preparación.'],
    ['💾', '<b>Guardar en una ranura</b> antes de cambiar de actividad.'],
    ['🔗', '<b>El enlace correcto:</b> el del proyecto publicado, enviado con el botón Enviar.'],
    ['⏱️', '<b>¿El grupo va tarde?</b> Reduce la mejora y protege la publicación y el cierre.']
  ]
};
