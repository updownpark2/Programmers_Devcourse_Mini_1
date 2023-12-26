const express = require("express");
const connection = require("../db/mariaDB.js");

const router = express.Router();
router.use(express.json());

const conn = connection;

router.post("/join", (req, res) => {
  let { id, pwd, name } = req.body;
  pwd = parseInt(pwd);
  // 정상적으로 들어왔고 만약 id가 이미 있는거면 있다고 알려줘야함
  conn.query("SELECT * FROM users", function (err, result) {
    for (let i = 0; i < result.length; i++) {
      if (result[i].user_id === id) {
        //만약 같은게있으면
        res.json({ message: "중복 아이디가 존재합니다.", pass: false });
        return;
      }
    }

    //여기서 이제 추가해야함
    conn.query(
      "INSERT INTO users (user_id, password, name) VALUES (?,?,?)",
      [id, pwd, name],
      function (err, result) {
        res.json({ message: "회원가입을 축하드립니다.", pass: true });
      }
    );
  });
  //통과되면 없는거니까
});

router.post("/login", (req, res) => {
  let { id, pwd } = req.body;
  pwd = parseInt(pwd);
  // 정상적으로 들어왔고 만약 id가 이미 있는거면 있다고 알려줘야함
  conn.query(
    `SELECT * FROM users WHERE user_id = ?`,
    id,
    function (err, result) {
      if (result.length === 0) {
        //이건 이제 해당 Id 잘못입력
        res.json({ message: "아이디가 잘못됐습니다", pass: false });
        return;
      }
      if (result[0].password !== pwd) {
        res.json({ message: "비밀번호가 잘못됐습니다", pass: false });
        return;
      }
      res.json({ message: "성공하셨습니다", pass: true });
    }
  );
  //통과되면 없는거니까
});

module.exports = router;
