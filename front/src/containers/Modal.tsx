import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../actions";
import Modal from "../components/organisms/Modal";

const mapStateToProps = ({ modal }: any) => {
  return {
    show: modal.show,
    component: modal.component,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const { hideModal } = actionCreators;
  return bindActionCreators(
    {
      hideModal,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
