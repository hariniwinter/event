import { useState } from 'react';
import '../assets/Signup.css';
import { Link } from 'react-router-dom';


function Signup() {
  const [companyName, setCompanyName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [position, setPosition] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Company Name:', companyName);
    console.log('Company Email:', companyEmail);
    console.log('Position:', position);
    // Reset the form fields
    setCompanyName('');
    setCompanyEmail('');
    setPosition('');
  };

  return (
    <div className="signup-container">
      <h2>Corporate Event Management - Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <label htmlFor="companyEmail">Company Email:</label>
        <input
          type="email"
          id="companyEmail"
          value={companyEmail}
          onChange={(e) => setCompanyEmail(e.target.value)}
          required
        />
        <label htmlFor="position">Position in Company:</label>
        <input
          type="text"
          id="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p><Link to='/'>SignIn</Link></p>
    </div>
  );
}

export default Signup;
