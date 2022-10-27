import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import GameReview from "./components/GameReview";
import Login from "./components/Login";

const App = () => {
  const [games, setGames] = useState([]);
  const [id, setId] = useState(1);
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  useEffect(() => {
    fetch("http://localhost:9292/games")
      .then((res) => res.json())
      .then((games) => {
        setGames(games);
        console.log(games);
      });
  }, []);

  function returnedUserId(id) {
    if (id) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }

  return (
    <div>
      <NavBar />
      {userLoggedIn ? (
        <Switch>
          <Route path="/GameReview/:id">
            <GameReview currentUserId={id} />
          </Route>
          <Route path="/">
            <Home games={games} />
          </Route>
        </Switch>
      ) : (
        <Login returnUserId={returnedUserId} />
      )}
    </div>
  );
};

export default App;
