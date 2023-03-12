const express = require("express");
const Books = require("../models/Books");
const router = express.Router();


router.get("/book",async(req,res)=>{
  try{
    const data = await Books.find()
    if(data){
      res.status(200).json({
        validBooks:data
      })
    }else{
      res.status(500).json({
        msg:"something went wrong !!!"
      })
    }

  }catch(err){
    console.log(err);
  }
});


router.post("/book", async (req, res) => {
    try {
          const bookData =  Books.create(req.body);
          if (bookData) {
            res.status(200).json({ msg: "Book Added successfully!!" });
          } else {
            res.json({ msg: "something went worng" });
          }
    } catch (err) {
      console.log(err);
    }
  });



  module.exports = router;
