const express = require("express")
const router = express.Router()
const  ForumSchema = require("../models/ForumSchema.js")

// Get All UserSchema
router.get('/getallchats', function (req, res, next) {
    ForumSchema.find({}).then(function (element) {
        res.send(element);
    }).catch(next);
});

// Get One UserSchema
// router.get('/id/:id', function (req, res, next) {
//     UserSchema.findOne({id: req.params.id}).then(function(element){
//         res.send(element);
//     }).catch(next);
// });

// Get One UserSchema by email
// router.get('/user/one/:email', function (req, res, next) {
//     UserSchema.findOne({email: req.params.email}).then(function(element){
//         res.send(element);
//     }).catch(next);
// });

//Get all UserSchema By email
// router.get('/user/:email', function (req, res, next) {
//     UserSchema.find({email: req.params.email}).then(function(element){
//         res.send(element);
//     }).catch(next);
// });

// add a new UserSchema 
router.post('/addchat',function(req,res,next){
    ForumSchema.create(req.body).then(function(element){
        res.send(element);
    }).catch(next);
});



// update a UserSchema
router.put('/like/:_id', function(req, res, next) {
    const { _id } = req.params;
    const { like } = req.body;
    ForumSchema.findOneAndUpdate({ _id }, { $set: { like } }, { new: true })
      .then(function(updatedElement) {
        if (!updatedElement) {
          return res.status(404).json({ message: 'Element not found' });
        }
        res.json(updatedElement);
      })
      .catch(function(err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
      });
  });
  

// Update Tags in UserSchema
// router.put('/addtags/:email',function(req,res,next){
//     UserSchema.findOneAndUpdate({email: req.params.email}, req.body).then(function(element){
//         UserSchema.findOne({email: req.params.email}).then(function(element){
//             res.send(element);
//         });
//     });
// });

// delete a UserSchema 
// router.delete('/:id',function(req,res,next){
//     UserSchema.findOneAndDelete({id: req.params.id}).then(function(element){
//         res.send(element);
//     });
// });

// delete all UserSchema
// router.delete('/',function(req,res,next){
//     UserSchema.deleteMany(req.body).then(function(element){
//         res.send(element);
//     }).catch(next);
// });

module.exports = router