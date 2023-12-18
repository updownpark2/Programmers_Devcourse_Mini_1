export function channelRename(root, id) {
  root.innerHTML = `<div>
    <form>
    <input placeholder="새롭게 사용할 채널명을 입력해주세요"/>
    <button>변경</button>
    </form>
    </div>`;

  const form = document.querySelector("form");
  form.onsubmit = onSubmit;
  function onSubmit(event) {
    event.preventDefault();
    const changedName = event.target[0].value;
    console.log(changedName);
    //여기서 이 값을가지고 변경함
  }
}
