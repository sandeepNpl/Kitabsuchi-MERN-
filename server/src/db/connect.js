const mongoose = require('mongoose');
module.exports = connect=async()=>{
    try{
      //database = kitabsuchi
        await mongoose.connect('mongodb://127.0.0.1:27017/kitabsuchi', {useNewUrlParser: true, useUnifiedTopology: true});
        console.log("connected to mongodb");
    }catch(error){
        console.error(error);
    }
  }
  
