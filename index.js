import express from "express";
import router from "./routes/router.js";
import session from "express-session";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();


app.use(cors());

app.use(express.urlencoded({extended: true})); // Para que express pueda procesar los datos recibidos en formularios

app.use(express.json()); // Para que express pueda procesar los datos recibidos en formato JSON

app.use(session(
    {
    secret: process.env.SESSION_SECRET, // Clave de encriptación de las cookies (puede ser cualquier string)
    resave: true, // No guardar la sesión en cada petición si no hay cambios
    saveUninitialized: false, // No crear automáticamente una sesión vacía para cada petición
    cookie: { 
        secure: false, // La cookie se debe enviar sólo sobre HTTPS (true) o también sobre HTTP (false)
        maxAge: 1000 * 60  * 1// Caducidad de la cookie: 2 minutos
    }, 
    
}));

app.use(function(req,res,next){ // Middleware para pasar datos a las vistas
    res.locals.session = req.session;
    next();
});

app.use(express.static('public'))
app.set('views', './views');
app.set('view engine', 'pug');

app.use ("/", router);

app.listen(3000, () => {
    console.log("Listening on port 3000");    
});

// Configuración de archivos estáticos
app.use(express.static('public'));


