import React from "react";
import Status from "./Status/Status";
import {connect} from "react-redux";
import MyFriends from "./MyFriends/MyFriends";

const mapStateToProps = (state) => {
  return {
    friendsArray: state.messagePage.dialogs.map(f => <Status id={f.id} name={f.name}/>)
  };
}

const MyFriendsStatusContainer = connect(mapStateToProps)(MyFriends);

export default MyFriendsStatusContainer;