function Invertir_Frase(Cant_letras){
    let frase = "";
    for (let i = Cant_letras.length - 1; i >=0; i--){
        frase += Cant_letras[i];
    }
    return frase;
}
console.log(Invertir_Frase("Hola buenos dias"));//said soneub aloH