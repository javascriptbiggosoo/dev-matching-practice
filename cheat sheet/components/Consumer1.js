class Consumer1 {
  $container = document.createElement("div");
  constructor({ $target, state1, onEvent }) {
    this.state1 = state1;

    this.$container.className = "";

    $target.append(this.$container);

    this.render();
  }

  setState1(nextState1) {
    this.state1 = nextState1;

    this.render();
  }

  render() {
    this.$container.innerHTML = `
      ${[].map(() => {}).join("")}
    `;
  }
}

export default Consumer1;
