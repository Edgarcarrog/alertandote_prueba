import Main from "./Main";
import { useState, useEffect, useContext, Fragment } from "react";
import clienteAxios from "../config/axios";
import MainContext from "../context/context";

const Nav = () => {
  const [data, setData] = useState(null);
  const { mainTitle } = useContext(MainContext);
  //setMainTitle

  //Función para obtener la data de la base de datos
  const getData = async () => {
    try {
      const result = await clienteAxios.get("/api");
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  //Establece el state con la información de la base de datos
  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <div className="row nav-red">
        <div className="col-3 p-0">
          <nav className="navbar navbar-expand-">
            <div className="container-md m-0">
              <a
                className="navbar-brand"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-list"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </nav>
        </div>
        <div className="col-9 p-0 d-flex justify-content-center align-items-center">
          <div className="collapse p-0" id="collapseExample">
            <p className="light-text secondary-text m-0 pl-3">{mainTitle}</p>
          </div>
        </div>
      </div>
      {data && <Main movies={data.movies} />}
    </Fragment>
  );
};

export default Nav;
