import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './style.less'

export default class Tab extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" exact activeClassName="tab-on">
          首页
        </NavLink>
        <NavLink to="/newsong" activeClassName="tab-on">
          新歌
        </NavLink>
        <NavLink to="/search" activeClassName="tab-on">
          搜索
        </NavLink>
      </div>
    )
  }
}
