import {Router} from "express";
import registerController from "../controllers/usuario/registro_controller.js";

const router  = Router();



router.get("/", async(req,res)=>{
    registerController.registerForm(req,res);
})

router.post("/", async(req,res)=>{
    registerController.register(req,res);
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