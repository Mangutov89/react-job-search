import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return(
    <div>
      <h1>Job Search</h1>
      <Link to="/">Home</Link> | <Link to="/saved">Saved Jobs</Link>
    </div>
  );
}

export default Header;