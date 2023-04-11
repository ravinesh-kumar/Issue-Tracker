const express = require('express');
const router= express.Router();
const Model = require('../models/issueModel');



router.post('/add', (req,res)=>{ //product add ke liye use hora hai
    console.log(req.body);
  new Model(req.body).save() //joo req hai usko body(DB) me save kr do
  .then((data) => {
      console.log(data);  //usse data ko print kr do file me
res.json(data);
  }).catch((err) => {  //error ko catch kro agar error hai toh print kr do
      console.error(err);
      res.status(500).json(err);  //code 500 error show krta hai and 400 success ko
  });
});



router.get('/getall',(req,res) => {
    Model.find().populate('assignedBy')
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
     
    });
});



router.get('/getbyid/:id', (req,res)=>{ // getbyid main id ke though store ho rhi hai
    const id=req.params.id;
    console.log(id);
    Model.findById( req.params.id) //findbyid id find kr rha hai
    .then((result) => {
        res.json(result);  //result json me store ho raha hai aur isko postman me check kr skte hai
        //postman is use for checking the api is working or not
    }).catch((err) => {     //error catch kr rhaa hai agar koi error aati aati hai toh woo catch wala run hoga
        console.error(err);
        res.status(500).json(err);  //500 is the error code use for if the error occur it will show
     
    });
});



router.delete('/delete/:id', (req,res)=>{
    const id=req.params.id;
    console.log(id);
    Model.findByIdAndDelete( req.params.id)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
     
    });
});



router.put('/update/:id', (req,res)=>{
    const id=req.params.id;
    console.log(id);
    Model.findByIdAndUpdate( req.params.id, req.body, {new:true})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.error(err);
        res.status(500).json(err);
    });
});

module.exports = router;