import React from "react";
// import { Switch, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <Home/>
      {/* <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route> */}
        {/* <Route path="/login">
          <Login />
        </Route>
        <Route path="/games">
          <Games />
        </Route> */}
      {/* </Switch> */}
    </div>
  );
};

export default App;
