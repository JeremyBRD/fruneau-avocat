
function hamburger() {
  const btnCircle = document.querySelector('.btn-circle');
  btnCircle.addEventListener('click', () => {
    const circleMenu = document.querySelector('.circle-menu');
    btnCircle.classList.toggle('menu-anim');
    circleMenu.classList.toggle('circle-anim');
  
  })
}

export { hamburger }
