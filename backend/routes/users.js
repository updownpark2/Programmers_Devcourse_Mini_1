const express = require("express");

const router = express.Router();
router.use(express.json());

const db = require("../db/users.js");

router.post("/join", (req, res) => {
  const { id, pwd, name } = req.body;
  // 정상적으로 들어왔고 만약 id가 이미 있는거면 있다고 알려줘야함
  for (let i = 1; i <= db.size; i++) {
    if (db.get(i).id === id) {
      //걸리면?
      res.json({ message: "이미 존재하는 Id 입니다.", pass: false });
      return;
    }
  }
  //통과되면 없는거니까
  res.json({ message: "회원가입을 축하드립니다.", pass: true });
  db.set(db.size + 1, { id: id, pwd: pwd, name: name });
});

router.post("/login", (req, res) => {
  const { id, pwd } = req.body;
  // 정상적으로 들어왔고 만약 id가 이미 있는거면 있다고 알려줘야함
  for (let i = 1; i <= db.size; i++) {
    if (db.get(i).id === id && db.get(i).pwd === pwd) {
      //걸리면?
      res.json({ message: "반갑습니다.", pass: true });
      return;
    }
  }
  //통과되면 없는거니까
  res.json({ message: "일치하지않습니다.", pass: false });
});

module.exports = router;
