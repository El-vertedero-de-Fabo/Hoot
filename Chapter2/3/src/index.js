console.clear()
var limite = 10;
var inicio = 0;
var num_pares = 0;
var final = 3; //La cantidad de numeros pares que tiene como limite
var multiplos_3 = 0;
var suma_total = 0;
while((inicio < limite) && (num_pares<final)){
    inicio = inicio + 1;
    if ((inicio % 2) == 0) {
        num_pares = num_pares + 1;
    }
    if ((inicio % 3) == 0){
        multiplos_3 = multiplos_3 + 1;
    }
    suma_total = suma_total + inicio;
}
console.log("La cantidad de multiplos de 3 son: ",multiplos_3);
console.log("La suma total es: ",suma_total);