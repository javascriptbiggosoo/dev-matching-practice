class SearchInput {
  $container = document.createElement("form");
  constructor({ $target, initialValue, onChange }) {
    this.value = initialValue;

    this.$container.className = "SearchInput";

    $target.append(this.$container);
    this.render();

    this.$container.addEventListener("keyup", (ev) => {
      if (ev.key === "Enter") return;
      onChange(ev.target.value);
    });
    this.$container.addEventListener("submit", (ev) => {
      ev.preventDefault();
    });
  }

  render() {
    this.$container.innerHTML = `<input
  class="SearchInput__input" 
  type="text"
  placeholder="프로그램 언어를 입력하세요."
  value="${this.value}"
  autofocus
/>`;
  }
}

export default SearchInput;
