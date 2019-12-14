import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../buttons/Button";

import {
  createNewLead,
  changeFilterType
} from "../../redux/actions/userAction";
import {
  userTotalItems,
  userApprovedItemsCount,
  selectFilterType
} from "../../utils/userSelector";

const SideBar = ({
  createNewLead,
  totalLength,
  approvedCount,
  filterType,
  changeFilterType
}) => {
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
                <span
                  className="new badge"
                  data-badge-caption={approvedCount}
                />
              </td>
              <td>
                <span className="new badge" data-badge-caption={totalLength} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="filter card p-1">
        <Button
          btnText="Show All"
          clsNames={`blue-grey darken-1 m-1 ${
            filterType === "All" ? "active" : ""
          }`}
          iconTxt="ac_unit"
          onClick={() => changeFilterType("All")}
        />
        <Button
          btnText="Show Males"
          clsNames={`blue-grey darken-1 m-1 ${
            filterType === "males" ? "active" : ""
          }`}
          iconTxt="person"
          onClick={() => changeFilterType("males")}
        />
        <Button
          btnText="Show Females"
          clsNames={`blue-grey darken-1 m-1 ${
            filterType === "females" ? "active" : ""
          }`}
          iconTxt="face"
          onClick={() => changeFilterType("females")}
        />
      </div>
      <div className="card p-1">
        <Button
          btnText="Get New Lead"
          clsNames="green darken-4"
          iconTxt="person_add"
          onClick={createNewLead}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  totalLength: userTotalItems,
  approvedCount: userApprovedItemsCount,
  filterType: selectFilterType
});

export default connect(mapStateToProps, { createNewLead, changeFilterType })(
  SideBar
);
