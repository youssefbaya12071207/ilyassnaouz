var http = require('http');
var fs =require('fs');
const express =require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config()
const app = express();
const port = process.env.PORT || 8000;

function onRequest(req , res) {
  response.write(200,{'content-type':'text/plain'});
  fs.readFile('C:\Users\User\projet\inscription.html',null,function(error,data)
  {
    if(error){
      response.writeHead(404);
      response.write('File not found');
    }else{
      response.write(data);
    }
    response.end();
  });
}


app.use(cors());
app.use(express.json());

//connexion db
const uri = process.env.BD_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
    
});


const loginRouter = require("./routes/loginform");
app.use('/login', loginRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)

});



var MongoClient = require('mongodb').MongoClient;
const { response, text } = require('express');


MongoClient.connect(uri, function(err, db) { // recherche
    if (err) throw err;
    var dbo = db.db("youssef");
    dbo.collection("bayabaya").find({}).toArray(function(err, result) {
      if (err) throw err;
      //var t = result.length;
      console.log(result);
      db.close();
    });
  });
  /*MongoClient.connect(uri, function(err, db) { //insertion
    if (err) throw err;
    var dbo = db.db("youssef");
    var myobj = { nom: "youssef", prenom: "baya" };
    dbo.collection("bayabaya").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });*/
  /*MongoClient.connect(uri, function(err, db) { //mise a jour
    if (err) throw err;
    var dbo = db.db("youssef");
    var myquery = { nom: "ilias" };
    var newvalues = { $set: {nom: "ilias", prenom: "khosseh" } };
    dbo.collection("bayabaya").updateOne(myquery, newvalues, function(err, res) {
      if (err) throw err;
      console.log("1 document updated");
      db.close();
    });
  });*/
  MongoClient.connect(uri, function(err, db) {//Delete 
    if (err) throw err;
    var dbo = db.db("youssef");
    var name ='youssef';
    var myquery = { nom: name };
    dbo.collection("bayabaya").deleteOne(myquery, function(err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      db.close();
    });
  });
  