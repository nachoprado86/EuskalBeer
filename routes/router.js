import {Router} from "express";
import lista_router from "../routes/lista_router.js";
import login_router from "../routes/login_router.js";
import showroom_router from "../routes/showroom_router.js";
import registro_router from "../routes/registro_router.js";
import { loggedInMiddleware } from "../middlewares/isLoggedIn.js";


const router = Router();
router.use("/", login_router);
router.use("/register", registro_router);
router.use("/showroom", showroom_router);
router.use("/lista", loggedInMiddleware, lista_router);


export default router;