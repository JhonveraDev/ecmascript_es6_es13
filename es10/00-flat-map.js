//Flat
const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 3]]];
console.log(array.flat(3));
//Este Ejercicio Ahonda en la profundida del arreglo

//Flat Map
const array2 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(array2.flatMap((v) => [v, v * 2]));

var numeros = [1, 2, 3, 4, 5];

let numerosDuplicados = numeros.flatMap((numero) => {
  return [numero, numero];
});

console.log(numerosDuplicados)