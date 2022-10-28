import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameForm from "./GameForm";
import Card from "react-bootstrap/Card";
import uuid from "react-uuid";

const GameReview = ({ currentUserId }) => {
  const [gameInfo, setGameInfo] = useState(null);
  const [gameReviews, setGameReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/games/${id}`)
      .then((res) => res.json())
      .then((game) => {
        setGameInfo(game);
        setGameReviews(game.reviews);
      });
  }, []);

  // onAddReview passed down to Reviewform
  const onAddReview = (newReview) => {
    setGameReviews([...gameReviews, newReview]);
  };

  function handleDelete(e) {
    const filtered = gameReviews.filter(
      (review) => review.id !== parseInt(e.target.id)
    );
    fetch(`http://localhost:9292/reviews/${e.target.id}`, {
      method: "DELETE",
    }).then(setGameReviews(filtered));
  }

  const displayReviews = gameReviews.map((review) => {
    return (
      <div key={uuid()}>
        <label style={{ fontWeight: "bold" }}>{review.user.name}</label>
        <p style={{ fontWeight: "normal" }}>
          <strong>Score:</strong> {review.score}<br />
          {review.comment}
          <label
            id={review.id}
            style={{ marginLeft: "10px" }}
            onClick={handleDelete}
          >
            {" "}
            ❌
          </label>
        </p>
      </div>
    );
  });

  if (gameInfo == null) {
    return <div></div>;
  }

  return (
    <div>
      <Card className="card" style={{ width: "60%" }}>
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

      <GameForm
        gameId={id}
        onAddReview={onAddReview}
        currentUserId={currentUserId}
      />
    </div>
  );
};

export default GameReview;
