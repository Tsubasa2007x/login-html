document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("user-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const nombre = document.getElementById("nickname").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    
    if (nombre === "" || email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Campos incompletos",
        text: "Por favor completa todos los campos"
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Contraseña muy corta",
        text: "La contraseña debe tener al menos 6 caracteres"
      });
      return;
    }

    
    Swal.fire({
      title: "¡Registro exitoso!",
      text: "Tu cuenta fue creada correctamente",
      icon: "success",
      draggable: true,
      confirmButtonText: "Continuar"
    });

    
    form.reset();
  });

});
function togglePassword() {
    const passwordInput = document.getElementById("password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

