const entries = new Map([
  ["name", "oscar"],
  ["age", 28],
  ["color", "black"],
]);

console.log(entries);
console.log(Object.fromEntries(entries));

const properties = ["name", "age", "city"];
const values = ["John", 25, "New York"];

const obj = Object.fromEntries(
  properties.map((prop, index) => [prop, values[index]])
);

console.log(obj);

const originalObj = { a: 1, b: 2, c: 3 };

const reversalObj = Object.fromEntries(
  Object.entries(originalObj).map(([key, value]) => [value, key])
);

console.log(reversalObj);

const arr = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" },
];

const dataObj = Object.fromEntries(arr.map((item) => [item.name, item.id]));
console.log(dataObj);

const map = new Map([
  ["x", 1],
  ["y", 2],
  ["z", 3],
]);
const dataso = Object.fromEntries(map);
console.log(dataso);

//Crear un objeto a partir de un arreglo de propiedades y un arreglo de valores:

const propertiess = ["name", "age", "city"];
const valuess = ["John", 25, "New York"];

const objPerson = Object.fromEntries(
  propertiess.map((prop, index) => [prop, valuess[index]])
);

console.log(objPerson);

const o = { a: 1, b: 2, c: 3, d: 4 };

const filterObj = Object.fromEntries(
  Object.entries(o).filter(([key, value]) => value >= 2)
);

console.log(filterObj);

const array = [
  ["name", "jack"],
  ["age", 26],
  ["designation", "SE"],
];

const arrayObj = Object.fromEntries(array);
console.log(arrayObj);


const a = ["name", "age", "city"];
const b = ["John", 25, "New York"];
const d = ["Carla", 18, "Colombia"];

