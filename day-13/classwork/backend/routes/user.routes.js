const express = require("express");
const { usersignup } = require("../controllers/user.controller");

const userRoute = express.Router();

userRoute.post('/signup',usersignup);

module.exports={
    userRoute
}