import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const GameReview = () => {
  const [gameInfo, setGameInfo] = useState(null);
  const {id} = useParams()
  useEffect(() => {
    fetch(`http://localhost:9292/games/${id}`)
      .then((res) => res.json())
      .then((game) => {
        setGameInfo(game);
      });
  }, []);

  if (gameInfo == null) {
    return <div></div>;
  }

  return (
    <div>
        <h1>{gameInfo.title}</h1>
        <img src={gameInfo.image_url} alt="img"/>
        <h3>${gameInfo.price}</h3>
        <h4>--3 out of 5 stars--</h4>
    </div>
  )
};

export default GameReview;
