import connection from "../config/sequelize.js";
import Sequelize from "sequelize";
import Usuarios from "./usuario_model.js";

const Cerveza = connection.define(
  "cerveza",
  {
    id_cerveza: {
      type: Sequelize.INTEGER,
      unsigned: true,
      primaryKey: true,
      allowNull: false,  
    },
    nombre_cerveza: {
      type: Sequelize.STRING(60),
      allowNull: false,
    },
    clase: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    marca: {
      type: Sequelize.STRING(45),
      allowNull: false,
    },
    origen: {
        type: Sequelize.STRING(45),
        allowNull: false,
      },
    graduacion: {
        type: Sequelize.STRING(6),
        allowNull: false,
      },
  }
);

Cerveza.belongsToMany(Usuarios, {through: "cerveza_has_usuarios", foreignKey: "id_cerveza"});
Usuarios.belongsToMany(Cerveza, {through: "cerveza_has_usuarios", foreignKey: "id_usuario"});

export default Cerveza;