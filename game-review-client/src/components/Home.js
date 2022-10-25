import { useEffect, useState } from "react";
import Gamelist from "./Gamelist"
const Home = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
    fetch("http://localhost:9292/games")
    .then(res => res.json())
    .then((games) => {
        setGames(games)
        console.log(games)
    });
    }, []);

    return(
    <div>
        <Gamelist games={games}/>
    </div>)
};

export default Home;
