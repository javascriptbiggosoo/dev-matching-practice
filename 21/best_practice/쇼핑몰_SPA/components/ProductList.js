export default class ProductList {
  $container = document.createElement("ul");
  constructor({ $target, fetchedProducts = [] }) {
    this.fetchedProducts = fetchedProducts;

    $target.append(this.$container);
    this.render();
  }
  setFetchedProducts(newFetchedProducts) {
    this.fetchedProducts = [...newFetchedProducts];
    this.render();
  }
  render() {
    if (!this.fetchedProducts) return;
    console.log(this.fetchedProducts);
    this.$container.innerHTML = this.fetchedProducts
      .map(
        (product) => `
    <li class="Product">
      <img src="${product.imageUrl}" />
      <div class="Product__info">
        <div>${product.name}</div>
        <div>${product.price}</div>
      </div>
    </li>
`
      )
      .join("");
  }
}
