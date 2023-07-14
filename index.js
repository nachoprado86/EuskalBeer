import Express from "express";
import router from "./routes/router.js";

const app =  Express();

app.use ("/", router);

app.listen(3000, () => {
    console.log("Listening on port 3000");    
});
