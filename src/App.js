import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  }, []);

  return (
    <div className="main">
      <div className="container">Hello World</div>
    </div>
  );
};

export default App;
