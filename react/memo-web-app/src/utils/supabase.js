import axios from "axios";
const BASE_URL = import.meta.env.VITE_SUPABASE_URL;
const ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

async function postMemo(memo) {
  try {
    const config = {
      method: "POST",
      url: `${BASE_URL}/rest/v1/todos`,
      headers: {
        "Content-type": "application/json",
        apikey: ANON_KEY,
        Authorization: `Bearer ${ANON_KEY}`,
      },
      data: memo,
    };
    const response = await axios(config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getMemo() {
  try {
    const config = {
      method: "GET",
      url: `${BASE_URL}/rest/v1/todos`,
      headers: {
        "Content-type": "application/json",
        apikey: ANON_KEY,
        Authorization: `Bearer ${ANON_KEY}`,
      },
      params: {
        select: "*",
        order: "priority.desc",
      },
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export { postMemo, getMemo };
