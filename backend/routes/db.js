const express = require("express");
const connection = require("../db/mariaDB");

const router = express.Router();
router.use(express.json());

const conn = connection;

router.post("/userPk", (req, res) => {
  const { user_id } = req.body;

  conn.query(
    "SELECT id FROM users WHERE user_id = ?",
    user_id,
    function (err, result) {
      res.json(result);
    }
  );
});
router.post("/myChannels", (req, res) => {
  const { id } = req.body;

  conn.query(
    "SELECT * FROM channels WHERE user_id = ?  ",
    id,
    function (err, result) {
      res.json(result);
    }
  );
});

module.exports = router;
