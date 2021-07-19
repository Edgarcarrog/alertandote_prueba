import Main from "./Main";

const MainPage = () => {
  return (
    <div className="row">
      <div className="col p-0">
        <nav className="navbar navbar-expand-lg bg-danger">
          <div className="container-md m-0">
            <a
              className="navbar-brand"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Navbar
            </a>
          </div>
        </nav>
        <Main />
      </div>
    </div>
  );
};

export default MainPage;
