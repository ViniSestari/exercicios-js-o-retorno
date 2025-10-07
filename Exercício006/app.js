function fnCalcularSaldoDeHoras() {
    let icone = ""
    let nome = document.getElementById("nome").value;
    let ch_semanal = document.getElementById("ch_semanal").value;
    let ch_trabalhada = document.getElementById("ch_trabalhada").value
    let saldo = 0
 
    saldo = ch_trabalhada - ch_semanal
 
    if (saldo >= 0){
        icone = "✅ "
    } else {
        icone = "❌ "
    }
 
    let mensagem = nome + icone + saldo
 
    document.getElementById("lista_funcionarios").innerHTML += "<li>" + mensagem + "</li>"
 
}