import { changeUrl } from "./index.js";
import { getDB } from "./mypage.js";

window.addEventListener("click", async (e) => {
  if (e.target.id === "Delete_BTN") {
    const objKey = e.target.parentElement.id;
    console.log(objKey);
    await deleteChannel(objKey);
    //여기서 지우고
    await changeUrl("/mypage");
    console.log("왜안가니");
  }
});

export async function UpdateChannel() {
  const channelDB = await getDB();
  const channelDBKey = Object.keys(channelDB);

  return `<div>
<h1>채널수정 </h1>
<ul>
${channelDBKey
  .map(
    (key) =>
      `<li id=${key}>채널명: ${channelDB[key].channelName} 콘텐츠:${channelDB[key].content}<button id="Delete_BTN">삭제</button></li>`
  )
  .join(``)}
</ul>
</div>`;
}
//이제 삭제하는 API요청

async function deleteChannel(objKey) {
  await fetch("http://localhost:1234/channels", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      objKey: objKey,
    }),
  });
  alert("삭제되었습니다");
}
