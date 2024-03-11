//import React from 'react';
import UserProfile from './UserProfile';

const Upcomp = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile 
        name="Harini P"
        companyName="HandlEvent Company"
        email="HandlEvent@example.com"
        imageSrc="https://via.placeholder.com/150"
      />
    </div>
  );
}

export default Upcomp;
