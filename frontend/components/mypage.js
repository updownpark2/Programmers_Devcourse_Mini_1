import { changeUrl } from "./index.js";

window.addEventListener("click", (e) => {
  if (e.target.id === "Make_Channel") {
    //만약 누른 버튼이 해당 채널관리 라면
    changeUrl("/channels/make");
  } else if (e.target.id === "Update_Channel") {
    changeUrl("/channels/update");
  }
});

export async function Mypage(id) {
  //db를 받아오기
  //get으로 받아와야할듯
  let data = await getDB(id);

  data = await data.json();

  const html = `<div>
  <h1>U TUBE</h1>
  <h3>채널 리스트</h3>
  <ul>
${data.map(
  (item) =>
    `<li>채널명 ${item.channel_name} 콘텐츠: ${item.channel_content}</li>`
)}
  </ul>
  <button id="Make_Channel">채널관리</button>
  <button id="Update_Channel">채널수정</button>
  </div>`;

  return html;
}

export async function getDB(id) {
  const data = await fetch("http://localhost:1234/db/myChannels", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  });
  return data;
}
