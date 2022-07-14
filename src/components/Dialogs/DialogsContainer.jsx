import {addMessageActionCreator, updateNewTextMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    messagePage: state.messagePage,
    isAuth: state.auth.isAuth
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
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;