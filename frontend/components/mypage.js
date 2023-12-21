import { changeUrl } from "./index.js";

window.addEventListener("click", (e) => {
  if (e.target.id === "Make_Channel") {
    //만약 누른 버튼이 해당 채널관리 라면
    changeUrl("/channels/make");
  } else if (e.target.id === "Update_Channel") {
    changeUrl("/channels/update");
  }
});

export async function Mypage() {
  //db를 받아오기
  //get으로 받아와야할듯

  let channelDB = await getDB();

  const channelDBKey = Object.keys(channelDB);
  // 이게 지금 객체 형식이니 forEach로 배열로?

  const html = `<div>
  <h1>U TUBE</h1>
  <h3>~~님의 계정</h3>
  <h3>채널 리스트</h3>
  <ul>
  ${channelDBKey
    .map(
      (key) =>
        `<li>채널명: ${channelDB[key].channelName} 콘텐츠:${channelDB[key].content}</li>`
    )
    .join(``)}
  </ul>
  <button id="Make_Channel">채널관리</button>
  <button id="Update_Channel">채널수정</button>
  </div>`;

  return html;
}

export async function getDB() {
  const data = await fetch("http://localhost:1234/db", {
    method: "GET",
  });
  const { channelDB } = await data.json();
  return channelDB;
}

/*  return `
  <div>
  <h1>U TUBE</h1>
  <h3>~~님의 계정</h3>
  <h3>채널 리스트</h3>
  <button id="Make_Channel">채널관리</button>
  <button id="Update_Channel">채널수정</button>
  </div>
  `; */
