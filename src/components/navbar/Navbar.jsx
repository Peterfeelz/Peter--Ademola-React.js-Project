import './Navbar.css'
import logo from '../../assets/logo2.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return ( 
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo image" />
        <div className="logo-text">
          <p>People Connect</p>
        </div>
      </div>

      <div className="nav-text">
        <ul>
          <li><Link to='/'>Home </Link></li>
          <li><Link to='/people'>People</Link></li>
          <li><Link to='/request'>Request Connect</Link></li>
        </ul>
      </div>

      <Link to='/request'>Sign Up</Link>


    </div>
   );
}
 
export default Navbar;