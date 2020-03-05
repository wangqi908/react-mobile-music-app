import React, { Component } from 'react'
import { Layout } from '@/components'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import store from './store';
import { Detail,Playlist } from '@/views'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path='/detail/:id' exact component={Detail} />
            <Route path="/playlist/:id" exact component={Playlist} />
            <Layout />
          </Switch>
        </Router>
      </Provider>
    )
  }
}
