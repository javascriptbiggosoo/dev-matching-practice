import CartPage from "./pages/CartPage.js";
import ProductDetailPage from "./pages/ProductDetailPage.js";
import ProductListPage from "./pages/ProductListPage.js";

export default class Router {
  constructor({ $target }) {
    const { pathname } = location;
    console.log(pathname);

    $target.innerHTML = "";

    if (pathname === "/") {
      const productListPage = new ProductListPage({ $target });
    } else if (pathname.indexOf("/products/") === 0) {
      const [, , productId] = pathname.split("/");
      const productDetailPage = new ProductDetailPage({
        $target,
        productId,
      });
    } else if (pathname === "/cart") {
      // 장바구니 페이지 렌더링하기
      const cartPage = new CartPage({
        $target,
      });
    }
  }
}
