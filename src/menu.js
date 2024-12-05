import pastaPesto from './plates/pasta-al-pesto.jpg';
import salmon from './plates/salmon-parilla.jpg';
import risotto from './plates/risotto-hongos.jpg';
import ribs from './plates/costillas-bbq.jpg';

// Data structure for plates
const plates = [
  { image: pastaPesto, name: "Pasta al Pesto", description: "Linguini artesanal con salsa pesto fresca, piñones tostados y parmesano añejo", price: "$18.99" },
  { image: salmon, name: "Salmón a la Parrilla", description: "Filete de salmón fresco con salsa de cítricos, servido con vegetales de temporada", price: "$24.99" },
  { image: risotto, name: "Risotto de Hongos", description: "Arroz arborio cremoso con variedad de hongos silvestres y trufa negra", price: "$21.99" },
  { image: ribs, name: "Costillas BBQ", description: "Costillas de cerdo cocidas a fuego lento con salsa barbacoa casera y puré de papas", price: "$26.99" },
];

// Function to create a single plate
function createPlate({ image, name, description, price }) {
  const plateDiv = document.createElement('div');
  plateDiv.classList.add('menu-item');
  plateDiv.innerHTML = `
    <img src="${image}" alt="${name}">
    <h3>${name}</h3>
    <p>${description}</p>
    <p class="price">${price}</p>
  `;
  return plateDiv;
}

// Main function to generate the menu
export function menuTab() {
  const menuPage = document.createElement('div');
  menuPage.id = 'menu';

  const menuTitle = document.createElement('h1');
  menuTitle.textContent = 'Sabores que enamoran';
  menuPage.appendChild(menuTitle);

  const menuDescription = document.createElement('p');
  menuDescription.textContent = 'Desde clásicos reinventados hasta platos contemporáneos, nuestro menú está diseñado para deleitar todos los paladares.';
  menuPage.appendChild(menuDescription);

  const menuGrid = document.createElement('div');
  menuGrid.classList.add('menu-grid');

  plates.forEach(plate => menuGrid.appendChild(createPlate(plate)));

  menuPage.appendChild(menuGrid);
  document.getElementById('contenido').appendChild(menuPage);
}
