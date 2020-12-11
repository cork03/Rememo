import axios from "axios";
import "./setting";

export const deleteLink = async (id: number) => {
  await axios.delete(`/links/${id}`, {});
};
