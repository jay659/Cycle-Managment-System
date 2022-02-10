const express = require("express");
const router = express.Router();

const BookDetails = require("../models/BookDetails");

const auth = require("../middleware/auth");

// @route    POST api/bookcycle
// @desc     Book the cycle
// @access   auth
router.post("/", auth, async (req, res) => {
  let cycle = await BookDetails({
    ...req.body,
    user: req.user.id,
  });
  await cycle.save();
  res.status(200).send({
    msg: "Your booking is successfully done. Plz view Book Detail page",
    cycle,
  });
});

// @route    GET api/bookcycle
// @desc     Get all Book cycle for specific user
// @access   auth
router.get("/", auth, async (req, res) => {
  console.log(req.user.id);
  if (req.user.id === "608a2dcd18ef9727906406fa") {
    let cycle = await BookDetails.find();
    return res.status(200).send(cycle);
  }
  cycle = await BookDetails.find({
    user: req.user.id,
  });

  res.status(200).send(cycle);
});
module.exports = router;
