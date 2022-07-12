import React from "react";
import s from "./Users.module.css";
import photoUser from "../../../images/IE-l-GBgcX8.jpg";
import {NavLink} from "react-router-dom";
import axios from "axios";

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
                    props.toggleFollowingProgress(true, u.id)
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': '44ad73ce-f919-47e4-9e97-05d3d208f1ba'
                      }
                    }).then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                      props.toggleFollowingProgress(false, u.id)
                    })
                  }}>unfollow</button>
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                    props.toggleFollowingProgress(true, u.id)
                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                      withCredentials: true,
                      headers: {
                        'API-KEY': '44ad73ce-f919-47e4-9e97-05d3d208f1ba'
                      }
                    }).then(response => {
                      if (response.data.resultCode === 0) {
                        props.follow(u.id)
                      }
                      props.toggleFollowingProgress(false, u.id)
                    })
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

