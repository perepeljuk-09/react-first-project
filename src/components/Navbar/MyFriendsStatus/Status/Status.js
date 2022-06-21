import s from './Status.module.css'
import React from "react";

const Status = (props) => {
  return (
      <div className={s.item}>
        <img src="https://biographe.ru/wp-content/uploads/2020/09/32442343.jpg" alt="Durov"/>
        <div>{props.name}</div>
      </div>
      )
}

export default Status;