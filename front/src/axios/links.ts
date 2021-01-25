import axios from "axios";

export const deleteLink = async (id: number) => {
  await axios.delete(`/links/${id}`, {});
};
