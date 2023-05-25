let list = ["Andres", "ana", "Diego", "Julia"];

list.forEach(function (str, index) {
  list[index] = str.toLowerCase();
});

let entrada = "ANdreS";
let entradaLoweCase = entrada.toLowerCase();
console.log(list.includes(entradaLoweCase));
