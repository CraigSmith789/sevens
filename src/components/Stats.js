import React from 'react'
import { connect } from 'react-redux'
import store from './../store'


export class Stats extends React.Component {
  componentDidMount(){
    fetchStats()
  }
  render () {
    return (
      <div>
        <h1>Player Stats</h1>
        {console.log(this.props.stats)}
        {this.props.stats.map(stat => (
          <div
            key={stat.id}
            style={{ display: 'flex', width: '1000px', marginLeft: '300px' }}
          >
            <div style={{ marginRight: '20px' }}><b>{stat.name}:</b></div>
            <div style={{ marginRight: '20px' }}>
              Games Played: {stat.played}
            </div>
            <div style={{ marginRight: '20px' }}>Games Won: {stat.won}</div>
          </div>
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => ({
  stats: state.stats
})

export const fetchStats = () => {
  console.log('in stat fetch')
  return fetch(`http://localhost:3001/stats`)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      store.dispatch({ type: 'FETCH_STATS', stats: data })
    })
}
export default connect(mapStateToProps, null)(Stats)
