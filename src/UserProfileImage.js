import React from 'react';

const UserProfileImage = (props) => {
  return <img src={props.pic} className="profile-pic" style={{'float': 'left'}}/>
}

export default UserProfileImage;