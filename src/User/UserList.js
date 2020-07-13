import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
  
export default class Userlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {users: []};  
    }  
    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/users')  
        .then(response => {  
          this.setState({ users: response.data });  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.users.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">User List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>Name</th>  
                <th>Email</th>  
                <th>Phone</th>  
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  