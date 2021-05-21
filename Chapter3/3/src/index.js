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
