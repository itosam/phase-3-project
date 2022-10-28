import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
// import '../css/formBox.css';
import { useHistory } from "react-router-dom"


function Login({ returnUserId }) {

  const [users, setUsers] = useState([]);

  const [username, setUsername] = useState(null);

  const [password, setPassword] = useState(null);

  const [message, setMessage] = useState("Login");

  const navigate = useHistory();

  function handleName(e) {
    setUsername(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then(r => r.json())
      .then(users => setUsers(users))
  }, [])


  function validateUser(e) {
    e.preventDefault()


    const user = users.find(user => { return username === user.username && password === user.password })

    if (user !== undefined) {
      setMessage('Loggin in...');
      setTimeout(() => {
        returnUserId(user.id);
        // setMessage(null);
        navigate.push("/home");
      }, 1000);
    } else {
      setMessage('Invalid information. Please try again.');
    }
  }


  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">
                    Welcome to Gamer Reviewer
                  </h2>
                  <p className=" mb-5">
                    Please enter your login and password!
                  </p>
                  {/* <p style={style}>{message}</p> */}
                  <div className="mb-3">
                    <Form onSubmit={validateUser}>
                      <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label className="text-center">
                          Username
                        </Form.Label>
                        <Form.Control
                          type="text_field"
                          placeholder="Enter Username"
                          onChange={handleName}
                          required
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={handlePassword}
                          required
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <p className="small">
                          <a className="text-primary" href="/forgotPassword">
                            Forgot password?
                          </a>
                        </p>
                      </Form.Group>
                      <div className="d-grid">
                        <Button variant="outline-secondary" type="submit">
                          {message}
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <a href="/createAccount" className="text-primary fw-bold">
                          Sign Up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;