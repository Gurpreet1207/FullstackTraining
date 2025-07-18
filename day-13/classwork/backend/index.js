const express = require("express");//call
// const homeRoutes=require("./routes/routes.js");
// const logger=require("./middlewares/logger.js");
const { connection } = require("./configs/db.js");
const { userRoute }   = require("./routes/user.routes");

const app=express();
app.use(express.json())

// const {}=require("./configs/db.js");

app.get("/",(req,res)=>{//default raoute//port we can give anything
    res.status(200).send(`<h2 style="color:blue;background-color:yellow;width:80%;margin:auto">"Welcome to rayat bhara Server"</h2>`);
});
// const PORT = 8080;
// app.use(logger);//middleware
// app.use("./",homeRoutes)//routes
app.use(userRoute);

const PORT = 8080;

app.listen(PORT,async()=>{
    try{
        console.log("Database is connecting");
        await connection
        console.log("Database is connected");
    }catch(error){

    }
    
    console.log(`Server is running at http://localhost:${PORT}`);
})