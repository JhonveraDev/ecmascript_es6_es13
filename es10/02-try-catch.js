try {
  data ? console.log('Positivo') : console.log('Negativo')
} catch {
  console.log("Error personalizado");
} finally {
  console.log("Yo siempre existire aqui este correcto o no");
}
