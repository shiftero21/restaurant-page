console.log("prueba");

import { homeTab } from "./home";
import { menuTab } from "./menu";
import { contactTab } from "./contact";
import "./styles/home.css" 
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
  document.getElementById('content').innerHTML = '';
}
