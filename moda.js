
function calcularModa(lista){

    const listaCount = {};

    lista.map(// Nos ayuda a recorrer nuestro array 
        function(elemento){ // Por cada elemento se crea un espacio en eleobjeto si ya existe los suma en caso contrario lo crea
            if(listaCount[elemento]){
                listaCount[elemento] += 1;
            }else{
                listaCount[elemento] = 1;
            }
        }
    );

    const listaArray = Object.entries(listaCount).sort(
        function(valorAcumulado, nuevoValor){
            valorAcumulado[1] - nuevoValor[1];
        }
    );//Convierte un objeto en un array

    const moda = listaArray[listaArray.length -1];

    return moda;
}