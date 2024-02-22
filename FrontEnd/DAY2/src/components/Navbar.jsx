import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
      </div>
    );
  }
}

export default Navbar;
