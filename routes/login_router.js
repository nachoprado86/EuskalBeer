import {Router} from "express";
import renderLogin from "../controllers/usuario/login_controller.js";

const router  = Router();

router.get("/", async(req,res)=>{
    renderLogin(req,res);
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