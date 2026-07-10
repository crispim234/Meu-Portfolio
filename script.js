  /* THEME */
  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('themeIcon').textContent = isDark ? '🌙' : '☀️';
    document.getElementById('themeLabel').textContent = isDark ? 'Escuro' : 'Claro';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  }
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme','light');
    document.getElementById('themeIcon').textContent = '🌙';
    document.getElementById('themeLabel').textContent = 'Escuro';
  }

  /* CURSOR */
  const cur = document.getElementById('cursor'), ring = document.getElementById('ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=e.clientY; cur.style.left=mx+'px'; cur.style.top=my+'px'; });
  (function anim(){ rx+=(mx-rx)*.12; ry+=(my-ry)*.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(anim); })();
  document.querySelectorAll('a,button,.contact-card,.proj-item,.photo-inner,.player-card,.band-tab').forEach(el => {
    el.addEventListener('mouseenter',()=>{ ring.style.width='48px'; ring.style.height='48px'; ring.style.borderColor='rgba(59,130,246,0.6)'; });
    el.addEventListener('mouseleave',()=>{ ring.style.width='32px'; ring.style.height='32px'; ring.style.borderColor='rgba(59,130,246,0.4)'; });
  });

  /* SPOTIFY PLAYER — lazy load on click to work with file:// */
  function loadPlayer(coverId, frameId, src) {
    const cover = document.getElementById(coverId);
    const frame = document.getElementById(frameId);
    cover.classList.add('hidden');
    frame.style.display = 'block';
    frame.src = src;
  }

  /* BAND SWITCHER */
  function switchBand(band) {
    document.querySelectorAll('.band-tab').forEach((t,i) => t.classList.toggle('active', (i===0&&band==='aic')||(i===1&&band==='rh')));
    document.getElementById('panel-aic').classList.toggle('active', band==='aic');
    document.getElementById('panel-rh').classList.toggle('active', band==='rh');
  }

  /* ACTIVE NAV */
  document.querySelectorAll('section').forEach(s =>
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.nav-center a').forEach(l => l.classList.remove('active'));
          const m = document.querySelector(`.nav-center a[href="#${e.target.id}"]`);
          if (m) m.classList.add('active');
        }
      });
    }, { threshold: 0.3 }).observe(s)
  );

  /* FADE UP + BARS */
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        e.target.querySelectorAll('.learning-fill').forEach(b => b.style.width = b.dataset.w + '%');
      }
    });
  }, { threshold: 0.1 }).observe && document.querySelectorAll('.fade-up').forEach(el =>
    new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          e.target.querySelectorAll('.learning-fill').forEach(b => b.style.width = b.dataset.w + '%');
        }
      });
    }, { threshold: 0.1 }).observe(el)
  );

  /* PHOTO */
  document.getElementById('photoInput').addEventListener('change', e => {
    const f = e.target.files[0]; if (!f) return;
    const r = new FileReader();
    r.onload = ev => {
      const img = document.getElementById('photoImg');
      img.src = ev.target.result; img.classList.add('loaded');
      document.getElementById('photoPlaceholder').classList.add('hidden');
    };
    r.readAsDataURL(f);
  });

  const photoEditBtn = document.getElementById('photoEditBtn');
  if (photoEditBtn) {
    photoEditBtn.addEventListener('click', e => {
      e.stopPropagation();
      document.getElementById('photoInput').click();
    });
  }

  /* CARD FLIP — vira e mostra os atributos */
  const cardFlip = document.getElementById('cardFlip');
  const photoFrame = document.getElementById('photoFrame');
  if (cardFlip && photoFrame) {
    photoFrame.addEventListener('click', () => {
      cardFlip.classList.toggle('is-flipped');
    });
  }

  /* PHOTO CARD TILT */
  const photoInner = document.getElementById('photoInner');
  if (photoInner) {
    photoInner.addEventListener('mousemove', e => {
      const rect = photoInner.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rotateY = (px - 0.5) * 18;
      const rotateX = (0.5 - py) * 18;
      photoInner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      photoInner.style.setProperty('--mx', `${px * 100}%`);
      photoInner.style.setProperty('--my', `${py * 100}%`);
    });
    photoInner.addEventListener('mouseleave', () => {
      photoInner.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
  }

  /* ════════════════════════════════
     GAME TAB SWITCHER
  ════════════════════════════════ */
  function switchGame(g) {
    document.querySelectorAll('.game-tab').forEach((t,i) => {
      const names = ['snake','memory','quiz'];
      t.classList.toggle('active', names[i] === g);
    });
    document.querySelectorAll('.game-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('gpanel-' + g).classList.add('active');
    if (g === 'memory' && !memInited) initMemory();
    if (g === 'quiz'   && !quizInited) initQuiz();
  }

  /* ════════════════════════════════
     SNAKE
  ════════════════════════════════ */
  const cv = document.getElementById('snakeCanvas');
  const ctx = cv.getContext('2d');
  const COLS = 17, ROWS = 17, CELL = Math.floor(340 / 17);
  let snake = [{x:8,y:8},{x:7,y:8},{x:6,y:8}];
  let dir = {x:1,y:0}, nextDir = {x:1,y:0};
  let food = {x:12,y:8};
  let snakeRunning = false, snakeLoop, score = 0, best = 0, level = 1;

  function startSnake() {
    document.getElementById('snakeOverlay').classList.add('hidden');
    snake = [{x:8,y:8},{x:7,y:8},{x:6,y:8}];
    dir = {x:1,y:0}; nextDir = {x:1,y:0};
    score = 0; level = 1;
    document.getElementById('snakeScore').textContent = 0;
    document.getElementById('snakeLevel').textContent = 1;
    placeFood();
    snakeRunning = true;
    clearInterval(snakeLoop);
    snakeLoop = setInterval(tickSnake, 160);
  }

  function placeFood() {
    do { food = {x: Math.floor(Math.random()*COLS), y: Math.floor(Math.random()*ROWS)}; }
    while (snake.some(s => s.x===food.x && s.y===food.y));
  }

  function tickSnake() {
    dir = {...nextDir};
    const head = {x: snake[0].x + dir.x, y: snake[0].y + dir.y};
    if (head.x<0||head.x>=COLS||head.y<0||head.y>=ROWS||snake.some(s=>s.x===head.x&&s.y===head.y)) {
      clearInterval(snakeLoop); snakeRunning = false;
      showSnakeOver(); return;
    }
    snake.unshift(head);
    if (head.x===food.x && head.y===food.y) {
      score += 10; placeFood();
      level = Math.floor(score/50)+1;
      document.getElementById('snakeScore').textContent = score;
      document.getElementById('snakeLevel').textContent = level;
      if (score > best) { best = score; document.getElementById('snakeBest').textContent = best; }
      clearInterval(snakeLoop);
      snakeLoop = setInterval(tickSnake, Math.max(60, 160 - (level-1)*18));
    } else { snake.pop(); }
    drawSnake();
  }

  function snakeDir(dx, dy) {
    if (!snakeRunning) { startSnake(); return; }
    if (dx===1&&dir.x===-1||dx===-1&&dir.x===1) return;
    if (dy===1&&dir.y===-1||dy===-1&&dir.y===1) return;
    nextDir = {x:dx, y:dy};
  }

  function showSnakeOver() {
    const ov = document.getElementById('snakeOverlay');
    ov.querySelector('.snake-overlay-title').textContent = 'Game Over';
    ov.querySelector('.snake-overlay-sub').textContent = `Pontuação: ${score}`;
    ov.querySelector('.snake-btn').textContent = 'Jogar de novo';
    ov.classList.remove('hidden');
  }

  function drawSnake() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    ctx.fillStyle = isDark ? '#0c1020' : '#ffffff';
    ctx.fillRect(0,0,cv.width,cv.height);

    // grid
    ctx.strokeStyle = isDark ? 'rgba(59,130,246,0.06)' : 'rgba(37,99,235,0.06)';
    ctx.lineWidth = 0.5;
    for (let x=0;x<=COLS;x++){ctx.beginPath();ctx.moveTo(x*CELL,0);ctx.lineTo(x*CELL,ROWS*CELL);ctx.stroke();}
    for (let y=0;y<=ROWS;y++){ctx.beginPath();ctx.moveTo(0,y*CELL);ctx.lineTo(COLS*CELL,y*CELL);ctx.stroke();}

    // food glow
    ctx.shadowColor = '#3b82f6'; ctx.shadowBlur = 12;
    ctx.fillStyle = '#60a5fa';
    ctx.beginPath();
    ctx.arc(food.x*CELL+CELL/2, food.y*CELL+CELL/2, CELL/2-3, 0, Math.PI*2);
    ctx.fill();
    ctx.shadowBlur = 0;

    // snake
    snake.forEach((s,i) => {
      const alpha = i === 0 ? 1 : Math.max(0.3, 1 - i*0.04);
      ctx.fillStyle = i===0 ? '#3b82f6' : `rgba(59,130,246,${alpha})`;
      ctx.shadowColor = i===0 ? '#3b82f6' : 'transparent';
      ctx.shadowBlur = i===0 ? 8 : 0;
      const pad = i===0 ? 1 : 2;
      ctx.beginPath();
      ctx.roundRect(s.x*CELL+pad, s.y*CELL+pad, CELL-pad*2, CELL-pad*2, i===0?4:3);
      ctx.fill();
    });
    ctx.shadowBlur = 0;
  }

  document.addEventListener('keydown', e => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const map = {ArrowUp:[0,-1],ArrowDown:[0,1],ArrowLeft:[-1,0],ArrowRight:[1,0]};
    if (map[e.key] && snakeRunning) { e.preventDefault(); const [dx,dy]=map[e.key]; snakeDir(dx,dy); }
  });
  drawSnake();

  /* ════════════════════════════════
     MEMORY GAME
  ════════════════════════════════ */
  const memCards = [
    {icon:'⚛️',label:'React'},    {icon:'🟦',label:'TypeScript'},
    {icon:'⚡',label:'Vite'},     {icon:'🎨',label:'CSS3'},
    {icon:'📦',label:'Node.js'},  {icon:'🐙',label:'GitHub'},
    {icon:'🐘',label:'PHP'},      {icon:'🐍',label:'Python'},
  ];
  let memFlipped=[], memMatched=0, memTries=0, memLocked=false, memInited=false;

  function initMemory() {
    memInited = true; memFlipped=[]; memMatched=0; memTries=0; memLocked=false;
    document.getElementById('memPairs').textContent = 0;
    document.getElementById('memTries').textContent = 0;
    document.getElementById('memWin').classList.remove('show');
    const pairs = [...memCards,...memCards].map((c,i)=>({...c,id:i})).sort(()=>Math.random()-.5);
    const grid = document.getElementById('memGrid');
    grid.innerHTML = '';
    pairs.forEach(card => {
      const el = document.createElement('div');
      el.className = 'mem-card';
      el.dataset.label = card.label;
      el.innerHTML = `<div class="mem-card-inner"><div class="mem-card-front">?</div><div class="mem-card-back"><div class="mem-icon">${card.icon}</div><div class="mem-label">${card.label}</div></div></div>`;
      el.addEventListener('click', () => flipMemCard(el));
      grid.appendChild(el);
    });
  }

  function flipMemCard(el) {
    if (memLocked || el.classList.contains('flipped') || el.classList.contains('matched')) return;
    el.classList.add('flipped');
    memFlipped.push(el);
    if (memFlipped.length === 2) {
      memLocked = true; memTries++;
      document.getElementById('memTries').textContent = memTries;
      const [a,b] = memFlipped;
      if (a.dataset.label === b.dataset.label) {
        a.classList.add('matched'); b.classList.add('matched');
        memMatched++; memFlipped=[]; memLocked=false;
        document.getElementById('memPairs').textContent = memMatched;
        if (memMatched === 8) {
          document.getElementById('memWin').classList.add('show');
          document.getElementById('memWinMsg').textContent = `Parabéns! ${memTries} tentativas.`;
        }
      } else {
        setTimeout(()=>{ a.classList.remove('flipped'); b.classList.remove('flipped'); memFlipped=[]; memLocked=false; }, 900);
      }
    }
  }

  /* ════════════════════════════════
     QUIZ
  ════════════════════════════════ */
  const quizData = [
    { q:'O que significa "CSS"?', opts:['Computer Style Sheet','Cascading Style Sheets','Creative Style Syntax','Colorful Site Styling'], a:1, tip:'CSS = Cascading Style Sheets — criado em 1996 por Håkon Wium Lie.' },
    { q:'Qual hook do React é usado para gerenciar estado local?', opts:['useEffect','useRef','useState','useContext'], a:2, tip:'useState retorna um par [valor, setter] para atualizar o estado do componente.' },
    { q:'No Git, qual comando cria um novo branch?', opts:['git branch new-branch','git checkout new-branch','git merge new-branch','git push new-branch'], a:0, tip:'git branch <nome> cria o branch. git checkout -b <nome> cria e já muda para ele.' },
    { q:'O que TypeScript adiciona ao JavaScript?', opts:['Compilação nativa','Tipagem estática','Garbage collection','Ponteiros de memória'], a:1, tip:'TypeScript é um superset do JS com tipos estáticos que são removidos em tempo de compilação.' },
    { q:'Qual o método HTTP usado para criar um recurso?', opts:['GET','PUT','POST','DELETE'], a:2, tip:'POST cria. GET lê. PUT/PATCH atualiza. DELETE remove. Isso é REST básico.' },
    { q:'O que faz o comando "npm install"?', opts:['Inicia o servidor','Instala dependências do package.json','Compila o projeto','Remove o node_modules'], a:1, tip:'npm install lê o package.json e baixa todos os pacotes listados em dependencies.' },
    { q:'Qual propriedade CSS cria um layout de grid?', opts:['display: flex','display: block','display: grid','display: inline'], a:2, tip:'display: grid transforma o elemento em container de grid, com linhas e colunas.' },
    { q:'No React, o que é JSX?', opts:['Um banco de dados','Uma extensão de sintaxe do JS parecida com HTML','Uma biblioteca CSS','Um gerenciador de pacotes'], a:1, tip:'JSX é "açúcar sintático" que o Babel transforma em chamadas React.createElement().' },
  ];
  let quizIdx=0, quizScore=0, quizAnswered=false, quizInited=false;

  function initQuiz() {
    quizInited=true; quizIdx=0; quizScore=0; quizAnswered=false;
    document.getElementById('quizResult').classList.remove('show');
    document.getElementById('quizGame').style.display='block';
    renderQuiz();
  }

  function renderQuiz() {
    const q = quizData[quizIdx];
    quizAnswered = false;
    document.getElementById('quizNum').textContent = `Pergunta ${quizIdx+1} / ${quizData.length}`;
    document.getElementById('quizQ').textContent = q.q;
    document.getElementById('quizFeedback').textContent = '';
    document.getElementById('quizNext').classList.remove('show');
    document.getElementById('quizFill').style.width = (quizIdx/quizData.length*100)+'%';
    const opts = document.getElementById('quizOpts');
    opts.innerHTML = '';
    q.opts.forEach((o,i) => {
      const btn = document.createElement('button');
      btn.className='quiz-opt'; btn.textContent=o;
      btn.addEventListener('click',()=>answerQuiz(i,btn));
      opts.appendChild(btn);
    });
  }

  function answerQuiz(i, btn) {
    if (quizAnswered) return;
    quizAnswered = true;
    const q = quizData[quizIdx];
    document.querySelectorAll('.quiz-opt').forEach((b,j)=>{ b.disabled=true; if(j===q.a)b.classList.add('correct'); });
    if (i===q.a) { quizScore++; document.getElementById('quizFeedback').textContent='✓ Correto! '+q.tip; }
    else { btn.classList.add('wrong'); document.getElementById('quizFeedback').textContent='✗ Errou. '+q.tip; }
    document.getElementById('quizNext').classList.add('show');
  }

  function nextQuiz() {
    quizIdx++;
    if (quizIdx >= quizData.length) {
      document.getElementById('quizFill').style.width='100%';
      document.getElementById('quizGame').style.display='none';
      const res = document.getElementById('quizResult');
      res.classList.add('show');
      document.getElementById('quizScoreVal').textContent = `${quizScore}/${quizData.length}`;
      const msgs = ['Continue estudando! 💪','Bom começo! 📖','Indo bem! 🚀','Muito bem! ⚡','Excelente! Manda o currículo! 🔥'];
      document.getElementById('quizResultMsg').textContent = msgs[Math.min(Math.floor(quizScore/2), msgs.length-1)];
    } else { renderQuiz(); }
  }

  /* ════════════════════════════════
     PRELOADER — boot de terminal
  ════════════════════════════════ */
  (function(){
    const lines = [
      '&gt; inicializando alexandre.dev',
      '&gt; carregando módulos... <span class="ok">ok</span>',
      '&gt; tema: azul/preto <span class="ok">✓</span>',
      '&gt; bem-vindo(a)! <span class="ok">✓</span>'
    ];
    const el = document.getElementById('bootText');
    let i = 0;
    const iv = setInterval(() => {
      if (i < lines.length) { el.innerHTML += lines[i] + '<br>'; i++; }
      else { clearInterval(iv); setTimeout(() => document.getElementById('preloader').classList.add('done'), 350); }
    }, 300);
  })();

  /* ════════════════════════════════
     TYPED — frases rotativas no hero
  ════════════════════════════════ */
  (function(){
    const phrases = ['React Developer', 'TypeScript Enthusiast', 'Estudante de ADS', 'UI apaixonado por detalhes', 'Movido a café ☕'];
    let pi = 0, ci = 0, del = false;
    (function type(){
      const el = document.getElementById('typedText');
      if (!el) return;
      const p = phrases[pi];
      el.textContent = p.slice(0, ci);
      if (!del) { ci++; if (ci > p.length + 8) del = true; }
      else { ci--; if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; } }
      setTimeout(type, del ? 35 : 85);
    })();
  })();

  /* ════════════════════════════════
     SCROLL PROGRESS + BACK TO TOP
  ════════════════════════════════ */
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    document.getElementById('scrollProgress').style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + '%';
    document.getElementById('backTop').classList.toggle('show', h.scrollTop > 600);
  });

  /* ════════════════════════════════
     PHOTO TILT 3D
  ════════════════════════════════ */
  (function(){
    const pf = document.querySelector('.photo-frame');
    if (!pf) return;
    pf.addEventListener('mousemove', e => {
      const r = pf.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      pf.style.transform = `perspective(700px) rotateY(${x*10}deg) rotateX(${-y*10}deg)`;
    });
    pf.addEventListener('mouseleave', () => pf.style.transform = '');
  })();

  /* ════════════════════════════════
     RELÓGIO — Teresina, PI
  ════════════════════════════════ */
  setInterval(() => {
    const el = document.getElementById('footClock');
    if (el) el.textContent = 'Teresina · ' + new Date().toLocaleTimeString('pt-BR', { timeZone: 'America/Fortaleza', hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }, 1000);

  /* ════════════════════════════════
     CONQUISTAS (achievements)
  ════════════════════════════════ */
  const ACH = {
    explorer:  { icon:'🧭', name:'Explorador',  desc:'Visitou todas as seções do site' },
    gamer:     { icon:'🎮', name:'Gamer',       desc:'Jogou uma partida de Snake' },
    hacker:    { icon:'💻', name:'Hacker',      desc:'Usou o terminal' },
    konami:    { icon:'🕹️', name:'Konami!',     desc:'Descobriu o código secreto' },
    dj:        { icon:'🎧', name:'DJ',          desc:'Deu play na trilha sonora' },
    chameleon: { icon:'🦎', name:'Camaleão',    desc:'Alternou o tema do site' }
  };
  function unlock(id) {
    const key = 'ach_' + id;
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, '1');
    const a = ACH[id];
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span class="toast-icon">${a.icon}</span><div><div class="toast-tag">Conquista desbloqueada</div><div class="toast-name">${a.name}</div><div class="toast-desc">${a.desc}</div></div>`;
    document.getElementById('toastWrap').appendChild(t);
    setTimeout(() => { t.classList.add('out'); setTimeout(() => t.remove(), 450); }, 4000);
  }

  // Explorador: visitou todas as seções
  (function(){
    const seen = new Set();
    const all = ['hero','projects','lab','skills','music','games','terminal','notes','about','contact'];
    document.querySelectorAll('section').forEach(s =>
      new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) {
          seen.add(e.target.id);
          if (all.every(id => seen.has(id))) unlock('explorer');
        }
      }), { threshold: 0.3 }).observe(s)
    );
  })();

  // Conquistas ligadas às funções existentes
  const _origStart = startSnake;   startSnake = function(){ _origStart(); unlock('gamer'); };
  const _origTheme = toggleTheme;  toggleTheme = function(){ _origTheme(); unlock('chameleon'); };
  const _origLoad  = loadPlayer;   loadPlayer  = function(a,b,c){ _origLoad(a,b,c); unlock('dj'); };

  /* ════════════════════════════════
     TERMINAL INTERATIVO
  ════════════════════════════════ */
  const termBody  = document.getElementById('termBody');
  const termInput = document.getElementById('termInput');
  function termPrint(html) {
    const d = document.createElement('div');
    d.innerHTML = html;
    termBody.appendChild(d);
    termBody.scrollTop = termBody.scrollHeight;
  }
  const termCmds = {
    help: () => 'comandos disponíveis:<br>&nbsp;&nbsp;<span class="cmd">sobre</span> · quem sou eu<br>&nbsp;&nbsp;<span class="cmd">projetos</span> · meus repositórios<br>&nbsp;&nbsp;<span class="cmd">skills</span> · tecnologias<br>&nbsp;&nbsp;<span class="cmd">contato</span> · onde me achar<br>&nbsp;&nbsp;<span class="cmd">github</span> · abre meu perfil<br>&nbsp;&nbsp;<span class="cmd">theme</span> · alterna claro/escuro<br>&nbsp;&nbsp;<span class="cmd">musica</span> · minha trilha sonora<br>&nbsp;&nbsp;<span class="cmd">whoami</span> · você<br>&nbsp;&nbsp;<span class="cmd">date</span> · data e hora<br>&nbsp;&nbsp;<span class="cmd">coffee</span> · ☕<br>&nbsp;&nbsp;<span class="cmd">resume</span> · baixa meu currículo<br>&nbsp;&nbsp;<span class="cmd">stats</span> · suas visitas<br>&nbsp;&nbsp;<span class="cmd">konami</span> · 🤫<br>&nbsp;&nbsp;<span class="cmd">clear</span> · limpa a tela',
    sobre: () => 'Alexandre Araújo Rodrigues — dev frontend em Teresina, PI.<br>Curso ADS e amo React, TypeScript e café. ☕',
    projetos: () => '01 · App React + TS + Vite<br>02 · Site React App + TypeScript<br>03 · Sistema CRUD em PHP<br>→ digite <span class="cmd">github</span> para ver todos',
    skills: () => 'React · TypeScript · Vite · JavaScript ES6+ · HTML5 · CSS3<br>Git · Linux · Python · PHP · Photoshop · Illustrator',
    contato: () => 'E-mail: alexandrearaujorodrigues7@gmail.com<br>GitHub: github.com/crispim234<br>LinkedIn: Alexandre Araújo<br>Instagram: @alexandre.zzk',
    github: () => { window.open('https://github.com/crispim234', '_blank'); return 'abrindo github... <span class="ok">✓</span>'; },
    theme: () => { toggleTheme(); return 'tema alternado <span class="ok">✓</span>'; },
    musica: () => 'Alice in Chains + Radiohead. 🎧<br>Sobe até a seção Trilha Sonora e dá o play.',
    whoami: () => 'visitante@alexandre.dev — muito prazer!',
    date: () => new Date().toLocaleString('pt-BR'),
    ls: () => 'projetos/&nbsp;&nbsp;skills/&nbsp;&nbsp;musica/&nbsp;&nbsp;games/&nbsp;&nbsp;sobre.txt&nbsp;&nbsp;contato.md',
    coffee: () => '&nbsp;&nbsp;(&nbsp;(<br>&nbsp;&nbsp;&nbsp;)&nbsp;)<br>&nbsp;[______]<br>&nbsp;|&nbsp;café&nbsp;|]<br>&nbsp;\\______/&nbsp;&nbsp;servido! ☕',
    sudo: () => 'usuário não está no arquivo sudoers.<br>este incidente será reportado. 😅',
    konami: () => 'tenta: ↑ ↑ ↓ ↓ ← → ← → B A &nbsp;😉',
    resume: () => { window.open('curriculo.pdf', '_blank'); return 'abrindo currículo... <span class="ok">✓</span>'; },
    curriculo: () => termCmds.resume(),
    stats: () => `você já visitou este site <span class="ok">${localStorage.getItem('visits') || 1}x</span> neste navegador 📈`,
    clear: () => { termBody.innerHTML = ''; return null; }
  };
  termInput.addEventListener('keydown', e => {
    if (e.key !== 'Enter') return;
    const raw = termInput.value.trim();
    termInput.value = '';
    if (!raw) return;
    const safe = raw.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    termPrint(`<span class="term-prompt">➜ ~</span> ${safe}`);
    unlock('hacker');
    const fn = termCmds[raw.toLowerCase()];
    if (fn) { const out = fn(); if (out) termPrint(out); }
    else termPrint(`comando não encontrado: ${safe} — digite <span class="cmd">help</span>`);
  });

  /* ════════════════════════════════
     KONAMI CODE + MATRIX RAIN
  ════════════════════════════════ */
  function runMatrix(ms = 8000) {
    const c = document.getElementById('matrixCanvas');
    const x = c.getContext('2d');
    c.width = innerWidth; c.height = innerHeight;
    c.classList.add('on');
    const fs = 14, cols = Math.floor(c.width / fs), drops = Array(cols).fill(1);
    const chars = 'アカサタナハマヤラワ01<>/{}=+*#$&React;TS';
    const iv = setInterval(() => {
      x.fillStyle = 'rgba(6,8,15,0.08)';
      x.fillRect(0, 0, c.width, c.height);
      x.fillStyle = '#3b82f6';
      x.font = fs + 'px monospace';
      drops.forEach((y, i) => {
        x.fillText(chars[Math.floor(Math.random() * chars.length)], i * fs, y * fs);
        drops[i] = (y * fs > c.height && Math.random() > 0.975) ? 0 : y + 1;
      });
    }, 50);
    setTimeout(() => {
      clearInterval(iv);
      c.classList.remove('on');
      setTimeout(() => x.clearRect(0, 0, c.width, c.height), 500);
    }, ms);
  }
  (function(){
    const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let pos = 0;
    document.addEventListener('keydown', e => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      pos = (k === seq[pos]) ? pos + 1 : (k === seq[0] ? 1 : 0);
      if (pos === seq.length) { pos = 0; runMatrix(); unlock('konami'); }
    });
  })();

  /* ════════════════════════════════
     CONTADOR DE VISITAS (local)
  ════════════════════════════════ */
  localStorage.setItem('visits', String(parseInt(localStorage.getItem('visits') || '0', 10) + 1));

  /* ════════════════════════════════
     LAB — GITHUB API AO VIVO
  ════════════════════════════════ */
  (function(){
    const grid = document.getElementById('ghRepos');
    if (!grid) return;
    fetch('https://api.github.com/users/crispim234/repos?sort=updated&per_page=6')
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(repos => {
        grid.innerHTML = '';
        repos.forEach(repo => {
          const a = document.createElement('a');
          a.className = 'gh-card';
          a.href = repo.html_url;
          a.target = '_blank';
          a.rel = 'noopener';
          const name = document.createElement('div');
          name.className = 'gh-name';
          name.textContent = repo.name;
          const desc = document.createElement('div');
          desc.className = 'gh-desc';
          desc.textContent = repo.description || 'Sem descrição ainda';
          const meta = document.createElement('div');
          meta.className = 'gh-meta';
          const lang = document.createElement('span');
          lang.textContent = repo.language || '—';
          const star = document.createElement('span');
          star.textContent = '★ ' + repo.stargazers_count;
          meta.append(lang, star);
          a.append(name, desc, meta);
          grid.appendChild(a);
        });
        if (!repos.length) grid.innerHTML = '<div class="gh-error">Nenhum repositório público encontrado.</div>';
      })
      .catch(() => {
        grid.innerHTML = '<div class="gh-error">Não foi possível carregar agora — veja direto no <a href="https://github.com/crispim234" target="_blank" rel="noopener">GitHub</a>.</div>';
      });
  })();

  /* ════════════════════════════════
     LAB — VIACEP
  ════════════════════════════════ */
  function buscarCep() {
    const v = document.getElementById('cepInput').value.replace(/\D/g, '');
    const out = document.getElementById('cepResult');
    if (v.length !== 8) { out.innerHTML = '<span class="cep-err">Digite um CEP válido — 8 dígitos.</span>'; return; }
    out.textContent = 'consultando viacep.com.br...';
    fetch(`https://viacep.com.br/ws/${v}/json/`)
      .then(r => r.json())
      .then(d => {
        if (d.erro) { out.innerHTML = '<span class="cep-err">CEP não encontrado.</span>'; return; }
        out.innerHTML = `<strong>${d.logradouro || 'Logradouro não informado'}</strong><br>${d.bairro ? d.bairro + ' — ' : ''}${d.localidade}/${d.uf}<br>CEP ${d.cep}`;
      })
      .catch(() => { out.innerHTML = '<span class="cep-err">Erro na consulta. Tente novamente.</span>'; });
  }
  document.getElementById('cepInput').addEventListener('keydown', e => { if (e.key === 'Enter') buscarCep(); });
