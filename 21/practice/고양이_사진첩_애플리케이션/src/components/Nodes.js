export default class Nodes {
  $container = document.createElement("div");
  isRoot = true;
  constructor({ $target, currNodes = [], onClick, onBackClick }) {
    this.onClick = onClick;
    this.onBackClick = onBackClick;
    this.currNodes = currNodes;
    this.$container.className = "Nodes";

    $target.append(this.$container);
    this.render();

    this.$container.addEventListener("click", (ev) => {
      const $node = ev.target.closest(".Node");
      // console.dir(ev.target);
      // console.dir($node);
      if ($node.dataset.nodeId) {
        $node && this.onClick($node);
      } else {
        this.onBackClick();
      }
    });
  }
  setIsRoot(isRoot) {
    this.isRoot = isRoot;
  }

  setCurrNodes(newNodes) {
    this.currNodes = [...newNodes];
    console.log(this.currNodes);
    this.currNodes[0]["parent"] ? this.setIsRoot(false) : this.setIsRoot(true);
    this.render();
  }
  render = () => {
    if (this.currNodes) {
      this.$container.innerHTML = this.isRoot
        ? ""
        : `<div class="Node">
      <img src="./assets/prev.png" />
    </div>`;

      this.$container.insertAdjacentHTML(
        "beforeend",
        this.currNodes
          ?.map((nodeData) => {
            const nodeType =
              nodeData.type === "FILE"
                ? "./assets/file.png"
                : "./assets/directory.png";
            return `
          <div class="Node" data-node-id="${nodeData.id}" data-node-type="${nodeData.type}">
            <img src="${nodeType}" />
            <div>${nodeData.name}</div>
          </div>
        `;
          })
          .join("")
      );
    }
  };
}
/* `
<div class="Node">
  <img src="./assets/prev.png" />
</div>
<div class="Node">
  <img src="./assets/directory.png" />
  <div>2021/04</div>
</div>
<div class="Node">
  <img src="./assets/file.png" />
  <div>dummy</div>
</div>
`; */
