import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route, Link } from 'react-router-dom'
import HomeRoute from './HomeRoute';

const element = (
  <HashRouter>
    <div>
      <Switch>
        <Route
          exact
          path="/"
          component={HomeRoute}
        />
        <Route
          render={() => (
            <div>
              <h1>404</h1>
              <Link to="/">Go to home...</Link>
            </div>
          )}
        />
      </Switch>
    </div>
  </HashRouter>
)

ReactDOM.render(element, document.getElementById('root'))
