import Consumer1 from "./components/Consumer1.js";
import Supplier from "./components/Supplier.js";
import Consumer2 from "./components/Consumer2.js";

class App {
  state1 = [];
  state2 = "";
  constructor({ $target }) {
    this.consumer = new Consumer1({
      $target,
      state1: this.state1,
    });

    this.supplier = new Supplier({
      $target,
      initialValue: "",
      onEvent: (keyword) => {},
    });

    this.consumer2 = new Consumer2({
      $target,
      state1: this.state2,
      onEvent: this.handleEvent,
    });
  }

  handleEvent = () => {};

  setState2 = (nextState2) => {
    this.state2 = nextState2;
    this.consumer2.setState2(nextState2);
  };

  setState1 = (nextstate1) => {
    this.state1 = nextstate1;
    this.consumer.setState1(nextstate1);
  };
}

export default App;
