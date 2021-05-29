const express = require('express');
const Router = express.Router();
const User= require('../modle/User');
Router.post('/routes/inscription',async (req,res)=>{
   const usr = new User({
      nom : req.body.nom,
      prenom : req.body.prenom,
      adress : req.body.adress,
   });
}

)
module.exports = Router;