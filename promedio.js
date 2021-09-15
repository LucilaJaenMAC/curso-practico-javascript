const lista1 = [
    100,
    200,
    300,
    500,
];

function calacularMediaAritmetica(lista){
    /*let sumaLista = 0; 
    for(let i = 0; i < lista.length; i++){
        sumaLista = sumaLista + lista[i];
    }*/

    const sumaLista = lista.reduce(// Es otra manera sumar todos los elementos del array
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista/lista.length;

    return promedioLista;
}

