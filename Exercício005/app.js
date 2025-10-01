function verificarPeriodo() {
    let periodoSelecionado = document.getElementById("periodo").value
 
    // document.getElementById("resposta").innerText =  periodoSelecionado
 
    if (periodoSelecionado === "d") {
        document.getElementById("resposta").innerText = "Dia 🌤️"
        document.body.style.background = "linear-gradient(to bottom, #E0F7FA 0%, #B2EBF2 50%, #81D4FA 100%)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.color = "#000000"
        document.getElementById("foto").src="dia.webp"
    }
   
    else if (periodoSelecionado === "t") {
        document.getElementById("resposta").innerText = "Tarde 🌇"
        document.body.style.background = "linear-gradient(to bottom, #FF7E5F 0%, #FF9478 50%, #FEB47B 100%)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.color = "#FFFFFF";
        document.getElementById("foto").src="tarde.jpg";
    }
   
    else if (periodoSelecionado === "n") {
        document.getElementById("resposta").innerText = "Noite 🌙"
        document.body.style.background = "linear-gradient(to bottom, #0F2027 0%, #203A43 50%, #2C5364 100%)";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.color = "#FFFFFF";
        document.getElementById("foto").src="noite.jpg";
    }
   
    else {
        document.getElementById("resposta").innerText = ""
        document.body.style.backgroundColor = "#d87093";
        document.body.style.color = "#0000ff";
        document.getElementById("foto").src="original.webp"
    }
 
}