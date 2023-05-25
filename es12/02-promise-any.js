const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve2"));

Promise.any([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

// Función simulada que devuelve una promesa con un tiempo de espera aleatorio
function hacerSolicitud(id) {
  return new Promise((resolve, reject) => {
    const tiempoEspera = Math.random() * 3000; // Tiempo de espera aleatorio entre 0 y 3 segundos
    setTimeout(() => {
      if (id === 3) {
        reject(`Error en la solicitud ${id}`); // Simulando un error en la solicitud con ID 3
      } else {
        resolve(`Respuesta exitosa de la solicitud ${id}`);
      }
    }, tiempoEspera);
  });
}

// Conjunto de solicitudes
const solicitudes = [
  hacerSolicitud(1),
  hacerSolicitud(2),
  hacerSolicitud(3),
  hacerSolicitud(4),
];

// Utilizando Promise.any() para obtener la primera respuesta exitosa
Promise.any(solicitudes)
  .then((respuesta) => {
    console.log(respuesta); // Imprime la respuesta exitosa
  })
  .catch((error) => {
    console.log(error); // Captura el error si todas las solicitudes fallan
  });
