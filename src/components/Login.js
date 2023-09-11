/* DONE */
// 1. Login 버튼 클릭하기
/* TODO */
// 2. 이메일 입력하기
// 3. 비밀번호 입력하기

class Login {
  $emailInput = document.querySelector("#email");
  $passwordInput = document.querySelector("#password");
  $theaterLoginBtn = document.querySelector("#theaterLoginBtn");

  // 기본적으로 인스턴스 생성 시 실행됨
  constructor() {
    theaterLoginBtn.addEventListener("click", this.handleLoginClick.bind(this));

    this.render();
  }
  // 리렌더 때 필요한 것들만 넣어
  render() {}

  handleLoginClick() {
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
  }

  checkEmail(email = "") {
    console.log("메일검사");
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
        // 2.1.2 영문 대소문자 포함 가능
        if (curr !== curr.toUpperCase() || curr !== curr.toLowerCase()) {
          console.log(curr + ": 영어임");
          continue;
        }
        // 2.1.2 숫자 포함 가능
        if (Number.isFinite(+curr)) {
          console.log(curr + ": 숫자임");
          continue;
        }
        // 2.1.2 특수문자(.) 포함 가능
        if (curr === ".") {
          console.log(curr + ": 점임");
          continue;
        }

        console.error("계정 잘못!!");
        isSomethingWrong = true;
      }
      if (isSomethingWrong) return false;

      /* 
      2.2 도메인 입력 조건
      */
      // 2.2.2 도메인은 무조건 .co로 끝
      if (
        domain[domain.length - 1] !== "o" ||
        domain[domain.length - 2] !== "c" ||
        domain[domain.length - 3] !== "."
      ) {
        console.error("도메인을 .co로 하세요");
        return false;
      }

      const domainFront = domain.slice(0, length - 3);
      console.log("도메인: " + domainFront);
      // 2.2.1 영문 대소문자 필수 포함
      if (
        domainFront === domainFront.toUpperCase() &&
        domainFront === domainFront.toLowerCase()
      ) {
        console.error("영어가 없음;");
        return false;
      }

      for (let i = 0; i < domainFront.length; i++) {
        const curr = domainFront[i];
        // 2.2.2 영문 대소문자 포함 가능
        if (curr !== curr.toUpperCase() || curr !== curr.toLowerCase()) {
          console.log(curr + ": 영어임");
          continue;
        }
        // 2.2.2 숫자 포함 가능
        if (Number.isFinite(+curr)) {
          console.log(curr + ": 숫자임");
          continue;
        }
        // 2.2.2 특수문자(., -, _) 포함 가능
        if (curr === "." || curr === "-" || curr === "_") {
          console.log(curr + ": 특수문자임");
          continue;
        }

        console.error("도메인 잘못!!");
        isSomethingWrong = true;
      }
    } else {
      console.error("@가 없음;");
      return false;
    }
    // 2. 모든 조건을 만족한 경우
    return true;
  }

  checkPassword = (password = "") => {
    console.log("비번검사");
    // 3.1 비밀번호 길이 요구사항
    if (password.length > 20 || password.length < 8) {
      window.alert(
        "비밀번호는 최소 8자 이상, 최대 20자 이하로 구성해야 합니다."
      );
      return false;
    }

    // 3.2 TODO: 비밀번호 형식 요구사항
    let 영문포함 = false;
    let 숫자포함 = false;
    let 되는특문포함 = false;
    let 안되는특문포함 = false;
    for (let i = 0; i < password.length; i++) {
      const curr = password[i];
      // 3.2.1 TODO: 영문 포함
      if (curr !== curr.toUpperCase() || curr !== curr.toLowerCase()) {
        영문포함 = true;
        console.log(curr + ": 영어임");
        continue;
      }
      // 3.2.2 TODO: 숫자 포함
      if (Number.isFinite(+curr)) {
        숫자포함 = true;
        console.log(curr + ": 숫자임");
        continue;
      }
      // 3.2.3 TODO: '!', '@', '~' 중 하나 포함
      if (curr === "." || curr === "@" || curr === "~") {
        되는특문포함 = true;
        console.log(curr + ": 특문임");
        continue;
      }
      안되는특문포함 = true;
    }
    if (!(영문포함 && 숫자포함 && 되는특문포함)) {
      console.error("비번 뭔가 빠짐!!");
      window.alert("비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.");
      return false;
    } else if (안되는특문포함) {
      console.error("안되는 특문 포함!!");
      window.alert("비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.");
      return false;
    }

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
