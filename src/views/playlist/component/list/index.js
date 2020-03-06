import React, { Component } from 'react'
import { SongItem } from '@/components'
import './style.less'

export default class List extends Component {
  render() {
    const { info } = this.props
    const list = info.tracks || []
    return (
      <div>
        {list.map((item, index) => {
          return <SongItem key={item.id} {...item} index={index} />
        })}
      </div>
    )
  }
}
