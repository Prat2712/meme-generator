const Model = require('../models/usermodel');
const router = require('express').Router();

//const express = new express();



// add user
// fetch all users
// fetch user by ID
// update userr
// delete user
// authenticate user

// performing database operations

//to add
router.post('/add',(req,res) => {
  //reading client data from request body
  console.log(req.body);
 // res.send('response from user router')

 //create operation
 new Model(req.body).save()
 .then((result) => {
  console.log(result);
  console.log('data saved');
  res.json(result);
 }).catch((err) => {
  console.log(err);
  res.json(err);
  
 });
});
router.get('/getall',(req,res) => {
  Model.find({})
  .then((result) => {
    console.log(result);
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.json(err);
  });
  //res.send('response from user router getall')
});

router.get('/checkemail/:useremail',(req, res)=>{


  //to fetch client data from get request
  console.log( req.params.useremail);
  Model.findOne({email : req.params.useremail})
  .then((result) => {
    console.log(result);
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.json(err);
    
  });
})

router.get('/getbyid/:userid',(req,res) =>{
  Model.findById(req.params.userid)
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.json(err);
  });
});

router.delete('/delete/:userid',(req,res) =>{
  Model.findByIdAndDelete(req.params.userid)
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.json(err);
  });
});
router.put('/update/:userid',(req,res) =>{
  Model.findByIdAndUpdate(req.params.userid,req.body,{new : true})
  .then((result) => {
    res.json(result);
  }).catch((err) => {
    console.log(err);
    res.json(err);
  });
});


router.post('/Authenticate', (req,res) => {
   console.log(req.body);
  Model.findOne({email : req.body.email ,password : req.body.password})
  .then((userdata) => {
    if(userdata){
      console.log(userdata);
      res.status(200).json(userdata);
    }else{
      res.status(300).json({message : 'Invalid Credentials'});
    }
  }).catch((err) => {
    console.error(err);
    res.json(err);
  });
})

module.exports = router;