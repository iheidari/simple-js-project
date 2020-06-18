///
// example 1
///

// let x = 10;

// function test1() {
//   let y = 20;
//   // console.log("inside function", x);
//   console.log("inside function", y);
// }

// // console.log("out of function", x);
// console.log("out of function", y);

// test1();

///
// example 2
///

// let x = 10;
// if (true) {
//   let y = 20;
//   var z = 30;
//   let x = 50;
//   console.log(x + y + z);
//   // → 100
// }
// // y is not visible here
// console.log(x + z);
// // → 40

///
// example 3
///

// const halve = function(n) {
//   return n / 2;
// };

// let n = 10;
// console.log(halve(100));
// // → 50
// console.log(n);
// // → 10

///
// example 4
///
const hummus = function (factor) {
  const ingredient = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };

  ingredient(1, "can", "chickpeas");
  ingredient(0.25, "cup", "tahini");
  ingredient(0.25, "cup", "lemon juice");
  ingredient(1, "clove", "garlic");
  ingredient(2, "tablespoon", "olive oil");
  ingredient(0.5, "teaspoon", "cumin");
};
hummus(2);

///
// example 5
///
