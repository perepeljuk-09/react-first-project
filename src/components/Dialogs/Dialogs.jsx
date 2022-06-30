import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
      let state = props.messagePage

    let dialogsElements =  state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message id={m.id} message={m.message}/> );

    let newMessage = React.createRef();

    let onMessageChange = () => {
      let text = newMessage.current.value
      props.updateNewTextMessageActionCreator(text);
    }
    let AddMessage = () => {
      props.addMessageActionCreator();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
              <div>
                <textarea ref={newMessage} value={props.messagePage.newMessageText} onChange={onMessageChange}></textarea>
              </div>
              <div>
                <button onClick={AddMessage}>Add message</button>
              </div>
            </div>
        </div>
    )
}

export default Dialogs;