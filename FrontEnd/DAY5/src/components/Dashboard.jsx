
import { Link } from 'react-router-dom';
import '../assets/Dashboard.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <br></br>
      <div className="subdivision"><Link to ='/product'>Subdivision 1</Link></div>< br></br>
      <div className="subdivision"><Link to ='/meeting'>Subdivision 2</Link></div>< br></br>
      <div className="subdivision"><Link to ='/press'>Subdivision 3</Link></div>< br></br>
      <div className="subdivision"><Link to='/fund'>Subdivision 4</Link></div>< br></br>
      <div className="subdivision"><Link to='party'>Subdivision 5</Link></div>< br></br>
      <div className="subdivision"><Link to ='/glo'>Subdivision 6</Link></div>< br></br>
    </div>
  );
}

export default Sidebar;
