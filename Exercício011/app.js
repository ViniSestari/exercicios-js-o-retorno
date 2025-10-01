let listaDeNumeros = []

function fnLimpar() {
    document.getElementById("formulario").reset()
}

function fnSalvarNumero(){
    let numero = parseFloat(document.getElementById("numero").value)
    listaDeNumeros.push(numero)
}
function fnCalcularMedia(){
    let media = 0, qtdNumeros = 0, somaDosNumeros = 0, i = 0
    qtdNumeros = listaDeNumeros.length
    while(i < qtdNumeros){
        somaDosNumeros += listaDeNumeros[i]
        i++
    }
    media = somaDosNumeros / qtdNumeros
    document.getElementById("media").innerHTML = media

    listaDeNumeros = []
}
