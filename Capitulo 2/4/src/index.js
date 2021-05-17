console.clear()
var numero_1 = 0;
var numero_2 = 1;
var fibonacci = 0;
var limite = 10;
console.log(numero_1);
console.log(numero_2);
for (var i = 0; i < limite; i++){
    fibonacci = numero_1 + numero_2;
    numero_1 = numero_2;
    numero_2 = fibonacci;
    console.log(fibonacci);
}