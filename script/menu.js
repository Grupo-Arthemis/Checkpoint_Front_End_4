const menuLateralCompleto = document.querySelector('.menu-lateral-completo');
const abrirMenu = document.querySelector('.hamburguer');
const fecharMenu = document.querySelector('.menu-lateral-close');

abrirMenu.addEventListener('click', () => {
  menuLateralCompleto.classList.toggle('open');
  menuLateralCompleto.style.animation = 'entrar 0.5s ease-in-out';
});

fecharMenu.addEventListener('click', () => {
  menuLateralCompleto.style.animation = 'sair 0.5s ease-in-out';
  setTimeout(() => {
    menuLateralCompleto.classList.toggle('open');
  }, 500);
});


