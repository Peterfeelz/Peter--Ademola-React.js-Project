// import React, {useState} from "react";
import './PersonCard.css'
import { Link } from 'react-router-dom';

const PersonCard = ({name, email, age, src, title, first, last, gender, country, phone}) => {
  return ( 
    <main style={{color: '#fff'}} className="person-card">
      <div className="personcard-image">
        <img src={src} alt="Profile photo" />
        <p>{`${title} ${first} ${last}`}</p>
      </div>

      <div className="personcard-data">
        <p>Email: <span>{email}</span></p>
        <p>Age: <span>{age}</span></p>
        <p>Gender: <span>{gender}</span></p>
        <p>Phone: <span>{phone}</span></p>
        <p>Country: <span>{country}</span></p>
        <Link to={'/request'}>Connect</Link>
      </div>
      
      
    </main>
   );
}
 
export default PersonCard;