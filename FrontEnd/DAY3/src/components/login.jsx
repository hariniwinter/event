import { useState } from 'react';

import '../assets/Login.css'; 
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className='containerone'>
    <div className="login-container">

      <h2>Corporate Event Management - Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br></br>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br></br>
        <button type="submit"><o><Link to='/Homepage'>Login</Link></o></button>
        <p>New User ?? <Link to='/Signup'>Signup</Link></p>
        
      </form>
    </div>
    </div>
    
    
  );
}

export default Login;
