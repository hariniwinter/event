import '../assets/Program.css'; 
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Image1 from '../assets/co.jpg'; 
import Image2 from '../assets/mic.jpg';
import Image3 from '../assets/product.jpg';

function Program() {
  return (
    <div className="program-container">
      <Navbar/>
      <br/><br/><br/>
      <div className="row">
        <div className="box">
          <div className="upper-box">
            <img src={Image1} alt="Image 1" />
          </div>
          <div className="lower-box">
            <h2>Annual general meetings</h2>
            <p>Venue
Projector and Screen,
Microphones and Sound System
Seating Arrangements,
Registration Desk,
Signage and Directional Materials,
Refreshments,
AV Equipment,
Internet Connectivity,
Backup Systems.</p>
          </div>
          <button><y><Link to='/fro'>Book now</Link></y></button>
        </div>
        <div className="box">
          <div className="upper-box">
            <img src={Image2} alt="Image 2" />
          </div>
          <div className="lower-box">
            <h2>Company-wide holiday parties</h2>
            <p>Venue,
Decorations,
Food and Beverages,
Entertainment,
Audio-Visual Equipment,
Seating and Tables,
Photography/Videography,
Party Favors,
Security,
Transportation,
Invitations and RSVPs,
Clean-up Crew,
Compliance and Permits,
Budgeting.</p>
          </div>
          <button><y><Link to='/fro'>Book now</Link></y></button>
        </div>
        <div className="box">
          <div className="upper-box">
            <img src={Image3} alt="Image 3" />
          </div>
          <div className="lower-box">
            <h2>Product Launch</h2>
            <p>Venue,
Stage and Podium,
Lighting Equipment,
Sound System,
 (Screens, Projectors),
Product Displays,
Signage and Banners,

Press Release,
Photography/Videography Services,
Event Staff (Ushers, Hosts),
Security Personnel,
Transportation and Parking Arrangements,
Invitations and RSVP Management,
Event Registration and Check-in System,
Clean-up Crew.

</p>
          </div>
          <button><y><Link to='/fro'>Book now</Link></y></button>
        </div>
      </div>
      <div className="row">
        <div className="box">
          <div className="upper-box">
            <img src={Image1} alt="Image 4" />
          </div>
          <div className="lower-box">
            <h2>Trade shows and exhibitions</h2>
            <p>Booth or Exhibition Space
Backdrop or Display Stand
Signage and Banners
Product Displays
Demonstration Units
Brochures and Flyers
Business Cards
Samples or Promotional Items
Audio-Visual Equipment (TV screens, projectors)
Lighting Equipment
Booth Furniture (Tables, Chairs, Counters)
Flooring (Carpeting, Tiles)
Branding and Graphics.</p>
          </div>
          <button><y><Link to='/fro'>Book now</Link></y></button>
        </div>
        <div className="box">
          <div className="upper-box">
            <img src={Image2} alt="Image 5" />
          </div>
          <div className="lower-box">
            <h2>Customer appreciatio</h2>
            <p>Venue or Event Space
Invitations or Event Notices
Signage and Banners Welcoming Guests
Registration or Check-in Area

Decorations (Balloons, Streamers, Centerpieces)

Catering Services (Food and Beverages)
Cake or Desserts
Entertainment (Live Music, DJ, Performers)
Photo Booth with Props
Photography or Videography Services
Speeches or Presentations</p>
          </div>
          <button><y><Link to='/fro'>Book now</Link></y></button>
        </div>
        <div className="box">
          <div className="upper-box">
            <img src={Image3} alt="Image 6" />
          </div>
          <div className="lower-box">
            <h2>Fundraisers</h2>
            <p>Invitations or Event Notices
Signage and Banners
Registration or Check-in Area
Name Tags or Badges for Attendees
Decorations (Balloon arches, Banners, Table Centerpieces)
Catering Services (Food and Beverages)
Cake or Desserts
Entertainment (Live Music, DJ, Performers)
Silent Auction Items
Raffle Prizes or Drawings
Donation Collection Boxes or Buckets
Fundraising Goal Tracker Display
Presentation Materials (Slides, Videos)</p>
          </div>
          <button><y><Link to='/fro'>Book now</Link></y></button>
        </div>
      </div>
    </div>
  );
}

export default Program;
