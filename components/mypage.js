export async function Mypage(root) {
  const item = await fetch("http://localhost:2000/users/1", {
    method: "GET",
  });
  let { message, pass, userId } = await item.json();

  if (pass) {
    alert(message);
  } else if (!pass) {
    alert(message);
  }

  root.innerHTML = `<div>
<h1>My page</h1>

<span></span>
</div>`;

  const span = document.querySelector("span");
  if (userId) {
    span.innerText = `${userId}님 환영합니다.`;
  }
}
