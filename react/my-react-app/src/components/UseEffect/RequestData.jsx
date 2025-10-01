import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

// 컴포넌트가 첫 렌더링될때 DummyJSON으로 데이터를 요청
export default function RequestData() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get("https://dummyjson.com/products");
      const data = res["data"];
      console.log(data);
      // 응답 데이터에서 필요한 속성을 상태(state)로 변경해야 한다
      setProducts(data["products"]);
    }
    getProducts();
  }, []); // 빈 의존성 배열 : 컴포넌트가 첫 렌더링될 때만 콜백함수가 실행

  return (
    <div>
      {/* products는 배열이고 map은 반복 메서드이고 내부 화살표 함수는 콜백 함수, product는 반복되는 배열의 원소 */}
      {products.map((product) => {
        // 매개변수 product를 Product 컴포넌트에 props로 전달
        // 속성명 : product / 값 : 매개변수 product
        return <Product key={product.id} product={product}></Product>;
      })}
    </div>
  );
}
