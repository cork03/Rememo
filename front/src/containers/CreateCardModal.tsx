import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CreateCardModal } from "../components/templetes/CreateCardModal";
import { actionCreators } from "../actions";

const mapStateToProps = ({ userCategories }: any) => {
  return {
    userCategories,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const { hideModal, fetchCategory, createCategory, postCard } = actionCreators;
  return bindActionCreators(
    {
      hideModal,
      fetchCategory,
      createCategory,
      postCard,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateCardModal);
