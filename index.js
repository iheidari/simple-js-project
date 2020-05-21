function handleOnClick() {
  var number1 = prompt("Enter first number", "0");
  number1 = parseInt(number1);
  var number2 = prompt("Enter second number", "0");
  number2 = parseInt(number2);
  var sum = number1 + number2;
  // find the div
  var resultSumDiv = document.getElementById("resultSum");
  // change the content with sum of num1 and num2
  resultSumDiv.innerText = sum;
}
