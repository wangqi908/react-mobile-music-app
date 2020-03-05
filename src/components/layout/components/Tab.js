import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Tab extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" activeClassName='tab-on'>首页</NavLink>
        <NavLink to="/hot" activeClassName='tab-on'>热门</NavLink>
      </div>
    )
  }
}
