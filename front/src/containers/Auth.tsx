import { connect } from 'react-redux'
import { AuthenticatedPage } from '../components/AuthenticatedPage'


const mapStateToProps = ({auth} : any) => {
  debugger
  return {
    user:  auth.user,
    path: '/main'
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedPage)
