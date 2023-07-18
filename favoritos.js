const buttons = document.querySelectorAll('[data-id]');
buttons.forEach(button => {
    button.addEventListener('click', agregarAFavoritos);
});

function agregarAFavoritos(event) {
    const idCerveza = event.target.dataset.id;

    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    favoritos.push(idCerveza);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));

}

export function agregarAFavoritos(event) {
}





/* const Usuario = require('..models/usuario_model.js');

async function agregarAFavoritos(event) {

    const idCerveza = event.target.dataset.id;

    try {
        let usuario = await Usuario.findOne({ where: { id_usuario: 1 } });
      

        // Agrega el favorito a la lista de favoritos del usuario
        usuario.favoritos.push(idCerveza);
        await usuario.save();

        // Realiza otras acciones o redirecciones según sea necesario
        console.log('Cerveza agregada a favoritos:', idCerveza);
    } catch (error) {
        console.error('Error al agregar la cerveza a favoritos:', error);
    }
}
 */