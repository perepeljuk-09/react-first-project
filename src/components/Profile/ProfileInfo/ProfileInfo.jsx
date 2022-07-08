import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile)
  {
    return <Preloader/>
  }
  const Contacts = (props) => {
    return <div>{props.web[0]}: {props.web[1]}</div>
  }
  let contactsEntries = Object.entries(props.profile.contacts)
  let mapToContact = contactsEntries.map((web) => <Contacts web={web} />)
  return (
      <div>
        <div className={s.background}>
          <img
              src='https://loveopium.ru/content/2012/11/djuuku/15b.jpg' alt="Dolina"/>
        </div>
        <div className={s.descriptionBlock}>
          <img className={s.photoUser} src={props.profile.photos.large} alt={'UserPhoto'}/>
          <p>About me: {props.profile.aboutMe}</p>
          <p>Full name: {props.profile.fullName}</p>
          <p>What about the job: {props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : null}</p>
          <p>Contact: {mapToContact}</p>
        </div>
      </div>
  )
}


export default ProfileInfo;