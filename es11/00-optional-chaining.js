const users = {
  ana: {
    age: 25,
    country: "MX",
  },
  juan: {
    age: 21,
    country: "CO",
  },
  ruben: {
    country: {
      district: 'Castilla'
    },
  },
};

console.log(users.ana.age);
console.log(users.pedro?.country);
console.log(users.ruben.country?.city);



const persona = {
  nombre: 'Juan',
  edad: 30,
  direccion: null
};

// Accediendo a la propiedad sin optional chaining
const ciudad = persona.direccion?.ciudad;
console.log(ciudad);