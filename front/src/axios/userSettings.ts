import axios from "axios";

export const fetchUserSettings = async () => {
  const result = await axios.get("/userSettings", {});
  const { userSettings } = result.data;
  return userSettings;
};

export const patchUserSettings = async (data: any, id: number) => {
  await axios.patch(`/userSettings/${id}`, data, {});
};
