class Consumer2 {
  $container = document.createElement("div");
  constructor({ $target, state2 = [], onEvent }) {
    this.state2 = state2;

    this.$container.className = "";

    this.$target.append(this.$container);
    this.render();

    this.$container.addEventListener("click", (e) => {});
  }

  setState2(nextState2) {
    this.state2 = nextState2;
    this.render();
  }

  render() {
    this.$container.style.display = "block";
    this.$container.innerHTML = `<ul>${[].map((item, idx) => ``).join("")}
      </ul>`;
    this.$container.style.display = "none";
    this.$container.innerHTML = "";
  }
}

export default Consumer2;
