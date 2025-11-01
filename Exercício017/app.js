let filmes = [];

function fnSalvar() {
  let umFilme = {
    nome: document.getElementById('nome').value,
    foto: document.getElementById('foto').value,
    ano: document.getElementById('ano').value,
    avaliacao: document.getElementById('avaliacao').value,
    trailer: document.getElementById('trailer').value,
    genero: document.getElementById('genero').value,
    duracao: document.getElementById('duracao').value,
    descricao: document.getElementById('descricao').value
  };

  filmes.push(umFilme);
}

function fnListar() {
  let dados = "";

  filmes.forEach(function (umFilme, i) {
    dados += `
      <div class='col-3 mb-4' data-indice='${i}'>
        <div class="card shadow-sm h-100">
          <img src="${umFilme.foto}" class="card-img-top" alt="${umFilme.nome}">
          <div class="card-body">
            <h5 class="card-title">${umFilme.nome}</h5>
            <p class="text-muted small">${umFilme.ano} | ${umFilme.avaliacao} | ${umFilme.genero} | ${umFilme.duracao}</p>
            <p class="card-text small">${umFilme.descricao}</p>
            <a href="${umFilme.trailer}" target="_blank" class="btn btn-success w-100 mb-2">🎬 Assistir trailer</a>
            <button type="button" onclick='fnExcluir(${i})' class="btn btn-danger w-100">Excluir filme</button>
          </div>
        </div>
      </div>
    `;
  });

  document.getElementById("listaFilmes").innerHTML = dados;
}

function fnExcluir(indice) {
  filmes.splice(indice, 1);
  fnListar();
}

function fnLimpar() {
  document.getElementById('formFilme').reset();
}

document.getElementById('formFilme').addEventListener('submit', function(e) {
  e.preventDefault();
  fnSalvar();
  fnListar();
  fnLimpar();
});