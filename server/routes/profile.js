const router = require("express").Router();
const verify = require("./verifyToken");
const User = require("../models/User");

router.post("/update", verify, async (req, res) => {
  const id = req.body._id;
  delete req.body._id;
  await User.updateOne({ _id: id }, req.body, function(err, user) {
    if (err) {
      res.send("Error in update user");
    } else {
      res.json(user);
    }
  });
});

module.exports = router;
