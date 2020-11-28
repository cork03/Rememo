import axios from "axios";
import "./setting";

const token = localStorage.getItem("token");

export const fetchCategory = async () => {
  const userCategoreis = await axios.get(`/userCategories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return userCategoreis.data.userCategories;
};

export const createCategory = async (data: any) => {
  await axios.post("/userCategories", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
