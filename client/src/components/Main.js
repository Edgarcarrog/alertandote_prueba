
const Main = () => {
  return (
    <div
      className="collapse container-fluid container-sm p-0"
      id="collapseExample"
    >
      <div className="row">
        <div className="col-12 p-0 card-style">
          <img src="..." class="card-img-top" alt="..."></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              className="navbar-brand"
              data-bs-toggle="collapse"
              href="#collapseExample2"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample2"
            >
              Info
            </a>
          </div>
        </div>
        <div class="collapse col-12 p-0" id="collapseExample2">
          <div class="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
