import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  var style = {
    backgroundColor: '#fff',
    fontFamily: 'monospace'
  };
  return (
    <div>
      <h1 style={style}>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
