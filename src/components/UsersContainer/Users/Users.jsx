import React from "react";
import s from "./Users.module.css"
import * as axios from "axios";
import photoUser from "../../../images/IE-l-GBgcX8.jpg"

const Users = (props) => {
  if (props.users.length === 0)
  axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
    debugger;
    props.setUsers(response.data.items)
  })
  return <div>
    {
      props.users.map(u => <div key={u.id}>
            <img src={u.photos.large != null ? u.photos.large:photoUser} className={s.photoStyle} alt="photoUsers"/>
            <div>
              {u.followed
                    ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                    : <button onClick={() => {props.follow(u.id)}}>follow</button>
              }
            </div>
            <div>
              {u.name}
            </div>
            <div>
              {u.status}
            </div>
            <div>
              {"u.location.country"}
            </div>
            <div>
              {"u.location.city"}
            </div>
          </div>
      )
    }
  </div>
}

export default Users;