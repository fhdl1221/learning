import React from "react";

// 개별 Product의 UI(컴포넌트)
// 구조 분해 할당을 활용해서 객체 props를 분해
// product : 개별 상품 정보를 저장하고 있는 객체 데이터
export default function Product({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 m-4">
      <p className="text-sm text-gray-500">Product ID: {product["id"]}</p>
      <h2 className="text-2xl font-bold mt-2">{product["title"]}</h2>
      <p className="text-gray-700 mt-4">{product["description"]}</p>
    </div>
  );
}
