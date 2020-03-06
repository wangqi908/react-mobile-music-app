import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Tab extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName="tab-on">
          首页
        </NavLink>
        <NavLink to="/newsong" activeClassName="tab-on">
          新歌
        </NavLink>
      </div>
    )
  }
}
