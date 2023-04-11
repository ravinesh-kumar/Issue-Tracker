const mongoose = require('mongoose');

const url = "mongodb+srv://Ravinesh:Gaharwal123@cluster0.2klhwid.mongodb.net/Issue_tracker?retryWrites=true&w=majority";

//premise

mongoose.connect(url)

//then is shortcut to write then n catch

.then(() => {
    console.log('connected to database');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports = mongoose;