import cerveza_controller from "./cerveza_controller.js";

async function getAll(req, res) {
    let cervezas = await cerveza_controller.getAll();
    console.log(cervezas)
    res.render("showroom_view", { cervezas });
}


async function getById(req, res) {
    let { id } = req.params;
    let cerveza = await cerveza_controller.getById2(id);
    res.render("cerveza/list", { cervezas: cerveza, user: req.session.usuario })
}

export default {
    getAll,
    getById
}
