const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const regexTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
const regexCEP = /^\d{5}-\d{3}$/;

function marcarCampo(campo, mensagem) {
  const erro = document.querySelector(`#erro-${campo.id}`);
  const invalido = Boolean(mensagem);

  campo.classList.toggle("campo-erro", invalido);
  campo.classList.toggle("campo-sucesso", !invalido && campo.value.trim() !== "");
  campo.setAttribute("aria-invalid", String(invalido));

  if (erro) erro.textContent = mensagem;
  return !invalido;
}

export function validarFormulario(form) {
  const nome = form.nome;
  const email = form.email;
  const cpf = form.cpf;
  const telefone = form.telefone;
  const cep = form.cep;
  const cidade = form.cidade;
  const estado = form.estado;
  const participacao = form.participacao;

  const resultados = [
    marcarCampo(nome, nome.value.trim().length >= 3 ? "" : "Informe o nome completo."),
    marcarCampo(email, email.validity.valid ? "" : "Digite um e-mail válido."),
    marcarCampo(cpf, regexCPF.test(cpf.value) ? "" : "Use o formato 000.000.000-00."),
    marcarCampo(telefone, regexTelefone.test(telefone.value) ? "" : "Use o formato (00) 00000-0000."),
    marcarCampo(cep, regexCEP.test(cep.value) ? "" : "Use o formato 00000-000."),
    marcarCampo(cidade, cidade.value.trim() ? "" : "Informe a cidade."),
    marcarCampo(estado, estado.value ? "" : "Selecione o estado."),
    marcarCampo(participacao, participacao.value ? "" : "Selecione uma forma de participação.")
  ];

  return resultados.every(Boolean);
}

export function aplicarMascaras(form) {
  const soNumeros = valor => valor.replace(/\D/g, "");

  form.cpf.addEventListener("input", event => {
    let v = soNumeros(event.target.value).slice(0, 11);
    event.target.value = v
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  });

  form.telefone.addEventListener("input", event => {
    let v = soNumeros(event.target.value).slice(0, 11);
    event.target.value = v
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
  });

  form.cep.addEventListener("input", event => {
    let v = soNumeros(event.target.value).slice(0, 8);
    event.target.value = v.replace(/(\d{5})(\d)/, "$1-$2");
  });
}
