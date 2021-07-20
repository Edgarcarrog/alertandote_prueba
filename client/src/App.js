import Nav from "./components/Nav";
import MainState from "./context/state";

function App() {
  return (
    <MainState>
      <div className="container-fluid">
        <Nav />
      </div>
    </MainState>
  );
}

export default App;
