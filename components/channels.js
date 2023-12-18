import { channelRename } from "./channelRename.js";

export function Channels(root, channels) {
  root.innerHTML = `<h1>채널관리</h1>
<ul>${channels.map(
    (channel) =>
      `<li>${channel}<button id="rename">수정</button><button id="delete">삭제</button></li>`
  )}</ul>
  `;

  const renameBtn = document.getElementById("rename");
  const deleteBtn = document.getElementById("delete");
  //delete하면 그냥 없애고 Rename이면 다시 받아오기

  renameBtn.addEventListener(onclick, channelRename);
}
