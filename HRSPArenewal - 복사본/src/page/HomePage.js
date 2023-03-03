import ContentTitle from "../components/ContentTitle.js";
import { getItem, setItem } from "../localStorage.js";

class HomePage {
  $container = document.createElement("main");
  menu = "home";
  cardStatus = getItem("cardStatus", {});
  constructor({ $target, hrInfo, onCardClick }) {
    this.onCardClick = onCardClick;
    this.hrInfo = hrInfo;

    this.$container.id = "page_content";
    this.$container.style.display = this.menu === "home" ? "block" : "none";

    $target.append(this.$container);
    this.render();

    this.$container.addEventListener("click", this.handleClick);
  }
  handleClick = (ev) => {
    const $card = ev.target.closest(".card") && ev.target.closest(".card");
    console.dir($card);
    $card.classList.toggle("is-flipped");
    // this.onCardClick($card.idx);
    this.setCardStatus($card.dataset.idx);
  };

  setMenu(menu) {
    this.menu = menu;
    this.$container.style.display = this.menu === "home" ? "block" : "none";
  }
  setCardStatus = (index) => {
    if (!this.cardStatus[index]) {
      // 첫클릭, 카드 뒤집어
      this.cardStatus[index] = "card is-flipped";
    } else {
      // 그 이후, 카드 상태 역전
      this.cardStatus[index] =
        this.cardStatus[index] === "card" ? "card is-flipped" : "card";
    }
    console.log("저장!");
    setItem("cardStatus", this.cardStatus);
  };
  setHrInfo = (nextHrInfo) => {
    this.hrInfo = [...nextHrInfo];
    this.render();
  };
  render() {
    this.$container.innerHTML = `
  
  <div id="cards_container">
  ${this.hrInfo
    .map(
      (info, idx) => `
<div data-idx="${idx}" class="${this.cardStatus[idx] || "card"}" >
  <div class="card_plane card_plane--front">${info.nickname}</div>
  <div class="card_plane card_plane--back">${info.mbti}</div>
</div>`
    )
    .join("")}
  </div>`;
    this.contentTitle = new ContentTitle(this.$container, "CardView");
  }
}
export default HomePage;

{
  /* <main id="page_content">
  <div class="content_title">
    <h1>CardView</h1>
  </div>
  <div id="cards_container">
    <div idx="1" class="card">
      <div class="card_plane card_plane--front">Heedo</div>
      <div class="card_plane card_plane--back">ESTJ</div>
    </div>
    <div idx="2" class="card">
      <div class="card_plane card_plane--front">Kevin</div>
      <div class="card_plane card_plane--back">INTJ</div>
    </div>
    <div idx="3" class="card">
      <div class="card_plane card_plane--front">Dalmi</div>
      <div class="card_plane card_plane--back">INFJ</div>
    </div>
    <div idx="4" class="card">
      <div class="card_plane card_plane--front">Buzz</div>
      <div class="card_plane card_plane--back">INFP</div>
    </div>
    <div idx="5" class="card">
      <div class="card_plane card_plane--front">Edwin</div>
      <div class="card_plane card_plane--back">ISTJ</div>
    </div>
    <div idx="6" class="card">
      <div class="card_plane card_plane--front">Whale</div>
      <div class="card_plane card_plane--back">INTP</div>
    </div>
    <div idx="7" class="card">
      <div class="card_plane card_plane--front">Junho</div>
      <div class="card_plane card_plane--back">ENFJ</div>
    </div>
    <div idx="8" class="card">
      <div class="card_plane card_plane--front">Yumi</div>
      <div class="card_plane card_plane--back">ISFP</div>
    </div>
    <div idx="9" class="card">
      <div class="card_plane card_plane--front">Tom</div>
      <div class="card_plane card_plane--back">INTP</div>
    </div>
    <div idx="10" class="card">
      <div class="card_plane card_plane--front">Barbie</div>
      <div class="card_plane card_plane--back">INTJ</div>
    </div>
  </div>
</main>;
 */
}
