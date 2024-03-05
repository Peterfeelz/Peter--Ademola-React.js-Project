import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return ( 
    <div className="home">
      <p>Connecting Talent through opportunities</p>
      <div className="header-text">
        <h1>Human Connectivity <br />Simplified</h1>
        <p>Our platform offers a user-friendly interface where candidates can showcase their skills, experiences, and <br /> aspirations, while employers can efficiently search for top talent to meet their organizational needs.</p>
        <Link to={'/request'}>Get Started</Link>
        <Link to={'/request'}>Download App</Link>
        <p>5000+ <span>Active Users</span></p>
      </div>
    </div>
   );
}
 
export default Home;