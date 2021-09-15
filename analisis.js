//Funciones helper (de apoyo)
function esPar(numero){
    return (numero % 2 === 0);
}

function calacularMediaAritmetica(lista){
    const sumaLista = lista.reduce(// Es otra manera sumar todos los elementos del array
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}

// calculadora de medianas 

function medianaSalarios(lista){
    const mitad = parseInt(lista.length /2);

    if(esPar(lista.lengt)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calacularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana general

const salarioCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salariosColSorted = salarioCol.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);
const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%


const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount
);// Corta nuestro array apartir del lugar que indicamos con el primer parámetro y el segundo parámetro dice cuantas partes queremos apartier del corte y esas partes las agrega a una nuevo array.

const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol, 
    medianaTop10Col, 
});