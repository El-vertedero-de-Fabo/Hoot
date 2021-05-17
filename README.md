# Hoop
## Table of contents
* [Capitulo 1 (Ejercicios)](#capitulo-1)
* [Capitulo 2 (Ejercicios)](#capitulo-2)
* [Setup](#setup)

## Capitulo 1 (Ejercicios)
### 1) Las galletitas de Ema
```javascript
console.clear()
var huevos = 3;
var chocolate = 1;
var harina = 0.5;
var azucar_cucharadas = 5;
if ((huevos == 3) && ( chocolate == 1) && (harina == 0.5) && (azucar_cucharadas == 5)) {
    console.count('Tenes todos los ingredientes! ');
}
```
### 2) La tienda de ropa
```javascript
var numero_ranom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
};
var rango = numero_ranom (1500,3000);
console.log("Numero: ",rango);

var porcentaje = numero_ranom (25,100);
console.log("Porcentaje: ",porcentaje);

var aumento = ((rango/100) * porcentaje) ;
console.log("Aumento: ", aumento);

var precio_final = aumento + rango;
console.log("Precio final: ",precio_final);

if (precio_final>4000) {
    console.log("Precio excedido");
}
```
### 3) Dia de paga
```javascript
var numero_ranom = function (pow) {
	return Math.floor(Math.random() * pow);
};
var repartidores = numero_ranom (100);
const feriado = Boolean(Math.round(Math.random()));
if (feriado){
    porcentaje_sueldos = 80;
}
else{
    porcentaje_sueldos = 65;
}
var gananciasDia = numero_ranom (1000);

var porcentaje_sueldos;

var Repartir_Sueldos = (gananciasDia/100) * porcentaje_sueldos;

var Sueldo_Repartidos = Repartir_Sueldos / repartidores;

var gananciasFinales = gananciasDia-Repartir_Sueldos;


console.log("Repartidores:",repartidores);
console.log("Feriado:",feriado);
console.log("Ganancias_Dia:",gananciasDia);
console.log("Porcentaje_Sueldos:",porcentaje_sueldos);
console.log("Repartir a Sueldos:",Repartir_Sueldos);
console.log("Sueldo_Repartidos:",Sueldo_Repartidos);
console.log("Ganancias_Finales:", gananciasFinales);
```
## Capitulo 2 (Ejercicios)
### 1) Pares
```javascript
console.clear()
var limite = 10;
var numero = 0;
for (var i = 0; i < limite; i++){
    numero = i;
    if ((numero % 2) == 0){
        console.log(numero);
    }
}
```
### 2) Contador
```javascript
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
```
### 3) Contador 2: La venganza del contador
```javascript
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
```
### 4) La secuencia de Fibonacci
```javascript
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
```
