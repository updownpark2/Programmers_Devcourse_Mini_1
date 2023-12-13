export default function SignUp(root) {
  // root는 여기서 div가 된다.
  const onSubmit = (event) => {
    event.preventDefault();
    let [id, pwd] = event.target;
    id = id.value;
    pwd = pwd.value;
    //이걸이제 보내면됨
    console.log(JSON.stringify({ userId: id, pwd: pwd }));
    fetch("http://localhost:2000/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: id, pwd: pwd }),
    })
      .then((item) => item.json())
      .then((data) => console.log(data));
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
