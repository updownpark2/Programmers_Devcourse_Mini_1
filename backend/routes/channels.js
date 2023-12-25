const express = require("express");

const router = express.Router();
router.use(express.json());

router
  .post("/make", (req, res) => {
    const { channelName, content } = req.body;
    //데이터 가져왔고 이제 db에 비교해서 만약 없다면 생성해주고 있으면 생성 x

    res.json({
      message: "생성을 완료하였습니다.",
      pass: true,
    });
  })
  .delete("/", (req, res) => {
    let { objKey } = req.body;
    objKey = parseInt(objKey);

    res.send("성공");
  });
//Db삭제 API

module.exports = router;
