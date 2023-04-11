const {Schema, model, Types} = require('../connection');


const schemaObj=new Schema({
    title:String,
    description: String, 
    createdAt: Date,
    members:Array
   
})

module.exports = model('teams', schemaObj);
