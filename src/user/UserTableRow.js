import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class UserTableRow extends Component {
    constructor(props) {
        super(props);
    }

    deleteUser = () => {
        axios.delete('https://jsonplaceholder.typicode.com/users/' + this.props.obj.id)
            .then(json => {
                if (json.status === 200) {
                    alert('Record deleted successfully!!');
                }
            })
    }
    render() {
        return (
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.email}
                </td>
                <td>
                    {this.props.obj.phone}
                </td>
                <td>
                    <Link to={"/edituser/" + this.props.obj.id} className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button type="button" onClick={this.deleteUser} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default UserTableRow;