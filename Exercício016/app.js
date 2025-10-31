function fnCalcular() {
    const valorConta = parseFloat(document.getElementById("valorConta").value);
    const valorPercentual = parseFloat(document.getElementById("valorPercentual").value);
    const funcao = document.getElementById("funcao").value;
    const resultadoElemento = document.getElementById("resultado");

    let valorFinal = 0;

    if (funcao === "desconto") {
        valorFinal = valorConta - (valorConta * (valorPercentual / 100));
    } else {
        valorFinal = valorConta + (valorConta * (valorPercentual / 100));
    }

    resultadoElemento.textContent = `R$ ${valorFinal.toFixed(2).replace('.', ',')}`;
    resultadoElemento.classList.add("text-success");
}

function fnLimpar() {
    document.getElementById("valorConta").value = "";
    document.getElementById("valorPercentual").value = "";
    document.getElementById("funcao").value = "desconto";
    document.getElementById("resultado").textContent = "R$ 0,00";
}

document.getElementById("btnCalcular").addEventListener("click", function() {
    fnCalcular();
});

