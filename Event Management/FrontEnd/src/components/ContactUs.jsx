import '../assets/ContactUs.css'
import Navbar from './Navbar';

const ContactUs = () => {
  return (
    <div className="container">
      <Navbar/>
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />  
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-details">
        <h2>Contact Details</h2>
        <p>Email: example@example.com</p>
        <p>Phone: +1 123-456-7890</p>
       
      </div>
    </div>
  );
}

export default ContactUs;
