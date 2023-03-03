class PageB {
  $container = document.createElement("");
  state = "home";
  constructor({ $target }) {
    this.$container.id = "";
    this.$container.style.display = this.state === "" ? "block" : "none";

    $target.append(this.$container);
    this.render();
  }
  setMenu(menu) {}
  render() {
    this.$container.innerHTML = ` 
  `;
  }
}
export default PageB;
