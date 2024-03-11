// Navbar.js
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiTwotoneContacts } from "react-icons/ai";
import "../assets/Navbar.css";
// import { IoMdContact } from "react-icons/io";
import { Link } from "react-router-dom";

function Navbar() {
    const navRef = useRef();
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div>                   
            <header>
            <button className="buttonA" onClick={toggleMenu}>
                    <FaBars />
                </button>
                
                <nav ref={navRef} className={showMenu ? "responsive_nav" : ""}>
                    <a className="navbar" href="/Home"><Link to='/home'>Home</Link></a>
                    {/* <a className="navbar" href="/Achievements">Achievements</a> */}
                    <a className="navbar" href="/pro"><Link to='/prog'>Programs</Link></a>
                    <a className="navbar" href="/About"><Link to='/abt'>About us</Link></a>
                    <a className="navbar" href="/Contact"><Link to='/contact'>Contact us</Link></a>
                </nav>
                <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                    <button className="dropbtn">
                        <AiTwotoneContacts style={{ fontSize: "40px" }} />
                    </button>
                    {showDropdown && (
                        <div className="dropdown-content">
                            <a href="#"><Link to='/uc'>Profile</Link></a>
                            <Link to='/'>Logout</Link>
                            
                        </div>
                    )}

                </div>

                
                
                
            </header>
        </div>
    );
}

export default Navbar;