import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Header } from "../components/organisms/Header";
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
