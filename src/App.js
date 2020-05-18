import React, { Component } from 'react'
import { Layout } from '@/components'
import { Provider } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import store from './store'
import { Detail, Playlist, Test } from '@/views'
import './style.less'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path="/Test" exact component={Test} />
          <Route path="/detail/:id" exact component={Detail} />
          <Route path="/playlist/:id" exact component={Playlist} />
          <Layout />
        </Switch>
      </Provider>
    )
  }
}

export default withRouter(App)
