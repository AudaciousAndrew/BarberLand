const router = require("express").Router();
const Story = require("../models/Story");


router.get("/all" , async (req , res) => {
   await Story.find({} , function(err,stories){
       if(err){
           res.send("Error in get stories")
       } else {
           res.json(stories);
       }
   })
});

module.exports = router;
