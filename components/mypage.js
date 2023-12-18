import { db } from "../db/channels.js";
import { Channels } from "./channels.js";

export function MyPage(root, id) {
  const h1 = document.createElement("h1");
  h1.innerText = `${id}님 반갑습니다. `;

  // 먼저 채널데이터를 가져와야함
  let channels = [];
  for (let i = 1; i <= db.size; i++) {
    //channel db를 가져와서 뿌려줘야함
  }

  root.innerHTML = `<h1>My page</h1>
  <button>채널관리</button>
  <ul>
  ${channels.map((channel) => `<li>${channel}</li>`)}
  </ul>
  `;

  const button = document.querySelector("button");
  button.onclick = onClick;

  function onClick() {
    //여기서 채널관리로 이동할 수 있게 함수사용
    //여기서 이제 옮겨가도록
    Channels(root, channels);
  }
}
