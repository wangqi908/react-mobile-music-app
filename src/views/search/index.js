import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchAction } from '@/store/actions'
import { SearchBar, Toast } from 'antd-mobile'
import { SongItem } from '@/components'
import './style.less'

class Search extends Component {
  state = {
    keywords: ''
  }
  componentDidMount() {
    this.autoFocusInst.focus()
  }
  onChange = keywords => {
    this.setState({ keywords })
  }
  submit = () => {
    const { keywords } = this.state
    if (!keywords) {
      Toast.info('请输入关键词')
      return
    }
    this.props.searchAction({ keywords })
    this.setState({ keywords: '' })
  }
  render() {
    const { list } = this.props
    return (
      <div className="search-box">
        <div className="search-inp">
          <SearchBar
            ref={ref => (this.autoFocusInst = ref)}
            onChange={this.onChange}
            onSubmit={this.submit}
          />
        </div>

        <div className="new-song-list">
          {list.map((item, index) => {
            return <SongItem key={item.id} {...item} index={index} />
          })}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    list: state.home.searchResult
  }
}

export default connect(mapState, { searchAction })(Search)
