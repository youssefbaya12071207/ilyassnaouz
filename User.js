const mongoose=require('mongoose');
const donneeUser = new mongoose.Schema(
    {
        nom:{
            type:String,
            required:true
        },
        prenom:{
            type:String,
            required:true
        },
        adresse:{
            type:String,
            required:true
        },
        motdepass:{
            type:String,
            required:true
        }
    }
)
module.exports = mongoose.model('loginform',donneeUser);