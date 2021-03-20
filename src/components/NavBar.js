import React from 'react'

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
          <a href='/'>Home</a>
        </div>

        <div style={linkStyle}>
          <a href='/rules'>Rules</a>
        </div>
        <div style={linkStyle}>
          <a href='/stats'>Stats</a>
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
