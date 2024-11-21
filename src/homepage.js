
export function populateContent () {

// Seleccionar el div existente en el HTML
const content = document.getElementById("content");

// Datos para los elementos
const elementos = [
  { tag: "h1", text: "HOME" },
  { tag: "p", text: "¡Descubre el sabor que transforma cada comida en una experiencia inolvidable! En [Nombre del Restaurante], combinamos ingredientes frescos, recetas únicas y un ambiente acogedor para ofrecerte lo mejor de la gastronomía." },
  { tag: "h3", text: "Sabores que enamoran" },
  { tag: "p", text: "Desde clásicos reinventados hasta platos contemporáneos, nuestro menú está diseñado para deleitar todos los paladares. Ya sea que busques un almuerzo rápido, una cena especial o un momento para compartir con amigos, encontrarás el platillo perfecto aquí." },
  { tag: "h3", text: "Compromiso con la calidad" },
  { tag: "p", text: "Cada detalle cuenta: seleccionamos los mejores ingredientes y preparamos cada plato con pasión y dedicación. Porque creemos que la comida es más que alimento; es una forma de conectar y celebrar." },
  { tag: "h4", text: "Visítanos" },
  { tag: "p", text: "Ven y vive una experiencia gastronómica única. Estamos ubicados en [dirección del restaurante] y esperamos darte la bienvenida muy pronto. Reserva tu mesa ahora o pasa sin previo aviso. ¡Estamos listos para sorprenderte!" },
];

// Crear y agregar los elementos dinámicamente
elementos.forEach(({ tag, text }) => {
  const elemento = document.createElement(tag);
  elemento.textContent = text;
  content.appendChild(elemento);
});

}


