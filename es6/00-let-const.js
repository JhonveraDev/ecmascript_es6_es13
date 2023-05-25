const fruits = () => {
  if (true) {
    var fruit1 = "Apple"; //Global Scope
    let fruit2 = "Kiwi"; //Block Scope
    const fruit3 = "Banana"; //Block Scope
  }
  console.log(fruit1)
  console.log(fruit2)
  console.log(fruit2)
};


let i = 0;

function foo() {
    i = 1;
    let j = 2;
    if(true) {
        console.log(i); // 1
        console.log(j); // 2
    }
}
console.log(i);
foo();
