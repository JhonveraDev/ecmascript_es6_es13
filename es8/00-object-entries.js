const countries = { MX: "Mexico", CO: "Colombia", CL: "Chile" };

console.log(Object.values(countries));
//Devuelve solo los valores del objeto: Mexico, Colombia, Chile
console.log(Object.keys(countries));
//Imprime solo la llave principal del Objeto: MX, CO, CL
console.log(Object.entries(countries));
//Imprime de manera organizada el objeto con arreglo interno 