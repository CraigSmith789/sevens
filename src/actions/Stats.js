import React from 'react'
import { connect } from 'react-redux'
import store from '../store'
import PlayerStats from '../components/PlayerStats'

export class Stats extends React.Component {
  state = {}

  componentDidMount () {
    fetchStats()
  }
  render () {
    return (
      <div>
        <h1>Player Stats</h1>
        {console.log(this.props.stats)}
        {this.props.stats.map(stat => (
          <PlayerStats stat={stat}/>
            
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
