// js/responsive.js

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.caixa-menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('ativo');
    });
  }
});
