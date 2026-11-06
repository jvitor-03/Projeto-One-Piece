
/* ==========================================================================
   PROJETO FRONT-END WEB - ONE PIECE
   Arquivo: scripts.js
   Descrição: Manipulação do DOM, armazenamento no LocalStorage e eventos.
   ========================================================================== */

let frutas = JSON.parse(localStorage.getItem('minhasFrutas')) || [];

function mostrarFrutas() {
    let lista = document.getElementById('listaCadastrados');
    if (!lista) return; 

    lista.innerHTML = '';

    for (let fruta of frutas) {
        lista.innerHTML += `
            <div class="col-md-6">
                <div class="card h-100 mb-3">
                    <div class="card-body">
                        <h5>${fruta.nome}</h5>
                        <p>Categoria: ${fruta.tipo}</p>
                        <p>${fruta.descricao}</p>
                        <small>Cadastrado por: ${fruta.email}</small>
                    </div>
                </div>
            </div>
        `;
    }
}

let formFruta = document.getElementById('formFruta');

if (formFruta) {
    formFruta.addEventListener('submit', function(event) {
        event.preventDefault();

        let nome = document.getElementById('nomeFruta').value;
        let email = document.getElementById('emailUsuario').value;
        let tipo = document.getElementById('tipoFruta').value;
        let descricao = document.getElementById('descricaoFruta').value;

        if (nome === '' || email === '' || tipo === '' || descricao === '') {
            alert('Preencha todos os campos!');
            return;
        }

        frutas.push({ nome, email, tipo, descricao });

        localStorage.setItem('minhasFrutas', JSON.stringify(frutas));

        mostrarFrutas();
        formFruta.reset();

        alert('Fruta cadastrada com sucesso!');
    });

    mostrarFrutas();
}