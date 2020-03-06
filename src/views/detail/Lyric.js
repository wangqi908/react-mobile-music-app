import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { cutLrc } from '@/utils'
import { getSongLrcAction } from '@/store/actions'

class Lyric extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getSongLrcAction({ id })
  }

  render() {
    const { lyric } = this.props
    const lyricArr = cutLrc(lyric) || []
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
    lyric: state.player.lyric
  }
}

export default withRouter(connect(mapState, { getSongLrcAction })(Lyric))
