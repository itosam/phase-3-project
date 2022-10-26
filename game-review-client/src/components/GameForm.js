import { Button, Form, Row, Col } from "react-bootstrap";
import { useState, initialState } from 'react'

function GameForm({ onAddReview }) {
//   const [formData, setFormData] = useState(initialState);
//   const initialState = {
//   user: "",
//   comment: "",
//   score: "",
//   };
  
//   const handleSubmit = (e) => {
//   e.preventDefault();
  
//   let newReview = {
//     user: formData.user,
//     comment: formData.comment,
//     score: formData.score,
//   };

//   fetch("http://localhost:9292/reviews", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(newReview),
//   })
//     .then((res) => res.json())
//     .then((newReview) => {
//       onAddReview(newReview);
//     });
// };
  return (
    <Form
      //onSubmit={handleSubmit}
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
        <br />
        <Form.Label htmlFor="comments">Review Comments</Form.Label>
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
