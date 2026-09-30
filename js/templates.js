export const projetos = [
  {
    titulo: "Esporte para Todos",
    categoria: "Esporte",
    descricao: "Atividades esportivas gratuitas para crianças e adolescentes."
  },
  {
    titulo: "Educação que Transforma",
    categoria: "Educação",
    descricao: "Reforço escolar e acompanhamento educacional para estudantes da comunidade."
  },
  {
    titulo: "Alimento Solidário",
    categoria: "Assistência social",
    descricao: "Arrecadação de alimentos para famílias em situação de vulnerabilidade."
  }
];

function cardsProjetos() {
  return projetos.map(projeto => `
    <article class="card">
      <span class="badge">${projeto.categoria}</span>
      <h3>${projeto.titulo}</h3>
      <p>${projeto.descricao}</p>
      <a class="button secondary" href="#cadastro">Quero ajudar</a>
    </article>
  `).join("");
}

export function templateInicio() {
  return `
    <section class="hero" aria-labelledby="titulo-inicio">
      <div class="hero-copy">
        <p class="badge">Educação, esporte e inclusão social</p>
        <h1 id="titulo-inicio">Transformando vidas por meio da solidariedade</h1>
        <p>
          O Instituto Transformar é uma organização sem fins lucrativos dedicada
          ao desenvolvimento social e à criação de oportunidades para crianças,
          jovens e famílias.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#projetos">Conheça os projetos</a>
          <button id="openModal" class="button secondary" type="button">Seja voluntário</button>
        </div>
      </div>

      <div class="hero-media">
        <picture>
          <source srcset="./images/acao-social.png" type="image/png">
          <img
            src="./images/acao-social.jpg"
            alt="Voluntários realizando atividades educativas e recreativas com crianças"
            width="1200"
            height="675"
            loading="eager">
        </picture>
      </div>
    </section>

    <section class="section" aria-labelledby="missao">
      <h2 id="missao">Nossa missão</h2>
      <p>
        Promover oportunidades de desenvolvimento pessoal e social,
        contribuindo para uma sociedade mais justa, inclusiva e participativa.
      </p>
    </section>

    <section class="section" aria-labelledby="destaques">
      <h2 id="destaques">Projetos em destaque</h2>
      <div class="cards-grid">${cardsProjetos()}</div>
    </section>
  `;
}

export function templateProjetos() {
  return `
    <section aria-labelledby="titulo-projetos">
      <h1 id="titulo-projetos">Nossos projetos sociais</h1>
      <p>Conheça algumas iniciativas desenvolvidas pelo Instituto Transformar.</p>
      <div class="cards-grid">${cardsProjetos()}</div>
    </section>
  `;
}

export function templateCadastro() {
  return `
    <section aria-labelledby="titulo-cadastro">
      <div class="form-card">
        <h1 id="titulo-cadastro">Cadastro de colaboradores</h1>
        <p>Preencha seus dados para participar das iniciativas da ONG.</p>

        <form id="cadastroForm" novalidate>
          <fieldset>
            <legend>Dados pessoais</legend>

            <div class="field">
              <label for="nome">Nome completo</label>
              <input id="nome" name="nome" type="text" autocomplete="name" required minlength="3">
              <small id="erro-nome" class="erro-texto" aria-live="polite"></small>
            </div>

            <div class="field">
              <label for="email">E-mail</label>
              <input id="email" name="email" type="email" autocomplete="email" required>
              <small id="erro-email" class="erro-texto" aria-live="polite"></small>
            </div>

            <div class="field">
              <label for="cpf">CPF</label>
              <input
                id="cpf" name="cpf" type="text" inputmode="numeric"
                placeholder="000.000.000-00" maxlength="14" required
                aria-describedby="erro-cpf">
              <small id="erro-cpf" class="erro-texto" aria-live="polite"></small>
            </div>
          </fieldset>

          <fieldset>
            <legend>Contato e endereço</legend>

            <div class="field">
              <label for="telefone">Telefone</label>
              <input
                id="telefone" name="telefone" type="tel" inputmode="numeric"
                autocomplete="tel" placeholder="(00) 00000-0000" maxlength="15"
                required aria-describedby="erro-telefone">
              <small id="erro-telefone" class="erro-texto" aria-live="polite"></small>
            </div>

            <div class="field">
              <label for="cep">CEP</label>
              <input
                id="cep" name="cep" type="text" inputmode="numeric"
                autocomplete="postal-code" placeholder="00000-000" maxlength="9"
                required aria-describedby="erro-cep">
              <small id="erro-cep" class="erro-texto" aria-live="polite"></small>
            </div>

            <div class="field">
              <label for="cidade">Cidade</label>
              <input id="cidade" name="cidade" type="text" autocomplete="address-level2" required>
              <small id="erro-cidade" class="erro-texto" aria-live="polite"></small>
            </div>

            <div class="field">
              <label for="estado">Estado</label>
              <select id="estado" name="estado" autocomplete="address-level1" required>
                <option value="">Selecione</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="SP">São Paulo</option>
                <option value="MG">Minas Gerais</option>
                <option value="ES">Espírito Santo</option>
                <option value="OUTRO">Outro</option>
              </select>
              <small id="erro-estado" class="erro-texto" aria-live="polite"></small>
            </div>
          </fieldset>

          <fieldset>
            <legend>Forma de participação</legend>
            <div class="field">
              <label for="participacao">Como deseja colaborar?</label>
              <select id="participacao" name="participacao" required>
                <option value="">Selecione</option>
                <option value="voluntario">Trabalho voluntário</option>
                <option value="doador">Doação</option>
              </select>
              <small id="erro-participacao" class="erro-texto" aria-live="polite"></small>
            </div>
          </fieldset>

          <div class="form-actions">
            <button class="button secondary" type="reset">Limpar</button>
            <button class="button primary" type="submit">Enviar cadastro</button>
          </div>
        </form>
      </div>
    </section>
  `;
}
