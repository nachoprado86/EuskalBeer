// Obtén todos los botones de favoritos en la página
const buttons = document.querySelectorAll('[data-id]');

// Itera sobre cada botón y agrega un evento onClick
buttons.forEach(button => {
  button.addEventListener('click', agregarAFavoritos);
});

// Función para agregar la cerveza a la lista de favoritos
function agregarAFavoritos(event) {
  const idCerveza = event.target.dataset.id;  // Obtén el ID de la cerveza desde el atributo data-id del botón


  const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
  favoritos.push(idCerveza);
  localStorage.setItem('favoritos', JSON.stringify(favoritos));

  // También puedes realizar otras acciones, como mostrar un mensaje de éxito o actualizar la interfaz de usuario
  console.log('Cerveza agregada a favoritos:', idCerveza);
}

export function agregarAFavoritos(event) {
    // Lógica para agregar cervezas a la lista de favoritos
  }
  