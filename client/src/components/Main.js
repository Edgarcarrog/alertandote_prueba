import Card from "./Card";

const Main = ({ movies }) => {
  return (
    <div
      className="collapse container-fluid container-sm p-0"
      id="collapseExample"
    >
      {movies.map((movie) => (
        <Card key={movie._id} movie={movie} />
      ))}
    </div>
  );
};

export default Main;
