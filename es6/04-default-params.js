function newUser(name, age, country) {
  var name = name || "Oscar";
  var age = age || "34";
  var country = country || "MX";
  console.log(name, age, country);
}

newUser();

function newAdmin(name = "Laura", age = 25, country = "CL") {
  console.log(name, age, country);
} // VALORES POR DEFECTO

newAdmin("Diego", 85, "MX");



function saludar(persona = "Amigo") {
  return "Hoola " + persona + " Que bueno verte";
}

console.log(saludar());
console.log(saludar("Dieguito"));
