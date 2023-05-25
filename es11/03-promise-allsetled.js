const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve2"));

Promise.allSettled([promise1, promise2, promise3]).then((response) =>
  console.log(response)
);

const promesa1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 1 resuelta");
  }, 2000);
});

const promesa2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promesa 2 rechazada");
  }, 3000);
});

const promesa3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa 3 resuelta");
  }, 2500);
});

Promise.allSettled([promesa1, promesa2, promesa3]).then((resultados) => {
  resultados.forEach((resultado) => {
    if (resultado.status === "fulfilled") {
      console.log("Promesa cumplida:", resultado.value);
    } else if (resultado.status === "rejected") {
      console.log("Promesa rechazada:", resultado.reason);
    }
  });
});
