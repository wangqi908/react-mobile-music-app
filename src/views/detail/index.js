import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSongUrlAction } from '@/store/actions'
import { Player } from '@/components'

class Detail extends Component {
  componentDidMount() {
    const { id } = this.props.match.params
    this.props.getSongUrlAction({ id })
  }
  render() {
    console.log(this.props.list)
    return (
      <div>
        clg
        <Player list={[]} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    list: state.player.list
  }
}

export default connect(mapState, { getSongUrlAction })(Detail)
