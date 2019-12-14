import React from "react";

const UserCard = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1dympNLayw6S5rlcpFbJHZnh6k4Y_mxuzqVrj4jBiRWx922r2A&s"
          alt="user card"
        />

        <span
          className="btn-floating halfway-fab waves-effect waves-light teal darken-2 tooltipped"
          data-position="top"
          data-tooltip="Click Here to Approve"
        >
          <i className="material-icons">check</i>
        </span>
      </div>
      <div className="card-content">
        <div className="card-title d-flex-between" style={{ display: "flex" }}>
          <span>Card Title </span>
          <span
            className="new badge  red lighten-1"
            data-badge-caption="Not Approved"
          ></span>
        </div>

        <ul className="collection">
          <li className="collection-item">Email &#8658; </li>
          <li className="collection-item">Gender &#8658; </li>
          <li className="collection-item">Phone &#8658; </li>
          <li className="collection-item">Age &#8658; </li>
        </ul>
      </div>
    </div>
  );
};

export default UserCard;
