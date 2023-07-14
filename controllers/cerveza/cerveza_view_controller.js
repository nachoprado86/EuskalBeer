import cerveza_controller from "controllers/cerveza/cerveza_controller.js";

async function getAll(req,res){
    let result = await cerveza_controller.getAll();
    
    res.render("cerveza/list",{cervezas:result});
}


async function getById(req,res){
    let {id} = req.params;
    let result = await cerveza_controller.getById2(id);
    result = result.map((cancion)=>{
        cerveza.clase = new Date(cerveza.clase * 1000).toISOString().slice(11, 19);
        return cerveza;
    });
    res.render("cerveza/list",{cervezas:result,user:req.session.usuario})
}
