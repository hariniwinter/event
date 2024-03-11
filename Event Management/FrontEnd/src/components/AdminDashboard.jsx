import  { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/admin.css';
import AdminNavbar from './adminnavbar';

const AdminPage = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetchEvents();
  }, []);
  const token=localStorage.getItem('token');
  console.log(token);
  axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
  
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/event/all');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };
  return (
    <div>
        \<AdminNavbar />
        
    <div className="admin-page"> {/* Add className for styling */}
      <h1>Admin Page</h1>
      <h2>Total Number of Events: {events.length}</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Venue</th>
            <th>Date</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td>{event.id}</td>
              <td>{event.ename}</td>
              <td>{event.evenue}</td>
              <td>{event.edate}</td>
              <td>{event.ecost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminPage;
