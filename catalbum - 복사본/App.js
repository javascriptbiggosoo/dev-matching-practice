import Nodes from "./src/components/Nodes.js";
import Breadcrumb from "./src/components/Breadcrumb.js";
import { request } from "./api.js";
import Modal from "./src/components/Modal.js";

export default class App {
  currDepth = [];
  currNodes = [];
  filePath = "";
  constructor({ $target }) {
    this.$target = $target;
    this.breadcrumb = new Breadcrumb({
      $target,
      currDepth: this.currDepth,
    });
    // TODO: 뒤로가기
    this.nodes = new Nodes({
      $target,
      onClick: this.handleNodeClick,
      onBackClick: this.handleBackClick,
    });

    this.modal = new Modal({
      $target: this.$target,
      filePath: this.filePath,
    });

    this.init();
  }

  init = async () => {
    this.getFetchedDir();
  };

  // TODO: 뒤로가기 구현
  handleBackClick = async () => {
    try {
      const nextDepth = [...this.currDepth];
      nextDepth.pop();
      if (nextDepth.length) {
        await this.getFetchedDir(nextDepth.at(-1).id);
      } else {
        await this.getFetchedDir();
      }
      this.setCurrDepth(nextDepth);
    } catch (error) {
      alert("뒤로가기 실패");

      new Error(error.message);
    }
  };

  getFetchedDir = async (nodeId = "") => {
    try {
      const data = await request(nodeId);
      if (data) {
        this.setCurrNodes(data);
        console.log(data);

        return;
      }
      throw new Error("서버의 상태가 이상합니다!");
    } catch (err) {
      alert("새로고침 해주세요.");
      new Error(`무언가 잘못 되었습니다! ${err.message}`);
    }
  };

  handleNodeClick = async ($node) => {
    const selectedNode = this.currNodes.find(
      (node) => node.id === $node.dataset.nodeId
    );
    // console.log(selectedNode);

    if ($node?.dataset?.nodeType === "DIRECTORY") {
      await this.getFetchedDir(selectedNode.id);
      this.setCurrDepth([...this.currDepth, selectedNode]);
      // console.log(this.currDepth);
    } else if ($node?.dataset?.nodeType === "FILE") {
      this.setFilePath(selectedNode.filePath);
    }
  };
  setFilePath = (newFilePath) => {
    this.filePath = newFilePath;
    this.modal.setFilePath(this.filePath);
  };

  setCurrDepth = (newDepth) => {
    this.currDepth = [...newDepth];
    this.breadcrumb.setCurrDepth(this.currDepth);
  };

  setCurrNodes = (newNodes) => {
    this.currNodes = [...newNodes];

    this.nodes.setCurrNodes(newNodes);
    this.nodes.setIsRoot(this.currDepth.length === 1 ? true : false);
  };
}
