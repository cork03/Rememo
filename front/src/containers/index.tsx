import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { HomePage } from "../components/templetes";
import { actionCreators } from "../actions";

const mapStateToProps = () => {
  return {};
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
