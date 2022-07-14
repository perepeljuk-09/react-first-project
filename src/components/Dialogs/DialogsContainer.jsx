import {addMessageActionCreator, updateNewTextMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewTextMessageActionCreator: (text) => {
      dispatch(updateNewTextMessageActionCreator(text));
    },
    addMessageActionCreator: () => {
      dispatch(addMessageActionCreator());
    }
  }
}



let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;