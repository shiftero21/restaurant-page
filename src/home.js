import rstImage from "./salonPanoramico.jpg";

export function homeTab () {
  const homePage = document.createElement('div');
  homePage.id = 'home';
  const homeTitle = document.createElement('h1');
  homeTitle.textContent = 'HOME';
  homePage.appendChild(homeTitle);
  const homeDescription = document.createElement('p');
  homeDescription.textContent = '¡Descubre el sabor que transforma cada comida en una experiencia inolvidable! En [Nombre del Restaurante] ademas, combinamos ingredientes frescos, recetas únicas y un ambiente acogedor para ofrecerte lo mejor de la gastronomía.';
  homePage.appendChild(homeDescription);
  const imgResto = document.createElement("img");
  imgResto.src = rstImage;
  imgResto.classList.add('home-image');
  homePage.appendChild(imgResto);
  document.getElementById('contenido').appendChild(homePage);

}