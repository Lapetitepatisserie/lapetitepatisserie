// JavaScript: el botón responde al usuario y cambia el título principal.
function saludarYCambiar(producto) {
  alert('¡Qué lindo que te interese ' + producto + '! ♡');
  document.getElementById('titulo-principal').innerText = '¡Gracias por elegir La Petite Pâtisserie!';
  document.getElementById('producto').value = producto;
  document.getElementById('contacto').scrollIntoView({behavior:'smooth'});
}
document.querySelectorAll('.product-button').forEach(function(boton) {
  boton.addEventListener('click', function() { saludarYCambiar(boton.dataset.product); });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = this.elements.nombre.value.trim();
  document.getElementById('respuesta').textContent = '¡Gracias, ' + nombre + '! ♡ Este formulario es una demostración escolar y no envía mensajes reales.';
  this.reset();
});
