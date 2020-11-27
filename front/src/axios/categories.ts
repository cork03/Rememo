import axios from "axios";
import "./setting";

const token = localStorage.getItem("token");

export const createCategory = async (data: any) => {
  console.log(data);
  await axios.post("/userCategories", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
