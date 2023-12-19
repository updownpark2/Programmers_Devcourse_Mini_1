// 여기서 server를 개발하자
const express = require("express");
const router = require("../routes/users");
const app = express();
const userRouter = router;
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use("/users", userRouter);

//여기서 각각 포트별로 정리를한다.

app.listen(3000);
//3000번으로 서버열었따.
