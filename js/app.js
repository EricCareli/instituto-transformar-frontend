import { templateInicio, templateProjetos, templateCadastro } from "./templates.js";
import { configurarEventos, configurarEventosGlobais } from "./events.js";

const routes = {
  inicio: templateInicio,
  projetos: templateProjetos,
  cadastro: templateCadastro
};

function renderRoute() {
  const app = document.querySelector("#app");
  const route = window.location.hash.replace("#", "") || "inicio";
  const template = routes[route] || routes.inicio;

  app.innerHTML = template();
  configurarEventos();
  app.focus();
}

window.addEventListener("hashchange", renderRoute);

window.addEventListener("DOMContentLoaded", () => {
  configurarEventosGlobais();
  renderRoute();
});
