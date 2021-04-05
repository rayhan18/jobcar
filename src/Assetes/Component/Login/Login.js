import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
        <h4 className="text-center border bg-success p-2 "style={{marginTop: '-60px'}}>Login </h4>
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <smale>forget our password ?<Link className="text-danger" to="#">Click Heare</Link></smale>
        <Button block size="lg" type="button" disabled={!validateForm()}>
         <Link className ="text-white" to="/"> Login</Link>
        </Button>
      </Form>
    </div>
  );
}