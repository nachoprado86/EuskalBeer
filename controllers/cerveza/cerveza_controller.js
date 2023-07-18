import Cerveza from "../../models/cerveza_model.js";



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

export default {
    getAll,
    getById,
}