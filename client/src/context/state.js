import React, { useState } from "react";

import MainContext from "./context";

//import clienteAxios from "../../config/axios";

const MainState = (props) => {

  //Título del header dependiendo la película seleccionada
  const [mainTitle, setMainTitle] = useState(null);

  return (
    <MainContext.Provider
      value={{
        mainTitle,
        setMainTitle,
      }}
    >
      {props.children}
    </MainContext.Provider>
  );
};

export default MainState;
