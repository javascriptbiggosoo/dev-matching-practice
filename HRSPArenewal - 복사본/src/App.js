import Header from "./components/Header.js";
import { getItem, setItem } from "./localStorage.js";
import HomePage from "./page/HomePage.js";
import SignupPage from "./page/SignupPage.js";

class App {
  menu = "home";
  hrInfo = getItem("hrInfo", []);
  constructor({ $target }) {
    this.header = new Header({
      $target,
      onClick: this.handleMenuClick,
    });
    this.homePage = new HomePage({
      $target,
      hrInfo: this.hrInfo,
    });
    this.signupPage = new SignupPage({
      $target,
    });

    this.getHrInfo();
  }
  getHrInfo = async () => {
    const res = await fetch("/src/data/new_data.json");

    if (res.ok) {
      const data = await res.json();
      console.log(data);
      this.setHrInfo(data);
      setItem("hrInfo", data);

      return data;
    }
    throw new Error("요청에 실패함");
  };

  setHrInfo = (nextHrInfo) => {
    this.hrInfo = [...nextHrInfo];
    this.homePage.setHrInfo(this.hrInfo);
  };

  handleMenuClick = ($menu) => {
    const { id } = $menu;
    if (id === "menu_home") {
      const href = "/";
      window.history.pushState("", "", href);
      this.setMenu("home");
    } else if (id === "menu_signup") {
      const href = "/signup";
      window.history.pushState("", "", href);
      this.setMenu("signUp");
    }
  };

  setMenu = (newMenu) => {
    this.menu = newMenu;
    this.homePage.setMenu(newMenu);
    this.signupPage.setMenu(newMenu);
  };
}
export default App;
