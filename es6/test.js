function addNumbers(x, y, z, b) {
  return x + y + z + b;
}

const numbers = [1, 2, 3, 4];

const result = addNumbers(...numbers);

console.log(result); // Output: 6
