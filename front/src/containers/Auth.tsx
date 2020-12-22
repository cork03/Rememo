import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../actions";
import { AuthenticatedPage } from "../components/AuthenticatedPage";

const mapStateToProps = ({ auth }: any) => {
  return {
    user: auth.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const { fetchUser } = actionCreators;
  return bindActionCreators({ fetchUser }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedPage);
