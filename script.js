document.getElementById("form-contacto").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("¡Gracias por tu mensaje! Nos pondremos en contacto pronto.");
});

function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('show');
  }
