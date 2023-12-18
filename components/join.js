import { Login } from "./login.js";

export function Join(root) {
  root.innerHTML = `<div>
<h1>회원가입</h1>
<form>
<input placeholder="id"/>
<input placeholder="pwd" />
<button>제출</button>
</form>
</div>`;

  const form = document.querySelector("form");
  form.onsubmit = onSubmit;

  function inputReset(event) {
    event.target[0].value = ``;
    event.target[1].value = ``;
  } // submit 후 input값을 reset

  function onSubmit(event) {
    event.preventDefault();
    console.log(event.target);

    inputReset(event);
    Login(root);
    // 여기서 결과에 따라 login으로 넘어감
  }
}