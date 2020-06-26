const x = 10;
const y = x.toString();

const myArray = [5, 10, 15, 20];
console.log(myArray.length);
myArray.push(22);
console.log(myArray);

const myObject = {
  firstName: "ehsan",
  lastName: "heidari",
  age: 30,
  address: "",
  scores: [18, 20, 20, 19],
};

console.log(myObject.lastName);
console.log(myObject["age"]);
console.log(Object.keys(myObject));
