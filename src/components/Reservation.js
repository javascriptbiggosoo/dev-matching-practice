/* 일반 */
// 1. TODO: ing
// 3. TODO: ing
// 4. TODO: ing

/* 심화 */
// 2. TODO: ing

class Reservation {
  // 1.1.1 어른과 어린이/청소년의 경우 0명이 기본값으로 선택되어야 합니다.
  어른 = 0;
  어린이 = 0;
  장애인 = false;
  관람인원수 = 0;
  $adultBtn = document.querySelector("#adultBtn");
  $youthBtn = document.querySelector("#youthBtn");

  constructor() {
    this.checkAdultBtn(this.어른);

    this.$adultBtn.addEventListener(
      "click",
      this.handleAdultBtnClick.bind(this.checkAdultBtn)
    );

    this.render();
  }

  render() {}

  // TODO: 어린이랑 재활용 가능할덧
  checkAdultBtn = (어른수) => {
    console.log("앙");
    // 1.1.2 어른 및 어린이/청소년 각 항목에서 인원수를 중복으로 선택할 수 없습니다.
    const bottons = this.$adultBtn.querySelectorAll(".btn");
    bottons.forEach((button, idx) => {
      button.classList.remove("toggle");
      if (idx === 어른수) {
        // 1.1.3 버튼을 클릭하면 해당 인원 버튼이 선택되었음을 나타내기 위해 버튼의 텍스트와 배경 색상이 변경되어야 합니다.
        this.어른수 = 어른수;
        button.classList.add("toggle");
      }
    });
  };
  handleAdultBtnClick(ev = new PointerEvent()) {
    console.log(ev);
    const checkAdultBtn = this;
    const target = ev.target;
    if (target === ev.currentTarget) return;

    checkAdultBtn(+target.innerText);
  }
}

{
  /* 
<div class="section section-theater" id="theaterSection">
  <div class="col-head" id="theaterSectionHead">
    인원/좌석
  </div>
  <div class="col-body">
    <div class="info">
      <div class="section section-numOfPeople">
        <div class="row" id="numOfPeopleNotice">
          <span>* 최대 8명 선택 가능</span>
        </div>
        <div class="row">
          <span class="label">어른</span>
          <div class="btn-group" id="adultBtn">
            <button class="btn --general">0</button>
            <button class="btn --general">1</button>
            <button class="btn --general">2</button>
            <button class="btn --general">3</button>
            <button class="btn --general">4</button>
            <button class="btn --general">5</button>
            <button class="btn --general">6</button>
            <button class="btn --general">7</button>
            <button class="btn --general">8</button>
          </div>
        </div>
        <div class="row">
          <span class="label">어린이/청소년</span>
          <div class="btn-group" id="youthBtn">
            <button class="btn --youth">0</button>
            <button class="btn --youth">1</button>
            <button class="btn --youth">2</button>
            <button class="btn --youth">3</button>
            <button class="btn --youth">4</button>
            <button class="btn --youth">5</button>
            <button class="btn --youth">6</button>
            <button class="btn --youth">7</button>
            <button class="btn --youth">8</button>
          </div>
          <div class="checkbox">
            <input
              id="checkHandicap"
              type="checkbox"
              name="handicap"
              value="handicap"
            />
            장애인
          </div>
        </div>
      </div>
      <div class="section section-reserveInfo" id="reserveInfo">
        <div class="row">
          <div class="reserve-info">
            그렙 씨네마 | 머쓱관 | 잔여좌석
            <span id="remainSeatCnt">39</span>/39
          </div>
        </div>
        <div class="row">
          <span>2023.03.04(토) 16:30 ~ 19:11</span>
        </div>
        <div class="row">
          총 금액&nbsp;&nbsp;<span id="amount">0</span>원
        </div>
      </div>
    </div>
    <div class="theater">
      <div class="section section-seat">
        <div id="screenArea">Screen</div>
        <div class="seat-group">
          <div id="seatRow">
            <span>A</span>
            <span>B</span>
            <span>C</span>
          </div>
          <div id="theaterSeat"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-footer">
    <button id="reselect">좌석 선택 초기화</button>
  </div>
</div>; 
*/
}
// theaterBtn.addEventListener("click", () => {
//   loginSection.style.display = "none";
//   theaterSection.style.display = "block";
// });

// for (let i = 0; i < 39; i++) {
//   const seatBtn = document.createElement("button");
//   seatBtn.setAttribute("class", "seat disabled");
//   seatBtn.appendChild(document.createTextNode((i % 13) + 1));
//   document.getElementById("theaterSeat").appendChild(seatBtn);

//   if (parseInt(i / 13) === 2) {
//     if (i % 13 > 9) seatBtn.classList.add("handicap");
//     else seatBtn.classList.add("musseukbox");
//   }
// }

export default Reservation;
