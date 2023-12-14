const express = require("express");
const app = express();
const cors = require("cors");
const { db } = require("./db/user");

app.use(express.json());
app.listen(2000);
app.use(cors({ origin: "*" }));

// id는 해당 db의 Id니까 그냥 db.size+1로 하는게 나을듯
app.post("/login", (req, res) => {
  const { userId, pwd } = req.body;
  //이거를 db에서 비교해야지
  for (let i = 1; i <= db.size; i++) {
    if (db.get(i).userId === userId && db.get(i).pwd === pwd) {
      //있는거니까 이제 보내줘버려야지
      res.json({ message: "찾았습니다.", pass: true });
      return;
    }
  }
  res.json({
    message: "아이디와 비밀번호를 확인해주세요.",
    pass: false,
  });
});
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
  console.log(userInfo);
  if (userInfo) {
    res
      .status(200)
      .json({ message: "찾았슴다", pass: true, userId: userInfo.userId });
  } else {
    res.status(400).json({ message: "없슴다", pass: false, userId: undefined });
  }
});
// 회원조회
