console.clear()
var limite = 10;
var cant_impares = 0;
var cant_menores = 0;

for (var i = 0; i < limite; i++){
    numero = i;
    if ((numero % 2) == 1){
        cant_impares = cant_impares + 1;
    }
    if (numero < (limite / 2)){
        cant_menores = cant_menores + 1;
    }
    
}
console.log("La cantidad de numeros impares es: ",cant_impares);
console.log("La cantidad de numeros menores que limite/2 es: ", cant_menores);