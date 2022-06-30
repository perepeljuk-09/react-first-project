import React from 'react';
import {addMessageActionCreator, updateNewTextMessageActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
  return <StoreContext.Consumer>
    {(store) => {
      let state = store.getState().messagePage;
      let onMessageChange = (text) => {
        store.dispatch(updateNewTextMessageActionCreator(text))
      }
      let AddMessage = () => {
        store.dispatch(addMessageActionCreator());
      }
      return <Dialogs updateNewTextMessageActionCreator={onMessageChange}
                      addMessageActionCreator={AddMessage}
                      messagePage={state}/>
    }
  }
  </StoreContext.Consumer>
}

export default DialogsContainer;