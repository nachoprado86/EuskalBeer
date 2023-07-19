
import cerveza_controller from "./cerveza_controller.js";


async function renderLista(req, res) {
    let favoritos = await cerveza_controller.getFavorites(req.session.usuario.id_usuario);
    console.log("favoritos: ", favoritos);
    res.render("lista_view", { favoritos });

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


  


  

export {renderLista, crearFavorito, borrarFavorito,};