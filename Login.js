/* DONE */
// 1. Login 버튼 클릭하기
/* TODO */
// 2. TODO: 이메일 입력하기
// 3. TODO: 비밀번호 입력하기

class Login {
  $emailInput = document.querySelector("#email");
  $passwordInput = document.querySelector("#password");
  $theaterLoginBtn = document.querySelector("#theaterLoginBtn");

  constructor() {
    theaterLoginBtn.addEventListener("click", () => {
      if (!(this.$passwordInput.value && this.$emailInput.value)) {
        window.alert("이메일 혹은 비밀번호가 입력되지 않았습니다.");
        // 1. 이메일 혹은 비밀번호가 입력되지 않았거나 이메일과 비밀번호 모두 입력되지 않은 경우
        return;
      }

      const isValidEmail = this.checkEmail(this.$emailInput.value);
      if (!isValidEmail) {
        window.alert("이메일 형식이 올바르지 않습니다.");
        return;
      }
      const isValidPassword = this.checkPassword(this.$passwordInput.value);
      // 1. 모든 조건을 만족한 경우
      if (isValidPassword) window.alert("로그인 성공!");
    });
  }

  checkEmail(email = "") {
    // console.log("메일검사");
    if (email.includes("@")) {
      const [account, domain] = email.split("@");
      // console.log(`account: ${account}, domain:${domain}`);

      /* 
      2.1 계정 입력 조건
      */
      // 2.1 영문 대소문자 필수 포함
      if (
        account === account.toUpperCase() &&
        account === account.toLowerCase()
      ) {
        console.error("영어가 없음;");
        return false;
      }

      let isSomethingWrong = false;
      for (let i = 0; i < account.length; i++) {
        const curr = account[i];
        console.log(curr);
        console.log(isSomethingWrong);
        // 2.1.2 TODO: 영문 대소문자 포함 가능
        if (curr !== curr.toUpperCase() || curr !== curr.toLowerCase()) {
          console.log("영어임");
          continue;
        }
        // 2.1.2 TODO: 숫자 포함 가능
        if (Number.isFinite(+curr)) {
          console.log("숫자임");
          continue;
        }
        // 2.1.2 TODO: 특수문자(.) 포함 가능
        if (curr === ".") {
          console.log("점임");
          continue;
        }

        console.error("개뿔아무것도아님");
        isSomethingWrong = true;
      }
      if (isSomethingWrong) return false;

      /* 
      2.2 TODO: 도메인 입력 조건
      */
      // 2.2.2 TODO: 도메인은 무조건 .co로 끝
      if (
        email[email.length - 1] !== "o" ||
        email[email.length - 2] !== "c" ||
        email[email.length - 3] !== "."
      ) {
        console.log("도메인을 .co로 하세요");
        return false;
      }
      const emailFront = email.slice(0, length - 3);
      console.log(emailFront);
      // 2.2.1 TODO: 영문 대소문자 필수 포함
      if (email === email.toUpperCase() && email === email.toLowerCase()) {
        console.error("영어가 없음;");
        return false;
      }
      // 2.2.2 TODO: 영문 대소문자 포함 가능
      // 2.2.2 TODO: 숫자 포함 가능
      // 2.2.2 TODO: 특수문자(., -, _) 포함 가능
    } else {
      console.error("@가 없음;");
      return false;
    }
    // 2. 모든 조건을 만족한 경우
    return true;
  }

  checkPassword = (password = "") => {
    // console.log("비번검사");
    // 3. TODO: 비밀번호 길이 요구사항
    if (password.length > 20 || password.length < 8) {
      window.alert(
        "비밀번호는 최소 8자 이상, 최대 20자 이하로 구성해야 합니다."
      );
      return false;
    }
    // 3. TODO: 비밀번호 형식 요구사항

    return true;
  };
}

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
export default Login;
