import { Home } from "../components/home.js";
import { Join } from "../components/joins.js";
import { Login } from "../components/login.js";
import { MakeChannel } from "../components/makeChannel.js";
import { Mypage } from "../components/mypage.js";
import { UpdateChannel } from "../components/updateChannel.js";

export const routes = {
  //여기서 각 routes에 따라 다른 페이지를 렌더링하자
  "/": Home,
  "/login": Login,
  "/join": Join,
  "/mypage": Mypage,
  "/channels/make": MakeChannel,
  "/channels/update": UpdateChannel,
};
