// arrays Destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);

let user = { username: "Oscar", age: 32 };
let { username, age } = user;
console.log(user);

let userData = {
  username: "Oscar",
  age: 32,
};

console.log(userData.username);

//Spread Operator

let person = { name: "Oscar", age: 28, city: "Ibagué" };
let country = "Colombia";
let personAge = person.age;
let data = { id: 1, ...person, country, personAge };

console.log(personAge);
console.log(data);

//Rest
function sum(num, ...values) {
  console.log(num);
  console.log(num + values);
}

sum(1, 2, 3, 4, 5);

//Default params and spread operator
function cat(json1, json2) {
  json1 = json1 || { name: "Mr. Michi", food: "Pescado" };
  json2 = json2 || { age: 4, color: "Negro" };

  const completeData = { ...json1, json2 };
  console.log(completeData);
  return completeData;
}

let data1 = { name: "Mr. Manchas", food: "Carnes" };
let data2 = { age: 4, color: "Cafe" };

cat(data1, data2);

//read a test.txt file and print this content

//----------------------------------------//
function person(data1, data2) {
  data1 = data1 || { name: "Andrea", age: 32, country: "Colombia", CC: true };
  data2 = data2 || { profession: "Engineer", profileOnLinkedin: true };
  const fullData = { ...data1, ...data2 };
  return fullData;
}

const arrayElements1 = { name: "Cami", age: 26, country: "MX", CC: true };
const arrayElements2 = { profession: "Contadora", profileOnLinkedin: true };

console.log(person());
console.log(person(arrayElements1, arrayElements2));

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array1, ...array2];
console.log(array3);
