import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import '../style.css'
import Home from './components/home'
import Header from './components/header'

const Land = React.createClass({
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    )
  }
})

render((
  <Router history={browserHistory}>
    <Route path="/" component={Land} >
      <Route path="/home" component={Home} />
    </Route>
  </Router>
), document.getElementById('app'))
