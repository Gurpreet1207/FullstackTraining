const express = require("express");
const data = require("./data.json");
const app = express();

app.get("/",(req, res)=>{
  res.status(200).send(`<h2 style="color:blue; background-color:yellow; width:80%;
    margin:auto">Welcome to RB Server</h2>`);
});
 
app.get("/products",(req,res)=>{
 res.status(200).send(data);
});//working of inbuilt module file system
app.get("/user",(req,res)=>{
  res.send("user data")
});

const PORT = 8080;

app.listen (PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})

const fs = require("fs")
fs.writeFileSync("./test.txt","Hello World");

fs.appendFileSyncx("./test.txt","\n this is new line");

const result = fs.readFileSync("./test.text","UTF-8");
console.log(result);

fs.writeFile('./file.text','hello world',(err))