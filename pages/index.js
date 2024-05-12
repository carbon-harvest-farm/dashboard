// TODO
const userKey = "user-login";
var hasUserLogin = window.localStorage.getItem(userKey);

window.addEventListener("load", function (event) {
  if (hasUserLogin) {
    return window.document.location.href = "./dashboard";
  }
});

var btnLogin = document.getElementById("formLogin");
var loginPassword = document.getElementById("loginPassword");
var loginId = document.getElementById("loginID");
var loginMessage = document.getElementById("loginMessage");

function handleLoginClick(event) {
  event.preventDefault();

  console.log(window.location.href);

  const currentLogin = fakeUser.find((item) => item.login === loginId.value);

  if (!currentLogin) {
    loginMessage.innerText = "Instalação não encontrada.";
    return;
  }

  const comparePassword = loginPassword.value === currentLogin.password;

  if (!comparePassword) {
    loginMessage.innerText = "Senha incorreta.";
    return;
  }

  window.localStorage.setItem(userKey, true);
  return window.document.location.href = "/pages/dashboard";
}

btnLogin.addEventListener("submit", (e) => handleLoginClick(e));

console.log(fakeUser)
