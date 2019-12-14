import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Button from "../buttons/Button";
import LeadStatus from "../lead-status/LeadStatus";

import {
  createNewLead,
  changeFilterType
} from "../../redux/actions/userAction";
import { selectFilterType, selectLoading } from "../../utils/userSelector";

const SideBar = ({ createNewLead, filterType, changeFilterType, loading }) => {
  return (
    <div>
      <LeadStatus />
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
          btnText={`${loading ? "Loading..." : "Get New Lead"}`}
          clsNames="green darken-4"
          iconTxt="person_add"
          onClick={createNewLead}
          disabled={loading}
        />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  filterType: selectFilterType,
  loading: selectLoading
});

export default connect(mapStateToProps, { createNewLead, changeFilterType })(
  SideBar
);
