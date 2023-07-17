import {Router} from "express";
import cerveza_controller from "../controllers/cerveza/showroom_controller.js";

const router  = Router();

router.get("/", async(req,res)=>{
    cerveza_controller.getAll(req,res);
})



export default router;