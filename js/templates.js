export const projetos = [
  {
    titulo: "Esporte para Todos",
    categoria: "Esporte",
    descricao:
      "Atividades esportivas gratuitas que promovem disciplina, saúde, integração e trabalho em equipe para crianças e adolescentes.",
    imagem: "./images/esporte.jpg",
    alt: "Crianças participando de uma atividade esportiva com bola",
    destaque: "Atividades esportivas"
  },
  {
    titulo: "Educação que Transforma",
    categoria: "Educação",
    descricao:
      "Reforço escolar, oficinas educativas e acompanhamento de estudantes para ampliar oportunidades por meio da educação.",
    imagem: "./images/educacao.jpg",
    alt: "Educadora auxiliando crianças durante uma atividade de aprendizagem",
    destaque: "Apoio educacional"
  },
  {
    titulo: "Alimento Solidário",
    categoria: "Assistência social",
    descricao:
      "Arrecadação e distribuição de alimentos e itens essenciais para famílias em situação de vulnerabilidade social.",
    imagem: "./images/assistencia-social.jpg",
    alt: "Voluntário entregando alimentos durante uma ação de assistência social",
    destaque: "Ação comunitária"
  }
];

function cardsProjetos() {
  return projetos
    .map(
      (projeto, index) => `
        <article
          class="card project-card"
          style="--delay: ${index * 0.12}s"
        >

          <div class="card-image-wrapper">

            <img
              class="card-image"
              src="${projeto.imagem}"
              alt="${projeto.alt}"
              loading="lazy"
              width="600"
              height="360"
            >

            <span class="card-impact">
              ${projeto.destaque}
            </span>

          </div>

          <div class="card-content">

            <span class="badge">
              ${projeto.categoria}
            </span>

            <h3>
              ${projeto.titulo}
            </h3>

            <p>
              ${projeto.descricao}
            </p>

            <a
              class="project-link"
              href="#cadastro"
            >
              Quero participar
              <span aria-hidden="true">→</span>
            </a>

          </div>

        </article>
      `
    )
    .join("");
}

export function templateInicio() {
  return `

    <section
      class="hero"
      aria-labelledby="titulo-inicio"
    >

      <div class="hero-decoration hero-decoration-one"></div>
      <div class="hero-decoration hero-decoration-two"></div>

      <div class="hero-copy">

        <div class="hero-eyebrow">
          <span class="hero-eyebrow-dot"></span>
          Educação, esporte e inclusão social
        </div>

        <h1 id="titulo-inicio">
          Transformando vidas por meio da
          <span>solidariedade.</span>
        </h1>

        <p class="hero-description">
          Criamos oportunidades para crianças, jovens e famílias
          por meio de projetos que unem educação, esporte,
          desenvolvimento social e participação comunitária.
        </p>

        <div class="hero-actions">

          <a
            class="button primary"
            href="#projetos"
          >
            Conheça nossos projetos
            <span aria-hidden="true">→</span>
          </a>

          <button
            id="openModal"
            class="button secondary"
            type="button"
          >
            Seja voluntário
          </button>

        </div>

        <div class="hero-trust">

          <div class="trust-item">
            <strong>Acolhimento</strong>
            <span>Atuação com empatia e cuidado</span>
          </div>

          <div class="trust-divider"></div>

          <div class="trust-item">
            <strong>Inclusão</strong>
            <span>Educação, esporte e participação</span>
          </div>

          <div class="trust-divider"></div>

          <div class="trust-item">
            <strong>Compromisso</strong>
            <span>Transformação social</span>
          </div>

        </div>

      </div>

      <div class="hero-media">

        <div class="hero-image-frame">

          <img
            src="./images/acao-social.jpg"
            alt="Voluntários realizando atividades educativas e recreativas com crianças"
            loading="eager"
          >

          <div class="floating-card floating-card-top">

            <span class="floating-icon">
              ♥
            </span>

            <div>
              <strong>Impacto social</strong>
              <small>Transformando comunidades</small>
            </div>

          </div>

          <div class="floating-card floating-card-bottom">

            <span class="status-dot"></span>

            <div>
              <strong>Seja voluntário</strong>
              <small>Faça parte dessa transformação</small>
            </div>

          </div>

        </div>

      </div>

    </section>


    <section
      class="impact-strip"
      aria-label="Áreas de atuação do Instituto Transformar"
    >

      <article class="impact-item">

        <span class="impact-icon">
          📚
        </span>

        <span class="impact-number">
          Educação
        </span>

        <span class="impact-label">
          Aprendizagem e desenvolvimento
        </span>

      </article>

      <article class="impact-item">

        <span class="impact-icon">
          ⚽
        </span>

        <span class="impact-number">
          Esporte
        </span>

        <span class="impact-label">
          Inclusão, disciplina e bem-estar
        </span>

      </article>

      <article class="impact-item">

        <span class="impact-icon">
          🤝
        </span>

        <span class="impact-number">
          Assistência social
        </span>

        <span class="impact-label">
          Acolhimento e apoio comunitário
        </span>

      </article>

      <article class="impact-item">

        <span class="impact-icon">
          💙
        </span>

        <span class="impact-number">
          Voluntariado
        </span>

        <span class="impact-label">
          Pessoas unidas por uma causa
        </span>

      </article>

    </section>


    <section class="section about-section">

      <div class="section-heading">

        <span class="section-kicker">
          Quem somos
        </span>

        <h2>
          Pequenas ações podem gerar
          grandes transformações.
        </h2>

        <p>
          O Instituto Transformar conecta pessoas, voluntários
          e iniciativas sociais para construir oportunidades
          onde elas são mais necessárias.
        </p>

      </div>

      <div class="values-grid">

        <article class="value-card">

          <div class="value-icon">
            ♥
          </div>

          <h3>
            Impacto humano
          </h3>

          <p>
            Cada projeto é pensado para gerar experiências
            positivas na vida das pessoas e das comunidades.
          </p>

        </article>

        <article class="value-card">

          <div class="value-icon">
            ✦
          </div>

          <h3>
            Oportunidades
          </h3>

          <p>
            Educação e esporte são ferramentas capazes
            de ampliar perspectivas e construir novos caminhos.
          </p>

        </article>

        <article class="value-card">

          <div class="value-icon">
            ◎
          </div>

          <h3>
            Comunidade
          </h3>

          <p>
            Aproximamos voluntários, famílias e parceiros
            para fortalecer uma rede de transformação social.
          </p>

        </article>

      </div>

    </section>


    <section
      class="section projects-section"
      aria-labelledby="destaques"
    >

      <div class="section-heading section-heading-row">

        <div>

          <span class="section-kicker">
            Nossas iniciativas
          </span>

          <h2 id="destaques">
            Projetos que transformam realidades
          </h2>

        </div>

        <a
          href="#projetos"
          class="see-all-link"
        >
          Ver todos os projetos
          <span aria-hidden="true">→</span>
        </a>

      </div>

      <div class="cards-grid">
        ${cardsProjetos()}
      </div>

    </section>


    <section class="cta-section">

      <div class="cta-decoration"></div>

      <div class="cta-content">

        <span class="cta-label">
          Faça parte dessa história
        </span>

        <h2>
          Seu tempo pode transformar
          a vida de alguém.
        </h2>

        <p>
          Junte-se ao Instituto Transformar e participe de
          ações que buscam gerar impacto positivo na comunidade.
        </p>

        <div class="cta-actions">

          <a
            href="#cadastro"
            class="button button-light"
          >
            Quero ser voluntário
          </a>

          <a
            href="#projetos"
            class="button button-outline-light"
          >
            Conhecer projetos
          </a>

        </div>

      </div>

      <div class="cta-stat">

        <strong>
          Participe
        </strong>

        <span>
          faça parte de uma rede dedicada à transformação social
        </span>

      </div>

    </section>

  `;
}


export function templateProjetos() {
  return `

    <section class="projects-page">

      <div class="page-header">

        <span class="section-kicker">
          Instituto Transformar
        </span>

        <h1>
          Nossos projetos sociais
        </h1>

        <p>
          Conheça iniciativas que unem educação, esporte
          e assistência social para contribuir com o
          desenvolvimento da comunidade.
        </p>

      </div>

      <div class="cards-grid">
        ${cardsProjetos()}
      </div>

    </section>

  `;
}


export function templateCadastro() {
  return `

    <section
      aria-labelledby="titulo-cadastro"
      class="register-section"
    >

      <div class="register-intro">

        <span class="section-kicker">
          Faça parte
        </span>

        <h1>
          Transforme seu tempo em impacto.
        </h1>

        <p>
          Cadastre-se para participar dos projetos e ações
          do Instituto Transformar.
        </p>

        <div class="register-benefits">

          <span>
            ✓ Projetos sociais
          </span>

          <span>
            ✓ Trabalho voluntário
          </span>

          <span>
            ✓ Impacto comunitário
          </span>

        </div>

      </div>

      <div class="form-card">

        <h2 id="titulo-cadastro">
          Cadastro de colaboradores
        </h2>

        <p>
          Preencha seus dados para participar
          das iniciativas da ONG.
        </p>

        <form
          id="cadastroForm"
          novalidate
        >

          <fieldset>

            <legend>
              Dados pessoais
            </legend>

            <div class="field">

              <label for="nome">
                Nome completo
              </label>

              <input
                id="nome"
                name="nome"
                type="text"
                autocomplete="name"
                required
                minlength="3"
              >

              <small
                id="erro-nome"
                class="erro-texto"
                aria-live="polite"
              ></small>

            </div>

            <div class="field">

              <label for="email">
                E-mail
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
              >

              <small
                id="erro-email"
                class="erro-texto"
                aria-live="polite"
              ></small>

            </div>

            <div class="field">

              <label for="cpf">
                CPF
              </label>

              <input
                id="cpf"
                name="cpf"
                type="text"
                inputmode="numeric"
                placeholder="000.000.000-00"
                maxlength="14"
                required
                aria-describedby="erro-cpf"
              >

              <small
                id="erro-cpf"
                class="erro-texto"
                aria-live="polite"
              ></small>

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Contato e endereço
            </legend>

            <div class="field">

              <label for="telefone">
                Telefone
              </label>

              <input
                id="telefone"
                name="telefone"
                type="tel"
                inputmode="numeric"
                autocomplete="tel"
                placeholder="(00) 00000-0000"
                maxlength="15"
                required
                aria-describedby="erro-telefone"
              >

              <small
                id="erro-telefone"
                class="erro-texto"
                aria-live="polite"
              ></small>

            </div>

            <div class="field">

              <label for="cep">
                CEP
              </label>

              <input
                id="cep"
                name="cep"
                type="text"
                inputmode="numeric"
                autocomplete="postal-code"
                placeholder="00000-000"
                maxlength="9"
                required
                aria-describedby="erro-cep"
              >

              <small
                id="erro-cep"
                class="erro-texto"
                aria-live="polite"
              ></small>

            </div>

            <div class="field">

              <label for="cidade">
                Cidade
              </label>

              <input
                id="cidade"
                name="cidade"
                type="text"
                autocomplete="address-level2"
                required
              >

              <small
                id="erro-cidade"
                class="erro-texto"
                aria-live="polite"
              ></small>

            </div>

            <div class="field">

              <label for="estado">
                Estado
              </label>

              <select
                id="estado"
                name="estado"
                autocomplete="address-level1"
                required
              >

                <option value="">
                  Selecione
                </option>

                <option value="RJ">
                  Rio de Janeiro
                </option>

                <option value="SP">
                  São Paulo
                </option>

                <option value="MG">
                  Minas Gerais
                </option>

                <option value="ES">
                  Espírito Santo
                </option>

                <option value="OUTRO">
                  Outro
                </option>

              </select>

              <small
                id="erro-estado"
                class="erro-texto"
                aria-live="polite"
              ></small>

            </div>

          </fieldset>


          <fieldset>

            <legend>
              Forma de participação
            </legend>

            <div class="field">

              <label for="participacao">
                Como deseja colaborar?
              </label>

              <select
                id="participacao"
                name="participacao"
                required
              >

                <option value="">
                  Selecione
                </option>

                <option value="voluntario">
                  Trabalho voluntário
                </option>

                <option value="doador">
                  Doação
                </option>

              </select>

              <small
                id="erro-participacao"
                class="erro-texto"
                aria-live="polite"
              ></small>

            </div>

          </fieldset>


          <div class="form-actions">

            <button
              class="button secondary"
              type="reset"
            >
              Limpar
            </button>

            <button
              class="button primary"
              type="submit"
            >
              Enviar cadastro
            </button>

          </div>

        </form>

      </div>

    </section>

  `;
}