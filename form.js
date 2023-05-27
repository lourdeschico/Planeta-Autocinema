function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name === "") {
    alert("Por favor, ingresa tu nombre");
    return false;
  }

  if (email === "") {
    alert("Por favor, ingresa tu correo electrónico");
    return false;
  }

  if (message === "") {
    alert("Por favor, ingresa un mensaje");
    return false;
  }

  return true;
}
