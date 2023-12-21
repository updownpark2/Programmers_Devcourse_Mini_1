import { changeUrl } from "./index.js";

window.addEventListener("click", (e) => {
  if (e.target.id === "BTN") {
    let [channelName, content] = e.target.parentElement;
    channelName = channelName.value;
    content = content.value;
    //위 데이터를 이제 서버에 보내야함
    postChannelInfo(channelName, content);
  }
});
export function MakeChannel() {
  return `<div>
    <h1>채널만들기</h1>
<form>
<input placeholder="채널이름 "/>
<input placeholder="콘텐츠타입 "/>
<button id="BTN">제출</button>
</form>
    </div>`;
}
async function postChannelInfo(channelName, content) {
  const data = await fetch("http://localhost:1234/channels/make", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      channelName: channelName,
      content: content,
    }),
  });

  const { message, pass } = await data.json();

  if (pass) {
    alert(message);
    changeUrl("/mypage");
  } else if (!pass) {
    alert(message);
  }
}
