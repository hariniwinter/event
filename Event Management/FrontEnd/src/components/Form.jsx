import { useState } from 'react';
import '../assets/Form.css'; 
// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

function Form() {
  const [EName, setEName] = useState('');
  const [EVenue, setEVenue] = useState('');
  const [Edate, setEdate] = useState('');
  const [ECost, setECost] = useState('');
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/event/post', {
        ename: EName,
        evenue: EVenue,
        edate: Edate,
        ecost: ECost
      });
      // console.log(EName,EVenue,Edate,ECost);
       // Optionally, you can redirect the user or show a success message here
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors, show error message, etc.
    }
  };
  

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>Event Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="EName">Event Name:</label>
          <input
            type="text"
            id="EName"
            value={EName}
            onChange={(e) => setEName(e.target.value)}
            required
          />
          <label htmlFor="EVenue">Event Venue:</label>
          <input
            type="text"
            id="EVenue"
            value={EVenue}
            onChange={(e) => setEVenue(e.target.value)}
            required
          />
          <label htmlFor="Edate">Event Date:</label>
          <input
            type="date"
            id="Edate"
            value={Edate}
            onChange={(e) => setEdate(e.target.value)}
            required
          />
          <label htmlFor="ECost">Booking Amount:</label>
          <input
            type="number"
            id="ECost"
            value={ECost}
            onChange={(e) => setECost(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Form;
