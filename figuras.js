// Código del cuadrado
    console.group("Cuadrado");// Sirve para agrupar mensajes en la consola

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden : " + ladoCuadrado +" cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es : " + perimetroCuadrado +" cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es : " + areaCuadrado +" cm^2");

    console.groupEnd();

// Código del triángulo
    console.group("Triángulo");// Sirve para agrupar mensajes en la consola

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden : " 
    + ladoTriangulo1  
    +" cm, " 
    + ladoTriangulo2 
    +" cm, " 
    + baseTriangulo 
    +" cm"
);

console.log("La altura del triángulo mide : " + alturaTriangulo +" cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es : " + areaTriangulo + " cm^2");

    console.groupEnd();

// Código del cuadrado
    console.group("Círculo");// Sirve para agrupar mensajes en la consola

const radioCirculo = 4;
console.log("El radio del circulo es : " + radioCirculo +" cm");

const diametroCirculo = radioCirculo * 2;
console.log("El diámetro del circulo es : " + diametroCirculo +" cm");

const PI = Math.PI;
console.log("Pi vale : " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perímetro del circulo es : " + perimetroCirculo +" cm");

const areaCirculo = (radioCirculo * radioCirculo) * PI
console.log("El área del circulo es : " + areaCirculo +" cm^2");

    console.groupEnd(); 