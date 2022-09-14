function conversor(){
    var valor = parseInt(document.getElementsById("monto").value);
    var resultado = 0;
    var dolar = 3.89;
    var euro = 3.93;

    if(doc.getElementsById("dolar").checked){
        resultado = valor / dolar;
        alert("El cambio de soles a dólares es: $" + resultado.toFixed(2)); 
    }
    else if(document.getElementsById("euro").checked){
        resultado = valor / euro;
        alert("El cambio de soles a euros es: €" + resultado.toFixed(2)); 
    }
    else{
        alert("¡Hay errores en la petición!");
    }
}