import React from "react";
import UserProfile from "./UserProfile.jsx";

const UserProfiles = ({users}) => {
         
    return(
        <div className="userProfiles">
            
  {users.map((user, index) => (
            <UserProfile key = {index} user={user} />
        )
        )};

        </div>    
    
    );
};

export default UserProfiles;

