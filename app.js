let amigos = [];
const listaDeAmigos = document.getElementById('listaAmigos');
const campoAdicionarAmigo = document.getElementById('amigo');
const resultado = document.getElementById('resultado');

// Função para adicionar um amigo à lista
function adicionarAmigo() {

    let nomeAmigo = campoAdicionarAmigo.value.trim();

    if (!nomeAmigo) {
        alert('Por favor. insira um nome válido.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Amigo adicionado.');
        return;
    }

    amigos.push(nomeAmigo);
    atualizarLista();
    campoAdicionarAmigo.value = '';
}


// Função para atualizar lista na interface
function atualizarLista() {

   listaDeAmigos.innerHTML = '';

   amigos.forEach((amigo) => {
    let item = document.createElement('li');
    item.textContent = amigo;
    listaDeAmigos.appendChild(item);
   });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {

    if (amigos.length === 0){
        alert('Nenhum amigo disponível para sortear.');
        return;
    }

    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li> O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;

}

function limparLista() {
    amigos = [];
    atualizarLista();
    resultado.innerHTML = '';
}