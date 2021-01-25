import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CardModal } from "../components/templates/CardModal";
import { actionCreators } from "../actions";

const mapStateToProps = ({ userCategories }: any) => {
  return {
    userCategories,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const {
    hideModal,
    checkCard,
    patchCard,
    deleteLink,
    fetchCategory,
    createCategory,
    deleteCard,
  } = actionCreators;
  return bindActionCreators(
    {
      hideModal,
      checkCard,
      patchCard,
      deleteLink,
      fetchCategory,
      createCategory,
      deleteCard,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
