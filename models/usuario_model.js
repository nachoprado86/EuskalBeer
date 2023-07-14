import connection from "../config/sequelize.js";
import Sequelize from "sequelize";

const Usuarios = connection.define(
    "usuario",
    {
        id_usuario: {
            type: Sequelize.INTEGER,
            unsigned: true,
            primaryKey: true,
            autoIncrement: true,
        },
        usuario_mail: {
            type: Sequelize.STRING(100),
            allowNull: false,
        },
        contraseña: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        Favoritos: {
            type: Sequelize.STRING(200),
            allowNull: true,
        },
    }
);

export default Usuarios;

