import React from "react";
import s from "./Users.module.css"

const Users = (props) => {
  if (props.users.length === 0)
  {
  props.setUsers([
    {
      id: 1,
      photoUrl: 'https://scx2.b-cdn.net/gfx/news/hires/2018/bonobosprefe.jpg',
      followed: false,
      fullName: 'Alexandr',
      status: 'i am here',
      location: {country: 'Russia', city: 'Moscow'}
    },
    {
      id: 2,
      photoUrl: 'https://scx2.b-cdn.net/gfx/news/hires/2018/bonobosprefe.jpg',
      followed: true,
      fullName: 'Gucci',
      status: 'Gucci is here',
      location: {country: 'Russia', city: 'Sankt-Petergurg'}
    },
    {
      id: 3,
      photoUrl: 'https://scx2.b-cdn.net/gfx/news/hires/2018/bonobosprefe.jpg',
      followed: true,
      fullName: 'Vlad',
      status: 'Vlad i am the best',
      location: {country: 'Russia', city: 'Magadan'}
    }
  ])
  }

  return <div>
    {
      props.users.map(u => <div key={u.id}>
            <img src={u.photoUrl} className={s.photoStyle} alt="photoUsers"/>
            <div>
              {u.followed
                    ? <button onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                    : <button onClick={() => {props.follow(u.id)}}>follow</button>
              }
            </div>
            <div>
              {u.fullName}
            </div>
            <div>
              {u.status}
            </div>
            <div>
              {u.location.country}
            </div>
            <div>
              {u.location.city}
            </div>
          </div>
      )
    }
  </div>
}

export default Users;