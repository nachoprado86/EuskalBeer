import Cerveza from "../../models/cerveza_model.js";
import Usuarios from "../../models/usuario_model.js";



async function getAll() {
    let result = await Cerveza.findAll();
    console.log("resultado: ", result)
    return result;
}

async function getById(id) {
    let result = await Cerveza.findAll({

        //attributes: ["marca"],
        where: {
            id_cerveza: id,
        },
    });
    console.log("resultado: ", result)
    return result;
}

// Controlador para recibir desde lista_controller.js
async function addFavorite(idUsuario, idCerveza) {
   let resultCerveza = await Cerveza.findByPk(idCerveza);

   let resultUsuario = await Usuarios.findByPk(idUsuario);
    
   await resultUsuario.addCerveza(resultCerveza);
}

// Controlador para eliminar desde lista_controller.js
async function removeFavorite(idUsuario, idCerveza) {
    let resultCerveza = await Cerveza.findByPk(idCerveza);
 
    let resultUsuario = await Usuarios.findByPk(idUsuario);
     
     await resultUsuario.removeCerveza(resultCerveza);
 }

async function getFavorites(idUsuario) {
    let result = await Usuarios.findByPk(idUsuario);
    return await result.getCervezas();
    
}
export default {
    getAll,
    getById,
    addFavorite,
    getFavorites,
    removeFavorite,
}