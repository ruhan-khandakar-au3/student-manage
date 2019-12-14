import React from "react";

import UserCard from "../components/user-card/UserCard";

const Home = () => {
  return (
    <div className="row">
      <div className="col s6">
        <UserCard />
      </div>
      <div className="col s6">
        <UserCard />
      </div>
      <div className="col s6">
        <UserCard />
      </div>
    </div>
  );
};

export default Home;
