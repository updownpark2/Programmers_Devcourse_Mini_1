const express = require("express");

const router = express.Router();
router.use(express.json());

const db = require("../db/channels.js");

router.get("/", (req, res) => {
  let channelDB = {};
  db.forEach((value, key) => {
    channelDB[key] = value;
  });
  res.json({ channelDB: channelDB });
  //map인데 바로 넣어주려다보니까 그런거 같다.

  console.log(db, "asd");

  //서버에서는 Db가 정상적으로 출력이 되는데 클라이언트쪽에서 찍히질않는다.
  //정확히는 빈객체가 찍힌다.
});

module.exports = router;
