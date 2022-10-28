import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

function AccountInfo({ currentUserId, handleLogout }) {

    const [userInfo, setUserInfo] = useState(null);
    const [confirmD, setConfirmD] = useState(false);

    useEffect(() => {
        fetch(`http://localhost:9292/users/${currentUserId}`)
            .then((res) => res.json())
            .then((user) => {
                setUserInfo(user);
            });

    }, []);

    if (userInfo === null) {
        return (
            <div></div>
        )
    }

    function handleDelete() {
        setConfirmD(() => !confirmD)
    }

    function deleteAccount() {
        fetch(`http://localhost:9292/users/${currentUserId}`, {
            method: "DELETE",
        }).then(handleLogout)
    }

    return (
        <div>
            <Card className="card" style={{ width: "60%", margin:"auto"}}>
                {/* <Card.Img
                    variant="top"
                    src={gameInfo.image_url}
                    alt={gameInfo.title}
                    style={{ width: "100%" }}
                /> */}
                <Card.Body style={{ textAlign: "left" }}>
                    <Card.Title style={{ textAlign: "center" }}>
                        <strong>User Information</strong>
                        <br />
                    </Card.Title>
                    <Card.Text>
                        <label>Full Name: {userInfo.name} {userInfo.lastname}</label>
                        <br />
                        <label>Username: {userInfo.username} </label>
                    </Card.Text>
                    <div style={{ textAlign: "center" }}>
                        {!confirmD ? <button style={{}} onClick={handleDelete}>Delete Account</button> : <button style={{ color: "red", fontWeight: "bold" }} onClick={deleteAccount}>ARE YOU SURE ☹️?</button>}
                    </div>

                </Card.Body>
            </Card>
        </div >
    )
}

export default AccountInfo;