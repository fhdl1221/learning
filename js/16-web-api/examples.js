import axios from "axios";

// 도메인주소
const BASE_URL = "https://dummyjson.com";

// async 화살표 함수
const testRouter = async () => {
  /*
  fetch("https://dummyjson.com/test")
    .then((res) => res.json())
    .then(data => console.log(data));
    */
  const data = await axios.get(`${BASE_URL}/test`);
  console.log(data["data"]);
};

//testRouter();

async function getAllProducts() {
  const response = await axios.get(`${BASE_URL}/products`);
  const data = response["data"];
  const products = data["products"];
  console.log(Object.keys(data));
  console.log(Object.entries(data));
}
//getAllProducts();

async function getProductById(n) {
  const res = await axios.get(`${BASE_URL}/products/${n}`);
  console.log(res["data"]);
}
//getProductById(1);
//getProductById(2);
//getProductById(10);

async function searchProducts(search) {
  const queryParams = new URLSearchParams({ q: search });
  const res = await axios.get(`${BASE_URL}/products/search?${queryParams}`);
  const data = res["data"];
  console.log(data);
}
//searchProducts("phone");

const getProductsData = async () => {
  const res = await axios.get(`${BASE_URL}/products`);

  const products = res["data"]["products"];
  console.log(products);
};
//getProductsData();

async function getProductTotalCount() {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  console.log(data["total"]);
}
//getProductTotalCount();

async function getProductProperty(propertyName) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const values = data["products"].map((product) => product[propertyName]);

  console.log(values);
}
//getProductProperty("title");

async function getProductPropertie(propertyNames) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const extractedData = data["products"].map((product) => {
    const result = {};

    propertyNames.forEach((prop) => {
      result[prop] = product[prop];
    });
    return result;
  });
  console.log(extractedData);
}
//getProductPropertie(["title", "price", "description"]);

async function getFilteredProducts(propertyName, value) {
  const res = await axios.get(`${BASE_URL}/products`);
  const data = res["data"];
  const filteredProducts = data["products"].filter((product) => {
    product[propertyName] < value;
  });
  console.log(filteredProducts);
}
getFilteredProducts("price", 10);
