import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements =  props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
    let messagesElements = props.state.messages.map( m => <Message id={m.id} message={m.message}/> );

    let newMessage = React.createRef();

    let onMessageChange = () => {
      let text = newMessage.current.value
      props.updateNewTextMessage(text)
    }
    let AddMessage = () => {
      props.addMessage();
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
              <div>
                <textarea ref={newMessage} value={props.state.newMessageText} onChange={onMessageChange}></textarea>
              </div>
              <div>
                <button onClick={AddMessage}>Add message</button>
              </div>
            </div>
        </div>
    )
}

export default Dialogs;