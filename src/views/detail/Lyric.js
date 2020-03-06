import React, { Component } from 'react'
import { connect } from 'react-redux'
import { cutLrc } from '@/utils'

class Lyric extends Component {
  render() {
    const { activePlaying } = this.props
    const lyricArr = cutLrc(activePlaying.lrc) || []

    return (
      <div className="lyric-box">
        {lyricArr.length !== 0 ? (
          lyricArr.map((item, index) => {
            return (
              <p className="lyric-line" key={item.time + index}>
                {item.lrc}
              </p>
            )
          })
        ) : (
          <div className="no-lyric">暂无歌词</div>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    activePlaying: state.player.activePlaying
  }
}

export default connect(mapState)(Lyric)
