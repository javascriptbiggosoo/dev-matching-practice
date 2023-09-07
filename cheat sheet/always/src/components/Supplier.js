class Supplier {
  $container = document.createElement("div");
  constructor({ $target, initialValue, onEvent }) {
    this.value = initialValue;

    this.$container.className = "";

    $target.append(this.$container);
    this.render();
  }

  render() {
    this.$container.innerHTML = ``;
  }
}

export default Supplier;
