class Header {
  $container = document.createElement("header");
  constructor({ $target, onClick }) {
    this.onClick = onClick;
    this.$container.className = "header header_left";

    $target.append(this.$container);
    this.render();

    this.$container.addEventListener("click", this.handleClick);
  }
  handleClick = (ev) => {
    const $menu =
      ev.target.closest("#menu_home") || ev.target.closest("#menu_signup");
    console.log($menu);
    this.onClick($menu);
  };

  render = () => {
    this.$container.innerHTML = `
  <div class="header header_left">
    <span class="menu_name" id="menu_home">
      HOME
    </span>
  </div>
  <div class="header header_right">
    <span class="menu_name" id="menu_signup">
      SIGNUP
    </span>
  </div>`;
  };
}
export default Header;

{
  /* <header>
  <div class="header header_left">
    <span class="menu_name" id="menu_home">
      HOME
    </span>
  </div>
  <div class="header header_right">
    <span class="menu_name" id="menu_signup">
      SIGNUP
    </span>
  </div>
</header>;
 */
}
