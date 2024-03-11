import  { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/admin.css';
import AdminNavbar from './adminnavbar';

const AdminUserPage = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);
  const token=localStorage.getItem('token');
  console.log(token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/user');
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div>
      <AdminNavbar />
    <div className="admin-page"> {/* Add className for styling */}
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default AdminUserPage;
