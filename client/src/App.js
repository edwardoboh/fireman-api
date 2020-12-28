import './App.css';
// import React, { useContext, useState } from "react";
import Index from './components/Index';
import Dashboard from './Dashboard';

import UserProvider from './context/UserContext'

import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import MoreDetails from './components/MoreDetails'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

    return(
      <UserProvider>
        <Router>
          <Switch>
            <PublicRoute exact path="/">
            {/* <Route exact path="/"> */}
              <Index />
            {/* </Route> */}
            </PublicRoute>
            <ProtectedRoute path="/dashboard">
            {/* <Route path="/dashboard"> */}
              <Dashboard />
            {/* </Route> */}
            </ProtectedRoute>
            <Route path="/more">
              <MoreDetails />
            </Route>
          </Switch>
        </Router>
      </UserProvider>
    )
}

export default App;
