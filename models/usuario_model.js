import connection from "../config/sequelize.js";
import Sequelize from "sequelize";

const Usuarios = connection.define(
    "usuarios",
    {
        id_usuario: {
            type: Sequelize.STRING(100),
            primaryKey: true,
        },
        usuario_mail: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        password: {
            type: Sequelize.STRING(80),
            allowNull: false,
        },
        Favoritos: {
            type: Sequelize.STRING(200),
            allowNull: true,
        },
    }
);

export default Usuarios;

