import React                            from 'react'
import ReactDOM                         from 'react-dom'
import SignIn                           from './views/system/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Error404                         from './views/error-page/404'

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route path='/sign-in' component={SignIn} />
          <Route component={Error404}/>
        </Switch>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)