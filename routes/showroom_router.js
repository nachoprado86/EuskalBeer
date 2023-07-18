import {Router} from "express";
import cerveza_controller from "../controllers/cerveza/showroom_controller.js";
import { loggedInMiddleware } from "../middlewares/isLoggedIn.js";

const router  = Router();

router.get("/", loggedInMiddleware, async(req,res)=>{
    cerveza_controller.getAll(req,res);
})

/* router.get("/", async(req,res)=>{
    cerveza_controller.getAll(req,res);
}) */


export default router;