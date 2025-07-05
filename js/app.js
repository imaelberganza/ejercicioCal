//RESETEAR EL DISPLAY
(function () {
    var borrar = function() {
    display.value = "";
    }
    var resetear = document.getElementById("reset");
    resetear.addEventListener("click", borrar);
}());

//OPERAR
let primerNumero = "";
let segundoNumero = "";
let operacion = "";

document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", function () {
        var valor = this.value;

        if (valor === "+" || valor === "-" || valor === "*" || valor === "/") {
            operacion = valor;
            primerNumero = display.value;
            display.value = "";
        }else{
            display.value += valor;
        }
    });
});
document.getElementById("resultado").addEventListener("click", function () {
    segundoNumero = display.value;
    let resultado;

    switch (operacion) {
        case "+":
            resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
            break;
        case "-":
            resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
            break;
        case "*":
            resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
            break;
        case "/":
            resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
            break;
        default:
            break;
    }

    display.value = resultado;
});
//BOTON DEL
(function () {
    var borrar = function() {
    display.value = display.value.slice(0, -1);
    }
    var del = document.getElementById("del");
    del.addEventListener("click", borrar);
}());