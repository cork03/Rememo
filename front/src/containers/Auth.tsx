import { connect } from "react-redux";
import { AuthenticatedPage } from "../components/AuthenticatedPage";

const mapStateToProps = ({ auth }: any) => {
  return {
    user: auth.user,
    path: "/main",
  };
};

const mapDispatchToProps = (dispatch: any) => {};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedPage);
