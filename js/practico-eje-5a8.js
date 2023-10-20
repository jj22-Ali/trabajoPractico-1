//punto 5
let numero1 = parseInt(prompt("Ingrese el primer numero: "));
let numero2 = parseInt(prompt("Ingrese el segundo numero: "));
alert(numero1 + numero2)
//punto 6

numero1 = parseInt(prompt("Ingrese otra vez el primer numero: "));
numero2 = parseInt(prompt("Ingrese otra vez el segundo numero: "));

document.write("Punto 6 <br>")
if(numero1 > numero2){

    document.write("El numero " + numero1 + " es el mas grande");
    document.write("<br><br>")


}else{

    document.write("El numero " + numero2 + " es el mas grande");
    document.write("<br><br>")


};


//punto 7 
numero1 = parseInt(prompt("Ingrese otra vez el primer numero: "));
numero2 = parseInt(prompt("Ingrese otra vez el segundo numero: "));
let numero3 = parseInt(prompt("Ahora ingrese un tercer numero: "));

document.write("Punto 7 <br>")
if(numero1 > numero2){

        if(numero1 > numero3){

            document.write("El numero " + numero1 + " es el mas grande");

        }else{

            document.write("El numero " + numero3 + " es el mas grande");

        }

}else{

    if(numero2 > numero3){

        document.write("El numero " + numero2 + " es el mas grande");

    }else{

        document.write("El numero " + numero3 + " es el mas grande");

    }

};

//punto 8