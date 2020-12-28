import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  useHistory
} from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  NavbarText
} from 'reactstrap';

import {
  Button
} from 'react-bootstrap'

import AdminDashboard from './components/admin/AdminDashboard'
// import UserDashboard from './components/user/UserDashboard'
// import Login from './components/Login'
// import Signup from './components/Signup'


import {DeviceProvider} from './context/DeviceContext'
import {UserContext} from './context/UserContext'
import {types} from './actions/actionTypes'


function Dashboard() {

  const {path, url} = useRouteMatch()

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen)

  const jsonData = localStorage.getItem("userData")
  const localData = JSON.parse(jsonData)

  const {userState, dispatch} = useContext(UserContext)
  const {LOGOUT_SUCCESS} = types
  const history = useHistory()

  const logout = () => {
    dispatch({
      type: LOGOUT_SUCCESS
    })
    history.push("/")
  }

    return (
      <DeviceProvider>
        <div>
          <Router>
          <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/" ><strong>Fireman</strong></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>

              <Nav className="ml-auto" navbar>
                <NavItem>
                  {/* <NavLink href={`${url}`}>Admin</NavLink> */}
                  <NavbarText className="mr-5"><strong>Welcome, {localData.fullName}</strong></NavbarText>
                </NavItem>
                {/* <NavItem>
                  <NavLink href={`${url}/user`}>User</NavLink>
                </NavItem> */}
                <NavItem>
                  {/* <NavLink href="/">Logout</NavLink> */}
                  <Button variant="outline-warning" onClick={logout}>Logout</Button>
                </NavItem>
              </Nav>

            </Collapse>
          </Navbar>

            <Switch>
              <Route path={`${path}`}>
                <AdminDashboard />
              </Route>
              {/* <Route path={`${path}/user`}>
                <UserDashboard />
              </Route> */}

              
              {/* <Route path="/login">
                  <Login />
              </Route>
              <Route path="/signup">
                  <Signup />
              </Route> */}
            </Switch>
          </Router>
        </div>
      </DeviceProvider>
    )
}

export default Dashboard;
