
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const GameCards = ({id, title, price, image, genre}) => {
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
            </Card.Title>
            <Card.Text>
                <p>
                <strong>Genre:</strong> {genre}
                </p>
                <p>
                <strong>Price:</strong> ${price}
                </p>
            </Card.Text>
            <Button
                variant="outline-secondary"
                size="md"
                style={{ border: "solid 2px", margin: "1rem" }}
            >
            View Game Review
            </Button>
        </Card.Body>
        </Card>
    );
}

export default GameCards