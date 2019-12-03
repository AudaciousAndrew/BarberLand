const router = require("express").Router();
const ServiceCard = require("../models/ServiceCard");

router.get("/all" , async (req , res) => {
    ServiceCard.find({} , function(err,serviceCards){
       if(err){
           res.send("Error in get serviceCards")
       } else {
           res.json(serviceCards);
       }
   })
});

module.exports = router;
