import App from "./App.js";

const $body = document.querySelector("body");
$body.innerHTML = "";
new App({ $target: $body });
