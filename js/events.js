import { aplicarMascaras, validarFormulario } from "./validation.js";
import { salvarCadastro } from "./storage.js";

let ultimoFoco = null;

function mostrarToast(mensagem, tipo = "success") {
  const regiao = document.querySelector("#toastRegion");

  const toast = document.createElement("div");
  toast.className = `toast ${tipo}`;
  toast.textContent = mensagem;

  regiao.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3500);
}

function abrirModal() {
  const backdrop = document.querySelector("#modalBackdrop");
  const fechar = document.querySelector("#modalClose");

  ultimoFoco = document.activeElement;

  backdrop.hidden = false;

  fechar.focus();
}

function fecharModal(restaurarFoco = true) {
  const backdrop = document.querySelector("#modalBackdrop");

  backdrop.hidden = true;

  if (restaurarFoco && ultimoFoco) {
    ultimoFoco.focus();
  }
}

export function configurarEventos() {
  const form = document.querySelector("#cadastroForm");

  if (form) {
    aplicarMascaras(form);

    form.addEventListener("submit", event => {
      event.preventDefault();

      if (!validarFormulario(form)) {
        mostrarToast(
          "Revise os campos destacados antes de enviar.",
          "error"
        );

        form.querySelector(".campo-erro")?.focus();

        return;
      }

      const dados = Object.fromEntries(
        new FormData(form).entries()
      );

      salvarCadastro({
        ...dados,
        criadoEm: new Date().toISOString()
      });

      form.reset();

      form
        .querySelectorAll(".campo-sucesso, .campo-erro")
        .forEach(elemento => {
          elemento.classList.remove(
            "campo-sucesso",
            "campo-erro"
          );

          elemento.removeAttribute("aria-invalid");
        });

      mostrarToast(
        "Cadastro enviado com sucesso!",
        "success"
      );
    });
  }

  const botaoAbrirModal =
    document.querySelector("#openModal");

  if (botaoAbrirModal) {
    botaoAbrirModal.addEventListener(
      "click",
      abrirModal
    );
  }
}

export function configurarEventosGlobais() {
  const menuToggle =
    document.querySelector("#menuToggle");

  const nav =
    document.querySelector("#mainNav");

  const contrastToggle =
    document.querySelector("#contrastToggle");

  const backdrop =
    document.querySelector("#modalBackdrop");

  const modalClose =
    document.querySelector("#modalClose");

  const modal =
    document.querySelector("#infoModal");

  menuToggle.addEventListener("click", () => {
    const aberto =
      nav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(aberto)
    );

    menuToggle.setAttribute(
      "aria-label",
      aberto
        ? "Fechar menu de navegação"
        : "Abrir menu de navegação"
    );
  });

  nav.addEventListener("click", event => {
    if (event.target.matches("a")) {
      nav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    }
  });

  contrastToggle.addEventListener(
    "click",
    () => {
      const ativo =
        document.body.classList.toggle(
          "alto-contraste"
        );

      contrastToggle.setAttribute(
        "aria-pressed",
        String(ativo)
      );

      localStorage.setItem(
        "alto-contraste",
        String(ativo)
      );
    }
  );

  if (
    localStorage.getItem("alto-contraste") ===
    "true"
  ) {
    document.body.classList.add(
      "alto-contraste"
    );

    contrastToggle.setAttribute(
      "aria-pressed",
      "true"
    );
  }

  modalClose.addEventListener(
    "click",
    () => fecharModal()
  );

  backdrop.addEventListener(
    "click",
    event => {
      if (event.target === backdrop) {
        fecharModal();
      }
    }
  );

  /*
   * Ao clicar em um link dentro do modal,
   * o modal fecha e a SPA continua a navegação.
   */
  modal.addEventListener("click", event => {
    const link =
      event.target.closest("a[href]");

    if (link) {
      fecharModal(false);
    }
  });

  document.addEventListener(
    "keydown",
    event => {
      if (
        event.key === "Escape" &&
        !backdrop.hidden
      ) {
        fecharModal();
      }
    }
  );
}