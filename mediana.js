function calacularMediaAritmetica(lista){

    const sumaLista = lista.reduce(// Es otra manera sumar todos los elementos del array
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}

let lista1 = [300,200,500,40];

/*let listaOrdenada = lista1.sort(function(elemento1 , elemento2){
    return elemento1 - elemento2;
});*/

//const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numero){
    if(numero % 2 == 0){
        return true;
    }else{
        return false;
    }
}

/*let mediana;
if(esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1[mitadLista1 - 1];

    const promedioElemento1y2 = calacularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;
}else{
    mediana = lista1[mitadLista1];
}*/

function calcularMediana(lista){
    let listaOrdenada = lista.sort(function(elemento1 , elemento2){//Ordena los elementos de la lista de menor a mayor
        return elemento1 - elemento2;
    });

    const mitadLista = parseInt(listaOrdenada.length / 2);
    
    let mediana;
    if(esPar(listaOrdenada.length)){
        const elemento1 = listaOrdenada[mitadLista];
        const elemento2 = listaOrdenada[mitadLista - 1];

        const promedioElemento1y2 = calacularMediaAritmetica([elemento1, elemento2]);

        mediana = promedioElemento1y2;
    }else{
        mediana = lista1[mitadLista1];
    }
    return mediana;
}