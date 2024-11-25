import pastaPesto from './plates/pasta-al-pesto.jpg';
import salmon from './plates/salmon-parilla.jpg';
import risotto from './plates/risotto-hongos.jpg';
import ribs from './plates/costillas-bbq.jpg';

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
  //add plates may be a grid
  const menuGrid = document.createElement('div');
  menuGrid.style.display = 'grid';
  menuGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
  menuGrid.style.gap = '2rem';
  menuGrid.style.marginTop = '2rem';

  const plate1 = document.createElement('div');
  plate1.innerHTML = `
    <img src="${pastaPesto}" alt="Pasta al Pesto">
    <h3>Pasta al Pesto</h3>
    <p>Linguini artesanal con salsa pesto fresca, piñones tostados y parmesano añejo</p>
    <p class="price">$18.99</p>
  `;

  const plate2 = document.createElement('div');
  plate2.innerHTML = `
    <img src="${salmon}" alt="Salmón a la Parrilla">
    <h3>Salmón a la Parrilla</h3>
    <p>Filete de salmón fresco con salsa de cítricos, servido con vegetales de temporada</p>
    <p class="price">$24.99</p>
  `;

  const plate3 = document.createElement('div');
  plate3.innerHTML = `
    <img src="${risotto}" alt="Risotto de Hongos">
    <h3>Risotto de Hongos</h3>
    <p>Arroz arborio cremoso con variedad de hongos silvestres y trufa negra</p>
    <p class="price">$21.99</p>
  `;

  const plate4 = document.createElement('div');
  plate4.innerHTML = `
    <img src="${ribs}" alt="Costillas BBQ">
    <h3>Costillas BBQ</h3>
    <p>Costillas de cerdo cocidas a fuego lento con salsa barbacoa casera y puré de papas</p>
    <p class="price">$26.99</p>
  `;

  [plate1, plate2, plate3, plate4].forEach(plate => {
    plate.style.padding = '1rem';
    plate.style.backgroundColor = '#fff';
    plate.style.borderRadius = '8px';
    menuGrid.appendChild(plate);
  });

  menuPage.appendChild(menuGrid);

}
