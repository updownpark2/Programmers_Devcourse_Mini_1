import Login from "./login.js";

export default function SignUp(root) {
  // root는 여기서 div가 된다.
  const onSubmit = async (event) => {
    event.preventDefault();
    let [id, pwd] = event.target;
    id = id.value;
    pwd = pwd.value;
    //이걸이제 보내면됨
    const item = await fetch("http://localhost:2000/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: id, pwd: pwd }),
    });
    const { message } = await item.json();

    alert(message);
    //이제 여기서 다른 js로넘어가야지
    Login(root);
  };

  root.innerHTML = `<div id="signupbox">
<h1>회원가입</h1>
<form >
<input  placeholder="id"/>
<input type="password" placeholder="pwd"/>
<button>제출</button>
</form>
</div>`;

  const form = document.querySelector("form");
  form.onsubmit = onSubmit;
}
