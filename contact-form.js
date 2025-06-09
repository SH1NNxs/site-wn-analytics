// js/contact-form.js

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('form button[type="submit"]');
  const form = document.querySelector('form');

  // Preenche automaticamente o campo de data/hora (oculto)
  const timeInput = document.getElementById('time');
  if (timeInput) {
    const now = new Date();
    timeInput.value = now.toLocaleString('pt-BR');
  }

  emailjs.init('i3_dOgPD2WNsO3hFF'); // Substitua pela sua PUBLIC KEY do EmailJS

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    btn.textContent = 'Enviando...';

    const serviceID = 'default_service';       // ID do serviço (padrão)
    const templateID = 'template_xaxx5f9';     // Substitua pelo ID real do seu template

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btn.textContent = 'Mensagem Enviada!';
        alert('Sua mensagem foi enviada com sucesso!');
        form.reset();
      })
      .catch((err) => {
        btn.textContent = 'Enviar Mensagem';
        alert('Erro ao enviar. Tente novamente mais tarde.\n' + JSON.stringify(err));
      });
  });
});
