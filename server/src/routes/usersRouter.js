const express = require("express");
const { db } = require("../models/Users");
const router = express.Router();
const Users = require("../models/Users");
const bcrypt = require("bcrypt")

router.post("/register", async (req, res) => {
  try {
    const hash = await bcrypt.hashSync(req.body.password, 10);
    Users.findOne({ email: req.body.email }).then((user) => {
      if (!user) {
        req.body.password = hash
        const userData =  Users.create(req.body);
        if (userData) {
          res.status(200).json({ msg: "Register successfully" });
        } else {
          res.json({ msg: "something went worng" });
        }
      } else {
        res.status(409).json({ msg: "user already exists" });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const user = await Users.findOne({email: req.body.email}).lean()
  if(user){
    try{
    const {email,password} = user;
    const isMatched= bcrypt.compareSync(req.body.password, password);
    if(email && isMatched){
      const {password, ...refactoredUserObj} = user
      res.status(200).json({
        msg:"log in successfully",
        userData: refactoredUserObj
      })
    }
    else{
      res.status(401).json({
        msg:"Invalid email or password"
      })
    }
    }
    catch(err){
      console.log(err)
    }
    }
    else{
      res.json({
        msg:"user does not exist"
      })
    }
});

module.exports = router;
