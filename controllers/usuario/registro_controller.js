import Usuario from "../../models/usuario_model.js";
import bcrypt from "bcrypt";
import Sequelize from "sequelize";

const regiterControler = {
    registerForm: (req, res) => {
        res.render("usuario/register");
    },
    register: async (req, res) => {
        try {
            let { username, email, password, password_repeat } = req.body;
            if (password !== password_repeat) {
                let errorItem = new Sequelize.ValidationErrorItem({
                    message: "Las contraseñas no coinciden, ¿estás borracho ya?",
                    path: "password",
                    type: "Validation error",
                });
                throw new Sequelize.ValidationError("", [errorItem]);
            }
            let hash = await bcrypt.hash(password, 11);
            console.log(hash);
            let result = await Usuario.create({ username, password: hash });
            res.json(result);
        } catch (error) {
            if (error instanceof Sequelize.ValidationError) {
                console.log("errors", error.errors);
                if (error.errors.length > 0) {
                    if (error.errors[0].type === 'notNull Violation') {
                        error.message = "Todos los campos son obligatorios";
                    } else if (error.errors[0].type === 'unique violation') {
                        error.message = "El usuario ya está en el bar";
                    }
                    else if (error.errors[0].type === 'Validation error') {
                        error.message = error.errors[0].message;
                    }
                }
                else {
                    console.log("message", error.message);
                }
            }
            else {
                error.message = "Error desconocido al registrarse";
            }
            res.render("usuario/register", { error: error.message });
        }
    },
}
export default regiterControler