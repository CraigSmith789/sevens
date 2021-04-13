import React from 'react'
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render () {
    return (
      <div
        style={{
          display: 'flex',
          backgroundColor: 'lightGray',
          height: '40px',
          width: 'auto'
        }}
      >
        
        <div style={linkStyle}>
          <NavLink
          to='/'>Home</NavLink>
        </div>

        <div style={linkStyle}>
          <NavLink
          to='/rules'>Rules</NavLink>
        </div>
        <div style={linkStyle}>
          <NavLink
          to='/stats'>Stats</NavLink>
        </div>
      </div>
    )
  }
}

const linkStyle = {
  width: '100px',
  height: '40px',
  lineHeight: '40px'
}

export default NavBar
