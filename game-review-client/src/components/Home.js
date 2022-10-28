import Gamelist from "./Gamelist";

const Home = ({ games }) => {
  return (
    <div>
      <Gamelist games={games} />
    </div>
  );
};

export default Home;
