import React, { Component } from 'react'
import { formatSecond } from '@/utils'
import { connect } from 'react-redux'
import {
  songPresentAction,
  getSongUrlAction,
  getSongLrcAction
} from '@/store/actions'
import './style.less'

class Player extends Component {
  constructor() {
    super()
    this.state = {
      isPlay: false,
      audio: null,
      progressStyle: {},
      duration: 0,
      currentTime: 0
    }
    this.audio = React.createRef()
    this.progress = React.createRef()
  }

  componentDidMount() {
    const audio = this.audio.current
    this.setState({ audio })
  }

  // 播放
  play = () => {
    const { isPlay, audio, currentTime, duration } = this.state
    if (!audio.src) return
    isPlay ? audio.pause() : audio.play()
    this.setState({
      isPlay: !isPlay
    })
    if (currentTime === duration && duration !== 0) {
      this.audio.current.currentTime = 0
    }
  }

  // 监听播放
  getCurrentTime = () => {
    const { currentTime, duration } = this.state.audio
    const { songPresentAction } = this.props
    let percent = ((currentTime / duration) * 100).toFixed(2) * 1
    let progressStyle = { width: percent + '%' }
    this.setState({
      progressStyle,
      currentTime
    })

    if (currentTime === duration && duration !== 0) {
      this.setState({
        isPlay: false
      })
    }

    songPresentAction(percent)
  }

  // 获取总时长
  getAllTime = () => {
    const audio = this.state.audio
    const duration = audio.src ? audio.duration : 0
    this.setState({
      duration
    })
  }

  // 点击进度条
  clickProgress = event => {
    let progress = this.progress.current
    let audio = this.audio.current
    if (!audio.src) return

    let left = (event.clientX - progress.offsetLeft) / progress.offsetWidth
    this.audio.current.currentTime = audio.duration * left
  }

  // 上一曲
  previous = () => {
    const { audio } = this.state
    const {
      list,
      activePlaying,
      getSongUrlAction,
      getSongLrcAction
    } = this.props
    let activeId = activePlaying.id
    let activeIndex = list.findIndex(ele => ele.id === activeId)
    let previousIndex = activeIndex === 0 ? list.length - 1 : activeIndex - 1
    let previousId = list[previousIndex].id
    getSongUrlAction({ id: previousId })
    getSongLrcAction({ id: previousId })
    let progressStyle = { width: 0 + '%' }
    this.setState(
      {
        progressStyle
      },
      () => {
        audio.currentTime = 0
      }
    )
  }

  // 下一曲
  next = () => {
    const { audio } = this.state
    const {
      list,
      activePlaying,
      getSongUrlAction,
      getSongLrcAction
    } = this.props
    let activeId = activePlaying.id
    let activeIndex = list.findIndex(ele => ele.id === activeId)
    let nextIndex = activeIndex === list.length - 1 ? 0 : activeIndex + 1
    let nextId = list[nextIndex].id
    getSongUrlAction({ id: nextId })
    getSongLrcAction({ id: nextId })
    let progressStyle = { width: 0 + '%' }
    this.setState(
      {
        progressStyle
      },
      () => {
        audio.currentTime = 0
      }
    )
  }

  render() {
    const { isPlay, progressStyle, duration, currentTime } = this.state
    const { activePlaying } = this.props
    return (
      <div className="audio-component">
        <div className="audio-box">
          <div className="btn-box">
            <div className="play" onClick={this.previous}>
              <span className="iconfont icon-previous"></span>
            </div>
            <div className="play" onClick={this.play}>
              {isPlay ? (
                <span className="iconfont icon-zanting"></span>
              ) : (
                <span className="iconfont icon-bofang"></span>
              )}
            </div>
            <div className="play" onClick={this.next}>
              <span className="iconfont icon-next"></span>
            </div>
            <div className="play">
              <span className="iconfont icon-list"></span>
            </div>
          </div>

          <div className="cover-box">
            {activePlaying.al && activePlaying.al.picUrl ? (
              <img
                className={isPlay ? 'running' : 'pause'}
                src={activePlaying.al.picUrl}
                alt="cover"
              />
            ) : null}
          </div>

          <div className="music-info">
            <div className="info-content">
              <div className="title">{activePlaying.name}</div>
              <div className="time">
                <span>{formatSecond(currentTime)}</span>
                <span>/</span>
                <span>{formatSecond(duration)}</span>
              </div>
              <div
                className="progress-box"
                ref={this.progress}
                onClick={this.clickProgress}
              >
                <div className="progress-on" style={progressStyle}></div>
              </div>
            </div>
          </div>
        </div>

        <audio
          id="audio"
          style={{ display: 'none' }}
          src={activePlaying.url}
          ref={this.audio}
          controls
          autoPlay
          onTimeUpdate={this.getCurrentTime}
          onCanPlay={this.getAllTime}
        ></audio>
      </div>
    )
  }
}

const mapState = state => {
  return {
    activePlaying: state.player.activePlaying,
    list: state.player.list
  }
}

export default connect(mapState, {
  songPresentAction,
  getSongUrlAction,
  getSongLrcAction
})(Player)
