import { changeUrl } from "./index.js";

export function Home() {
  window.addEventListener("click", (e) => {
    const clikedId = e.target.id;
    if (clikedId === "Login_Btn") {
      changeUrl("/login");
    }
    if (clikedId === "Join_Btn") {
      changeUrl("/join");
    }
  });

  return `<div>
<h1>U TUBE</h1>
<p>Hello, it's me
I was wondering if after all these years you'd like to meet
To go over everything
They say that time's supposed to heal ya
But I ain't done much healing
Hello, can you hear me
I'm in California dreaming about who we used to be
When we were younger and free
I've forgotten how it felt before the world fell at our feet
There's such a difference between us
And a million miles</p>

<button id="Login_Btn">로그인</button>
<button id="Join_Btn">회원가입</button>
</div>`;
}
