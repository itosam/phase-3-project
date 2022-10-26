import { useEffect, useState } from "react";
import Gamelist from "./Gamelist";

const Home = ({ games, sendId }) => {
  return (
    <div>
      <Gamelist games={games} sendId={sendId} />
    </div>
  );
};

export default Home;
