const express = require("express");
const app = express();
const cors = require("cors");
const { db } = require("./db/user");

app.use(express.json());
app.listen(2000);
app.use(cors({ origin: "*" }));

// id는 해당 db의 Id니까 그냥 db.size+1로 하는게 나을듯
app.post("/login", (req, res) => {});
// 로그인

app.post("/join", (req, res) => {
  const { userId, pwd } = req.body;

  //Id에 중복이 없는지 확인해야지
  // db를 순회하면서 해당 userId가 있는지를 판단하면 너무 오래걸리는데
  db.set(db.size + 1, { userId: userId, pwd: pwd });
  res.json({ message: "되는듯" });
});
// 회원가입
// 등록하면 201 http status code

app.get("/users/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  const userInfo = db.get(id);
  if (userInfo) {
    res.status(200).json(userInfo);
  } else {
    res.status(400).json({ message: "없슴다" });
  }
});
// 회원조회
