import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate=useNavigate();
    const gotoabout = () =>{
    navigate("About");
    }
  return (
    <div>
        <h1>Home</h1>
       <p>its a place of connecting points anywhere you can go</p>
       <Link to={"Profile"}>Go to Profile</Link><br/>
       <button onClick={() =>gotoabout()}>Go to About</button>
        </div>
  )
}

export default Home