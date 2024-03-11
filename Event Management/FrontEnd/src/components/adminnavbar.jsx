// Navbar.js

import { Link } from 'react-router-dom';
import '../assets/adminnavbar.css';

const AdminNavbar = () => {
    return (
        <div>                   
            <header>
    
                
                <nav>
                    <a className="adminnavbar" href="/admin"><Link to='/admin'>Events</Link></a>
                    <a className="adminnavbar" href="/adminuser"><Link to='/adminuser'>Users</Link></a>
                    <a href="/" style={{paddingLeft:'280%'}}>Logout</a>
                </nav>
                        
                
                
            </header>
        </div>
    );
};

export default AdminNavbar;
