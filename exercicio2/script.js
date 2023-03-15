const meuArray = [2, 4, 6, 8, 3, 1, 9, 10];

const quintuplos = meuArray.map((item) => {
  return item * 5;
});

const metades = quintuplos.map((item) => {
  return item / 2;
});

console.log(quintuplos);

console.log(metades);
