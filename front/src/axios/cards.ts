import axios from "axios";
import "./setting";

// カードの取得

export const fetchCard = async () => {
  const result = await axios.get("/cards", {});
  return result.data;
};

// カードの作成

export const postCard = async ({ data }: any) => {
  const card = { card: data };
  await axios.post("/cards", card, {});
};

// カードの編集

export const patchCard = async ({ data }: any, id: number) => {
  const card = { card: data };
  await axios.patch(`/cards/${id}`, card, {});
};

// カードのチェックをつける
export const checkCard = async (id: any) => {
  const value = {};
  await axios.patch(`/cards/check/${id}`, value, {});
};
