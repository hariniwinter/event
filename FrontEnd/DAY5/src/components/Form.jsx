import { useState } from 'react';
import '../assets/Form.css'; 
import { Link } from 'react-router-dom';

function Form() {
  // State variables to store form data
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [numOfGuests, setNumOfGuests] = useState('');
  const [numOfVIPs, setNumOfVIPs] = useState('');
  const [date, setDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission logic, such as sending data to a server
  };

  return (
    <div className="form-container">
      <h2>Event Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="numOfGuests">Number of Guests:</label>
        <input
          type="number"
          id="numOfGuests"
          value={numOfGuests}
          onChange={(e) => setNumOfGuests(e.target.value)}
          required
        />
        <label htmlFor="numOfVIPs">Number of VIPs:</label>
        <input
          type="number"
          id="numOfVIPs"
          value={numOfVIPs}
          onChange={(e) => setNumOfVIPs(e.target.value)}
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit"><Link to='/make'>Make Payment</Link></button>
      </form>
      <p>Contact this number (8976543787) for further details.</p>
    </div>
  );
}

export default Form;
