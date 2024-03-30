function converter() {
    var valorNumero = numero.value
    var valorBase = base.value

    var valorDecimal = parseInt(valorNumero, valorBase);

    var valorOctal = valorDecimal.toString(8);

    var valorHexadecimal = valorDecimal.toString(16);

    var valorBinaria = valorDecimal.toString(2);



    document.getElementById("demo2").innerHTML = ` ${valorOctal}`;
    document.getElementById("demo3").innerHTML = ` ${valorHexadecimal}`;
    document.getElementById("demo4").innerHTML = ` ${valorBinaria}`;
    document.getElementById("demo5").innerHTML = ` ${valorDecimal}`;

    console.log(valorOctal)
}
function aparecer_bin() {
    demo4.style.display = 'flex'
}

function aparecer_hexa() {
    demo3.style.display = 'flex'
}

function aparecer_octal() {
    demo2.style.display = 'flex'
}

function aparecer_decimal() {
    demo5.style.display = 'flex'
}