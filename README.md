# Instituto Transformar

Projeto acadêmico de desenvolvimento front-end para uma organização do terceiro setor.

## Tecnologias
- HTML5
- CSS3
- JavaScript ES6
- Vite
- Git e GitHub
- localStorage

## Funcionalidades
- SPA com navegação por hash
- Templates dinâmicos
- Formulário com validação e máscaras
- Persistência em localStorage
- Menu responsivo
- Modal e toasts
- Alto contraste
- Recursos de acessibilidade e navegação por teclado

## Estrutura
- `index.html`: ponto de entrada da SPA
- `css/style.css`: Design System e estilos responsivos
- `js/app.js`: inicialização e roteamento
- `js/templates.js`: templates dinâmicos
- `js/events.js`: eventos da interface
- `js/validation.js`: validação e máscaras
- `js/storage.js`: persistência local
- `images/`: recursos visuais

## Execução local
1. Instale o Node.js.
2. Execute `npm install`.
3. Execute `npm run dev`.
4. Abra o endereço informado pelo Vite.

## Build
Execute `npm run build`. A versão de produção será gerada em `dist/`.

## Versionamento
Estratégia baseada em GitFlow:
- `main`: versão estável
- `develop`: integração
- `feature/*`: novas funcionalidades
- `hotfix/*`: correções urgentes

## Acessibilidade
O projeto utiliza HTML semântico, foco visível, labels associados, `aria-expanded`, `aria-controls`, `aria-live`, `aria-invalid`, `role="dialog"`, `aria-modal`, navegação por teclado e modo de alto contraste.

## Deploy
O projeto pode ser publicado no GitHub Pages, Vercel ou Netlify após a geração da build de produção.
