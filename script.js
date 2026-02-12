// Calculadora simples

function soma(a, b) {
    return a + b;
}

function media(a, b, c) {
    return (a + b + c) / 3;
}

console.log("Soma:", soma(5, 3));
console.log("Média:", media(7, 8, 9));


// Tabuada
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

function fatorial(n){
  let r=1;
  for(let i=1;i<=n;i++) r*=i;
  return r;
}
console.log(fatorial(5));
