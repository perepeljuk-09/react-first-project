import React from "react";
import s from "./Users.module.css";
import photoUser from "../../../images/IE-l-GBgcX8.jpg";
import {NavLink} from "react-router-dom";

const Users = (props) => {
  let pages = [];
  for (let i = 1; pages.length < 10; i++) {
    pages.push(i)
  }

  // let countPages = Math.ceil(props.totalCount / props.sizePage)
  return <div>
    <div>
      {pages.map(p => {
            return <span onClick={(e) => {
              props.onPageChanged(p);
            }}
                         className={props.currentPage === p && s.selectedPage}>{p}</span>
          }
      )
      }
    </div>
    {
      props.users.map(u => <div key={u.id}>
            <NavLink to={'/profile/' + u.id}>
              <img src={u.photos.large != null ? u.photos.large : photoUser} className={s.photoStyle} alt="photoUsers"/>
            </NavLink>
            <div>
              {u.followed
                  ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.unfollow(u.id)
                  }}>unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {debugger;
                    props.follow(u.id)
                  }}>follow</button>
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

