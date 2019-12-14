import React from "react";

import Button from "../buttons/Button";

const SideBar = () => {
  return (
    <div>
      <div className="filter card p-1">
        <Button
          btnText="Show All"
          clsNames="blue-grey darken-1 active m-1"
          iconTxt="ac_unit"
        />
        <Button
          btnText="Show Males"
          clsNames="blue-grey darken-1 m-1"
          iconTxt="person"
        />
        <Button
          btnText="Show Females"
          clsNames="blue-grey darken-1 m-1"
          iconTxt="face"
        />
      </div>
      <div className="card p-1">
        <Button
          btnText="Get New Lead"
          clsNames="green darken-4"
          iconTxt="person_add"
        />
      </div>
    </div>
  );
};

export default SideBar;
