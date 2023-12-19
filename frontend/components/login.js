import { changeUrl } from "./index.js";

window.addEventListener("click", (e) => {
  if (e.target.id === "Login_Btn") {
    let [id, pwd] = e.target.parentElement;
    id = id.value;
    pwd = pwd.value;
    console.log(id, pwd);
    PostIdPwd(id, pwd);
    // 해당 id, pwd, name을 받아
  }

  e.preventDefault();
});
export function Login() {
  return `<div>
  <h1>로그인</h1>
  <form>
  <input placeholder="아이디"/>
  <input type="password" placeholder="패스워드"/>
  <button id="Login_Btn">제출</button>
  </form>
  </div>`;
}

async function PostIdPwd(id, pwd) {
  const data = await fetch("http://localhost:1234/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
      pwd: pwd,
    }),
  });
  const { message, pass } = await data.json();
  if (pass) {
    changeUrl("/mypage");
    alert(message);
  } else if (!pass) {
    alert(message);
    return;
  }
}
