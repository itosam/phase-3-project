import React from "react";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import GameReview from "./components/GameReview";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import CreateUser from "./components/CreateUser";
import NavBar from "./components/NavBar";
import AccountInfo from "./components/AccountInfo";

const App = () => {
  const [games, setGames] = useState([]);
  const [id, setId] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const navigate = useHistory();

  useEffect(() => {
    fetch("http://localhost:9292/games")
      .then((res) => res.json())
      .then((games) => {
        setGames(games);
      });

    const user = window.localStorage.getItem('currentUserId')

    returnedUserId(user)
  }, []);

  function returnedUserId(id) {

    if (id) {
      setUserLoggedIn(true);
      setId(id)
      window.localStorage.setItem('currentUserId', id)
    } else {
      setUserLoggedIn(false);
    }
  }

  function handleLogout() {
    setId(null);
    window.localStorage.clear();
    setUserLoggedIn(false);
    navigate.push('/')
  }


  return (
    <div>
      {userLoggedIn ? (
        <div>
          <NavBar handleLogout={handleLogout} />
          <Switch>
            <Route path="/GameReview/:id">
              <GameReview currentUserId={id} />
            </Route>
            <Route path="/AccountInfo">
              <AccountInfo currentUserId={id} handleLogout={handleLogout} />
            </Route>
            <Route path="/home">
              <Home games={games} handleLogout={handleLogout} />
            </Route>
          </Switch>
        </div>
      ) : (
        <Switch>
          <Route path="/createAccount">
            <CreateUser returnUserId={returnedUserId} />
          </Route>
          <Route path="/forgotPassword">
            <ForgotPassword />
          </Route>
          <Route path="/">
            <Login returnUserId={returnedUserId} />
          </Route>

        </Switch>
      )}
    </div>
  );
};

export default App;
