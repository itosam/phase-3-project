import { Button, Form, Row, Col } from "react-bootstrap";

function GameForm() {
  const [formData, setFormData] = useState(initialState);
  
  return (
    <Form
      className="form border rounded  "
      style={{
        padding: "20%, 20%",
        marginBottom: "2rem",
        marginTop: "10%",
      }}
    >
      <Form.Group className="my-3 mx-3">
        <h3>Add A New Review</h3>
        <Row>
          <Col>
            <Form.Label htmlFor="Username">Name/Username</Form.Label>
            <Form.Control
              type="text"
              id="title"
              name="title"
              placeholder="Enter name of username here"
              // onChange={handleChange}
              // value={formData.user}
            />
          </Col>
          <Col>
            <Form.Label htmlFor="rating">Rating</Form.Label>
            <Form.Control
              type="number"
              id="rating"
              name="rating"
              step="0.1"
              placeholder="Rating"
              // onChange={handleChange}
              // value={formData.rating}
            />
          </Col>
        </Row>
        <br/>
        ​<Form.Label htmlFor="comments">Review Comments</Form.Label>
        <Form.Control
          className="my-3"
          as="textarea"
          rows={3}
          id="review"
          name="review"
          placeholder="Tell us what you think of the game!"
          //   onChange={handleChange}
          //   value={formData.comment}
        />
        <Button variant="outline-secondary" type="submit">
          Submit Review
        </Button>
      </Form.Group>
    </Form>
  );
}

export default GameForm;
