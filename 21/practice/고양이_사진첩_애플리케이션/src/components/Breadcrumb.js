export default class Breadcrumb {
  $container = document.createElement("nav");
  constructor({ $target, currDepth = ["root"] }) {
    this.currDepth = currDepth;
    this.$container.className = "Breadcrumb";

    $target.append(this.$container);
    this.render();
  }
  setCurrDepth = (newDepth) => {
    this.currDepth = [...newDepth];
    this.render();
  };
  render = () => {
    this.$container.innerHTML =
      `<div>root</div>` +
      this.currDepth
        .map(
          (dir, idx) => `
    <div data-index="${idx}">${dir.name}</div>
  `
        )
        .join("");
  };
}

/*
<nav class="Breadcrumb">
  <div>root</div>
  <div>노란고양이</div>
</nav>;
 */
