const express = require("express");
const app = express();
app.use(express.json());
app.listen(2000);

let db = new Map();

app.post("/join", (req, res) => {});
// 회원가입
app.get("/users/:id", (req, res) => {});
// 회원 개별 조회
app.delete("/users/:id", (req, res) => {});
// 회원 개별 탈퇴

app.post("/login", (req, res) => {
  const { userId, pwd } = req.body;

  // body로 userId, pwd를 받아온다.
  // userId가 Db에 저장된 회원인지 확인해야한다.
  // Pwd도 맞는지 비교

  db.forEach((value, key) => {
    // value.userId=> db를 순회하며 해당 프로퍼티의 userId를 가져옴
    // 이를 입력받은 userId와 비교하면된다.
    if (value.userId === userId) {
      console.log("같은 거 찾음 ");
      if (value.pwd === pwd) {
        console.log("일치함 ");
      }
    }
  });
});
