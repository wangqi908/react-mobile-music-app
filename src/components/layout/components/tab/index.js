import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'

export default class Tab extends Component {
  render() {
    return (
      <div className="tab-box">
        <NavLink to="/" exact activeClassName="tab-on" className="tab-item">
          首页
        </NavLink>
        <NavLink to="/newsong" activeClassName="tab-on" className="tab-item">
          新歌
        </NavLink>
        <NavLink to="/search" activeClassName="tab-on" className="tab-item">
          搜索
        </NavLink>
      </div>
    )
  }
}
