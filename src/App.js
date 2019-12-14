import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

import Home from "./pages/Home";
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import Footer from "./components/footer/Footer";

const App = () => {
  useEffect(() => {
    // Init materialize JS
    M.AutoInit();
  }, []);

  return (
    <div className="main">
      <div className="container-fluid">
        <Header />
        <div className="container-fluid mt-1 px-1">
          <div className="row">
            <div className="col s3">
              <SideBar />
            </div>
            <div className="col s9">
              <div className="right-content ">
                <Home />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
