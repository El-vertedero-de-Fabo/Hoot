# Hoop
## Table of contents
* [Chapter1 (exercise)](#chapter-1)
* [Chapter2 (exercise)](#chapter-2)
* [Setup](#setup)

## Chapter 1 (exercise)
### 1) Ema cookies
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
### 2) The clothing store 
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
### 3) Payday
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
## Chapter 2 (exercise)
### 1) Pair numbers
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
### 2) Count
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
### 3) Count 2: The revenge of the Count
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
### 4) The sequence of Fibonacci
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
## Chapter 3 (exercise)
### 1)
```javascript
console.clear()
function Es_Par(numero){
    if ((numero % 2)==0){
        return true;
    }
    else{
        return false;
    }
    
}
var numero = 10;
console.log(Es_Par(numero));
```
### 2)
```javascript
function Invertir_Frase(Cant_letras){
    let frase = "";
    for (let i = Cant_letras.length - 1; i >=0; i--){
        frase += Cant_letras[i];
    }
    return frase;
}
console.log(Invertir_Frase("Hola buenos dias"));//said soneub aloH
```
### 3)
```javascript
function Ordenar(num1,num2,num3){
    if ((num1<num2)&&(num1<num3)){
        console.log(num1);
        if (num2<num3){
            console.log(num2);
            console.log(num3);
        }
        else{
            console.log(num3);
            console.log(num2);
        }
    }
    else if ((num2<num1)&&(num2<num3)){
        console.log(num2);
        if (num1<num3){
            console.log(num1);
            console.log(num3);
        }
        else{
            console.log(num3);
            console.log(num1);
        }
    }
    else if ((num3<num2)&&(num3<num1)){
        console.log(num3);
        if (num1<num2){
            console.log(num1);
            console.log(num2);
        }
        else{
            console.log(num2);
            console.log(num1);
        }
    }
    
}
var numero_random = function (pow) {
	return Math.floor(Math.random() * pow);
};
var numero1 = numero_random (100);
var numero2 = numero_random (100);
var numero3 = numero_random (100);
console.log("1:",numero1," 2:",numero2," 3:",numero3);

Ordenar(numero1,numero2,numero3);

```
