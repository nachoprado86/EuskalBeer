import {Router} from "express";
import {renderLista, crearFavorito, borrarFavorito} from "../controllers/cerveza/lista_controller.js";


const router  = Router();

router.get("/", async(req,res)=>{
    renderLista(req,res);
});

router.post ("/", async(req,res)=>{
    crearFavorito(req,res);
})

router.post ("/delete", async(req,res)=>{
    borrarFavorito(req,res);
})






/* router.get('/lista', lista_controller.getAll);
 */

export default router;