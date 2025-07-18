const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb+srv://singhbajinder32:preetkaur@cluster0.f8dtrkt.mongodb.net/myFirstDB?retryWrites=true&w=majority&appName=Cluster0");

module.exports={
    connection
}