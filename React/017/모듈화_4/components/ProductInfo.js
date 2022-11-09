import { productData } from "./data/data.js";

export default function ProductInfo(productData) {
  return (
    <li>
      <img src={"http://test.api.weniv.co.kr/" + productData.item["thumbnailImg"]} alt="" />
      <p>{productData.item["productName"]}</p>
      <p>하트</p>
      <p>{productData.item["price"]}</p>
    </li>
  );
}
