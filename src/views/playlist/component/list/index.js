import React, { Component } from 'react'
import './style.less'

export default class List extends Component {
  render() {
    const { info } = this.props
    const list = info.tracks || []
    console.log(list)
    return (
      <div>
        {list.map(item => {
          return <div key={item.id}>{item.name}</div>
        })}
      </div>
    )
  }
}
