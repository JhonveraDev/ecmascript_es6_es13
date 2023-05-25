const datos = [
  {
    id: 1,
    name: "Iron Man",
    year: 2008,
  },
  {
    id: 2,
    name: "Spider Man",
    year: 2017,
  },
  {
    id: 3,
    name: "Avengers End Game",
    year: 2019,
  },
];

const getDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(datos);
    }, 1500);
  });
};

//getDatos().then((datos) => console.log(datos));

async function fetching() {
  try {
    const data = await getDatos();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

fetching();

const ElementData = [
  {
    id: 1,
    name: "Iron Man",
    year: 2008,
  },
  {
    id: 2,
    name: "Spider Man",
    year: 2017,
  },
  {
    id: 3,
    name: "Avengers End Game",
    year: 2019,
  },
  {
    id: 4,
    name: "Gatos con Botas",
    year: 2023,
  },
];

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      success
        ? resolve(ElementData[1].name)
        : reject(console.log("Error Fatal!"));
    }, 1500);
  });
};

async function viewData () {
  try {
    const viewName = await getData();
    console.log(viewName)
  } catch (error) {
    console.log(error)
  }
}

viewData()

getData()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
