class Suggestion {
  $container = document.createElement("div");
  selectedIndex = 0;
  constructor({ $target, fetchedLanguages = [], onSelect }) {
    this.$target = $target;
    this.fetchedLanguages = fetchedLanguages;

    this.$container.className = "Suggestion";
    this.$target.append(this.$container);
    this.render();

    window.addEventListener("keyup", (ev) => {
      console.log(ev.key); // ArrowUp, ArrowDown
      if (ev.key === "ArrowUp" && this.selectedIndex > 0) {
        this.setSelectedIndex(this.selectedIndex - 1);
        this.render();
      } else if (
        ev.key === "ArrowDown" &&
        this.selectedIndex < this.fetchedLanguages.length - 1
      ) {
        this.setSelectedIndex(this.selectedIndex + 1);
        this.render();
      } else if (ev.key === "Enter") {
        onSelect(this.fetchedLanguages[this.selectedIndex]);
      }
    });
    this.$container.addEventListener("click", (e) => {
      const $li = e.target.closest("li");
      if ($li) {
        const { index } = $li.dataset;
        try {
          onSelect(this.fetchedLanguages[parseInt(index)]);
        } catch (e) {
          alert("무언가 잘못되었습니다! 선택할 수 없습니다!");
        }
      }
    });
  }

  setFetchedLanguages(nextState) {
    this.fetchedLanguages = nextState;
    console.log(nextState);
    this.render();
  }

  setSelectedIndex(nextSelectedIndex) {
    this.selectedIndex = nextSelectedIndex;
    console.log(nextSelectedIndex);
    this.render();
  }

  render() {
    if (this.fetchedLanguages.length > 0) {
      this.$container.style.display = "block";
      this.$container.innerHTML = `<ul>${this.fetchedLanguages
        .map(
          (item, idx) => `
        <li class="${
          idx === this.selectedIndex ? "Suggestion__item--selected" : ""
        }" data-index="${idx}">
          Dummy
          <span class="Suggestion__item--matched">
            ${item}
          </span>
        </li>`
        )
        .join("")}
        
      </ul>`;
    } else {
      this.$container.style.display = "none";
      this.$container.innerHTML = "";
    }
  }
}

export default Suggestion;
