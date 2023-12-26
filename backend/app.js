// 여기서 server를 개발하자
const express = require("express");
const userRouter = require("../backend/routes/users.js");
const channelRouter = require("../backend/routes/channels.js");
const dbRouter = require("../backend/routes/db.js");
const app = express();

const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/users", userRouter);
app.use("/channels", channelRouter);
app.use("/db", dbRouter);

//여기서 각각 포트별로 정리를한다.

app.listen(1234);
//3000번으로 서버열었따.
