const express = require('express');
const router = express.Router();
const Picture= require('../models/Pictures');
//get all products
router.get("/",(req,res)=>{
    Picture.find().then(data=>{
        res.status(200).json({
            pictures:data
        })
    })

});

router.post("/",(req,res)=>{

    
    const picture=new Picture({
        catalogNumber:req.body.catalogNumber,
        name:req.body.name,
        price:req.body.price,
        imgPath:req.body.imgPath,
        description:req.body.description,
        size:req.body.size,
        inStock:req.body.inStock
    })
    picture.save().then(data=>{
           res.status(200).json({
              picture:data
           });
       })
    
});

router.put("/:_id",(req,res)=>{
  
    Picture.findOneAndUpdate({_id:req.params._id},req.body).then(data=>{
       res.status(200).json({
           picture:data
       })
    })
   res.json({success:"updateComplete"})
})

router.get("/:_id",(req,res)=>{
    Picture.findById({_id:req.params._id}).then(data=>{
        res.json({picture:data});
    })
})

router.delete("/:_id",(req,res)=>{
    Picture.findByIdAndRemove({_id:req.params._id}).then(data=>{
        res.json({data:data})
    })
})

module.exports = router;