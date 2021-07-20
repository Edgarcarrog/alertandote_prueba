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
                Navbar
              </a>
            </div>
          </nav>
        </div>
        <div className="col-9 p-0 d-flex justify-content-center align-items-center">
          <div
            className="collapse p-0"
            id="collapseExample"
          >
            <p className="light-text secondary-text m-0 pl-3">{mainTitle}</p>
          </div>
        </div>
      </div>
      {data && <Main movies={data.movies} />}
    </Fragment>
  );
};

export default Nav;
