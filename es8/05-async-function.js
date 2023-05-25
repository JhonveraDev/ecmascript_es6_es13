const fnAsync = () => {
  return new Promise((resolve, reject) => {
    true ? setTimeout(() => resolve("Async!!"), 2000) : reject(Error("Error"));
  });
};

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log("Hello!!");
};

console.log("Before");
anotherFn();
console.log("After");

const fetchUserData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const userData = await response.json();
  return userData;
};

console.log("Iniciando la solicitud de datos...");

fetchUserData().then((userData) => {
  console.log("Datos de usuario recibidos:", userData);
});

const data = [
  {
    title: "Aprendiendo JS",
    year: 2023,
    isbn: "979-870010",
    author: "Wallas",
  },
  {
    title: "Aprendiendo REACT",
    year: 2022,
    isbn: "374-876310",
    author: "Wallas",
  },
  {
    title: "Aprendiendo ANGULAR",
    year: 2021,
    isbn: "279-899910",
    author: "Kubi",
  },
];

function getData() {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject(new Error("Data is Empty"));
    } else {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    }
  });
}

async function fetchingData() {
  const books = await getData();
  console.log(books);
}

fetchingData();
