import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";

const App = () => {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  }, []);

  return (
    <div className="main">
      <div className="container-fluid">
        <Header />
        <div className="container mt-1">
          <div className="row">
            <div className="col s4">
              <SideBar />
            </div>
            <div className="col s8">
              <div className="right-content">
                <Home />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
