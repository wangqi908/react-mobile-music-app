import React, { Component } from 'react'
import './style.less'

export default class Head extends Component {
  render() {
    const { info } = this.props
    return (
      <div>
        <div className="head">
          <img className="bg-img" src={info.coverImgUrl} alt="head" />
          <div className="head-content">
            <div className="content-top">
              <img className="head-cover" src={info.coverImgUrl} alt="cover" />
              <div className="content-top-left">
                <span className="content-name">{info.name}</span>
                <div className="content-tags">
                  <span>标签：</span>
                  <span>{info.tags}</span>
                </div>
              </div>
            </div>
            <p className="description">简介：{info.description}</p>
          </div>
        </div>
      </div>
    )
  }
}
