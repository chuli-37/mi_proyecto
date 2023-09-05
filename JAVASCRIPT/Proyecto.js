function seleccionarNumero(id){
// alert(typeof id)
let c = document.getElementById("consola").innerHTML
document.getElementById("consola").innerHTML = c + id
}

function operacion(id){
let c = document.getElementById("consola").innerHTML
let resultado = 0
switch (id) {
    case "+":
        resultado = c.split("+");
        alert(resultado)
        break;
        
    default:
        break;
}
}


