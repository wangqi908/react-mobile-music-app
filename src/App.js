import React, { Component } from 'react'
import { Layout } from '@/components'
import { Provider } from 'react-redux'
import { Switch, Route, withRouter } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import store from './store'
import { Detail, Playlist, Test } from '@/views'
import './style.less'
class App extends Component {
  render() {
    const { location } = this.props
    return (
      <Provider store={store}>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="fade"
            timeout={600}
            appear={true}
            unmountOnExit={true}
          >
            <Switch>
              <Route path="/Test" exact component={Test} />
              <Route path="/detail/:id" exact component={Detail} />
              <Route path="/playlist/:id" exact component={Playlist} />
              <Layout />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Provider>
    )
  }
}

export default withRouter(App)
