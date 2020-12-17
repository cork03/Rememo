import { connect } from "react-redux";
import { AuthenticatedPage } from "../components/AuthenticatedPage";

const mapStateToProps = ({ auth }: any) => {
  return {
    user: auth.user,
  };
};

const mapDispatchToProps = (dispatch: any) => {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedPage);
