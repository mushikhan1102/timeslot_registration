import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import {useState} from 'react';
import Navigation from '../components/nav_bar';
import FormText from 'react-bootstrap/FormText';
import {auth, app} from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Signup = () => {

  const {email, setEmail} = useState('');
  const {AccessID, setAccessID} = useState('');
  const {firstName, setFirstName} = useState('');
  const {lastName, setLastName} = useState('');
  const {proj, setProj} = useState('');

return(
    
    <>

    <Navigation></Navigation>
    <h1>Project Signup</h1>

    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridID">
          <Form.Label>Access ID</Form.Label>
          <Form.Control type="password" placeholder="ID" />
        </Form.Group>
      </Row>

      <Row className="mb-3">

      <Form.Group as={Col} controlId="formGridFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control placeholder="First Name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control placeholder="Last Name" />
      </Form.Group>

      </Row>

      <Form.Group className="mb-3" controlId="formGridprojectName">
        <Form.Label>Project Name</Form.Label>
        <Form.Control placeholder="Name of Project" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    
    
    </>

);

};

export default Signup;