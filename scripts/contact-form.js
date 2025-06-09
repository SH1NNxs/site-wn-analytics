// Inicializa o EmailJS
emailjs.init("i3_dOgPD2WNsO3hFF"); // Substitua por sua public key

// Captura o formulário
const form = document.getElementById("form");
const button = document.getElementById("button");
const timeField = document.getElementById("time");

// Função para gerar a hora atual formatada
function gerarDataHoraAtual() {
  const agora = new Date();
  return agora.toLocaleString("pt-BR");
}

// Evento de envio do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Atualiza o campo oculto com a data/hora do envio
  timeField.value = gerarDataHoraAtual();

  button.value = "ENVIANDO...";

  const serviceID = 'default_service';       // Verifique se este é seu SERVICE ID real
  const templateID = 'template_xaxx5f9';     // Verifique se este é seu TEMPLATE ID real

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      button.value = "MENSAGEM ENVIADA ✔";
      alert("Sua mensagem foi enviada com sucesso!");
      form.reset(); // Limpa o formulário
    }, (err) => {
      button.value = "ENVIAR MENSAGEM";
      alert("Erro ao enviar mensagem. Tente novamente.\n" + JSON.stringify(err));
    });
});
