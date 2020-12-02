import axios from "axios";
import "./setting";

const token = localStorage.getItem("token");

export const deleteLink = async (id: number) => {
  await axios.delete(`/links/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
