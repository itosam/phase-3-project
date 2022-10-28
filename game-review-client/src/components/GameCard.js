import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const GameCards = ({ id, title, price, image, genre }) => {
  

  return (
    <Card
      className="card"
      bg="info"
      variant="light"
      style={{ width: "20rem", padding: "1rem", margin: "1rem", border: "2px" }}
    >
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ width: "18rem" }}
      />
      <Card.Body style={{ textAlign: "left" }}>
        <Card.Title>
          <strong>{title}</strong>
          <br />
        </Card.Title>
        <div>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
        </div>
        <NavLink to={`/GameReview/${id}`}>
          <Button
            variant="outline-dark"
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
