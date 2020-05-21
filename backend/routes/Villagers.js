var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Data = require('./data');


const dbRoute =
    'mongodb+srv://bhsiao:cukier@cluster0-lsg9v.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/', function (req, res, next) {
    Data.find(function(err,data){
        if(err){
            return res.json({success: false, error:err});
        }else{
            return res.json({success:true, info: data})
        }
    });
});

router.post('/', function (req, res, next) {
    let po = new Data();
    po.name = req.body.name;
    po.gender = req.body.gender;
    po.personality = req.body.personality;
    po.species = req.body.species;
    po.bday = req.body.bday;
    po.phrase = req.body.phrase;
    po.pic = req.body.pic;
    console.log(po);
    po.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true});
    });
});

router.delete('/', function (req, res, next) {
   Data.findOneAndRemove({name: req.body.name}, (err)=>{
    if (err) return res.json({ success: false, error: err });
   return res.json({ success: true });
   });
});

router.put('/', function (req, res, next){
    Data.findOneAndUpdate({name: req.body.name}, { phrase: req.body.phrase, pic: req.body.pic }, (err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

module.exports = router;
