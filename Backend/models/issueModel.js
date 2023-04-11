const {Schema, model, Types} = require('../connection');


const schemaObj=new Schema({
    title:String,
    type: String, 
    assignedBy : {type:Types.ObjectId,ref:"users"},
    assingedTo : String,
    createdAt: Date,
    org :String,
    status: {type:String, default: "new"},
    closed:{type:Boolean, default: false}
})

module.exports = model('issues', schemaObj);
