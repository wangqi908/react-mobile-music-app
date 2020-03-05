import React, { Component } from 'react';
import { connect } from "react-redux";
import { getPlaylistDetailAction } from "@/store/actions";

class Playlist extends Component {
  componentDidMount() {
    const { info } = this.props
    const id = this.props.match.params.id
    if (info.id*1!==id*1) this.props.getPlaylistDetailAction({ id })
  }

  render() {
    const { info } = this.props
    return (
      <div>
        playlist
        {info.description}
      </div>
    );
  }
}

const mapState = state => {
  return {
    info: state.playlist.playListInfo
  };
};

export default connect(mapState, { getPlaylistDetailAction })(Playlist);