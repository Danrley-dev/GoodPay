var janelaLogin = new bootstrap.Modal(document.getElementById("loginNegado"));
var mostrarModal = new bootstrap.Modal(document.getElementById("modalCard7"));
var janelacaixaBranca = new bootstrap.Modal(document.getElementById("caixaBranco"));
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

function chamaModalCard() {
  let titulo = document.getElementById("titulo").value;
  let corpo = document.getElementById("corpo").value;

  mostrarModal.show();
}

function rotaRecuperar() {
  let usuario = "danrley"
  let email = "danrleysouza53@gmail.com"
  let usuarioDigitado = document.getElementById("recuperarUsuario").value
  let emailDigitado = document.getElementById("recuperarEmail").value
  if (!usuarioDigitado || !emailDigitado) {
    alert("Há campos não preenchidos");
  } else if (usuarioDigitado !== usuario || emailDigitado !== email) {
    alert("Email ou Usuario incorretos!")
  } else {
    alert("Codigo de recuperação enviado para o Email cadastrado!")
  }
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
    document.getElementById('resultado').innerHTML = "Senhas corretas";
  } else {
    document.getElementById('resultado').innerHTML = "Senhas diferentes. Tente novamente";
  }
}