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

    if (
      // 2. 이메일 검증
      this.checkEmail(this.$emailInput.value) &&
      // 3. 비번 검증
      this.checkPassword(this.$passwordInput.value)
    ) {
      // 1. 모든 조건을 만족한 경우
      window.alert("로그인 성공!");
    }
  }

  checkEmail(email = "") {
    console.log("메일 검사");
    const regex = /^[a-zA-Z0-9\.]+@[a-z0-9-_\.]+\.co$/;
    if (regex.test(email)) {
      return true;
    } else {
      window.alert("이메일 형식이 올바르지 않습니다.");
      return false;
    }
  }

  checkPassword = (password = "") => {
    console.log("비번 검사");
    // 3.1 비밀번호 길이 요구사항
    if (password.length > 20 || password.length < 8) {
      window.alert(
        "비밀번호는 최소 8자 이상, 최대 20자 이하로 구성해야 합니다."
      );
      return false;
    }

    // 3.2 TODO: 비밀번호 형식 요구사항
    const regex = /^(?=.*[a-zA-Z])(?=.*[!@~])(?=.*[0-9])[a-zA-Z0-9!@~]{8,20}$/;
    if (regex.test(password)) {
      return true;
    } else {
      window.alert("비밀번호는 영문, 숫자, 특수문자를 모두 포함해야 합니다.");
      return false;
    }
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
