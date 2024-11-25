export function menuTab () {
  const menuPage = document.createElement('div');
  menuPage.id = 'menu';
  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Sabores que enamoran';
  menuPage.appendChild(menuTitle);
  const menuDescription = document.createElement('p');
  menuDescription.textContent = 'Desde clásicos reinventados hasta platos contemporáneos, nuestro menú está diseñado para deleitar todos los paladares. Ya sea que busques un almuerzo rápido, una cena especial o un momento para compartir con amigos, encontrarás el platillo perfecto aquí.';
  menuPage.appendChild(menuDescription);
  document.getElementById('contenido').appendChild(menuPage);
}