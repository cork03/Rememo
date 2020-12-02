import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CardModal } from "../components/templetes/CardModal";
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
  } = actionCreators;
  return bindActionCreators(
    {
      hideModal,
      checkCard,
      patchCard,
      deleteLink,
      fetchCategory,
      createCategory,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CardModal);
