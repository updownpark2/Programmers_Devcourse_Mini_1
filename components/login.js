import { Mypage } from "./mypage.js";

export default function Login(root) {
  const onSubmit = async (event) => {
    event.preventDefault();
    let [userId, pwd] = event.target;
    userId = userId.value;
    pwd = pwd.value;

    const item = await fetch("http://localhost:2000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: userId, pwd: pwd }),
    });
    const { message, pass } = await item.json();
    //여기서 이제 API로 보냄
    if (pass) {
      alert(message);
      Mypage(root);
      //mypage로 이동
    } else if (!pass) {
      alert(message);
    }
  };

  root.innerHTML = `<div>
<h2>로그인 페이지</h2>
<form>
<input placeholder="id"/>
<input type="password" placeholder="pwd"/>
<button>제출</button>
</form>
</div>`;

  const form = document.querySelector("form");
  form.onsubmit = onSubmit;
}
