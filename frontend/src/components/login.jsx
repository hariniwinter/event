import { useState } from 'react';
import '../assets/Login.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform your login logic, such as sending a request to your server
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form fields
    setUsername('');
    setPassword('');
  };

  return (
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
