import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div
     style={{
        paddingTop: "50px",
        width:"40%",
        display:"flex",
        justifyContent:"space-around",
        margin:"auto",
         }}>

      <Link to="/contacts">
        
        <Button variant="primary">Contacts</Button>
         </Link> 
      <Link to="/addEdit">
        <Button variant="primary">Add Contacts</Button>
        </Link> 
    </div>
  );
}

export default Home;