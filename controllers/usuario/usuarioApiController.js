import Usuario from "../../models/usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  register: async (req, res) => {
    try {
      let { username, password, password_repeat } = req.body;
      if (password !== password_repeat) {
        return res.status(400).json({
          error: "Las contraseñas no coinciden",
        });
      }
      let hash = await bcrypt.hash(password, 11);
      let result = await Usuario.create({ username, password: hash });
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error desconocido al registrarse",
      });
    }
  },
  login: async (req, res) => {
    try {
      let { username, password } = req.body;
      let usuarioGuardado = await Usuario.findOne({ where: { username } });
      if (!usuarioGuardado) {
        return res.status(400).json({
          error: "El usuario no existe",
        });
      }
      let hash = usuarioGuardado.password;
      let iguales = await bcrypt.compare(password, hash);
      if (!iguales) {
        return res.status(401).json({
          error: "La contraseña no es correcta",
        });
      }

      // Generar token JWT
      let payload = { 
        id: usuarioGuardado.usuario_id,
        username : username
      };
      let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

      return res.send({
        token,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        error: "Error desconocido al iniciar sesión",
      });
    }
  },

  
};
