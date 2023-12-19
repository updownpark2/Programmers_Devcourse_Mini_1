import { changeUrl } from "./index.js";

window.addEventListener("click", (e) => {
  if (e.target.id === "Submit_Btn") {
    let [id, pwd, name] = e.target.parentElement;
    id = id.value;
    pwd = pwd.value;
    name = name.value;

    PostIdPwdName(id, pwd, name);
    // 해당 id, pwd, name을 받아
  }

  e.preventDefault();
});

export function Join() {
  return `<div>
    <h1>회원가입</h1>
    <form>
    <input placeholder="아이디"/>
    <input type="password" placeholder="패스워드"/>
    <input placeholder="닉네임"/>
    <button id="Submit_Btn">제출</button>
    </form>
    </div>`;
}
async function PostIdPwdName(id, pwd, name) {
  console.log("asd");
  const data = await fetch("http://localhost:1234/users/join", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      pwd: pwd,
      name: name,
    }),
  });
  const { message, pass } = await data.json();
  if (pass) {
    changeUrl("/login");
    alert(message);
  } else if (!pass) {
    alert(message);
    return;
  }
}
