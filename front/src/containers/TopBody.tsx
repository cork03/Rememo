import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { TopBody } from "../components/organisms/TopPage/TopBody";
import { actionCreators } from "../actions";

const mapStateToProps = ({ auth }: any) => {
  return {
    user: auth.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      showModal: actionCreators.showModal,
      hideModal: actionCreators.hideModal,
      createUser: actionCreators.createUser,
      userLogin: actionCreators.userLogin,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TopBody);
