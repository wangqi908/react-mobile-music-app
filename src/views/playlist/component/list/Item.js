import React, { Component } from 'react'
import './style.less'

export default class Item extends Component {
  sliceStr = (arr, key) => {
    let str = ''
    arr.forEach(item => {
      str += item[key] + '/'
    })
    return str.slice(0, -1)
  }
  render() {
    const { ar, name, index } = this.props
    return (
      <div className="song-item">
        <div className="song-item-left">
          <div className="song-index">{index}</div>
          <div className="song-content">
            <div className="song-title">{name}</div>
            <div className="song-singer">{this.sliceStr(ar, 'name')}</div>
          </div>
        </div>
        <div className="song-item-right">
          <span className="iconfont icon-jia"></span>
        </div>
      </div>
    )
  }
}
