import './RequestConnect.css';
import { useState } from 'react';

const RequestConnect = () => {

  const [userData, setUserData] = useState({
    name: "",
    email:"",
    age: 0, 
    number: '',
    interest: ''
  })

  const [showData, setShowData] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowData(true);
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name, value);
    setUserData({
      ...userData,
      [name]: value
    });
  }

  return ( 
    <div className="req-connect">
      <h3>Connect within seconds after filling this form</h3>
      <div className="req-body">
        <div className="form-container">
          <form onSubmit={handleSubmit}>

            <input onChange={handleChange} type="text" required name='name' placeholder='Your Name' />
            <input type="number" onChange={handleChange} required name='age' placeholder='Your Age' />
            <input type="email" onChange={handleChange} required name='email' placeholder='Your Email' />
            <input type="number" onChange={handleChange} required name='number' placeholder='Your Number' />
            <input type="text" onChange={handleChange} required name='interest' placeholder='Your Interests' />
            <input type="submit" />
          </form>
        </div>

        {showData && <div className="success-card">
          <h2>Thank you, your request is sent</h2>
          <p>Here is your request data below:</p>
          <div className="request-data">
            <p>Name: <span>{userData.name}</span></p>
            <p>Age: <span>{userData.age}yrs</span></p>
            <p>Email: <span>{userData.email}</span></p>
            <p>Number: <span>{userData.number}</span></p>
            <p>Interests: <span>{userData.interest}</span></p>
          </div>
        </div>}
      </div>
    </div>
   );
}
 
export default RequestConnect;