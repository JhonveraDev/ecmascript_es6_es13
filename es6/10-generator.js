function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Oscar", "David", "Alejandro"]);

console.log(it.next().value);
console.log(it.next().value);


function* serie() {
  yield 1;
  yield 10;
  yield 100;
  yield 1000;
}

const numberSerie = serie();
console.log(numberSerie.next())
console.log(numberSerie.next())