import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameForm from "./GameForm"
import Card from "react-bootstrap/Card";


const GameReview = () => {
  const [gameInfo, setGameInfo] = useState(null);
  const { id } = useParams();
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
      <Card className="card" style={{ width: "50%" }}>
        <Card.Img
          variant="top"
          src={gameInfo.image_url}
          alt={gameInfo.title}
          style={{ width: "100%" }}
        />
        <Card.Body style={{ textAlign: "left" }}>
          <Card.Title>
            <strong>{gameInfo.title}</strong>
            <br />
          </Card.Title>
          <Card.Text>
            <p>
              <strong>Genre:</strong> {gameInfo.genre}
            </p>
            <p>
              <strong>Price:</strong> ${gameInfo.price}
            </p>
            <p>
              <strong>Rating:</strong>
            </p>
            <h4>--3 out of 5 stars--</h4>
            <p>
              <strong>Reviews:</strong>
            </p>
            <p>{gameInfo.reviews.all}</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <GameForm/>
    </div>
  );
};

export default GameReview;
