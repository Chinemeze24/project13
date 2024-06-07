import React, { useState, useEffect } from "react";
import UserProfiles from "./components/UserProfiles.jsx"; 

function App() {
  const [users, setUsers] = useState([]); 
  const [loading, setLoading] = useState(true);

  const userData = [
    {
      name: "Henry Anderson & Co.",
      bio: "Petrochemical Engineer",
      dateOfBirth: "1969-11-01",
      image: "https://matias-tailwind-rho.vercel.app/assets/img/blog/bblog1.png",
    },
    
    {
      name: "Matias Cooper ",
      bio: "A Data Analyst",
      dateOfBirth: "1979-03-12",
      image: "https://matias-tailwind-rho.vercel.app/assets/img/testimonial/man1.png",
    },

    {
      name: "Unai Emry",
      bio: "A Football Manager",
      dateOfBirth: "1964-07-20",
      image: "https://matias-tailwind-rho.vercel.app/assets/img/testimonial/man3.png",
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


