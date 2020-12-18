import axios from "axios";
import "./setting";

// 取得

export const fetchCard = async () => {
  debugger;
  const result = await axios.get("/cards", {});
  debugger;
  return result.data;
};

// 作成

export const postCard = async ({ data }: any) => {
  const card = { card: data };
  await axios.post("/cards", card, {});
};

// 編集

export const patchCard = async ({ data }: any, id: number) => {
  const card = { card: data };
  await axios.patch(`/cards/${id}`, card, {});
};

// チェックをつける
export const checkCard = async (id: any) => {
  const value = {};
  await axios.patch(`/cards/check/${id}`, value, {});
};

// 削除

export const deleteCard = async (id: any) => {
  await axios.delete(`/cards/${id}`);
};
