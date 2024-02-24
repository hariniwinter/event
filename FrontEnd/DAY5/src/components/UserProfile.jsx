
import  { useState } from 'react';
import '../assets/UserProfile.css';
import PropTypes from 'prop-types';
import harman from '../assets/profileimg.jpg';


const UserProfile = ({ name, companyName, email, imageSrc }) => {
 
  const [isEditing, setIsEditing] = useState(false);

  const [editedProfile, setEditedProfile] = useState({
    name: name,
    companyName: companyName,
    email: email
  });

 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  
  const handleSaveChanges = () => {
    
    console.log("Saving changes:", editedProfile);
    setIsEditing(false);
  };

  return (
    <div className="profile">
      <div className="profile-image">
        <img src={harman} alt="Profile" />
      </div>
      <div className="profile-details">
        {isEditing ? (
          <div>
            <input
              type="text"
              name="name"
              value={editedProfile.name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="companyName"
              value={editedProfile.companyName}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              value={editedProfile.email}
              onChange={handleInputChange}
            />
            <button onClick={handleSaveChanges}>Save Changes</button>
          </div>
        ) : (
          <div>
            <h2>{name}</h2>
            <p><strong>Company:</strong> {companyName}</p>
            <p><strong>Email:</strong> {email}</p>
            <br></br>
            <button onClick={() => setIsEditing(true)}>Edit Profile</button>
          </div>
        )}
      </div>
    </div>
  );
};


UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};


export default UserProfile;
