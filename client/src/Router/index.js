import React from 'react'
import { Switch } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Layout from '../Layout'
import Posts from '../Posts'

// Page not found
const PageNotFound = (props) => {
  return <h1>Page Not Found</h1>
}

export default props => {
  return (
    <Switch>
      <PublicRoute path="/" exact layout={Layout} component={Home} />
      <PublicRoute path="/about" layout={Layout} component={About} />
      <PublicRoute path="/contact" layout={Layout} component={Contact} />
      <PublicRoute path="/posts" layout={Layout} component={Posts} />
      <PublicRoute path="*" layout={Layout} component={PageNotFound} />
    </Switch>
  )
}