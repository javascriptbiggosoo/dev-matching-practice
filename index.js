/* TODO: 문제 1 */

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const theaterLoginBtn = document.querySelector("#theaterLoginBtn");

const isEmailEmpty = true;
const isPasswordEmpty = true;

theaterLoginBtn.addEventListener("click", () => {
  // TODO: 모든 조건을 만족한 경우 로그인 성공! 이라는 문구가 나타납니다.
  window.alert("로그인 성공!");

  // TODO: 이메일 혹은 비밀번호가 입력되지 않았거나 이메일과 비밀번호 모두 입력되지 않은 경우, 이메일 혹은 비밀번호가 입력되지 않았습니다. 라는 문구가 나타납니다.
  isEmailEmpty ||
    isPasswordEmpty ||
    window.alert("이메일 혹은 비밀번호가 입력되지 않았습니다.");
});

{
  /* <section>
  <div class="input-group">
    <input type="email" placeholder="이메일을 입력해주세요." id="email" />
  </div>
  <div class="input-group">
    <input
      type="password"
      placeholder="비밀번호를 입력해주세요."
      id="password"
    />
  </div>
  <div class="input-group">
    <button id="theaterLoginBtn">Login</button>
  </div>
</section>; */
}

// TODO:

/* TODO: 문제 2 */
