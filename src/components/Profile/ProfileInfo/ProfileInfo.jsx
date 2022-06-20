import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
      <div>
        <div className={s.background}>
          <img
              src='https://loveopium.ru/content/2012/11/djuuku/15b.jpg' alt="Dolina"/>
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </div>
  )
}

export default ProfileInfo;