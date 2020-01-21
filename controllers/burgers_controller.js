var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hObject = {
      burgers: data
    };
    // console.log(hObject);
    res.render("index", hObject);
  });
});

router.post("/api/burgers", function(req, res) {
  console.log(req.body);
  burger.insertOne(req.body.name, function(data) {
    res.json({ id: data.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let id = req.params.id;
  burger.updateOne(id, function(result) {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
