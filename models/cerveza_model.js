import connection from "../config/sequelize.js";
import Sequelize from "sequelize";
// import Genero from "./genero.js";
// import Usuarios from "./album.js";

const Cerveza = connection.define(
  "cerveza",
  {
    id_cerveza: {
      type: Sequelize.INTEGER,
      unsigned: true,
      primaryKey: true,
      allowNull: true,  
      // *no se si está correcto

      // autoIncrement: true,
    },
    nombre_cerveza: {
      type: Sequelize.STRING(60),
      allowNull: true,
      // allowNull: true, *no se si está correcto
    },
    clase: {
      type: Sequelize.STRING(45),
      allowNull: true,
      // allowNull: true, *no se si está correcto
    },
    marca: {
      type: Sequelize.STRING(45),
      allowNull: true,
      // allowNull: true, *no se si está correcto
    },
    origen: {
        type: Sequelize.STRING(45),
        allowNull: true,
        // allowNull: true, *no se si está correcto
      },
    graduacion: {
        type: Sequelize.STRING(6),
        allowNull: true,
        // allowNull: true, *no se si está correcto
      },
  }
);


// Cerveza.belongsTo(Genero, {foreignKey: "genero_id"});
// Genero.hasMany(Cerveza, {foreignKey: "genero_id"});
// * NO SE HASTA QUE PUNTO HAY QUE UTILIZAR LAS DOS LÍNEAS ANTERIORES



// many to many usando la tabla intermedia cerveza_has_usuarios

Cerveza.belongsToMany(Usuarios, {through: "cerveza_has_usuarios", foreignKey: "id_cerveza"});
Usuarios.belongsToMany(Cancion, {through: "cerveza_has_usuarios", foreignKey: "id_usuario"});


export default Cerveza;