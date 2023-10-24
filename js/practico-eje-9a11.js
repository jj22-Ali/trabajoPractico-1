//punto 9
alert("Ejercicio 9");
let frase = prompt("Ingrese cualquier cosa que se le ocurra: ");
let vocal = "";

for(let i=0 ; i < frase.length; i++){
    let caracter = frase.charAt(i).toLowerCase();
    if(caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o'  || caracter === 'u'){
         vocal+= caracter;
    }
}

console.log("La frase: " + frase );
console.log("Las vocales son: " + vocal);

//punto 10
alert("Ejericio 10");

let numero = parseInt(prompt("Ingrese cualquier numero: "));

if(numero % 2 === 0){

    console.log("el numero " + numero + " es divisible por 2")

}else if(numero % 3 === 0){

    console.log("el numero " + numero + " es divisible por 3")

}else if(numero % 5 === 0){

    console.log("el numero " + numero + " es divisible por 5")

}else if(numero % 7 === 0){

    console.log("el numero " + numero + " es divisible por 7")

}


// punto 11 
alert("Ejercicio 11");

numero = parseInt(prompt("Ingrese cualquier numero: "));

for( let i = 1 ; i <= 7; i++){

    if ( i === 2 ){
        if ( numero % 2 === 0){
            console.log("el numero " + numero + " es divisible por 2")
        }
    }

    if ( i === 3 ){
        if ( numero % 3 === 0){
            console.log("el numero " + numero + " es divisible por 3")
        }
    }

    if ( i === 5 ){
        if ( numero % 5 === 0){
            console.log("el numero " + numero + " es divisible por 5")
        }
    }

    if ( i === 7 ){
        if ( numero % 7 === 0){
            console.log("el numero " + numero + " es divisible por 7")
        }
    }

}

