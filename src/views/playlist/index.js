import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPlaylistDetailAction } from '@/store/actions'
import { Head, List } from './component'
import './style.less'

class Playlist extends Component {
  componentDidMount() {
    const { info } = this.props
    const id = this.props.match.params.id
    if (info.id * 1 !== id * 1) this.props.getPlaylistDetailAction({ id })
  }

  render() {
    const { info } = this.props
    return (
      <div className="playlist">
        <Head info={info} />
        <p className="list-tip">歌单列表：</p>
        <List info={info} />
        {/* <div className="head">
          <img src={info.backgroundCoverUrl} alt="head" />
        </div>
        <p>{info.description}</p> */}
      </div>
    )
  }
}

const mapState = state => {
  return {
    info: state.playlist.playListInfo
  }
}

export default connect(mapState, { getPlaylistDetailAction })(Playlist)
