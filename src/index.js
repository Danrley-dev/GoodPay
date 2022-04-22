var janelaLogin = new bootstrap.Modal(document.getElementById("loginNegado"));
var mostrarModal = new bootstrap.Modal(document.getElementById("modalCard7"));
var janelacaixaBranca = new bootstrap.Modal(document.getElementById("caixaBranco"));

function rotaCadastro() {
  window.location.href = "../registro.html";
}
function rotaRecuperar() {
  window.location.href = "../recuperar.html";
}
function rotaLogin() {
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;
  var caixabranca = Object.keys(email && senha).length === 0;
  if (email === "victoricoma@gmail.com" && senha === "gordinho123") {
    window.location.href = "../index.html";
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