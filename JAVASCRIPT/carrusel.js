/*
Este código es para realizar la función de los botones que si le das pase de imagen en el carrousel de imágenes.
*/
// Variables
// Array con las imágenes del trello de la base de datos
var imagenes_Trello_BBDD = ['../IMAGENES/Trello_BBDD1.jpg', '../IMAGENES/Trello_BBDD2.jpg', '../IMAGENES/Trello_BBDD3.jpg', '../IMAGENES/Trello_BBDD4.jpg', '../IMAGENES/Trello_BBDD5.jpg', '../IMAGENES/Trello_BBDD6.jpg', '../IMAGENES/Trello_BBDD7.jpg', '../IMAGENES/Trello_BBDD8.jpg', '../IMAGENES/Trello_BBDD9.jpg', '../IMAGENES/Trello_BBDD10.jpg', '../IMAGENES/Trello_BBDD11.jpg', '../IMAGENES/Trello_BBDD12.jpg'];
var cont_T_BBDD = 0;
// Array con las imágenes del trello de los bocetos de las ventanas
var imagenes_Trello_BDLV = ['../IMAGENES/Trello_BDLV1.jpg', '../IMAGENES/Trello_BDLV2.jpg', '../IMAGENES/Trello_BDLV3.jpg', '../IMAGENES/Trello_BDLV4.jpg', '../IMAGENES/Trello_BDLV5.jpg', '../IMAGENES/Trello_BDLV6.jpg', '../IMAGENES/Trello_BDLV7.jpg', '../IMAGENES/Trello_BDLV8.jpg', '../IMAGENES/Trello_BDLV9.jpg', '../IMAGENES/Trello_BDLV10.jpg', '../IMAGENES/Trello_BDLV11.jpg', '../IMAGENES/Trello_BDLV12.jpg'];
var cont_T_BDLV = 0;
// Array con las imágenes del trello de la organización del código java
var imagenes_Trello_DDP = ['../IMAGENES/Trello_DDP1.png', '../IMAGENES/Trello_DDP2.png', '../IMAGENES/Trello_DDP3.png', '../IMAGENES/Trello_DDP4.png', '../IMAGENES/Trello_DDP5.png', '../IMAGENES/Trello_DDP6.png', '../IMAGENES/Trello_DDP7.png'];
var cont_T_DDP = 0;
// Array con las imágenes del trello de las pruebas de JUnit4
var imagenes_Trello_PJU4 = ['../IMAGENES/Trello_PJU41.png', '../IMAGENES/Trello_PJU42.png', '../IMAGENES/Trello_PJU43.png', '../IMAGENES/Trello_PJU44.png', '../IMAGENES/Trello_PJU45.png', '../IMAGENES/Trello_PJU46.png', '../IMAGENES/Trello_PJU47.png', '../IMAGENES/Trello_PJU48.png', '../IMAGENES/Trello_PJU49.png', '../IMAGENES/Trello_PJU410.png'];
var cont_T_PJU4 = 0;
// Array con las imágenes de las reuniones realizadas
var imagenes_R = ['../IMAGENES/P_1.png', '../IMAGENES/R_5.jpg', '../IMAGENES/R_1.jpg', '../IMAGENES/R_2.jpg', '../IMAGENES/R_3.jpg', '../IMAGENES/R_4.jpg', '../IMAGENES/P_2.png', '../IMAGENES/R_6.png', '../IMAGENES/R_7.png', '../IMAGENES/R_8.png', '../IMAGENES/P_3.png', '../IMAGENES/R_9.png', '../IMAGENES/R_10.png', '../IMAGENES/P_4.png', '../IMAGENES/R_11.png', '../IMAGENES/R_12.png', '../IMAGENES/R_13.png', '../IMAGENES/P_5.png', '../IMAGENES/R_14.png', '../IMAGENES/R_15.png', '../IMAGENES/R_16.png', '../IMAGENES/P_6.png', '../IMAGENES/R_17.png', '../IMAGENES/R_18.png', '../IMAGENES/R_19.png', '../IMAGENES/R_20.png', '../IMAGENES/P_7.png', '../IMAGENES/R_21.png', '../IMAGENES/R_22.png'];
var cont_R = 0;
// Array con las imágenes de la organización del drive
var imagenes_Drive = ['../IMAGENES/OR_Drive.jpg', '../IMAGENES/Drive1.jpg', '../IMAGENES/Drive2.jpg', '../IMAGENES/Drive3.jpg', '../IMAGENES/Drive4.jpg', '../IMAGENES/Drive5.jpg'];
var cont_Drive = 0;
/*
En esta función necesitas 3 parametros que son:
    - El contenedor que indica que contenedor se tiene que ejecutar.
    - Las imágenes donde le paso el array de imágenes.
    - La variable contador que es un numerico que nos sirve como contador.
una vez intyroducido los 3 parametros cuando realices un click va a coger las clases 
indicadas y dependiendo del contador y si le da a la clase .atras o .adelante
realizara una cosa u otra.
*/
function carrousel(contenedor, imagenes, variableCont) {
  contenedor.addEventListener('click', e => {
    let atras = contenedor.querySelector('.atras'),
      adelante = contenedor.querySelector('.adelante'),
      img = contenedor.querySelector('img'),
      tgt = e.target;
    // Mientras el botón sea atras realizar lo siguiente
    if (tgt == atras) {
        // Si la variable contador es mayor a 0 va restando de lo contrario va a la ultima imágen.
      if (variableCont > 0) {
        img.src = imagenes[variableCont - 1];
        variableCont--;
      } else {
        img.src = imagenes[imagenes.length - 1];
        variableCont = imagenes.length - 1;
      }
    // Mientras el botón sea adelante realizar lo siguiente
    } else if (tgt == adelante) {
        // Si la variable contador es menor a la longitud del array -1 va sumando de lo contrario va a la primera posición.
      if (variableCont < imagenes.length - 1) {
        img.src = imagenes[variableCont + 1];
        variableCont++;
      } else {
        img.src = imagenes[0];
        variableCont = 0;
      }
    }
  });
}
// Llamada a la función con los diferentes parametros para los diferentes carrousel
// Este es un evento de escucha para la clase .contenedor_ca que ejecuta la función anterior.
document.addEventListener("DOMContentLoaded", () => {
  let contenedor1 = document.querySelector('.contenedor_ca');
  carrousel(contenedor1, imagenes_Trello_BBDD, cont_T_BBDD);
});
// Este es un evento de escucha para la clase .contenedor_ca2 que ejecuta la función anterior.
document.addEventListener("DOMContentLoaded", () => {
  let contenedor2 = document.querySelector('.contenedor_ca2');
  carrousel(contenedor2, imagenes_Trello_BDLV, cont_T_BDLV);
});
// Este es un evento de escucha para la clase .contenedor_ca3 que ejecuta la función anterior.
document.addEventListener("DOMContentLoaded", () => {
  let contenedor3 = document.querySelector('.contenedor_ca3');
  carrousel(contenedor3, imagenes_Trello_DDP, cont_T_DDP);
});
// Este es un evento de escucha para la clase .contenedor_ca4 que ejecuta la función anterior.
document.addEventListener("DOMContentLoaded", () => {
  let contenedor4 = document.querySelector('.contenedor_ca4');
  carrousel(contenedor4, imagenes_Trello_PJU4, cont_T_PJU4);
});
// Este es un evento de escucha para la clase .contenedor_ca5 que ejecuta la función anterior.
document.addEventListener("DOMContentLoaded", () => {
  let contenedor5 = document.querySelector('.contenedor_ca5');
  carrousel(contenedor5, imagenes_R, cont_R);
});
// Este es un evento de escucha para la clase .contenedor_ca6 que ejecuta la función anterior.
document.addEventListener("DOMContentLoaded", () => {
  let contenedor6 = document.querySelector('.contenedor_ca6');
  carrousel(contenedor6, imagenes_Drive, cont_Drive);
});