import { connect } from 'react-redux'
import {HomePage} from '../components/templetes'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../actions'

const mapStateToProps = () => {
  return {
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
      showModal: actionCreators.showModal,
      hideModal: actionCreators.hideModal,
      createUser: actionCreators.createUser
  },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
