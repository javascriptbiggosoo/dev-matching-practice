import { request } from "../api.js";
import ProductList from "../components/ProductList.js";

export default class ProductListPage {
  $container = document.createElement("div");
  fetchedProducts = [];
  constructor({ $target }) {
    this.$container.classList.add("ProductListPage");

    $target.append(this.$container);
    this.render();
    this.fetchProducts();
  }

  async fetchProducts() {
    const products = await request("products");
    this.setProductList(products);
  }

  setProductList(nextProductList) {
    this.fetchedProducts = [...nextProductList];
    this.ProductList = new ProductList({
      $target: this.$container,
      fetchedProducts: this.fetchedProducts,
    });
  }

  render() {
    this.$container.innerHTML = `<h1>상품목록</h1>`;
  }
}

{
  /* <div class="ProductListPage">
  <h1>상품목록</h1>
  <ul>
    <li class="Product">
      <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png" />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png" />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png" />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png" />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png" />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
    <li class="Product">
      <img src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png" />
      <div class="Product__info">
        <div>커피잔</div>
        <div>10,000원~</div>
      </div>
    </li>
  </ul>
</div>;
 */
}
