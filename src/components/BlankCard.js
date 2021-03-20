import React from 'react'

class BlankCard extends React.Component {
  render () {
    return <div style={blankStyle}></div>
  }
}

const blankStyle = {
  width: '75px',
  height: '105px',
  backgroundColor: 'gray',
  marginRight: '2px',
  marginLeft: '2px',
  marginTop: '2px'
}
export default BlankCard
