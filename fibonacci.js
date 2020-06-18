// function fibonacci(){}

const fibonacci = function () {
  let x0 = 0;
  let x1 = 1;
  let x2 = 0;
  let countValue = document.getElementById("count").value;
  countValue = parseInt(countValue);

  for (let counter = 2; counter < countValue; counter++) {
    x2 = x0 + x1;
    x0 = x1;
    x1 = x2;
  }

  document.getElementById("result").innerHTML = x2;
};

// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// const fibonacci = () => {
// }
