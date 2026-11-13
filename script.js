var botaoInfo = document.getElementById("btnInfo");
var maisInfo = document.getElementById("maisInfo");

botaoInfo.addEventListener("click", function () {
    if (maisInfo.style.display == "none") {
        maisInfo.style.display = "block";
        botaoInfo.textContent = "Mostrar menos";
    } else {
        maisInfo.style.display = "none";
        botaoInfo.textContent = "Saiba mais";
    }
});

var quantidade = 0;
var total = 0;

function adicionar(preco) {
    quantidade = quantidade + 1;
    total = total + preco;
    atualizar();
}

function limpar() {
    quantidade = 0;
    total = 0;
    atualizar();
}

function atualizar() {
    document.getElementById("qtd").textContent = quantidade;
    document.getElementById("total").textContent = "R$ " + total.toFixed(2).replace(".", ",");
}

var formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;
    var resposta = document.getElementById("resposta");

    if (nome == "" || email == "" || mensagem == "") {
        resposta.textContent = "Preencha todos os campos!";
        resposta.style.color = "red";
    } else if (email.indexOf("@") == -1) {
        resposta.textContent = "Digite um e-mail válido.";
        resposta.style.color = "red";
    } else {
        resposta.textContent = "Olá, " + nome + "! Mensagem enviada com sucesso.";
        resposta.style.color = "green";
        formulario.reset();
    }
});
