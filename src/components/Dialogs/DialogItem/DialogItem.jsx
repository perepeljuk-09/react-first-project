import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.avatar}>
        <img src="https://avatars.mds.yandex.net/get-zen_doc/5233237/pub_610b52bbd630c928a96e5dd1_610b5302182dd70897ab26df/scale_1200"alt="logoContact"/>
        <NavLink to={path} className={navActive =>navActive.isActive ? s.active:s.inactive}>{props.name}</NavLink>
    </div>
}

export default DialogItem;