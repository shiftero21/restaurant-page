export function contactTab () {
  const contactPage = document.createElement('div');
  contactPage.id = 'contact';
  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Veni a visitarnos ';
  contactPage.appendChild(contactTitle);
  const contactDescription = document.createElement('p');
  contactDescription.textContent = 'Estamos ubicados en [dirección del restaurante] y esperamos darte la bienvenida muy pronto. Reserva tu mesa ahora o pasa sin previo aviso. ¡Estamos listos para sorprenderte!';
  contactPage.appendChild(contactDescription);
  document.getElementById('content').appendChild(contactPage);
}