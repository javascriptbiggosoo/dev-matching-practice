class ContentTitle {
  $container = document.createElement("div");
  constructor($target, title) {
    this.title = title;

    this.$container.className = "content_title";

    $target.insertAdjacentElement("afterbegin", this.$container);
    this.render();
  }

  render() {
    this.$container.innerHTML = `<h1>${this.title}</h1>`;
  }
}
export default ContentTitle;
{
  /* 
<div class="content_title">
  <h1>CardView</h1>
</div>;
 */
}
