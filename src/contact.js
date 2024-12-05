const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2199.5999406743404!2d-58.40515692468968!3d-34.581267731665534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca8fe0d423dd%3A0x178f8021662e036b!2sLmzambrelli%20%26%20Co!5e0!3m2!1sen!2sar!4v1732813192753!5m2!1sen!2sar";

export function contactTab() {
  const contactPage = createContactPage();
  document.getElementById('contenido').appendChild(contactPage);
}

function createContactPage() {
  const contactPage = document.createElement('div');
  contactPage.id = 'contact';
  contactPage.appendChild(createContactTitle());
  contactPage.appendChild(createContactDescription());
  contactPage.appendChild(createMapContainer());
  return contactPage;
}

function createContactTitle() {
  const contactTitle = document.createElement('h1');
  contactTitle.textContent = 'Veni a visitarnos ';
  return contactTitle;
}

function createContactDescription() {
  const contactDescription = document.createElement('p');
  contactDescription.textContent = 'Estamos ubicados en [dirección del restaurante] y esperamos darte la bienvenida muy pronto. Reserva tu mesa ahora o pasa sin previo aviso. ¡Estamos listos para sorprenderte!';
  return contactDescription;
}

function createMapContainer() {
  const mapContainer = document.createElement('div');
  mapContainer.style.display = 'flex';
  mapContainer.style.justifyContent = 'center';
  mapContainer.style.marginTop = '20px'; // Espaciado opcional
  mapContainer.appendChild(createMapIframe(MAP_SRC)); // Usar la constante aquí
  return mapContainer;
}

function createMapIframe(src) {
  const mapIframe = document.createElement('iframe');
  mapIframe.src = src; // Ahora acepta el src como argumento
  mapIframe.width = "600";
  mapIframe.height = "450";
  mapIframe.style.border = "0";
  mapIframe.allowFullscreen = true;
  mapIframe.loading = "lazy";
  mapIframe.referrerPolicy = "no-referrer-when-downgrade";
  return mapIframe;
}