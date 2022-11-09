import ProductInfo from "./ProductInfo.js";

export default function ProductList() {
  return (
    <ul>
      {productData
        .filter((v) => v.price <= 10000)
        .map((i) => (
          <ProductInfo item={i} key={i.id} />
        ))}
    </ul>
  );
}
