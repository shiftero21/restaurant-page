console.log("prueba");

import { homeTab } from "./home";
import { menuTab } from "./menu";
import { contactTab } from "./contact";
import "./styles/main.css" 
document.addEventListener('DOMContentLoaded', homeTab);
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', (e) => {
    handleTabClick(e.target.id);
  });
});

function handleTabClick(tabId) {
  clearContent();
  
  switch(tabId) {
    case 'home':
      homeTab();
      break;
    case 'menu':
      menuTab();
      break;
    case 'contact':
      contactTab();
      break;
    default:
      homeTab();
  }
}

//funcion para borrar el contenido de content antes de agregar el nuevo contenido
function clearContent() {
  document.getElementById('contenido').innerHTML = '';
}

// const contenido = document.getElementById('contenido');
// if (contenido) {
//   console.log('Content exists');
//   console.log(getComputedStyle(contenido)); // Revisa los estilos aplicados
// } else {
//   console.error('Content not found!');
// }
