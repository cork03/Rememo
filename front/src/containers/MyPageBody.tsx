import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MyPageBody } from "../components/organisms/MyPageBody";
import { actionCreators } from "../actions";

const mapStateToProps = ({ auth, userSettings }: any) => {
  return {
    user: auth.user,
    userSettings: userSettings.userSettings,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const { fetchUser, fetchUserSetting, patchUserSettings } = actionCreators;
  return bindActionCreators(
    {
      fetchUser,
      fetchUserSetting,
      patchUserSettings,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPageBody);
