import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Login.css';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/auth/auth', {
        username: email,
        password: password,
      });
      const token = response.data;
      localStorage.setItem('token', token);
      console.log('Token: ' + token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; 
      console.log('Login Success:', response.data);
      setLoginSuccess(true);
    }
     catch (error) {
      console.error('Login Error:', error);
    }
  };
  useEffect(() => {
    if (loginSuccess) {
      if (email === 'abcd') {
        window.location.href = '/admin';
      } else {
        window.location.href = '/Homepage';
      }
    }
  }, [loginSuccess]);
  return (
    <div>
      <div className='content_signin'>
        <div className="signin-form">
          <h1>USER SIGN-IN</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                className='signin'
                type="text"
                value={email}
                id='emailsignin'
                placeholder='Email'
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className='signin'
                type="password"
                value={password}
                id='passwordsignin'
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
            <button type="submit" className='button_signin'>Sign In</button>
            </div>
            <h3>New here??    <Link to='/SignUp'>   SignUp</Link></h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;