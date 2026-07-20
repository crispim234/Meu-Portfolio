# 💼 Portfólio — Alexandre Araújo

> Portfólio pessoal de desenvolvedor frontend, construído com **HTML, CSS e JavaScript puro** — sem frameworks, sem dependências de build. Um único site estático, rápido e 100% autocontido.

🔗 **Ao vivo:** [crispim234.github.io](https://crispim234.github.io) · [alexandre-portfolio-dev.vercel.app](https://alexandre-portfolio-dev.vercel.app/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222?style=flat&logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000?style=flat&logo=vercel&logoColor=white)

---

## 📖 Sobre o projeto

Este é meu portfólio profissional, pensado para apresentar projetos, habilidades e formas de contato de maneira interativa e memorável. Mais do que uma vitrine, o site é em si uma demonstração das minhas habilidades: consome APIs reais, tem jogos, um terminal funcional e um sistema de temas — tudo escrito à mão em JavaScript puro.

O visual segue uma estética **minimalista-editorial** com paleta **azul e preto**, tipografia serifada (DM Serif Display) contrastando com monoespaçada (DM Mono), e suporte completo a **modo claro e escuro**.

---

## ✨ Funcionalidades

### 🎨 Interface e experiência
- **Tema claro/escuro** com persistência via `localStorage`
- **Cursor customizado** com anel que segue o mouse (desativado em telas touch)
- **Preloader** estilo boot de terminal na abertura
- **Texto digitado** rotativo no cabeçalho (efeito typewriter)
- **Barra de progresso** de rolagem e botão "voltar ao topo"
- **Foto com tilt 3D** que acompanha o movimento do mouse
- **Animações de entrada** (fade-up) conforme a rolagem
- **Relógio ao vivo** no rodapé (fuso de Teresina)

### 🔌 Integrações ao vivo (seção Lab)
- **GitHub API** — meus repositórios carregados em tempo real de `api.github.com`
- **ViaCEP** — busca de endereço por CEP com validação e tratamento de erros

### 🎮 Minigames (JavaScript puro)
- **Snake** — com canvas, níveis progressivos e controle por teclado ou D-pad
- **Jogo da memória** — cartas com ícones de tecnologias
- **Quiz de desenvolvimento** — 8 perguntas com feedback imediato

### 🖥️ Extras interativos
- **Terminal funcional** — comandos como `help`, `sobre`, `projetos`, `github`, `resume`, `stats`
- **Sistema de conquistas** — toasts desbloqueáveis salvos no navegador
- **Easter egg Konami** — digite ↑↑↓↓←→←→BA para uma surpresa 🕹️
- **Player do Spotify** — trilha sonora integrada (Alice in Chains + Radiohead)

### 🎯 Conteúdo profissional
- **Case studies** expansíveis em cada projeto (problema, decisões, aprendizados)
- **Notas técnicas** — bugs reais que resolvi e o que aprendi
- **Timeline** da minha trajetória
- Seção de **certificados** e **depoimentos** (templates prontos)

---

## 📁 Estrutura de arquivos

```
.
├── index.html      # Estrutura e conteúdo da página
├── style.css       # Todos os estilos e temas (variáveis CSS)
├── script.js       # Toda a lógica: jogos, APIs, terminal, temas
├── curriculo.pdf   # Currículo para download (adicione o seu)
└── README.md       # Este arquivo
```

---

## 🚀 Rodando localmente

Por usar `fetch` (GitHub API e ViaCEP), o site precisa rodar em um servidor HTTP — abrir o arquivo direto (`file://`) bloqueia essas requisições.

```bash
# Clone o repositório
git clone https://github.com/crispim234/crispim234.github.io.git
cd crispim234.github.io

# Rode um servidor local (escolha uma opção):
npx serve .
# ou
python -m http.server 8080
```

Abra `http://localhost:8080` (ou a porta indicada) no navegador.

---

## 🛠️ Tecnologias

| Categoria | Tecnologias |
|---|---|
| **Marcação** | HTML5 semântico |
| **Estilo** | CSS3 (variáveis, grid, flexbox, animações) |
| **Lógica** | JavaScript ES6+ (sem frameworks) |
| **APIs** | GitHub REST API, ViaCEP |
| **Fontes** | Google Fonts (DM Serif Display, DM Mono) |
| **Hospedagem** | GitHub Pages |

---

## 📱 Responsividade e acessibilidade

- Layout **mobile-first** adaptável a qualquer tela
- **Skip link** para navegação por teclado
- Respeita `prefers-reduced-motion` (desativa animações para quem precisa)
- Estados de foco visíveis e `aria-label` nos controles interativos

---

## 👤 Contato

**Alexandre Araújo Rodrigues** — Desenvolvedor Frontend · Teresina, PI

- 📧 alexandrearaujorodrigues7@gmail.com
- 💼 [LinkedIn](https://www.linkedin.com/in/alexandre-araujo-571847346/)
- 🐙 [GitHub](https://github.com/crispim234)
- 📷 [Instagram](https://www.instagram.com/alexandre.zzk/)

---

<div align="center">
  <sub>Construído com ☕ e JavaScript puro por Alexandre Araújo</sub>
</div>
