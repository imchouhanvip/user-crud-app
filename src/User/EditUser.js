import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bs-stepper/dist/css/bs-stepper.min.css';
import Stepper from 'bs-stepper';
class EditUser extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            phone: '',
            street: '',
            city: '',
            zipcode: '',
            username: '',
            companyname: '',
            website: ''
        }
    }

    componentDidMount() {
        this.stepper = new Stepper(document.querySelector('#stepper1'), {
            linear: false,
            animation: true
        });
        axios.get('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    name: response.data.name,
                    email: response.data.email,
                    phone: response.data.phone,
                    street: response.data.address.street,
                    city: response.data.address.city,
                    zipcode: response.data.address.zipcode,
                    username: response.data.username,
                    companyname: response.data.company.name,
                    website: response.data.website
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const obj = {
            id: this.props.match.params.id,
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            address: {
                street: this.state.street,
                city: this.state.city,
                zipcode: this.state.zipcode,
            },
            username: this.state.username,
            company: {
                name: this.state.companyname,
            },
            website: this.state.website
        };
        axios.put('https://jsonplaceholder.typicode.com/users/' + this.props.match.params.id, obj)
            .then(res => {
                if (res.status === 200) {
                    alert("User updated successfully");
                }
                this.props.history.push('/UserList');
            });

    }
    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Update User Informations</h4>
                <div>
                    <div id="stepper1" className="bs-stepper">
                        <div className="bs-stepper-header">
                            <div className="step" data-target="#p_details">
                                <button className="step-trigger">
                                    <span className="bs-stepper-circle">1</span>
                                    <span className="bs-stepper-label">Personal Details</span>
                                </button>
                            </div>
                            <div className="line"></div>
                            <div className="step" data-target="#c_details">
                                <button className="step-trigger">
                                    <span className="bs-stepper-circle">2</span>
                                    <span className="bs-stepper-label">Company Details</span>
                                </button>
                            </div>
                        </div>
                        <div className="bs-stepper-content">
                            <Form className="form" onSubmit={this.onSubmit}>
                                <div id="p_details" className="content">
                                    <Col>
                                        <FormGroup row>
                                            <Label for="name" sm={2}>Name:</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="Enter Name" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="email" sm={2}>Email:</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Enter Email" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="phone" sm={2}>Phone:</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Enter Phone" />
                                            </Col>
                                        </FormGroup>
                                        <Row>
                                            <Label for="address" sm={2}>Address:</Label>
                                            <Col sm={10}>
                                                <FormGroup row>
                                                    <Label for="street" sm={2}>Street:</Label>
                                                    <Col sm={10}>
                                                        <Input type="text" name="street" onChange={this.handleChange} value={this.state.street} placeholder="Enter Street" />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="city" sm={2}>City:</Label>
                                                    <Col sm={10}>
                                                        <Input type="text" name="city" onChange={this.handleChange} value={this.state.city} placeholder="Enter City" />
                                                    </Col>
                                                </FormGroup>
                                                <FormGroup row>
                                                    <Label for="zipcode" sm={2}>Zipcode:</Label>
                                                    <Col sm={10}>
                                                        <Input type="text" name="zipcode" onChange={this.handleChange} value={this.state.zipcode} placeholder="Enter Zipcode" />
                                                    </Col>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Row>
                                        <Col sm={11}>
                                        </Col>
                                        <Col sm={1}>
                                            <button type="button" className="btn btn-primary" onClick={() => this.stepper.next()}>Next</button>
                                        </Col>
                                    </Row>
                                </div>
                                <div id="c_details" className="content text-center">
                                    <Col>
                                        <FormGroup row>
                                            <Label for="username" sm={2}>Username:</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="Enter Username" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="companyname" sm={2}>Company Name:</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="companyname" onChange={this.handleChange} value={this.state.companyname} placeholder="Enter Company Name" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Label for="website" sm={2}>Website:</Label>
                                            <Col sm={10}>
                                                <Input type="text" name="website" onChange={this.handleChange} value={this.state.website} placeholder="Enter Website" />
                                            </Col>
                                        </FormGroup>
                                    </Col>
                                    <Row>
                                        <Col sm={1}>
                                            <button type="button" className="btn btn-primary" onClick={() => this.stepper.previous()}>Previous</button>
                                        </Col>
                                        <Col sm={10}>
                                        </Col>
                                        <Col sm={1}>
                                            <button type="submit" className="btn btn-success">Update</button>
                                        </Col>
                                    </Row>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        );
    }

}

export default EditUser; 