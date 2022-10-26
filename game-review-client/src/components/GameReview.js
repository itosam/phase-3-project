import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameForm from "./GameForm"
import Card from "react-bootstrap/Card";


const GameReview = () => {
  const [gameInfo, setGameInfo] = useState(null);
  const [gameReviews, setGameReviews] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9292/games/${id}`)
      .then((res) => res.json())
      .then((game) => {
        setGameInfo(game);
        console.log(game)
      });

    fetch("http://localhost:9292/reviews")
      .then((res) => res.json())
      .then((reviews) => {
        setGameReviews(reviews)
        console.log(reviews)
      })
  }, []);

  const displayReviews = gameReviews.map(review => {
    return (
      <label style={{ fontWeight: "bold" }}>{review.user.name} <p style={{ fontWeight: "normal" }}>{review.comment}</p></label>
    )
  })

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
            {displayReviews}
          </Card.Text>
        </Card.Body>
      </Card>

      <GameForm />
    </div>
  );
};

export default GameReview;
