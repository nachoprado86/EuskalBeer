import {Router} from "express";
import logincontroller from "../controllers/usuario/login_controller.js";

const router = Router();

router.get("/", async(req,res)=>{
    logincontroller.loginForm(req,res);
})
router.post("/", async(req,res)=>{
    logincontroller.login(req,res);
})



router.get("/logout", async(req,res)=>{
    logincontroller.logout(req,res);
})


export default router;