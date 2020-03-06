import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongUrlAction } from '@/store/actions'
import { Player } from '@/components'
import Lyric from './Lyric'
import './style.less'

class Detail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getSongUrlAction({ id })
  }
  render() {
    return (
      <div className="song-detail">
        <Lyric />
        <div className="player-box">
          <Player />
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    activePlaying: state.player.activePlaying
  }
}

export default connect(mapState, { getSongUrlAction })(Detail)
