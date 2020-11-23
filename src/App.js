import React from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
// core components
import Admin from "layouts/Admin.js";

import SignIn from './components/sign-in/sign-in.component'
import './App.css'
import { selectCurrentUser } from './redux/user/user.selectors'
import "assets/css/material-dashboard-react.css?v=1.9.0";

const hist = createBrowserHistory();

function App({currentUser}) {
  return (
    <div>
      <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      <Route exact path='/material-dashboard-react'
              render={() =>
                currentUser ? (
                  <Redirect to='/admin/dashboard' />
                ) : (
                    <div  className='sign-in'>
                        <SignIn />
                    </div>
                  )
              } />
    </Switch>
  </Router>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });
  
  /* const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
  })
   */
  export default connect(mapStateToProps)(App);