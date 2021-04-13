import React from 'react'

class PlayerStats extends React.Component {
  render () {
    return (
      <div
        key={this.props.stat.id}
        style={{ display: 'flex', width: '1000px', marginLeft: '300px' }}
      >
        <div style={{ marginRight: '20px' }}>
          <b>{this.props.stat.name}:</b>
        </div>
        <div style={{ marginRight: '20px' }}>
          Games Played: {this.props.stat.played}
        </div>
        <div style={{ marginRight: '20px' }}>
          Games Won: {this.props.stat.won}
        </div>
      </div>
    )
  }
}
export default PlayerStats
