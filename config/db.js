import mysql from "mysql2";


const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10
});


process.on('beforeExit', () => {
  pool.end();
});

async function getConnection() {
    return new Promise((resolve, reject) => {
      try{
        pool.getConnection((err, connection) => {
        if (err) reject(err);
        resolve(connection.promise());
        });
      }
      catch(err){
        reject(err);
      }
    });
}

export default getConnection;
