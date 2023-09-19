// 1. TODO: done
// 2. TODO: ing
// 3. TODO: yet
// 4. TODO: yet

class Reservation {
  // 1.1.1 어른과 어린이/청소년의 경우 0명이 기본값으로 선택되어야 합니다.
  어른수 = 0;
  어린이수 = 0;
  장애인 = false;
  관람인원수 = 0;

  $adultBtn = document.querySelector("#adultBtn");
  $youthBtn = document.querySelector("#youthBtn");
  $checkHandicap = document.querySelector("#checkHandicap");

  constructor() {
    this.$adultBtn.addEventListener(
      "click",
      this.handleAdultBtnClick.bind(this)
    );
    this.$youthBtn.addEventListener(
      "click",
      this.handleYouthBtnClick.bind(this)
    );
    this.$checkHandicap.addEventListener(
      "click",
      this.handleCheckHandicap.bind(this)
    );

    this.render();
  }

  // 컴포넌트 쪼개기 삽가능인데 시간내에 가능할지 살짝 애매쓰
  render = () => {
    // 1.1.2 어른 및 어린이/청소년 각 항목에서 인원수를 중복으로 선택할 수 없습니다.
    const adultBtns = this.$adultBtn.querySelectorAll(".btn");
    adultBtns.forEach((button, idx) => {
      button.classList.remove("toggle");
      if (idx === this.어른수) {
        // 1.1.3 버튼을 클릭하면 해당 인원 버튼이 선택되었음을 나타내기 위해 버튼의 텍스트와 배경 색상이 변경되어야 합니다.
        button.classList.add("toggle");
      }
    });
    const youthBtns = this.$youthBtn.querySelectorAll(".btn");
    youthBtns.forEach((button, idx) => {
      button.classList.remove("toggle");
      if (idx === this.어린이수) {
        button.classList.add("toggle");
      }
    });
    // 1.2.1, 1.2.3
    if (
      (this.어린이수 === 0 && this.어른수 === 0) ||
      this.어른수 > 3 ||
      this.어린이수 > 3 ||
      this.어른수 + this.어린이수 > 3
    ) {
      this.$checkHandicap.disabled = true;
    } else {
      // 1.2.2 장애인 체크 박스는 관람 인원수의 합이 1명 이상일 때 활성화됩니다.
      this.$checkHandicap.disabled = false;
    }
  };
  set어른수 = (num) => {
    this.어른수 = num;

    this.render();
  };
  set어린이수 = (num) => {
    this.어린이수 = num;

    this.render();
  };
  set장애인 = (is장애인) => {
    this.장애인 = is장애인;

    if (this.장애인) {
      // 1.1.4 TODO: 장애인 체크 박스를 체크하면 일반석과 머쓱박스석은 모두 비활성화되며 체크 해제하면 원래대로 돌아옵니다.
    }
  };

  handleAdultBtnClick = (ev = new PointerEvent()) => {
    const target = ev.target;
    if (target === ev.currentTarget) return;

    this.set어른수(+target.innerText);
  };
  handleYouthBtnClick = (ev = new PointerEvent()) => {
    const target = ev.target;
    if (target === ev.currentTarget) return;

    this.set어린이수(+target.innerText);
  };
  handleCheckHandicap = (ev = new PointerEvent()) => {};
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
