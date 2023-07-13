import {Router} from "express";

const router  = Router();

router.get("/",(req,res)=>{
    console.log(res);
    res.send ("Esta es la página LISTA");
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