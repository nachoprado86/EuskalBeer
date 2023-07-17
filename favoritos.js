const Usuario = require('..models/usuario_model.js');

async function agregarAFavoritos(event) {

    const idCerveza = event.target.dataset.id;

    try {
        let usuario = await Usuario.findOne({ where: { id_usuario: 'nombre_de_usuario' } });
        if (!usuario) {
            usuario = await Usuario.create({ nombre: 'nombre_de_usuario' });
        }

        // Agrega el favorito a la lista de favoritos del usuario
        usuario.favoritos.push(idCerveza);
        await usuario.save();

        // Realiza otras acciones o redirecciones según sea necesario
        console.log('Cerveza agregada a favoritos:', idCerveza);
    } catch (error) {
        console.error('Error al agregar la cerveza a favoritos:', error);
    }
}
