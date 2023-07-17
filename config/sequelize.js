import  Sequelize  from "sequelize";
import dotenv from "dotenv";

dotenv.config();
/* const dbHost = process.env.DB_IS_LOCAL==="true" ? process.env.DB_HOST : process.env.DB_REMOTE_HOST; */
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
host:process.env.DB_HOST,
port:3306,
dialect: "mysql",
define: {
    timestamps: false,
    freezeTableName: true,
  },
});

export default connection;