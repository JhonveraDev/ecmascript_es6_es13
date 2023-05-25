function newUser(user, age, country, uId = 50) {
  return {
    user,
    age,
    country,
    uId,
  };
}

console.log(newUser("Alma", 18, "Colombia"));

let libro = {
  author: "James Cameroon",
  title: "Life",
  publisher: "Black Hat",
  countries: ["MX", "CO", "CH", "AR"],
  details: {
    color: "white",
    material: "Hardcover",
    subtitles: ["A", "B", "C"],
    clasifications: {
      west: "AA",
      north: "BB",
      south: "ABAB",
    },
  },
  getDataFunction: function () {
    return (
      "The real author is " +
      this.author +
      "The book was published in " +
      this.countries +
      "it main Details are" +
      this.details.material +
      "and" +
      this.details.color +
      "but the main subtitle suggested by the author" +
      this.details.subtitles[1]
    );
  },
};

console.log(libro.getDataFunction());
