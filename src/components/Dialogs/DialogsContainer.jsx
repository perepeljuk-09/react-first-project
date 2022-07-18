import {addMessageActionCreator, updateNewTextMessageActionCreator} from "../../Redux/dialogs-reducer";
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
    updateNewTextMessageActionCreator: (text) => {
      dispatch(updateNewTextMessageActionCreator(text));
    },
    addMessageActionCreator: () => {
      dispatch(addMessageActionCreator());
    }
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)