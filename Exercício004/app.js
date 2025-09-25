function fnValidarIdadeCNH(){
    let nomeUsuario = document.getElementById('txtNome').value
    let idadeUsuario = document.getElementById('txtIdade').value

    console.log(idadeUsuario)

    event.preventDefault()

    if (idadeUsuario >= 18 ){
        texto = "Parabéns " + nomeUsuario + ", você já pode tirar sua CNH!"
        document.getElementById('resultado').innerHTML = texto
    } else {
        texto = "Desculpe " + nomeUsuario + ", você ainda não pode tirar sua CNH!"
        document.getElementById('resultado').innerHTML = texto
    }
 }

 