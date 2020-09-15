const router = require("express").Router();
const Subscriptions = require("../models/Subscriptions");
const verify = require("./verifyToken");

router.post("/add", async (req, res) => {
  try {
    const subscription = new Subscriptions(req.body);
    await subscription.save();
    res
      .status(200)
      .send({ status: "success", message: "Successefully subscribed." });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error });
  }
});

router.delete("/delete", verify, async (req, res) => {
  try {
    await Subscriptions.deleteMany(
      { type: req.body.type, userId: req.body.userId },
      function (err, subs) {
        if (err) {
          res.status(400).send({ status: "fail", message: err });
        } else {
          if (subs.deletedCount === 0) {
            res.status(200).send({
              status: "success",
              message: "You don't have subscriptions of this type.",
            });
          } else {
            res.status(200).send({
              status: "success",
              message: "Successefully removed all subscriptions of this type.",
            });
          }
        }
      }
    );
  } catch (error) {
    res.status(400).send({ status: "fail", message: error });
  }
});

router.delete("/delete/all", verify, async (req, res) => {
  try {
    await Subscriptions.deleteMany({ userId: req.body.userId }, function (
      err,
      subs
    ) {
      if (err) {
        res.status(400).send({ status: "fail", message: err });
      } else {
        if (subs.deletedCount === 0) {
          res.status(200).send({
            status: "success",
            message: "You don't have any subscriptions.",
          });
        } else {
          res.status(200).send({
            status: "success",
            message: "Successefully removed all subscriptions.",
          });
        }
      }
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error });
  }
});

router.delete("/delete/one", verify, async (req, res) => {
  try {
    await Subscriptions.deleteOne(
      { userId: req.body.userId, _id: req.body.subId },
      function (err, subs) {
        if (err) {
          res.status(400).send({ status: "fail", message: err });
        } else {
          if (subs.deletedCount === 0) {
            res.status(200).send({
              status: "success",
              message: "You don't have any subscriptions.",
            });
          } else {
            res.status(200).send({
              status: "success",
              message: "Successefully removed this subscription.",
            });
          }
        }
      }
    );
  } catch (error) {
    res.status(400).send({ status: "fail", message: error });
  }
});

router.post("/get/all", verify, async (req, res) => {
  try {
    await Subscriptions.find({ userId: req.body.userId }, function (err, subs) {
      if (err) {
        res.status(400).send({ status: "fail", message: err });
      } else {
        res.status(200).json(subs);
      }
    });
  } catch (error) {
    res.status(400).send({ status: "fail", message: error });
  }
});

module.exports = router;
