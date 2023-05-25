const string =
  "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos";

const replaceString = string.replace("Ipsum", "DATAFONO");
console.log(replaceString);



const inputText = "If you're happy and you know it clap your hands clap clap";
const emojiReplace = (text) => {
  emoJized = text.replaceAll("clap", "👏🏻");
  emoJized = emoJized.replaceAll("happy", "😀");
  return emoJized;
};

console.log(emojiReplace(inputText));
