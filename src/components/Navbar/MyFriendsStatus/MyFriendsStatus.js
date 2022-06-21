import s from './MyFriendsStatus.module.css'
import React from "react";
import Status from "./Status/Status";

const MyFriendsStatus = (props) => {
  let friendsArray = props.state.messagePage.dialogs.map(f => <Status id={f.id} name={f.name}/>);
  return (
      <div>
        <h1>My friends</h1>
        <div className={s.title}>
          {friendsArray}
        </div>
      </div>
  )
}

export default MyFriendsStatus;