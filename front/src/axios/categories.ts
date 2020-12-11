import axios from "axios";
import "./setting";

export const fetchCategory = async () => {
  const userCategoreis = await axios.get(`/userCategories`, {});
  return userCategoreis.data.userCategories;
};

export const createCategory = async (data: any) => {
  await axios.post("/userCategories", data, {});
};
