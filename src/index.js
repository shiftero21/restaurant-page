console.log("prueba");


import rstImage from "./salonPanoramico.jpg";

const imgResto = document.createElement("img");
imgResto.src = rstImage;
//probar cambiar de lugar con insertBefore
document.getElementById('content').appendChild(imgResto);