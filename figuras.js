// Código del cuadrado
    console.group("Cuadrado");// Sirve para agrupar mensajes en la consola

/*const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden : " + ladoCuadrado +" cm");*/

function perimetroCuadrado(lado){
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es : " + perimetroCuadrado +" cm");

function areaCuadrado(lado){
    return lado * lado;
} 
//console.log("El área del cuadrado es : " + areaCuadrado +" cm^2");

    console.groupEnd();

// Código del triángulo
    console.group("Triángulo");// Sirve para agrupar mensajes en la consola

/*const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;*/

/*console.log("Los lados del triángulo miden : " 
    + ladoTriangulo1  
    +" cm, " 
    + ladoTriangulo2 
    +" cm, " 
    + baseTriangulo 
    +" cm"
);

console.log("La altura del triángulo mide : " + alturaTriangulo +" cm");*/

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
} 
//console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 
//console.log("El área del triángulo es : " + areaTriangulo + " cm^2");

    console.groupEnd();

// Código del circulo
    console.group("Círculo");// Sirve para agrupar mensajes en la consola

/*const radioCirculo = 4;
console.log("El radio del circulo es : " + radioCirculo +" cm");*/

function diametroCirculo(radio){
    return radio * 2;
} 
//console.log("El diámetro del circulo es : " + diametroCirculo +" cm");

const PI = Math.PI;
console.log("Pi vale : " + PI);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI
} 
    console.groupEnd(); 


function alturaIsosceles(lado1, lado2, ladoB){
    if(lado1 == lado2){
        const h = Math.sqrt((lado1^2) - ((ladoB^2)/4));
        return h;
    }else{
        return "No es un triángulo isósceles";
    }
}
// Funciones que se conectan al HTML 


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");//Se obtiene toda la información de la etiqueta con el id correspondiente
    const value = input.value;// Obtengo sólo el valor del input. 

    const perimetro = perimetroCuadrado(value);
    document.getElementById("resultCuadrado").value = perimetro;
}
function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");//Se obtiene toda la información de la etiqueta con el id correspondiente
    const value = input.value;// Obtengo sólo el valor del input. 

    const area = areaCuadrado(value);
    document.getElementById("resultCuadrado").value = area;// Paso el resultado al output (Vista del usuario)
}

function calcularPerimetroTriangulo(){
    const inputL1 = document.getElementById("L1Triangulo");
    const inputL2 = document.getElementById("L2Triangulo");
    const inputB = document.getElementById("baseTriangulo");
    const value1 = parseFloat(inputL1.value);
    const value2 = parseFloat(inputL2.value);
    const base = parseFloat(inputB.value);


    const perimetro = perimetroTriangulo(value1, value2, base);

    document.getElementById("resultTriangulo").value = perimetro;
}

function calcularAreaTriangulo(){
    const inputA = document.getElementById("altTriangulo");
    const inputB = document.getElementById("baseTriangulo");
    const altura = parseFloat(inputA.value);
    const base = parseFloat(inputB.value);


    const area = areaTriangulo(base, altura);

    document.getElementById("resultTriangulo").value = area;
}

function calcularCircunferencia(){
    const input = document.getElementById("InputRadio");//Se obtiene toda la información de la etiqueta con el id correspondiente
    const value = input.value;// Obtengo sólo el valor del input. 

    const perimetro = perimetroCirculo(value);
    document.getElementById("resultCirculo").value = perimetro;
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputRadio");//Se obtiene toda la información de la etiqueta con el id correspondiente
    const value = input.value;// Obtengo sólo el valor del input. 

    const area = areaCirculo(value);
    document.getElementById("resultCirculo").value = area;// Paso el resultado al output (Vista del usuario)
}

function calcularAlturaIsosceles(){
    const inputL1 = document.getElementById("L1Isos");
    const inputL2 = document.getElementById("L2Isos");
    const inputB = document.getElementById("baseIsos");
    const value1 = parseFloat(inputL1.value);
    const value2 = parseFloat(inputL2.value);
    const base = parseFloat(inputB.value);


    const altura = alturaIsosceles(value1, value2, base);

    document.getElementById("resultIsosceles").value = altura;
}