import GameCard from "./GameCard";

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
    <div>
      <h1>Games and Reviews</h1>
      <>{gameCards}</>
    </div>
  );
};
export default Gamelist;
