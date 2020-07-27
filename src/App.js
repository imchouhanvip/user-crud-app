import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EditUser from './user/EditUser';
import UserList from './user/UserList';
import AddUser from './user/AddUser';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          User CRUD App
      </header>
        <div className="container">
          <nav className="navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse" >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/adduser'} className="nav-link">Add User</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/userslist'} className="nav-link">Users List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Switch>
            <Route exact path='/adduser' component={AddUser} />
            <Route path='/edituser/:id' component={EditUser} />
            <Route path='/userslist' component={UserList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
