import { changeUrl } from "./index.js";

window.addEventListener("click", (e) => {
  if (e.target.id === "Login_Submit_Btn") {
    let [id, pwd] = e.target.parentElement;
    id = id.value;
    pwd = pwd.value;

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
  <button id="Login_Submit_Btn">제출</button>
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
    const primaryKey = await getUserPrimaryKey(id);
    changeUrl("/mypage", primaryKey);
    //여기서  get해서 id를 가져오는게 맞는듯
    alert(message);
  } else if (!pass) {
    alert(message);
    return;
  }
}
async function getUserPrimaryKey(user_id) {
  //user_id를 보내고 해당하는 Db의 id값을 가져옴
  let primaryKey = await fetch("http://localhost:1234/db/userPk", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user_id,
    }),
  });
  primaryKey = await primaryKey.json();

  return primaryKey[0].id;
}
