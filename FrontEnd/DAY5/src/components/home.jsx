//import React from 'react';
import PropTypes from 'prop-types';
import '../assets/home.css';
import Navbar from './Navbar';
import Footer from './Footer';

function EventCard({ title, description }) {
  return (
    <div className="event-card">
      <h3 className='event-title'>{title}</h3>
      <p className='event-description'>{description}</p>
    </div>
  );
}

EventCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  };
function HomePage() {
  return (
    <div>
    <div className="home-page">
        <Navbar />  
     
      <div className="event-cards-container">
        <EventCard
          title="Corporate Events"
          description="We specialize in planning and executing corporate events, including conferences, seminars, and team-building activities."
        />
        <EventCard
          title="Global meet"
          description="Our experienced team will handle every detail to ensure a flawless wedding event."
        />
        <EventCard
          title="corporate Celebrations"
          description="From  parties to holiday celebrations, we'll help you create memorable moments with our expert event planning services."
        />
        <EventCard
          title="Product Launches"
          description="Launch your new product in style with our event planning expertise. We'll help you create buzz and excitement around your brand."
        />
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default HomePage;