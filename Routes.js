import * as React from 'react'
import { Route, Switch } from 'react-router'
import UserForm from './containers/UserForm'
import FunFacts from './components/FunFacts'

const routes = (
  <div>
    <Switch>
      <Route exact path="/" component={UserForm} />
      <Route path="/FunFacts" component={FunFacts} />
    </Switch>
  </div>
)

export default routes;