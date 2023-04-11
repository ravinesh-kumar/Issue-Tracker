const {Schema, model, Types} = require('../connection');

const schemaObj=new Schema({
    //blue print bana shuru hua aur mere login page me kya kya rhage uska backend yaha banega
    username:String,
    mobile: String, 
    age : Number,
    email : String,
    password: String,
    team : {type : Types.ObjectId ,  ref : 'teams'}
})

module.exports = model('users', schemaObj);
//file ka jo name hai usko likha hai 

