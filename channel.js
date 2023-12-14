const express = require("express");
const app = express();
app.use(express.json());
app.listen(2000);

let db = new Map();
const channel1 = {
  channelName: "괴물쥐",
};
const channel2 = {
  channelName: "도파",
};
const channel3 = {
  channelName: "랄로",
};

db.set(1, channel1);
db.set(2, channel2);
db.set(3, channel3);

app.post("/channels", (req, res) => {
  const channelInfo = req.body;
  if (!isSendData(channelInfo)) {
    res
      .status(400)
      .json({ message: "데이터가 제대로 안왔어요", channelName: undefined });
    return;
  }
  if (isExistName(channelInfo.channelName)) {
    res.status(400).json({
      message: "이미있는채널명이에요",
      channelName: channelInfo.channelName,
    });
    return;
  }
  res
    .status(200)
    .json({ message: "생성되었어요", channelName: channelInfo.channelName });

  db.set(db.size + 1, { channelName: channelInfo.channelName });
  //json형태로 넘어오겠죠
  // 제대로 넘어왔는지를 확인해야하니까.
});

function isSendData(obj) {
  return Object.keys(obj).length !== 0 ? true : false;
}
function isExistName(channelName) {
  for (let i = 1; i <= db.size; i++) {
    if (db.get(i).channelName === channelName) {
      // 동일한 channelName이 있다면 true를 return한다.
      return true;
    }
  }
  return false;
}

// 채널명 수정
// PUT req, url로도 들어온다.
app.put("/channels/:id", (req, res) => {
  let { id } = req.params;
  id = parseInt(id);
  // 이건 Db의 id를 받아왔다.
  if (!isExistId(id)) {
    //존재하지 않는다면 없는 데이터라고 말해줘야지
    res.status(400).json({ message: "존재하지 않는 id입니다." });
    return;
  }
  //여기서 이제 수정이 일어난다.
  const channelInfo = req.body;
  if (!isSendData(channelInfo)) {
    res
      .status(400)
      .json({ message: "데이터가 제대로 안왔어요", channelName: undefined });
    return;
  }
  const pastChannelName = db.get(id).channelName;
  const currentChannelName = channelInfo.channelName;

  db.set(id, { channelName: currentChannelName });
  //여기서 바꿔줌

  res.status(200).json({
    message: `${pastChannelName}님, 채널명을 ${currentChannelName}으로 바꿨습니다.`,
  });
  console.log(db);
});
function isExistId(id) {
  return id <= db.size && id > 0 ? true : false;
  // db안에 존재하는 dbid인지 측정
}

// 채널명 조회

app.get("/channels", (req, res) => {
  let obj = {};

  db.forEach((value, key) => {
    obj[key] = value;
  });
  res.status(200).json(obj);
});
