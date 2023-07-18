
import cerveza_controller from "./cerveza_controller.js";


async function renderLista(req, res) {
    res.render("lista_view");
}

async function crearFavorito (req, res) {
    let { idCerveza } = req.body;
    let usuario  = req.session.usuario;
    let idUsuario = usuario.id_usuario;
    await cerveza_controller.addFavorite(idUsuario, idCerveza);
    res.redirect("/showroom");
}

async function borrarFavorito (req, res) {
    let { idCerveza } = req.body;
    let usuario  = req.session.usuario;
    let idUsuario = usuario.id_usuario;
    await cerveza_controller.removeFavorite(idUsuario, idCerveza);
    res.redirect("/showroom");
}

/* async function getAll(req, res) {
    try {
      // Obtener los datos de las cervezas
      let cervezasData = await cerveza_controller.getAll();
  
      // Crear un arreglo para almacenar los datos de las cervezas
      let cervezas = [];
  
      // Recorrer los datos de las cervezas y extraer las propiedades deseadas
      cervezasData.forEach(cerveza => {
        cervezas.push({
          id_cerveza: cerveza.dataValues.id_cerveza,
          nombre_cerveza: cerveza.dataValues.nombre_cerveza,
          clase: cerveza.dataValues.clase,
          marca: cerveza.dataValues.marca,
          origen: cerveza.dataValues.origen,
          graduacion: cerveza.dataValues.graduacion
        });
      });
  
      // Obtener los datos de la sesión
      const usuario = req.session.usuario;
  
      // Renderizar la vista Pug y pasar los datos
      res.render("lista_view", { cervezas: cervezas, usuario: usuario });
    } catch (error) {
      console.error(error);
      res.status(500).send("Error en el servidor");
    }
  } */
  
  


export {renderLista, crearFavorito, borrarFavorito};