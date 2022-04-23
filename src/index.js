var janelaLogin = new bootstrap.Modal(document.getElementById("loginNegado"));
var mostrarModal = new bootstrap.Modal(document.getElementById("modalCard7"));
var janelacaixaBranca = new bootstrap.Modal(document.getElementById("caixaBranco"));
var mostrarModal2 = new bootstrap.Modal(document.getElementById("modalCard2"));

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


function chamaModalCard2(){
  mostrarModal2.show();   
}

function validarSenha() {   
  let senha1 = document.getElementById("senha1").value;   
  let senha2 = document.getElementById("senha_confirmar").value;    

  if(senha1.length === 0) {     
    document.getElementById('resultado').innerHTML = "Campo obrigatório. Por favor preencher!";   
  } else if(senha2.length === 0) {     
    document.getElementById('resultado').innerHTML = "Campo obrigatório. Por favor preencher!";   
  }  else if (senha1 == senha2){     
      document.getElementById('resultado').innerHTML = "Senhas corretas";   
  } else {     document.getElementById('resultado').innerHTML = "Senhas diferentes. Tente novamente";   
}
}