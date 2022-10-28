import GameCard from "./GameCard";
import Container from "react-bootstrap/Container";

const Gamelist = ({ games }) => {
  const gameCards = games.map((game) => {
    return (
      <GameCard
        key={game.id}
        id={game.id}
        title={game.title}
        genre={game.genre}
        price={game.price}
        platform={game.platform}
        image={game.image_url}
      />
    );
  });

  return (
    <Container className="bg-light text-center" style={{ marginTop: "100px" }}>
      <h1 style={{ padding: "1rem" }}>Games and Reviews</h1>
      <div
        style={{
          margin: "1rem",
          justifyContent: "center",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        {gameCards}
      </div>
    </Container>
  );
};
export default Gamelist;
