const doSomthing = () => {
  for (let index = 0; index < 20; index++) {
    if (index % 2 === 1) continue;
    console.log(index);
  }
};
