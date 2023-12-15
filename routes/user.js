const express = require("express");
const app = express();
app.use(express.json());
app.listen(2000);

let db = new Map();
db.set(1, { userId: "sangha", pwd: "123" });
app.post("/join", (req, res) => {});
// 회원가입
app.get("/users/:id", (req, res) => {});
// 회원 개별 조회
app.delete("/users/:id", (req, res) => {});
// 회원 개별 탈퇴

app.post("/login", (req, res) => {
  if (!isSend(req.body)) {
    res.json({ message: "데이터가 전달되지 않았습니다." });
    return;
  }

  const { userId, pwd } = req.body;
  console.log(userId, pwd);
  // body로 userId, pwd를 받아온다.
  // userId가 Db에 저장된 회원인지 확인해야한다.
  // Pwd도 맞는지 비교

  //1. UserId가 있는지를 먼저 판단해야해

  if (isExistUserId(userId)) {
    if (isExistUserPwd(pwd)) {
      res.json({ message: "일치합니다." });
    } else {
      res.json({ message: "비밀번호가 다릅니다." });
    }
  } else {
    res.json({ message: "존재하지 않는 id 입니다." });
  }
});

function isExistUserId(userId) {
  for (let i = 1; i <= db.size; i++) {
    if (db.get(i).userId === userId) {
      //동일 하다면 ?
      return true;
    }
  }
  return false;
}
function isExistUserPwd(pwd) {
  for (let i = 1; i <= db.size; i++) {
    if (db.get(i).pwd === pwd) {
      //동일 하다면 ?
      return true;
    }
  }
  return false;
}
function isSend(obj) {
  return Object.keys(obj).length === 0 ? false : true;
}
