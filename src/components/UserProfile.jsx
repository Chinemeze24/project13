import React, { useState } from "react";

const UserProfile = ({ user }) => { 
  const { name, bio, dateOfBirth, image } = user; 
  return (
    <div className="user-Profile">
      <img src={image}/>
      <h2>{name}</h2>
      <p>{bio}</p>
      <p>Date of Birth: {dateOfBirth}</p>
    </div>
  );
};

export default UserProfile;