const express = require("express");

const router = express.Router();
router.use(express.json());

const db = require("../db/channels.js");

router
  .post("/make", (req, res) => {
    const { channelName, content } = req.body;
    //데이터 가져왔고 이제 db에 비교해서 만약 없다면 생성해주고 있으면 생성 x
    for (let i = 1; i <= db.size; i++) {
      if (db.get(i).channelName === channelName) {
        res.json({
          message: "이미존재하는채널명입니다.",
          pass: false,
        });
        return;
      }
    }
    res.json({
      message: "생성을 완료하였습니다.",
      pass: true,
    });
    db.set(db.size + 1, { channelName: channelName, content: content });
    console.log(db);
  })
  .delete("/", (req, res) => {
    let { objKey } = req.body;
    objKey = parseInt(objKey);
    db.delete(objKey);
    res.send("성공");
  });
//Db삭제 API

module.exports = router;
