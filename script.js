document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("i3_dOgPD2WNsO3hFF"); // Seu public key

  const form = document.getElementById("form");
  const button = document.getElementById("button");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    button.textContent = "Enviando...";

    // Define o campo oculto de horário
    const now = new Date();
    const dataFormatada = now.toLocaleString("pt-BR");
    document.getElementById("time").value = dataFormatada;

    const serviceID = "default_service";
    const templateID = "template_xaxx5f9";

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        button.textContent = "Mensagem Enviada!";
        alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
        form.reset();
        setTimeout(() => (button.textContent = "Enviar Mensagem"), 3000);
      })
      .catch((err) => {
        button.textContent = "Enviar Mensagem";
        alert("Erro ao enviar. Tente novamente.\n" + JSON.stringify(err));
      });
  });
});
