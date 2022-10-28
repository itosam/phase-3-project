import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import GameReview from "./GameReview";

const GameCards = ({ id, title, price, image, genre }) => {


  return (
    <Card className="card" style={{ width: "20rem" }}>
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ width: "100%" }}
      />
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title>
          <strong>{title}</strong>
          <br />
        </Card.Title>
        <Card.Text>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
        </Card.Text>
        <NavLink to={`/GameReview/${id}`}>
          <Button
            variant="outline-secondary"
            size="sm"
            style={{ border: "solid 2px" }}
          >
            View Game Review
          </Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default GameCards;
