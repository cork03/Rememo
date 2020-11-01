import { connect } from 'react-redux'
import Modal from '../components/organisms/Modal'

const mapStateToProps = ({ modal }: any) => {
  return {
    show: modal.show,
    component: modal.component
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
