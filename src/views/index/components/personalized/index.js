import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getPersonalizedAction } from '@/store/actions'
import './style.less'

class Personalized extends Component {
  componentDidMount() {
    const { list } = this.props
    if (list.length === 0) this.props.getPersonalizedAction({ limit: 9 })
  }

  render() {
    const { list } = this.props
    return (
      <div className="personalized-box">
        {list.map(item => {
          return (
            <NavLink
              className="item-box"
              to={`/playlist/${item.id}`}
              key={item.id}
            >
              <div className="item-cover">
                <img src={item.picUrl} alt={item.name} />
              </div>
              <span className="item-title">{item.name}</span>
            </NavLink>
          )
        })}
      </div>
    )
  }
}

const mapState = state => {
  return {
    list: state.home.personalizedList
  }
}

export default connect(mapState, { getPersonalizedAction })(Personalized)
