import React, { useState, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";


function ForgotPassword() {

    const backStyle = {
        "color": "blue",
    };

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [cPassword, setCPassword] = useState(null);
    const [fMessage, setFMessage] = useState("Find Account");
    const [sMessage, setSMessage] = useState("Reset Password");
    const [getUsers, setUsers] = useState([]);
    const [isFound, setIsFound] = useState(false);
    const [id, setId] = useState(null);

    const navigate = useHistory();

    useEffect(() => {
        fetch('http://localhost:9292/users')
            .then(r => r.json())
            .then(data => setUsers(data))
    }, [])


    function handleUsername(e) {
        setUsername(() => e.target.value);

    }

    function handlePassword(e) {
        setPassword(() => e.target.value);
    }

    function handleCPassword(e) {
        setCPassword(() => e.target.value);
    }

    function handleFormU(e) {
        e.preventDefault();

        console.log(username)

        const findUser = getUsers.find(user => { return user.username === username });

        if (findUser) {
            setIsFound(isFound => !isFound);
            setId(findUser.id);
        } else {
            setFMessage("Username not found.");
        }
    }

    function handleFormP(e) {
        e.preventDefault();
        if (password === cPassword) {
            fetch(`http://localhost:9292/users/${id}`, {
                method: "PATCH",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ "password": password })
            })
                .then(setSMessage("Password changed"))
                .then(setTimeout(() => { navigate.push("/") }, 1000))
        } else {
            setFMessage("Passwords do not match.");
        }
    }
    return (
        <div id='formBox'>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <NavLink to="/" style={backStyle}>Back</NavLink>
                                    <br />
                                    <br />
                                    <h2 className="fw-bold mb-2 text-uppercase ">
                                        Reset your Password
                                    </h2>


                                    {!isFound ?
                                        <div className="mb-3">

                                            <Form onSubmit={handleFormU}>
                                                <Form.Group className="mb-3" controlId="formUsername">
                                                    <Form.Label className="text-center">Username</Form.Label>
                                                    <Form.Control
                                                        type="text_field"
                                                        placeholder="Enter Your Username"
                                                        onChange={handleUsername}
                                                        required
                                                    />
                                                </Form.Group>
                                                <div className="d-grid">
                                                    <Button variant="outline-secondary" type="submit">
                                                        {fMessage}
                                                    </Button>
                                                </div>
                                            </Form>

                                        </div> :
                                        <div className="mb-3">
                                            <Form onSubmit={handleFormP}>
                                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                                    <Form.Label>Password</Form.Label>
                                                    <Form.Control
                                                        type="password"

                                                        onChange={handlePassword}
                                                        required />

                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <Form.Control
                                                        type="password"

                                                        onChange={handleCPassword}
                                                        required />
                                                </Form.Group>
                                                <div className="d-grid">
                                                    <Button variant="outline-secondary" type="submit">
                                                        {sMessage}
                                                    </Button>
                                                </div>
                                            </Form>

                                        </div>}

                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default ForgotPassword;

