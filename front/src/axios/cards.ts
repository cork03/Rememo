import axios from "axios";
import "./setting";

const token = localStorage.getItem("token");

// カードの取得

export const fetchCard = async () => {
  const result = await axios.get("/cards", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};

// カードの作成

export const postCard = async ({ data }: any) => {
  const card = { card: data };
  console.log(card);
  await axios.post("/cards", card, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
