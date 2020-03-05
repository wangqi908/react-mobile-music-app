import React, { Component } from 'react'
import Item from './Item'
import './style.less'

export default class List extends Component {
  render() {
    const { info } = this.props
    const list = info.tracks || []
    return (
      <div>
        {list.map((item, index) => {
          return <Item key={item.id} {...item} index={index} />
        })}
      </div>
    )
  }
}
