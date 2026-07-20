  /* ICONS — lucide (MIT), inlined as SVG paths */
  const ICONS = {
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>',
    moon: '<path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"/>',
    brain: '<path d="M12 18V5"/><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"/><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"/><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"/><path d="M18 18a4 4 0 0 0 2-7.464"/><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"/><path d="M6 18a4 4 0 0 1-2-7.464"/><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"/>',
    palette: '<path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"/><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>',
    atom: '<circle cx="12" cy="12" r="1"/><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"/><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"/>',
    server: '<rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/>',
    worm: '<path d="m19 12-1.5 3"/><path d="M19.63 18.81 22 20"/><path d="M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"/>',
    lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
    package: '<path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><polyline points="3.29 7 12 12 20.71 7"/><path d="m7.5 4.27 9 5.15"/>',
    braces: '<path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"/><path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"/>',
    github: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor" stroke="none"/>',
    check: '<path d="M20 6 9 17l-5-5"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
    star: '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" fill="currentColor" stroke="none"/>',
    mail: '<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/>',
    coffee: '<path d="M10 2v2"/><path d="M14 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/><path d="M6 2v2"/>',
    rocket: '<path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"/><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"/>',
    'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
    flame: '<path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/>',
    dumbbell: '<path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"/><path d="m2.5 21.5 1.4-1.4"/><path d="m20.1 3.9 1.4-1.4"/><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"/><path d="m9.6 14.4 4.8-4.8"/>',
    laugh: '<circle cx="12" cy="12" r="10"/><path d="M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/>',
    compass: '<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/>',
    'gamepad-2': '<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/>',
    terminal: '<path d="M12 19h8"/><path d="m4 17 6-6-6-6"/>',
    key: '<path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"/><path d="m21 2-9.6 9.6"/><circle cx="7.5" cy="15.5" r="5.5"/>',
    headphones: '<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
    contrast: '<circle cx="12" cy="12" r="10"/><path d="M12 18a6 6 0 0 0 0-12v12z"/>',
    'trending-up': '<path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/>',
    'party-popper': '<path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/>',
    hand: '<path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/>',
    'chevron-up': '<path d="m18 15-6-6-6 6"/>',
    'chevron-down': '<path d="m6 9 6 6 6-6"/>',
    'chevron-left': '<path d="m15 18-6-6 6-6"/>',
    'chevron-right': '<path d="m9 18 6-6-6-6"/>',
    play: '<path d="M8 5v14l11-7z" fill="currentColor" stroke="none"/>',
  };
  function icon(name, size) {
    size = size || 14;
    return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">${ICONS[name] || ''}</svg>`;
  }

  /* THEME */
  function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('themeIcon').innerHTML = icon(isDark ? 'moon' : 'sun');
    document.getElementById('themeLabel').textContent = isDark ? 'Escuro' : 'Claro';
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  }
  const saved = localStorage.getItem('theme');
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme','light');
    document.getElementById('themeIcon').innerHTML = icon('moon');
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
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        e.target.querySelectorAll('.learning-fill').forEach(b => b.style.width = b.dataset.w + '%');
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

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
    {icon:'atom',label:'React'},    {icon:'braces',label:'TypeScript'},
    {icon:'zap',label:'Vite'},     {icon:'palette',label:'CSS3'},
    {icon:'package',label:'Node.js'},  {icon:'github',label:'GitHub'},
    {icon:'server',label:'PHP'},      {icon:'worm',label:'Python'},
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
      el.innerHTML = `<div class="mem-card-inner"><div class="mem-card-front">?</div><div class="mem-card-back"><div class="mem-icon">${icon(card.icon, 28)}</div><div class="mem-label">${card.label}</div></div></div>`;
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
    if (i===q.a) { quizScore++; document.getElementById('quizFeedback').innerHTML=icon('check',13)+' Correto! '+q.tip; }
    else { btn.classList.add('wrong'); document.getElementById('quizFeedback').innerHTML=icon('x',13)+' Errou. '+q.tip; }
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
      const msgs = [
        `Continue estudando! ${icon('dumbbell',14)}`,
        `Bom começo! ${icon('book-open',14)}`,
        `Indo bem! ${icon('rocket',14)}`,
        `Muito bem! ${icon('zap',14)}`,
        `Excelente! Manda o currículo! ${icon('flame',14)}`
      ];
      document.getElementById('quizResultMsg').innerHTML = msgs[Math.min(Math.floor(quizScore/2), msgs.length-1)];
    } else { renderQuiz(); }
  }

  /* ════════════════════════════════
     PRELOADER — boot de terminal
  ════════════════════════════════ */
  (function(){
    const lines = [
      '&gt; inicializando alexandre.dev',
      '&gt; carregando módulos... <span class="ok">ok</span>',
      `&gt; tema: azul/preto <span class="ok">${icon('check',12)}</span>`,
      `&gt; bem-vindo(a)! <span class="ok">${icon('check',12)}</span>`
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
    const phrases = ['React Developer', 'TypeScript Enthusiast', 'Estudante de ADS', 'UI apaixonado por detalhes', 'Movido a café'];
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
    explorer:  { icon:'compass', name:'Explorador',  desc:'Visitou todas as seções do site' },
    gamer:     { icon:'gamepad-2', name:'Gamer',       desc:'Jogou uma partida de Snake' },
    hacker:    { icon:'terminal', name:'Hacker',      desc:'Usou o terminal' },
    konami:    { icon:'key', name:'Konami!',     desc:'Descobriu o código secreto' },
    dj:        { icon:'headphones', name:'DJ',          desc:'Deu play na trilha sonora' },
    chameleon: { icon:'contrast', name:'Camaleão',    desc:'Alternou o tema do site' }
  };
  function unlock(id) {
    const key = 'ach_' + id;
    if (localStorage.getItem(key)) return;
    localStorage.setItem(key, '1');
    const a = ACH[id];
    const t = document.createElement('div');
    t.className = 'toast';
    t.innerHTML = `<span class="toast-icon">${icon(a.icon, 20)}</span><div><div class="toast-tag">Conquista desbloqueada</div><div class="toast-name">${a.name}</div><div class="toast-desc">${a.desc}</div></div>`;
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
    help: () => `comandos disponíveis:<br>&nbsp;&nbsp;<span class="cmd">sobre</span> · quem sou eu<br>&nbsp;&nbsp;<span class="cmd">projetos</span> · meus repositórios<br>&nbsp;&nbsp;<span class="cmd">skills</span> · tecnologias<br>&nbsp;&nbsp;<span class="cmd">contato</span> · onde me achar<br>&nbsp;&nbsp;<span class="cmd">github</span> · abre meu perfil<br>&nbsp;&nbsp;<span class="cmd">theme</span> · alterna claro/escuro<br>&nbsp;&nbsp;<span class="cmd">musica</span> · minha trilha sonora<br>&nbsp;&nbsp;<span class="cmd">whoami</span> · você<br>&nbsp;&nbsp;<span class="cmd">date</span> · data e hora<br>&nbsp;&nbsp;<span class="cmd">coffee</span> · ${icon('coffee',12)}<br>&nbsp;&nbsp;<span class="cmd">resume</span> · baixa meu currículo<br>&nbsp;&nbsp;<span class="cmd">stats</span> · suas visitas<br>&nbsp;&nbsp;<span class="cmd">konami</span> · ${icon('key',12)}<br>&nbsp;&nbsp;<span class="cmd">clear</span> · limpa a tela`,
    sobre: () => `Alexandre Araújo Rodrigues — dev frontend em Teresina, PI.<br>Curso ADS e amo React, TypeScript e café. ${icon('coffee',12)}`,
    projetos: () => '01 · App React + TS + Vite<br>02 · Site React App + TypeScript<br>03 · Sistema CRUD em PHP<br>→ digite <span class="cmd">github</span> para ver todos',
    skills: () => 'React · TypeScript · Vite · JavaScript ES6+ · HTML5 · CSS3<br>Git · Linux · Python · PHP · Photoshop · Illustrator',
    contato: () => 'E-mail: alexandrearaujorodrigues7@gmail.com<br>GitHub: github.com/crispim234<br>LinkedIn: Alexandre Araújo<br>Instagram: @alexandre.zzk',
    github: () => { window.open('https://github.com/crispim234', '_blank'); return `abrindo github... <span class="ok">${icon('check',12)}</span>`; },
    theme: () => { toggleTheme(); return `tema alternado <span class="ok">${icon('check',12)}</span>`; },
    musica: () => `Alice in Chains + Radiohead. ${icon('headphones',12)}<br>Sobe até a seção Trilha Sonora e dá o play.`,
    whoami: () => 'visitante@alexandre.dev — muito prazer!',
    date: () => new Date().toLocaleString('pt-BR'),
    ls: () => 'projetos/&nbsp;&nbsp;skills/&nbsp;&nbsp;musica/&nbsp;&nbsp;games/&nbsp;&nbsp;sobre.txt&nbsp;&nbsp;contato.md',
    coffee: () => `&nbsp;&nbsp;(&nbsp;(<br>&nbsp;&nbsp;&nbsp;)&nbsp;)<br>&nbsp;[______]<br>&nbsp;|&nbsp;café&nbsp;|]<br>&nbsp;\\______/&nbsp;&nbsp;servido! ${icon('coffee',12)}`,
    sudo: () => `usuário não está no arquivo sudoers.<br>este incidente será reportado. ${icon('laugh',12)}`,
    konami: () => `tenta: ↑ ↑ ↓ ↓ ← → ← → B A &nbsp;${icon('smile',12)}`,
    resume: () => { window.open('curriculo.pdf', '_blank'); return `abrindo currículo... <span class="ok">${icon('check',12)}</span>`; },
    curriculo: () => termCmds.resume(),
    stats: () => `você já visitou este site <span class="ok">${localStorage.getItem('visits') || 1}x</span> neste navegador ${icon('trending-up',12)}`,
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
          star.innerHTML = icon('star', 11) + ' ' + repo.stargazers_count;
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
