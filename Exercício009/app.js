function fnRepetirFrase() {
   let qtd=0, frase="", contador=0

   frase = document.getElementById('frase').value
   qtd = document.getElementById('qtd').value
   document.getElementById('lista_frase').innerHTML = ""

   while (contador < qtd) {
       document.getElementById("lista_frase").innerHTML += "<li>" + frase + "</li>"
       contador++
   }
}