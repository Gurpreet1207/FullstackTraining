const { userModel } = require("../models/user.models");
const bcrypt = require("bcrypt")

const usersignup = async (req, res) => {
    const { name, email, password, phonenumber, age } = req.body;
    console.log(req.body);
    const userExit = 
    await userModel.findOne({ email });

    if (userExit) {
        return res.status(400).send("user already exist");

    }

    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
                res.status(400).send("Error while hashing")
            } else {
                const user = new userModel({
                    name,
                    email,
                    password: hash,
                    phonenumber,
                    age
                });

                await user.save();
                res.status(200).send("User data successfully stored in DB")

            }
        });

    } catch (error) {
        res.status(400).send({ error: error.message });
    }

}
const userlogin = () => {

}
module.exports = {
    usersignup
}