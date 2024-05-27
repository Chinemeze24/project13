import React, { useState, useEffect } from "react";
import UserProfiles from "./components/UserProfiles.jsx"; 

function App() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);

  const userData = [
    {
      name: "Henry Anderson",
      bio: "Petrochemical Engineer",
      dateOfBirth: "1969-11-01",
      image: "https://res.cloudinary.com/dehmubz6g/image/upload/v1716827056/Paul-images/kcyxnvbattpxxqx2gs0g.jpg",
    },
    {
      name: "Paul Nwakalor",
      bio: "A Businessman",
      dateOfBirth: "1979-03-12",
      image: "https://res.cloudinary.com/dehmubz6g/image/upload/v1716827056/Paul-images/kcyxnvbattpxxqx2gs0g.jpg",
    },

    {
      name: "Unai Emry",
      bio: "A Football Manager",
      dateOfBirth: "1964-07-20",
      image: "https://res.cloudinary.com/dehmubz6g/image/upload/v1716827056/Paul-images/kcyxnvbattpxxqx2gs0g.jpg",
    }
  ];

  useEffect(() => {
    setUsers(userData);
    setLoading(false);
  }, [userData]); //Add userData to the dependency array

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container">
      <UserProfiles users={users} />
    </div>
  );
}

export default App;


