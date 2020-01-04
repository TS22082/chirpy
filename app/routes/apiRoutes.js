const express = require("express");
const router = express.Router();
const Chirp = require("../models/chirp");

// get all chirps
router.get("/all", (req, res) => {
  Chirp.findAll({}).then(results => {
    res.json(results);
  });
});

// get specific chirp
router.get("/:id", (req, res) => {
  Chirp.findAll({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.send(dbPost);
  });
});

// post a chirp
router.post("/new", (req, res) => {
  Chirp.create({
    author: req.body.author,
    body: req.body.body,
    created_at: req.body.created_at
  }).then(() => {
    res.end();
  });
});

// delete a chirp
router.delete("/:id", (req, res) => {
  Chirp.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.end();
  });
});

router.patch("/:id", (req, res) => {
  Chirp.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

module.exports = router;
