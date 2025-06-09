// js/contact-form.js

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');
  const btn = document.querySelector('button[type="submit"]');

  // Inicializa o EmailJS com sua public key
  emailjs.init('i3_dOgPD2WNsO3hFF'); // Substitua pela sua PUBLIC KEY se for diferente

  // Preenche automaticamente o campo oculto de hora
  const timeField = document.getElementById('time');
  if (timeField) {
    timeField.value = new Date().toLocaleString('pt-BR');
  }

  // Listener de envio do formulário
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    btn.innerText = 'Enviando...';
    btn.disabled = true;

    const serviceID = 'default_service';       // Verifique se este é seu SERVICE ID real
    const templateID = 'template_xaxx5f9';     // Verifique se este é seu TEMPLATE ID real

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        btn.innerText = 'Mensagem Enviada!';
        alert('Sua mensagem foi enviada com sucesso!');
        form.reset();
        btn.disabled = false;
        btn.innerText = 'Enviar Mensagem';
      })
      .catch((error) => {
        console.error('Erro ao enviar:', error);
        alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.');
        btn.disabled = false;
        btn.innerText = 'Enviar Mensagem';
      });
  });
});
