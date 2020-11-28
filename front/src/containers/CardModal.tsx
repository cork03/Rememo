import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CardModal } from "../components/templetes/CardModal";
import { actionCreators } from "../actions";

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  const {
    hideModal,
    checkCard,
    patchCard,
    deleteLink,
    fetchCategory,
  } = actionCreators;
  return bindActionCreators(
    {
      hideModal,
      checkCard,
      patchCard,
      deleteLink,
      fetchCategory,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
