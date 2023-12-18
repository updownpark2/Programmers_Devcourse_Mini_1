export function Join(root) {
  root.innerHTML = `<div>
  <h1>로그인</h1>
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
  }
}
