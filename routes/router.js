import {Router} from "express";
import lista_router from "../routes/lista_router.js";
import login_router from "../routes/login_router.js";
import showroom_router from "../routes/showroom_router.js";
import registro_router from "../routes/registro_router.js";

const router = Router();
router.get("/", (req,res)=>{
    res.send ("Esta es la página principal con el login");
})
router.use("/login", login_router);
router.use("/register", registro_router);
router.use("/showroom", showroom_router);
router.use("/list", lista_router);


export default router;