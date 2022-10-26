import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import GameReview from "./components/GameReview";

const App = () => {
  const [games, setGames] = useState([]);
  const [id, setId] = useState(0);
  useEffect(() => {
    fetch("http://localhost:9292/games")
      .then((res) => res.json())
      .then((games) => {
        setGames(games);
        console.log(games);
      });
  }, []);

  function sendId(id) {
    setId(id);
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/GameReview/:id">
          <GameReview/>
        </Route>
        <Route path="/">
          <Home games={games} sendId={sendId} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
