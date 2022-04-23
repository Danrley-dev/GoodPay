var janelaLogin = new bootstrap.Modal(document.getElementById("loginNegado"));
var mostrarModal = new bootstrap.Modal(document.getElementById("modalCard7"));
var janelacaixaBranca = new bootstrap.Modal(document.getElementById("caixaBranco"));
var mostrarModal1 = new bootstrap.Modal(document.getElementById("modalCard1"));
var mostrarModal2 = new bootstrap.Modal(document.getElementById("modalCard2"));
var janelaAtencao = new bootstrap.Modal(document.getElementById("atencao"));

function rotaCadastro() {
  window.location.href = "../registro.html";
}
function rotaRecuperar() {
  window.location.href = "../recuperar.html";
}

var numero1 = document.getElementById("numero1").innerHTML = Math.floor(Math.random() * 99) + 1;
var numero2 = document.getElementById("numero2").innerHTML = Math.floor(Math.random() * 9) + 1;
var soma = numero1 + numero2;
var tentativas = 3;

function rotaLogin() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  var caixabranca = Object.keys(email && senha).length === 0;
  let resposta = Number(document.getElementById("resposta").value);
  if (email === "victoricoma@gmail.com" && senha === "gordinho123") {
    if (resposta === soma) {
      window.location.href = "../index.html";
    } else if (!resposta || resposta !== soma) {
      if (tentativas > 1) {
        tentativas--;
        janelaAtencao.show();
        document.getElementById("xModal").textContent = `Erro no Captcha! Você só tem mais ${tentativas} tentativas!`;
      } else {
        janelaAtencao.show();
        document.getElementById("xModal").textContent = `Você errou muitas vezes! Tente novamente mais tarde.`;
        window.location.href = "../recuperar.html";
      }
    }
  } else if (caixabranca === true) {
    janelacaixaBranca.show()
  } else {
    janelaLogin.show();
  }
}
function fecharModalRecupera() {  /**Função é chamada quando acionado o botão fechar do modal */
  window.location.href = "../app.html";
}

function chamaModalCard() {
  var mostrarModal = new bootstrap.Modal(document.getElementById("modalCard7"));

  mostrarModal.show();
}

function recuperarSenhaModal() {
  var recuperarSenha = new bootstrap.Modal(document.getElementById("recuperaSenha"));
  let nomeUsuario = document.getElementById("username").value;
  let emailUsuario = document.getElementById("emailRecuperacao").value;
  let alertErro = " ";
  if (nomeUsuario.length === 0 || emailUsuario.length === 0) {
    alertErro = "<div class='alert alert-danger'> Usuário ou E-mail não preenchido!!</div>";
    document.getElementById("alert").innerHTML = alertErro;

  } else {
    recuperarSenha.show();
  }
}

function chamaModalCard1() {
  mostrarModal1.show()
}

function chamaModalCard2() {
  mostrarModal2.show();
}

function validarSenha() {
  let senha1 = document.getElementById("senha1").value;
  let senha2 = document.getElementById("senha_confirmar").value;

  if (senha1.length === 0) {
    document.getElementById('resultado').innerHTML = "Campo obrigatório. Por favor preencher!";
  } else if (senha2.length === 0) {
    document.getElementById('resultado').innerHTML = "Campo obrigatório. Por favor preencher!";
  } else if (senha1 == senha2) {
    document.getElementById('resultado').innerHTML = "Usuário cadastrado com sucesso. seja bem vindo!";
  } else {
    document.getElementById('resultado').innerHTML = "Senhas diferentes. Tente novamente";
  }
}