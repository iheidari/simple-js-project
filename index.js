function handleOnClick() {
  console.log("clicked");
  var number1 = prompt("Enter first number", "0");
  number1 = parseInt(number1);
  var number2 = prompt("Enter second number", "0");
  number2 = parseInt(number2);

  console.log("number1: ", number1);
  console.log("number2: ", number2);
  console.log("total:", number1 + number2);
}
