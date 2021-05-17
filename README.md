# Hoop
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
```
### 2) Contador
```javascript
```
### 3) Contador 2: La venganza del contador
```javascript
```
### 4) La secuencia de Fibonacci
```javascript
```
