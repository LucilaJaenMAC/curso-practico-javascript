//const precioOriginal = 100;
//const descuento = 15;

function calcularPrecioConDescuento(precio, descuento, cupon){
    let descuentoTotal = 0.0;
    switch(cupon){
        case "1":
            descuentoTotal = parseFloat(descuento) + 10;
            break;
        case "2":
            descuentoTotal = parseFloat(descuento) + 15;
            break;
        case "3":
            descuentoTotal = parseFloat(descuento) + 25;
            break;   
        case "4":
            descuentoTotal = parseFloat(descuento);
            break; 
        default:
            console.log("Hubo un error");
    }
    const porcentajePrecioConDescuento = 100 - descuentoTotal;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

//console.log({precioOriginal, precioConDescuento, descuento, porcentajePrecioConDescuento});

function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputDiscount = document.getElementById("inputDiscount");
    const DiscountValue = inputDiscount.value;
    const cuponDiscount = document.getElementById("cuponDiscount");
    const cuponValue = cuponDiscount.value;
    //console.log(cuponValue);
    const precioConDescuento = calcularPrecioConDescuento(priceValue, DiscountValue, cuponValue);

    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuento;// Para agregar un texto a una etiqueta de HTML con su ID
}

