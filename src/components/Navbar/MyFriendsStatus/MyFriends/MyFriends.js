import s from './MyFriends.module.css'
import React from "react";

const MyFriends = (props) => {
  return (
      <div>
        <h1>My friends</h1>
        <div className={s.title}>
          {props.friendsArray}
        </div>
      </div>
  )
}
export default MyFriends;