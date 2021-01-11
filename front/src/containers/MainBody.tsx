import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { MainBody } from "../components/organisms/MainBody";
import { actionCreators } from "../actions";

const mapStateToProps = ({ cards, userSettings }: any) => {
  return {
    data: cards.data,
    userSettings: userSettings.userSettings,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const {
    showModal,
    hideModal,
    fetchCards,
    postCard,
    fetchUserSetting,
  } = actionCreators;
  return bindActionCreators(
    {
      showModal,
      hideModal,
      fetchCards,
      postCard,
      fetchUserSetting,
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
