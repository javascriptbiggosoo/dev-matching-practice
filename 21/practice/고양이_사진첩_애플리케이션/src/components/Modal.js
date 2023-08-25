const BASE_URL = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-1ooef0cg8h3vq.s3.ap-northeast-2.amazonaws.com/public`;

export default class Modal {
  $container = document.createElement("div");
  constructor({ $target, filePath }) {
    this.filePath = filePath;
    this.$container.className = "Modal ImageViewer";

    $target.insertAdjacentElement("afterend", this.$container);
    this.render();
  }

  setFilePath = (newFilePath) => {
    this.filePath = newFilePath;
    this.render();
  };

  render = () => {
    this.$container.classList.add("ImageViewer");
    this.$container.innerHTML = `
    <div class="content">
    <img src="${BASE_URL + this.filePath}">
  `;

    this.$container.style.display = this.filePath ? "block" : "none";
  };
}

{
  /* <div class="Modal ImageViewer">
      <div class="content">
        <img src="./assets/sample_image.jpg">
    </div> */
}
