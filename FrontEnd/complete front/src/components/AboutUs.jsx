import '../assets/AboutUs.css'; 
import Navbar from './Navbar';


function AboutUs() {
  return (
     
    
    <div className="about-us">
      <Navbar/>
      <div className="about-us-section">
        <h2 className="about-us-title">Welcome to HandlEvent</h2>
        <p>HanndlEvent is a leading provider of premium corporate event management solutions. With a wealth of experience in the industry, we specialize in orchestrating memorable and impactful events tailored to the unique needs of our clients.</p>
      </div>

    

      <div className="about-us-section">
        <h3 className="about-us-title">Our Mission</h3>
        <p>At HanndlEvent, our mission is simple: to deliver exceptional event management services that exceed our clients expectations. We strive to create immersive experiences that leave a lasting impression, reflecting positively on our clients brands and objectives.</p>
      </div>

      <div className="about-us-section">
        <h3 className="about-us-title">What Sets Us Apart</h3>
        <p>What sets us apart is our unwavering commitment to excellence in every aspect of event planning and execution. From venue selection to logistical coordination, we handle every detail with meticulous attention to ensure seamless and successful events.</p>
        <p>Furthermore, our dedication to customization allows us to tailor our services to meet the specific needs and preferences of each client. Whether you require a sophisticated conference, a high-profile product launch, or a themed gala dinner, we have the expertise and resources to bring your vision to life.</p>
      </div>

      <div className="about-us-section about-us-services">
        <h3 className="about-us-title">Our Services</h3>
        <p>At HanndlEvent, we offer a comprehensive range of event management services, including:</p>
        <ul>
          <li>Venue selection and booking</li>
          <li>Theme conceptualization and design</li>
          <li>Event logistics and coordination</li>
          <li>Audiovisual production and technical support</li>
          <li>Catering and menu customization</li>
          <li>Entertainment booking and management</li>
          <li>On-site event management and staffing</li>
          <li>Post-event evaluation and follow-up</li>
        </ul>
      </div>

      <div className="about-us-section">
        <h3 className="about-us-title">Contact Us</h3>
        <p>Ready to elevate your next corporate event? Contact us today to discuss your requirements and let us help you create an unforgettable experience for your attendees.</p>
        <p>Phone: 8975457430<br />Email: handlevent@gmail.com</p>
      </div>
    </div>
  );
}

export default AboutUs;
