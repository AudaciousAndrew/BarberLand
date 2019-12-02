const router = require("express").Router();
const Service = require("../models/Service");

router.get("/:slug" , async (req , res) => {
    Service.findOne({slug:req.params.slug} , function(err,service){
       if(err){
           res.send("Error in get single service")
       } else {
           res.json(service);
       }
   })
});

module.exports = router;
