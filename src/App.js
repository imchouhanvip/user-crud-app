import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import EditUser from './User/EditUser';
import UserList from './User/UserList';
import AddUserByStepper from './User/AddUserByStepper';

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
                  <Link to={'/AddUser'} className="nav-link">Add User</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/UserList'} className="nav-link">Users List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Switch>
            {/* <Route exact path='/AddUser' component={AddUser} /> */}
            <Route exact path='/AddUser' component={AddUserByStepper} />
            <Route path='/edit/:id' component={EditUser} />
            <Route path='/UserList' component={UserList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
