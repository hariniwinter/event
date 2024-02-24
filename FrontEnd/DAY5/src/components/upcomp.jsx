//import React from 'react';
import UserProfile from './UserProfile';

const Upcomp = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile 
        name="John Doe"
        companyName="Example Company"
        email="john@example.com"
        imageSrc="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default Upcomp;
