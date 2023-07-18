
import Usuario from "../../models/usuario_model.js";
import bcrypt from "bcrypt";

const logincontroller = {

    loginForm: (req, res) => {
        res.render("login_view");
    },
    login: async (req, res) => {
        try {
            let { id_usuario, password } = req.body;
            let usuarioGuardado = await Usuario.findOne({ where: { id_usuario } }); //Cambiado a "Usuarios" (nombre real de la tabla)
            if (!usuarioGuardado) {
                throw new Error("El usuario no bebe");
            }
            let hash = usuarioGuardado.password;
            let iguales = await bcrypt.compare(password, hash);
            if (!iguales) {
                throw new Error("La contraseña no es correcta, caballero");
            }

            // Guardar la sesión
            req.session.usuario = usuarioGuardado;

            res.redirect("/showroom");//cerveza o cervezas*

        }
        catch (error) {
            res.render("login_view", { error: error.message });
        }
    },

    logout: (req, res) => {
        // Borrar la sesión
        req.session.usuario = null;
        res.redirect("/");
    }
}

export default logincontroller;