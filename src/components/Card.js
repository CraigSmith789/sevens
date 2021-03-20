import React from 'react'

class Card extends React.Component {
  render () {
    return (
      <div key={this.props.card.value} style={cardStyle}>
        <img
          src={this.props.card.image}
          style={{ width: '75px', height: '105px' }}
        />
      </div>
    )
  }
}
const cardStyle = {
  width: '75px',
  height: '105px',
  marginRight: '2px',
  marginLeft: '2px',
  marginTop: '2px'
}
export default Card
