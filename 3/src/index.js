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