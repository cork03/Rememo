import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainBody } from "../components/organisms/MainBody";
import { actionCreators } from "../actions";

const mapStateToProps = ({ cards }: any) => {
  return {
    data: cards.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const {
    showModal,
    hideModal,
    fetchCards,
    postCard,
    checkCard,
  } = actionCreators;
  return bindActionCreators(
    {
      showModal,
      hideModal,
      fetchCards,
      postCard,
      checkCard,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
