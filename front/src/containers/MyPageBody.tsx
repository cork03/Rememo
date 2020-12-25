import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MyPageBody } from "../components/organisms/MyPageBody";
import { actionCreators } from "../actions";

const mapStateToProps = ({ auth }: any) => {
  return {
    user: auth.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const { fetchUser } = actionCreators;
  return bindActionCreators(
    {
      fetchUser,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPageBody);
