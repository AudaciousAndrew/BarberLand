const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/edit" , verify , async (req , res) => {
    res.send("profile edite mode");
});

module.exports = router;
