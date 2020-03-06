import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Index, NewSong, Search } from '@/views'
import { Tab } from './components'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <Tab />
        <div className="body">
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/newsong" component={NewSong} />
            <Route path="/search" exact component={Search} />
          </Switch>
        </div>
      </div>
    )
  }
}
