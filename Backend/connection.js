const mongoose = require('mongoose');

const url = "Add Your MongoDB link here";

//premise

mongoose.connect(url)

//then is shortcut to write then n catch

.then(() => {
    console.log('connected to database');
    
}).catch((err) => {
    console.error(err);
    
});

module.exports = mongoose;
