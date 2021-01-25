import { usersLogin, fetchUsers, createUsers } from "../axios/users";
import { fetchUserSettings } from "../axios/userSettings";

// modal
export const SHOW_MODAL = "SHOW_MODAL";
export const HIDE_MODAL = "HIDE_MODAL";
const showModal = ({ component }: any) => {
  return {
    type: SHOW_MODAL,
    payload: component,
  };
};
const hideModal = () => {
  return {
    type: HIDE_MODAL,
  };
};

// ユーザーの取得
export const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
export const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";
export const fetchUser = () => {
  return async (dispatch: any): Promise<any> => {
    dispatch({ type: FETCH_USER_REQUESTED });
    try {
      const user = await fetchUsers();
      dispatch({ type: FETCH_USER_SUCCEEDED, payload: user });
      return user;
    } catch (e) {
      dispatch({ type: FETCH_USER_FAILED });
      return null;
    }
  };
};

// ユーザー設定
// 取得
export const FETCH_USERSETTINGS_REQUESTED = "FETCH_USERSETTINGS_REQUESTED";
export const FETCH_USERSETTINGS_SUCCEEDED = "FETCH_USERSETTINGS_SUCCEEDED";
export const FETCH_USERSETTINGS_FAILED = "FETCH_USERSETTINGS_FAILED";
export const fetchUserSetting = () => {
  return async (dispatch: any): Promise<any> => {
    dispatch({ type: FETCH_USERSETTINGS_REQUESTED });
    try {
      const userSettings = await fetchUserSettings();
      dispatch({ type: FETCH_USERSETTINGS_SUCCEEDED, payload: userSettings });
      return userSettings;
    } catch (e) {
      dispatch({ type: FETCH_USERSETTINGS_FAILED });
      return null;
    }
  };
};
// 編集
export const PATCH_USERSETTINGS_REQUESTED = "PATCH_USERSETTINGS_REQUESTED";
export const PATCH_USERSETTINGS_SUCCEEDED = "PATCH_USERSETTINGS_SUCCEEDED";
export const PATCH_USERSETTINGS_FAILED = "PATCH_USERSETTINGS_FAILED";
export const patchUserSettings = (payload: any, id: number) => {
  return { type: PATCH_USERSETTINGS_REQUESTED, payload, id };
};

// カード
// 取得
export const FETCH_CARDS_REQUESTED = "FETCH_CARDS_REQUESTED";
export const FETCH_CARDS_SUCCEEDED = "FETCH_CARDS_SUCCEEDED";
export const FETCH_CARDS_FAILED = "FETCH_CARDS_FAILED";
export const fetchCards = () => {
  return { type: FETCH_CARDS_REQUESTED };
};
// 投稿
export const POST_CARD_REQUESTED = "POST_CARD_REQUESTED";
export const POST_CARD_SUCCEEDED = "POST_CARD_SUCCEEDED";
export const POST_CARD_FAILED = "POST_CARD_FAILED";
export const postCard = ({ payload }: any) => {
  return { type: POST_CARD_REQUESTED, payload };
};
// チェックをつける
export const CHECK_CARD_REQUESTED = "CHECK_CARD_REQUESTED";
export const CHECK_CARD_SUCCEEDED = "CHECK_CARD_SUCCEEDED";
export const CHECK_CARD_FAILED = "CHECK_CARD_FAILED";
export const checkCard = (payload: any) => {
  return { type: CHECK_CARD_REQUESTED, payload };
};
// 編集
export const PATCH_CARD_REQUESTED = "PATCH_CARD_REQUESTED";
export const PATCH_CARD_SUCCEEDED = "PATCH_CARD_SUCCEEDED";
export const PATCH_CARD_FAILED = "PATCH_CARD_FAILED";
export const patchCard = ({ payload }: any, id: number) => {
  return { type: PATCH_CARD_REQUESTED, payload, id };
};
// 削除
export const DELETE_CARD_REQUESTED = "DELETE_CARD_REQUESTED";
export const DELETE_CARD_SUCCEEDED = "DELETE_CARD_SUCCEEDED";
export const DELETE_CARD_FAILED = "DELETE_CARD_FAILED";
export const deleteCard = (id: number) => {
  return { type: DELETE_CARD_REQUESTED, id };
};

// リンク
// 削除
export const DELETE_LINK_REQUESTED = "DELETE_LINK_REQUESTED";
export const DELETE_LINK_SUCCEEDED = "DELETE_LINK_SUCCEEDED";
export const DELETE_LINK_FAILED = "DELETE_LINK_FAILED";
export const deleteLink = (id: number) => {
  return { type: DELETE_LINK_REQUESTED, id };
};

// カテゴリー
// 作成
export const CREATE_CATEGORY_REQUESTED = "CREATE_CATEGORY_REQUESTED";
export const CREATE_CATEGORY_SUCCEEDED = "CREATE_CATEGORY_SUCCEEDED";
export const CREATE_CATEGORY_FAILED = "CREATE_CATEGORY_FAILED";
export const createCategory = ({ payload }: any) => {
  return { type: CREATE_CATEGORY_REQUESTED, payload };
};
// 取得
export const FETCH_CATEGORY_REQUESTED = "FETCH_CATEGORY_REQUESTED";
export const FETCH_CATEGORY_SUCCEEDED = "FETCH_CATEGORY_SUCCEEDED";
export const FETCH_CATEGORY_FAILED = "FETCH_CATEGORY_FAILED";
export const fetchCategory = () => {
  return { type: FETCH_CATEGORY_REQUESTED };
};

// ユーザー
// 作成
export const CREATE_USER_REQUESTED = "CREATE_USER_REQUESTED";
export const CREATE_USER_SUCCEEDED = "CREATE_USER_SUCCEEDED";
export const CREATE_USER_FAILED = "CREATE_USER_FAILED";
export const createUser = ({ payload }: any) => {
  return async (dispatch: any): Promise<boolean> => {
    dispatch({ type: CREATE_USER_REQUESTED });
    try {
      await createUsers({ data: payload });
      dispatch({ type: CREATE_USER_SUCCEEDED });
      return true;
    } catch (e) {
      dispatch({ type: CREATE_USER_FAILED });
      return false;
    }
  };
};

// ログイン
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGIN_SUCCEEDED = "USER_LOGIN_SUCCEEDED";
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED";
export const userLogin = ({ payload }: any) => {
  return async (dispatch: any): Promise<boolean> => {
    dispatch({ type: USER_LOGIN });
    try {
      await usersLogin({ data: payload });
      dispatch({ type: USER_LOGIN_SUCCEEDED });
      return true;
    } catch (e) {
      dispatch({ type: USER_LOGIN_FAILED });
      return false;
    }
  };
};

export const actionCreators = {
  showModal,
  hideModal,
  createUser,
  userLogin,
  fetchCards,
  postCard,
  checkCard,
  patchCard,
  deleteCard,
  deleteLink,
  createCategory,
  fetchCategory,
  fetchUser,
  fetchUserSetting,
  patchUserSettings,
};
