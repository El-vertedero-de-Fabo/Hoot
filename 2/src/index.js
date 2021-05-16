
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