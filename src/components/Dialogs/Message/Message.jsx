import React from 'react';
import s from './Message.module.css';


const Message = (props) => {
  if (props.id % 2 !== 0) {
    return <div className={s.myMessage}>{props.message}</div>
  } else {
    return <div className={s.yourMessage}>{props.message}</div>
  }
}

export default Message;
