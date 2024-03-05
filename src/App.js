import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import RequestConnect from './pages/requestConnect/RequestConnect';
import People from './pages/people/People';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {

  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=20');

        // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        // const response = await axios.get(`https://randomuser.me/api/?results=20`)
        // console.log(response);
        // console.log(response.data);
        const users = await response.json();
        console.log(users.results);
        setUsers(users.results)
      } catch (e) {
        console.log('An error occured');
      } finally {
        console.log('I just fectched data');
      }
    }
    fetchData()
  }, [])
  
  return (
    <div className="App">
      <Navbar />         
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/people' element={<People users={users} />}></Route>
        <Route path='/request' element={<RequestConnect />}></Route>
      </Routes>
    </div>
  );
}

export default App;
