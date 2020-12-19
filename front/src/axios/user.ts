import axios from "axios";
import "./setting";

export const fetchUsers = async () => {
  const result = await axios.get("/users", {});
  const { user } = result.data;
  return user;
};
// ユーザーの作成

export const createUser = async ({ data }: any) => {
  const user = { user: data };
  const result = await axios.post("/auth/signUp", user);
  return result;
};

// ログイン

export const usersLogin = async ({ data }: any) => {
  const result = await axios.post("/auth/login", data);
  const { token } = result.data;
  const user = result.data.user.name;
  localStorage.setItem("token", token);
  return user;
};
