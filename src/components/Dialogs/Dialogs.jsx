import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import {maxLengthCreator} from "../Validate/MaxLength";

const Dialogs = (props) => {
  let state = props.messagePage

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messagesElements = state.messages.map(m => <Message id={m.id} message={m.message}/>);


  let AddMessage = (newMessage) => {
    props.addMessageActionCreator(newMessage);
  }

  const NewMessageForm = () => {
    let maxLength100 = maxLengthCreator(100)
    return <div>
    <Formik
        initialValues={{newMessage: ""}}
        onSubmit={(values) => {
          AddMessage(values.newMessage)
          console.log(values)
        }}
        validateOnBlur
    >
      {({values,errors,touched,
          handleChange,handleBlur}) => (
      <Form>
        <div>
          <div>
            <Field validate={maxLength100} name="newMessage" type="newMessage" value={values.newMessage} onChange={handleChange}
            onBlur={handleBlur} placeholder="Enter your message" className={errors.newMessage ? s.error:null}/>
            {touched.newMessage && errors.newMessage && <p className={s.errorText}>{errors.newMessage}</p>}
          </div>
          <div>
            <button type="submit" disabled={!values.newMessage || errors.newMessage}>Add message</button>
          </div>
        </div>
      </Form>
    )}
    </Formik>
    </div>
  }

  if (!props.isAuth) return <Navigate to='/login'/>
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}
          <NewMessageForm/>
        </div>
      </div>
  )
}

export default Dialogs;