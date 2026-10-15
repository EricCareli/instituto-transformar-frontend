# Instituto Transformar

Plataforma front-end responsiva desenvolvida como **projeto acadêmico da faculdade**, simulando uma solução digital para uma Organização Não Governamental (ONG).

O projeto foi criado com o objetivo de aplicar, na prática, conceitos modernos de desenvolvimento front-end, incluindo HTML semântico, CSS responsivo, JavaScript ES6, Single Page Application (SPA), acessibilidade, persistência de dados e publicação em ambiente de produção.

## 🌐 Demo ao vivo

Acesse o projeto publicado:

**[Instituto Transformar - Live Demo](https://ericcareli.github.io/instituto-transformar-frontend/)**

---

## 📸 Projeto

![Instituto Transformar](public/images/acao-social.jpg)

---

## 🎯 Objetivo

O Instituto Transformar foi desenvolvido dentro de uma atividade prática da faculdade voltada ao terceiro setor.

A proposta consiste em criar uma plataforma web que permita apresentar os projetos de uma ONG, incentivar o trabalho voluntário e disponibilizar um formulário para cadastro de colaboradores.

Além da construção da interface, o projeto também explora práticas importantes utilizadas no desenvolvimento profissional, como organização de código, versionamento, acessibilidade, otimização e deploy.

---

## ✨ Funcionalidades

- Navegação em Single Page Application (SPA)
- Página inicial institucional
- Área de projetos sociais
- Cadastro de voluntários e colaboradores
- Validação de formulários
- Máscaras para CPF, telefone e CEP
- Persistência de dados utilizando `localStorage`
- Templates dinâmicos com JavaScript
- Modal de cadastro de voluntário
- Mensagens de feedback ao usuário
- Menu responsivo
- Layout adaptado para desktop, tablet e mobile
- Modo de alto contraste
- Navegação por teclado
- Recursos de acessibilidade com atributos ARIA

---

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript ES6+
- Vite
- Git
- GitHub
- GitHub Actions
- GitHub Pages
- Web Storage API (`localStorage`)

---

## 🧱 Arquitetura do projeto

```text
instituto-transformar-frontend/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── css/
│   └── style.css
│
├── js/
│   ├── app.js
│   ├── events.js
│   ├── storage.js
│   ├── templates.js
│   └── validation.js
│
├── public/
│   └── images/
│       ├── acao-social.jpg
│       └── acao-social.png
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

## 🧩 Organização do JavaScript

O JavaScript foi separado por responsabilidades para facilitar manutenção e evolução do projeto.

### `app.js`

Responsável pela inicialização da aplicação e pelo controle das rotas da SPA.

### `templates.js`

Contém os templates utilizados para gerar dinamicamente os conteúdos da interface.

### `events.js`

Gerencia eventos de interação, abertura de modal, envio de formulário e componentes da aplicação.

### `validation.js`

Responsável pela validação dos campos e aplicação das máscaras de CPF, telefone e CEP.

### `storage.js`

Gerencia o armazenamento e recuperação dos cadastros utilizando `localStorage`.

---

## ♿ Acessibilidade

Durante o desenvolvimento foram aplicadas práticas de acessibilidade alinhadas às recomendações da WCAG, incluindo:

- HTML semântico
- `header`, `nav`, `main`, `section` e `footer`
- textos alternativos em imagens
- associação entre `label` e campos de formulário
- navegação por teclado
- estados de foco visíveis
- `aria-expanded`
- `aria-controls`
- `aria-invalid`
- `aria-describedby`
- `aria-live`
- `role="dialog"`
- `aria-modal`
- opção de alto contraste

---

## 📱 Responsividade

O layout utiliza CSS Grid, Flexbox e media queries para adaptação em diferentes resoluções.

Foram considerados breakpoints para:

- smartphones
- tablets
- notebooks
- desktops
- telas de maior resolução

---

## 💾 Persistência de dados

Os cadastros realizados no formulário são armazenados localmente no navegador através da Web Storage API.

Exemplo:

```javascript
localStorage.setItem(
  "cadastros",
  JSON.stringify(cadastros)
);
```

Os dados podem ser recuperados posteriormente utilizando:

```javascript
JSON.parse(
  localStorage.getItem("cadastros")
);
```

---

## 🚀 Como executar localmente

Clone o repositório:

```bash
git clone https://github.com/EricCareli/instituto-transformar-frontend.git
```

Entre na pasta:

```bash
cd instituto-transformar-frontend
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

O Vite mostrará no terminal um endereço semelhante a:

```text
http://localhost:5173/
```

---

## 📦 Build de produção

Para gerar a versão otimizada:

```bash
npm run build
```

Os arquivos de produção serão criados na pasta:

```text
dist/
```

---

## 🌍 Deploy

O projeto está publicado utilizando **GitHub Pages**.

O processo de deploy é automatizado através do **GitHub Actions**.

Sempre que alterações aprovadas são enviadas para a branch `main`, o workflow executa a build e publica a nova versão.

🔗 **Projeto online:**  
https://ericcareli.github.io/instituto-transformar-frontend/

---

## 📚 Aprendizados

Este projeto permitiu aplicar conhecimentos de:

- desenvolvimento front-end
- HTML semântico
- CSS Grid e Flexbox
- Design System
- responsividade
- JavaScript modular
- manipulação do DOM
- eventos
- SPA
- validação de formulários
- Web Storage
- acessibilidade
- Git e GitHub
- build com Vite
- CI/CD
- deploy com GitHub Actions

---

## 🎓 Contexto acadêmico

Este projeto foi desenvolvido como parte de uma atividade prática da faculdade na disciplina de **Desenvolvimento Front-end**.

O desafio proposto consistia na construção e evolução de uma plataforma digital voltada ao contexto de uma ONG, percorrendo diferentes etapas do desenvolvimento front-end: estruturação semântica, design responsivo, interatividade com JavaScript, versionamento, acessibilidade, otimização e publicação.

---

## 👨‍💻 Autor

**Eric Careli**

GitHub: [@EricCareli](https://github.com/EricCareli)

---

⭐ Se este projeto foi útil ou chamou sua atenção, fique à vontade para explorar o código e as funcionalidades.