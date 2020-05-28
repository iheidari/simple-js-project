function handleOnClick() {
  var number1 = prompt("Enter your score", "0");
  number1 = parseInt(number1);

  var password = "";
  do {
    password = prompt("Enter the password");
  } while (password !== "coding");
}

const whileExample = function (topNumber) {
  var a = 0;
  while (a <= topNumber) {
    if (a % 2 !== 0) {
      console.log(a);
    }
    a = a + 1;
  }
};
const checkScore = function (score) {
  if (score > 80) {
    alert("A");
  } else if (score > 60) {
    alert("B");
  } else if (score > 40) {
    alert("C");
  } else {
    alert("D");
  }
};

const add = function (a, b) {
  if (Number.isNaN(a)) {
    return 0;
  }
  if (Number.isNaN(b)) {
    return 0;
  }

  a = Math.abs(a);
  b = Math.abs(b);

  return a + b;
};
