import axios from "axios";

async function deleteProduct() {
  const config = {
    url: "https://dummyjson.com/products/1",
    method: "delete",
  };
  const response = await axios(config);
  const data = response["data"];
  console.log(data);
}
deleteProduct();
