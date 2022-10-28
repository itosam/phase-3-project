import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameForm from "./GameForm";
import Card from "react-bootstrap/Card";
import uuid from "react-uuid";
const GameReview = ({ currentUserId }) => {
  const [gameInfo, setGameInfo] = useState(null);
  const [gameReviews, setGameReviews] = useState([]);
  const [reviewScore, setReviewScore] = useState(0.0);
  const [reviewUpdate, setReviewUpdate] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:9292/games/${id}`)
      .then((res) => res.json())
      .then((game) => {
        setGameInfo(game);
        setGameReviews(game.reviews);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:9292//gamesReview/${id}`)
      .then((r) => r.json())
      .then((score) => setReviewScore(score));
  }, [reviewUpdate]);
  function changeReview() {
    setReviewUpdate(() => !reviewUpdate);
  }
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
    })
      .then(setGameReviews(filtered))
      .then(changeReview());
  }
  const displayReviews = gameReviews.map((review) => {
    return (
      <div key={uuid()}>
        <label style={{ fontWeight: "bold" }}>{review.user.name}</label>
        <p style={{ fontWeight: "normal" }}>
          <strong>Score:</strong> {review.score}
          <br />
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
  document.addEventListener("DOMContentLoaded", function () {
    (function () {
      let sr = document.querySelectorAll(".my-star");
      let i = 0;
      //loop through stars
      while (i < sr.length) {
        //attach click event
        sr[i].addEventListener("click", function () {
          //current star
          let cs = parseInt(this.getAttribute("data-star"));
          //output current clicked star value
          document.querySelector("#output").value = cs;
          /*our first loop to set the class on preceding star elements*/
          let pre = cs; //set the current star value
          //loop through and set the active class on preceding stars
          while (1 <= pre) {
            //check if the classlist contains the active class, if not, add the class
            if (
              !document
                .querySelector(".star-" + pre)
                .classList.contains("is-active")
            ) {
              document.querySelector(".star-" + pre).classList.add("is-active");
            }
            //decrement our current index
            --pre;
          } //end of first loop
          /*our second loop to unset the class on succeeding star elements*/
          //loop through and unset the active class, skipping the current star
          let succ = cs + 1;
          while (5 >= succ) {
            //check if the classlist contains the active class, if yes, remove the class
            if (
              document
                .querySelector(".star-" + succ)
                .classList.contains("is-active")
            ) {
              document
                .querySelector(".star-" + succ)
                .classList.remove("is-active");
            }
            //increment current index
            ++succ;
          }
        }); //end of click event
        i++;
      } //end of while loop
    })(); //end of function
  });
  if (gameInfo == null) {
    return <div></div>;
  }
  return (
    <div>
      <Card
        className="mx-aut"
        style={{
          width: "80%",
          padding: "1rem",
          marginLeft: "10%",
          marginTop: "2%",
          marginBottom: "2%",
        }}
      >
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
          <div>
            <p>
              <strong>Description</strong>
              <br />
              {gameInfo.description}
            </p>
            <p>
              <strong>Genre:</strong> {gameInfo.genre}
            </p>
            <p>
              <strong>Price:</strong> ${gameInfo.price}
            </p>
            <p>
              <strong>Rating:</strong>
            </p>
            <h4>--{reviewScore} out of 5 stars--</h4>
            <p>
              <strong>Reviews:</strong>
            </p>
            {displayReviews}
          </div>
        </Card.Body>
      </Card>
      <GameForm
        gameId={id}
        onAddReview={onAddReview}
        currentUserId={currentUserId}
        changeReview={changeReview}
      />
    </div>
  );
};
export default GameReview;
