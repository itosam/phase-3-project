import { Button, Form, Row, Col } from "react-bootstrap";
import { useState } from "react";
function GameForm({ gameId, onAddReview, currentUserId, changeReview }) {
  const initialState = {
    score: parseInt(0),
    comment: "",
    game_id: parseInt(gameId),
    user_id: parseInt(currentUserId),
  };
  const [formData, setFormData] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    fetch("http://localhost:9292/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newReview) => {
        onAddReview(newReview);
        changeReview();
      });
  };
  function handleChange(e) {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  return (
    <Form
      onSubmit={handleSubmit}
      className="form border rounded  "
      style={{
        width: "80%",
        marginLeft: "10%",
      }}
    >
      <Form.Group className="my-3 mx-3">
        <h3>Add A New Review</h3>
        <Row>
          <Col>
            <Form.Label htmlFor="score">Score</Form.Label>
            <Form.Control
              type="number"
              id="score"
              name="score"
              step="0.1"
              placeholder="Score"
              min="1"
              max="5"
              onChange={handleChange}
              value={parseInt(formData.score)}
              required
            />
          </Col>
        </Row>
        <br />
        <Form.Label htmlFor="comments">Review Comments</Form.Label>
        <Form.Control
          className="my-3"
          as="textarea"
          rows={3}
          id="review"
          name="comment"
          placeholder="Tell us what you think of the game!"
          onChange={handleChange}
          value={formData.comment}
          required
        />
        <Button variant="outline-secondary" type="submit">
          Submit Review
        </Button>
      </Form.Group>
    </Form>
  );
}
export default GameForm;
