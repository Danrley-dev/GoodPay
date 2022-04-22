var janelaLogin = new bootstrap.Modal(document.getElementById("loginNegado"));
var janelaPromocao = new bootstrap.Modal(document.getElementById("promo1"));
var janelacaixaBranca = new bootstrap.Modal(document.getElementById("caixaBranco"))
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

function alertaPromo() {
  let titulo = "Promomção 1 [Quebra da Banca]";
  let corpo = "<h6>Super legal</h6> <p><img src='./img/4.png' width='160' height='160'></p> ";

  janelaPromocao.show();

  document.getElementById("titulo").innerHTML = titulo;
  document.getElementById("corpo").innerHTML = corpo;
}