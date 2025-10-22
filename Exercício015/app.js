let contatos = []

function fnSalvar(){
let umContato = {
    nome: document.getElementById('nome').value,
    telefone: document.getElementById('telefone').value,
    email: document.getElementById('email').value,
    foto: document.getElementById('foto').value
}

contatos.push(umContato)
}

function fnListar() {
    let dados = "";
 
    contatos.forEach(function (umContato, i) {
        dados += `
        <div class="col-md-4 mb-4">
            <div class="card" style="width: 100%;">
                <img src="${umContato.foto}" class="card-img-top" alt="Foto de ${umContato.nome}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${umContato.nome}</h5>
                    <p class="card-text">
                        <strong>Telefone:</strong> ${umContato.telefone} -
                        <strong>Email:</strong> ${umContato.email}
                    </p>
                    <a href="mailto:${umContato.email}" class="btn btn-danger">Excluir</a>
                </div>
            </div>
        </div>`;
    });
 
    document.getElementById("listadeContatos").innerHTML = dados;
}

function fnExcluir(){}

document.getElementById('btSalvar').addEventListener('click', function(){
    fnSalvar()
    fnListar()
})