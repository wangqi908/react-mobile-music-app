import React, { Component } from "react";
import "./style.less";
import { formatSecond } from "@/utils";

export default class Player extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      activePlaying: {},
      isPlay: false,
      isRandom: false, //是否随机
      audio: null,
      progressStyle: {},
      duration: 0,
      currentTime: 0
    };
    this.audio = React.createRef();
    this.progress = React.createRef();
  }

  componentDidMount() {
    const audio = this.audio.current;
    const { list } = this.props;
    this.setState({ audio, list });
    if (list.length > 0) this.setState({ activePlaying: list[0] });
  }

  // 播放
  play = () => {
    const { isPlay, audio, currentTime, duration } = this.state;
    if (!audio.src) return;
    isPlay ? audio.pause() : audio.play();
    this.setState({
      isPlay: !isPlay
    });
    if (currentTime === duration && duration !== 0) {
      this.audio.current.currentTime = 0;
    }
  };

  // 监听播放
  getCurrentTime = () => {
    const { currentTime, duration } = this.state.audio;
    let percent = ((currentTime / duration) * 100).toFixed(2) * 1;
    let progressStyle = { width: percent + "%" };
    this.setState({
      progressStyle,
      currentTime
    });

    if (currentTime === duration && duration !== 0) {
      this.setState({
        isPlay: false
      });
    }
  };

  // 获取总时长
  getAllTime = () => {
    const audio = this.state.audio;
    this.setState({
      duration: audio.duration
    });
  };

  // 点击进度条
  clickProgress = event => {
    let progress = this.progress.current;
    let audio = this.audio.current;
    let left = (event.clientX - progress.offsetLeft) / progress.offsetWidth;
    this.audio.current.currentTime = audio.duration * left;
  };

  // 上一曲
  previous = () => {
    const { list, activePlaying, audio } = this.state;
    if (!list.length) return;
    const activeIndex = list.findIndex(item => item.id === activePlaying.id);
    const listLength = list.length;
    const nextSong =
      activeIndex === 0 ? list[listLength - 1] : list[activeIndex - 1];

    let progressStyle = { width: 0 + "%" };
    this.setState(
      {
        activePlaying: nextSong,
        progressStyle,
        isPlay: true
      },
      () => {
        audio.play();
      }
    );
  };

  // 下一曲
  next = () => {
    const { list, isRandom, activePlaying, audio } = this.state;
    if (!list.length) return;
    const activeIndex = list.findIndex(item => item.id === activePlaying.id);
    const listLength = list.length;
    // 下一首
    const nextSong =
      listLength - 1 === activeIndex ? list[0] : list[activeIndex + 1];
    // 随机
    const randomIndex = Math.floor(Math.random() * listLength);
    const randomSong = list[randomIndex];
    let progressStyle = { width: 0 + "%" };
    this.setState(
      {
        activePlaying: isRandom ? randomSong : nextSong,
        progressStyle,
        isPlay: true
      },
      () => {
        audio.play();
      }
    );
  };

  // 播放模式
  handlePlayMode = () => {
    this.setState({
      isRandom: !this.state.isRandom
    });
  };

  render() {
    const {
      isPlay,
      isRandom,
      progressStyle,
      duration,
      currentTime,
      activePlaying
    } = this.state;
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
            <div className="play" onClick={this.handlePlayMode}>
              {isRandom ? (
                <span className="iconfont icon-suiji"></span>
              ) : (
                <span className="iconfont icon-xunhuan"></span>
              )}
            </div>
          </div>

          <div className="cover-box">
            {activePlaying.cover ? (
              <img
                className={isPlay ? "running" : "pause"}
                src={activePlaying.cover}
                alt="cover"
              />
            ) : null}
          </div>

          <div className="music-info">
            <div className="info-content">
              <div className="title">{activePlaying.title}</div>
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
          style={{ display: "none" }}
          src={activePlaying.src}
          ref={this.audio}
          controls
          onTimeUpdate={this.getCurrentTime}
          onCanPlay={this.getAllTime}
        ></audio>
      </div>
    );
  }
}
