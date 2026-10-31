/* ============================================================
   EM course training · Digital Creativity 1 [2200] · PORTUGUESE (Brazil)
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   The Backoffice link changes by language (see COURSE.code and the 'bo' section).
   ============================================================ */
window.COURSE = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formação de curso EM',
  footer: 'kodland · Novo Modelo Educacional · Formação de curso',
  devLink: '🛠 Developer',
  logoSub: 'Novo Modelo Educacional',
  navHome: '← Início',
  navBackModule: '← Voltar ao módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Começar →',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  progLabel: 'módulos concluídos',
  progAllDone: 'Módulos concluídos 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificação do módulo',
  ctaText: '{n} perguntas curtas. Acerte 70% ou mais para passar.',
  lockSim: '🔒 Conclua a simulação de publicação no Kodland Sparks (acima) para liberar a verificação.',
  startCheck: 'Começar a verificação →',
  retake: '🔁 Refazer a verificação',
  qmeta: '{e} Verificação do Módulo {n} · Pergunta {i} de {total}',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não exatamente.</b> ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu os dois módulos desta formação.',
  seeNext: 'Ver o próximo passo →',
  reviewModule: '📖 Revisar o módulo',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta um último passo: o teste DST na página da formação no LMS.',
  homeDoneBtn: 'Ver o que fazer agora →',
  doneBadge: '✓ Concluído',
  doneBack: 'Voltar aos módulos',
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua o passo anterior para liberar este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir no Kodland Sparks ↗',
  simOpen: '▶ Abrir a simulação aqui',
  simClose: '✕ Fechar a simulação',
  simNewTab: 'Abrir em outra aba ↗',
  simDone: '✅ Simulação concluída',
  simTodo: '○ Simulação pendente',
  checkTag: 'Marque',
  mythTag: 'Mito',
  mythTap: 'Toque para ver a realidade →',
  mythReality: 'Realidade ✓',
  sortWrong: '✗ Não exatamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'dc1';
COURSE.code = '2200';
COURSE.title = 'Criatividade Digital 1';
COURSE.color = '#8B5CF6';

COURSE.home = {
  kicker: '🎓 Formação de curso · [2200]',
  title: 'Criatividade Digital <span class="hl">1</span>',
  lead: 'Para alunos de 8–9 anos: uma viagem pelo espaço e pelo tempo na máquina do tempo da Lumi, em que eles desenham, criam personagens, inventam histórias e terminam com o próprio curta de animação. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para praticar a publicação de projetos e a resolução dos problemas mais comuns.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e baseia-se no que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice é atualizado continuamente.</b> A partir do feedback de alunos e tutores, as aulas passam por melhorias constantes. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'🎨', color:'#8B5CF6', title:'O conteúdo do curso',
    desc:'Os dados gerais do curso, o que o aluno conquista e a primeira aula do Módulo 1.',
    obj:'Prepare-se para dar a primeira aula de Criatividade Digital 1. Nela, os alunos de 8–9 anos chegam ao Mundo Pixel, escolhem o tema do próprio jogo, desenham o ícone dele em pixel art no Kodland Sparks e o publicam.',
    offer:[['🕰️','Conhecer os dados gerais do curso e o programa.'],['🏆','Saber o que o aluno conquista no fim do curso.'],['📖','Saber o que acontece na primeira aula.'],['📘','Revisar a primeira aula no Backoffice.']],
    sections:[
      { id:'ov', e:'🕰️', title:'O curso', blocks:[
        { t:'meta', items:[['🧒','Idade','8–9 anos'],['⏱️','Aula','60 min em grupo · 50 min individual'],['📚','Programa','40 aulas · 10 módulos'],['🌱','Nível','Iniciante']] },
        { t:'p', html:'<b>Desenhamos personagens e criamos nosso próprio desenho animado.</b> Dos primeiros desenhos a histórias que ganham vida: ilustrações e personagens, história em quadrinhos, modelo 3D, animação e edição, e um desenho animado com narração. Começamos com desenhos em pixel e animações simples. Depois experimentamos a ilustração, criamos personagens, modelos 3D e histórias em quadrinhos e aprendemos a editar vídeos. Tudo isso será útil para o próprio desenho animado. No início, o professor mostra passos curtos e, com o tempo, a criança faz cada vez mais sozinha.' },
        { t:'trio', items:[
          ['🎬','Primeiro o resultado','Cada aula começa mostrando aonde se vai chegar: um ícone, um personagem, uma animação. Depois o aluno escolhe a própria ideia e a torna realidade.'],
          ['🙋','A ideia é do aluno','O tema, o personagem e a história são escolhidos pelo aluno. Você dá opções e dicas, mas <b>não desenha por ele</b>.'],
          ['🔍','Errar faz parte do processo','Não se exige um desenho perfeito: compara-se o antes e o depois, e cada tentativa e cada melhoria são valorizadas.']
        ]},
        { t:'callout', kind:'good', e:'⚡', html:'Desde a primeira aula, os alunos trabalham e publicam no <b>Kodland Sparks</b>: é lá que eles desenham e que o portfólio deles começa.' }
      ]},
      { id:'achieve', e:'🏆', title:'O que o aluno conquista', blocks:[
        { t:'p', html:'No fim do curso, o aluno:' },
        { t:'cards', cols:2, items:[
          ['🦸','Desenha os próprios heróis','Cria ilustrações e personagens, escolhe cores, trabalha com camadas e experimenta a modelagem 3D.'],
          ['🎬','Dá vida às histórias','Inventa o enredo, anima desenhos e junta cenas e som em um desenho animado curto.'],
          ['🗂️','Monta um portfólio','Pelo menos oito trabalhos dos módulos e o desenho animado final. A criança mostra os projetos e conta sobre as próprias decisões.'],
          ['🤖','IA em projetos criativos','Com a ajuda da IA, a criança cria textos e enredos, gera imagens e cria cenas inteiras a partir dos próprios desenhos. O que manter, o que mudar e como usar o resultado, ela decide sozinha.'],
          ['🏠','Um portfólio que cresce','A maior parte do trabalho a criança faz na aula. Em casa, ficam pequenos ajustes e tarefas criativas de até 20–30 minutos. Depois da primeira aula e de cada módulo, os pais recebem uma mensagem sobre o que foi feito.'],
          ['🧠','Habilidades para a vida toda','Criatividade, trabalho em equipe, comunicação e pensamento crítico: compara opções, confere o resultado e avalia sozinha as sugestões da IA.']
        ]}
      ]},
      { id:'les', e:'📖', title:'A primeira aula', blocks:[
        { t:'p', html:'O Módulo 1 se passa no <b>Mundo Pixel</b>, um videogame de quatro níveis; cada nível é uma aula. Abra a primeira aula e leia o que você precisa saber, o resultado-chave, o seu papel e os pontos de atenção:' },
        { t:'lessons', key:'m1', items:[
          { tab:'M1L1', e:'👾', h:'Aula 1 — Viagem ao Mundo Pixel', p:'A primeira aula do curso (7 cartões e uma missão para casa). Os alunos conhecem a Lumi e o grupo, abastecem a máquina do tempo com os seus interesses, chegam ao Mundo Pixel, escolhem o tema do próprio jogo, desenham o ícone dele em pixel art no Kodland Sparks e o publicam.',
            acc:[['📚','O que você precisa saber','<ul><li>O roteiro: checagem do equipamento e emoji de humor → Lumi e a apresentação do grupo → o Mundo Pixel e a ideia do ícone → desenhar o ícone → melhorar o ícone (atividade extra) → publicar e enviar o link → tour pelo curso → encerramento e missão para casa.</li><li>O editor de pixel art do <b>Kodland Sparks</b> abre dentro do cartão (botão <b>Expand</b> para tela cheia). O aluno entra com <b>Sign in with Kodland</b>.</li><li>Ferramentas: lápis e borracha, preenchimento e desfazer, linhas e formas, desenho simétrico e paleta de cores. Tela recomendada: <b>64 × 64 pixels</b>.</li><li>Se o aluno não souber o que desenhar, a dica propõe um <b>emoji</b>.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O aluno conhece os combinados da turma.</li><li>Escolheu sozinho o tema do jogo e sabe explicar como o ícone transmite esse tema ou o clima do jogo.</li><li>Criou um desenho em pixels no Kodland Sparks e sabe citar uma possível melhoria.</li><li>🏁 Salvou o projeto, o <b>publicou no Kodland Sparks</b> e <b>enviou o link</b> no cartão da aula.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Motive o grupo com a viagem e relacione os projetos com os interesses de cada aluno.</li><li>Leia as instruções em voz alta, mostre <b>uma ação por vez</b> e dê tempo para repetir.</li><li>Ajude a desenvolver as ideias <b>sem desenhar por eles</b>. Na melhoria, primeiro o aluno mostra o desenho e propõe uma mudança; depois você abre a dica.</li><li>Compare o antes e o depois; não exija um desenho perfeito.</li></ul>'],
                 ['📌','Pontos de atenção','<ul><li>Mantenha curta a apresentação do grupo.</li><li>Ative o <b>Follow Mode</b> nos cartões: os alunos clicam, escolhem e arrastam sozinhos. Mostre o exemplo de animação com som.</li><li>Sombras e brilhos são opcionais.</li><li><b>Se o tempo não der:</b> reduza ou pule a atividade de melhoria. Se ela começar depois de 00:37, passem direto para publicar e entregar. Reserve tempo para o tour pelo curso e o encerramento.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Peça para salvar o trabalho em um <b>Slot</b> antes de passar para a próxima atividade. Se o editor aparecer vazio: <b>Slot → escolher o trabalho → Load</b>.</li><li>Existem <b>dois botões "Publish"</b>: um no editor e outro no fim da página de publicação.</li><li>O link enviado é o do <b>projeto publicado</b> (abre com <b>Open on Sparks</b>), não o endereço do editor.</li><li>Missão para casa: escrever três frases sobre o jogo ou desenho animado favorito e o projeto que sonha criar, e entrar no chat do grupo.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note da aula tem o plano completo: descrição, missão da história, objetivo, resultado-chave, a duração de cada etapa e um vídeo de preparação. Cada cartão também tem a sua própria nota. <b>Leia todas as Teacher Notes e assista ao vídeo antes da aula.</b>' }
      ]},
      { id:'bo', e:'📘', title:'Revise a primeira aula no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e revise a primeira aula no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2200', e:'📘', title:'Abrir o curso no Backoffice', small:'[2200] Criatividade Digital 1 — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice é atualizado continuamente. A partir do feedback de alunos e tutores, as aulas passam por melhorias constantes. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'Entrar no Kodland Sparks, salvar o trabalho, publicar com o link correto e o que fazer quando algo dá errado.',
    obj:'Saiba o que faz uma aula de Criatividade Digital 1 funcionar na parte técnica: o acesso ao Kodland Sparks, salvar o trabalho em um slot, publicar e enviar o link do projeto publicado, e como resolver os problemas mais comuns.',
    needs:['sparksPublish'],
    offer:[['🔑','Ajudar a entrar no Kodland Sparks com a conta da Kodland.'],['💾','Garantir que ninguém perca o desenho.'],['🔗','Publicar e enviar o link correto.'],['🛠️','Resolver os problemas mais comuns.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 3 pontos que fazem a aula funcionar', blocks:[
        { t:'p', html:'Estes pontos vêm das Teacher Notes da primeira aula. Abra cada um:' },
        { t:'acc', items:[
          ['🌐','Publicar no Kodland Sparks e enviar o link correto, desde a L1','<p>O resultado da aula é um projeto <b>publicado no Kodland Sparks</b> e o <b>link enviado</b> no cartão da aula com o <b>botão de envio</b>.</p><ul><li>Existem dois botões "Publish": o do editor abre a página de publicação; o do fim dessa página publica o projeto.</li><li>O link correto é o do <b>projeto publicado</b>, não o endereço do editor.</li><li>Abra alguns links durante a aula para conferir se estão funcionando.</li></ul>'],
          ['💾','Salvar em um slot antes de mudar de atividade','<p>O editor do Kodland Sparks está dentro de vários cartões. Se a página recarregar ou o aluno passar para outro cartão sem salvar, o editor aparece vazio.</p><ul><li>Peça para salvar em um <b>Slot</b> ao terminar cada atividade: ícone de salvar → slot vazio → <b>Save here</b>.</li><li>Se o editor estiver vazio: <b>Slot → escolher o trabalho → Load</b>.</li></ul>'],
          ['⏱️','Proteger o tempo para publicar e encerrar','<p>A publicação e o envio do link (00:40–00:50), o tour pelo curso e o encerramento <b>não são cortados</b>.</p><ul><li>Se o grupo atrasar, reduza ou pule a atividade extra de melhoria.</li><li>Se a melhoria começar depois de 00:37, passem direto para publicar e entregar.</li><li>Sombras e brilhos são opcionais: o aluno pode terminar uma mudança pendente depois da aula.</li></ul>']
        ]}
      ]},
      { id:'access', e:'🔑', title:'Entrar no Kodland Sparks', blocks:[
        { t:'p', html:'Os alunos não precisam instalar nada: o editor de pixel art do Kodland Sparks abre dentro do cartão da aula, no navegador.' },
        { t:'steps', items:[
          ['Sign in with Kodland','O aluno clica em <b>Sign in with Kodland</b> e usa o <b>mesmo usuário e senha</b> da plataforma da Kodland. Não é preciso criar uma conta nova.'],
          ['Parar de compartilhar a tela','Se o aluno estiver compartilhando a tela, ele deve <b>parar de compartilhar antes de digitar a senha</b>.'],
          ['Expandir o editor','O botão <b>Expand</b> abre o editor em tela cheia para desenhar com mais conforto.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Não consegue entrar? Peça para conferir se está usando os dados da plataforma da Kodland, tentar <b>outro navegador</b> e levantar a mão para você ajudar. Para problemas técnicos graves, fale com o time de suporte.' }
      ]},
      { id:'publish', e:'📤', title:'Publicar no Kodland Sparks', blocks:[
        { t:'p', html:'Estes são os passos de cada entrega. É aqui que aparecem os problemas que chegam até você: o link que não abre ou o link que leva ao editor.' },
        { t:'steps', items:[
          ['Publicar no editor','O botão <b>Publish</b> no canto superior direito do editor abre a página de publicação.'],
          ['Dar um nome ao projeto','Um nome que permita reconhecer o trabalho. Um projeto sem nome é difícil de encontrar depois, no portfólio.'],
          ['Publicar no fim da página','Rolar até o fim e clicar no segundo botão <b>Publish</b>. A visibilidade: <b>Public</b> aparece no portfólio; <b>Only me</b> deixa o projeto privado e ninguém mais consegue abrir o link.'],
          ['Copiar o link do projeto publicado','<b>Open on Sparks</b> abre a página do projeto em uma nova aba: o link é o endereço da <b>barra do navegador</b>. Se o aluno perdeu o link: <b>My projects</b> → abrir o projeto publicado → copiar o endereço.'],
          ['Colar e Enviar','O link é colado no campo do cartão e enviado com o <b>botão de envio</b>. Publicar no Kodland Sparks e enviar o link na plataforma são <b>dois passos diferentes</b>.']
        ]},
        { t:'sim', flag:'sparksPublish', src:'sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'trouble', e:'🛠️', title:'Quando algo dá errado', blocks:[
        { t:'acc', open:false, items:[
          ['🔑','O aluno não consegue entrar no Kodland Sparks','Mesmo usuário e senha da plataforma da Kodland; se não funcionar, outro navegador. Lembre-o de parar de compartilhar a tela antes de digitar a senha.'],
          ['🆘','O editor aparece vazio','O trabalho foi salvo em um slot: <b>Slot → escolher o trabalho → Load</b>. Por isso é essencial salvar antes de mudar de cartão.'],
          ['🔗','O link leva ao editor, não ao projeto','O aluno copiou o endereço do editor. Peça para abrir <b>Open on Sparks</b> (ou <b>My projects</b> → o projeto publicado) e copiar o endereço dessa página.'],
          ['🔒','O link do aluno não abre','O projeto foi salvo como <b>Only me</b> (aparece a etiqueta <b>Private project</b>). Peça ao aluno: <b>My projects → abrir o projeto → Edit → Public → Publish</b>. O link continua o mesmo.'],
          ['📨','Publicou, mas o link não chegou','Publicar no Kodland Sparks não é entregar: falta colar o link no cartão e clicar no <b>botão de envio</b>. Confira no Backoffice se os links chegaram.'],
          ['🔍','Os pixels parecem grandes demais','Confira o tamanho da tela de desenho no botão correspondente e escolha <b>64 × 64 pixels</b>.'],
          ['🪞','A sombra aparece dos dois lados','O desenho simétrico está ativado: é preciso desativá-lo para desenhar só de um lado.']
        ]}
      ]},
      { id:'req', e:'🖥️', title:'Requisitos do equipamento', blocks:[
        { t:'p', html:'Lembre as famílias e tenha-os em mente se algo não funcionar no computador do aluno:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computador','Computador ou notebook. As aulas são feitas no computador: tablet e celular não servem.'],
          ['💻','Sistema e navegador','<b>Windows 10/11 (64 bits)</b> ou <b>macOS 11.2 ou superior</b>, com o navegador <b>Google Chrome</b>.'],
          ['🧠','Processador e memória','Processador de 64 bits: a partir de 2 núcleos e 2 GHz; recomendado: 4 núcleos e 2,5 GHz. Memória RAM: 8–16 GB.'],
          ['🎧','Conexão e equipamento','Internet estável a partir de <b>10 Mbit/s</b>. <b>Mouse, teclado, microfone e câmera.</b>'],
          ['📧','Conta do Google','Conta do Google (Gmail) do aluno ou do responsável.'],
          ['🖱️','Para começar','Saber abrir links, usar o mouse e alternar entre abas.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e assisti ao vídeo de preparação.','Fiz eu mesmo o caminho da aula no editor do Kodland Sparks: desenhar, salvar, publicar e copiar o link.'] },
          { h:'🎬 Durante a aula', items:['Ativei o Follow Mode nos cartões e mostrei uma ação por vez.','Os alunos salvaram o trabalho em um slot antes de mudar de atividade.','Se o grupo atrasou, reduzi a atividade de melhoria e protegi o tempo de publicação.'] },
          { h:'📤 No fim da aula', items:['Todos publicaram no Kodland Sparks e enviaram o link do <b>projeto publicado</b> com o botão de envio.','Abri alguns links para conferir se estão funcionando.','Expliquei a missão para casa e mostrei onde ela fica na plataforma.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ---------------- */
COURSE.quiz = {
  m1:[
    { q:'Para quem é Criatividade Digital 1 e quanto dura cada aula?',
      o:['Para alunos de 8–9 anos, com aulas de 60 minutos em grupo (50 no formato individual).','Para alunos de 10–12 anos, com aulas de 90 minutos.','Para alunos de 13–17 anos, com aulas de 45 minutos.'],
      a:0, e:'O curso é para alunos de 8–9 anos: 40 aulas de 60 minutos em grupo ou 50 no formato individual.' },
    { q:'Qual é a história do curso?',
      o:['Os alunos trabalham em uma agência criativa com briefings de clientes.','Os alunos viajam pelo espaço e pelo tempo na máquina do tempo da Lumi; a primeira parada é o Mundo Pixel.','Os alunos são desenvolvedores de jogos em uma empresa.'],
      a:1, e:'A Lumi e a máquina do tempo levam o grupo por diferentes mundos e épocas; o Módulo 1 se passa no Mundo Pixel.' },
    { q:'O que o aluno cria na Aula 1?',
      o:['Um personagem animado com som.','O ícone em pixel art do próprio jogo imaginário, que ele publica no Kodland Sparks.','Uma história em quadrinhos de três quadros.'],
      a:1, e:'Ele escolhe o tema do jogo, desenha o ícone no editor de pixel art do Kodland Sparks e o publica.' },
    { ctx:'Na Aula 1, um aluno não sabe o que desenhar no ícone.',
      q:'O que você faz?',
      o:['Desenha o ícone por ele para não perder tempo.','Propõe um objeto simples ou a dica do emoji, e ele desenha.','Pede que ele só observe o trabalho dos colegas.'],
      a:1, e:'A ideia e o desenho são do aluno: se ele tiver dificuldade, propõe-se um objeto simples ou desenhar um emoji.' },
    { ctx:'São 00:38 e o grupo ainda não começou a atividade de melhorar o ícone.',
      q:'O que você faz?',
      o:['Fazem a melhoria completa, mesmo que não sobre tempo para publicar.','Passam direto para publicar e entregar; a melhoria pode ficar para depois.','Encerra a aula sem publicar.'],
      a:1, e:'Se a melhoria começar depois de 00:37, passa-se para publicar e entregar. A publicação, o tour pelo curso e o encerramento são protegidos.' }
  ],
  m2:[
    { q:'Com qual conta o aluno entra no Kodland Sparks?',
      o:['Com uma conta nova criada pelo tutor na aula.','Com <b>Sign in with Kodland</b>, usando o mesmo usuário e senha da plataforma da Kodland.','Com o e-mail dos pais.'],
      a:1, e:'Entra-se com Sign in with Kodland e os dados da plataforma. Se estiver compartilhando a tela, o aluno deve parar antes de digitar a senha.' },
    { ctx:'Um aluno volta ao cartão e o editor do Kodland Sparks aparece vazio.',
      q:'O que ele deve fazer?',
      o:['Começar o desenho de novo.','Slot → escolher o trabalho salvo → Load.','Recarregar a página várias vezes.'],
      a:1, e:'O trabalho é salvo em um slot e recuperado com Slot → Load. Por isso é preciso salvar antes de mudar de atividade.' },
    { q:'Qual link o aluno envia no cartão da aula?',
      o:['O endereço do editor do Kodland Sparks.','O link do projeto publicado, que abre com Open on Sparks.','Uma captura de tela do desenho.'],
      a:1, e:'O link correto é o da página do projeto publicado, não o do editor.' },
    { ctx:'Um aluno publicou o ícone no Kodland Sparks, mas a entrega dele não aparece no Backoffice.',
      q:'O que faltou?',
      o:['Colar o link no campo do cartão e clicar no botão de envio.','Publicar o projeto de novo.','Nada: publicar no Kodland Sparks já é entregar.'],
      a:0, e:'Publicar no Kodland Sparks e enviar o link na plataforma são dois passos diferentes.' },
    { ctx:'O link de um aluno não abre, e no portfólio dele o projeto aparece como “Private project”.',
      q:'O que ele deve fazer?',
      o:['My projects → abrir o projeto → Edit → Public → Publish.','Mandar o desenho pelo chat.','Criar um projeto novo.'],
      a:0, e:'O projeto foi salvo como Only me. Com Edit → Public, o mesmo link passa a abrir para todos.' }
  ]
};

/* ---------------- Final screen ---------------- */
COURSE.done = {
  title: 'Último passo: volte ao LMS e faça o DST',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia as Teacher Notes no Backoffice e assista ao vídeo de preparação.'],
    ['💾', '<b>Salvar em um slot</b> antes de mudar de atividade.'],
    ['🔗', '<b>O link correto:</b> o do projeto publicado, enviado com o botão de envio.'],
    ['⏱️', '<b>Grupo atrasado?</b> Reduza a melhoria e proteja a publicação e o encerramento.']
  ]
};
