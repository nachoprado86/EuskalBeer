import {Router} from "express";
import registerControler from "../controllers/usuario/registro_controller.js";

const router  = Router();



router.get("/register", async(req,res)=>{
    registerControler(req,res);
})



// router.get("/", (req,res)=>{
//     cancionController.getAll2(req,res);
// });



// router.get("/api", (req,res)=>{
//     cancionApiController.getAll(req,res);
// });
// router.get("/:id",async(req,res)=>{
//     cancionController.getById(req,res);
// })

export default router;