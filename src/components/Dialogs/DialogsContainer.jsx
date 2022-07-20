import {addMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMessageActionCreator: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage));
    }
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)