var btnLogout = window.document.getElementById("btnLogout");

function handleLogout() {
  localStorage.removeItem("user-login");

  return window.location.href = "/pages/"
}

btnLogout.addEventListener("click", handleLogout);
