import React from "react";

import Button from "../buttons/Button";

const SideBar = () => {
  return (
    <div>
      <div className="card p-1">
        <table>
          <thead>
            <tr>
              <th>Converted Leads</th>
              <th>Total Leads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="new badge" data-badge-caption="5" />
              </td>
              <td>
                <span className="new badge" data-badge-caption="54" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
