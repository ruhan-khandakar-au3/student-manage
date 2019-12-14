import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  usersTotalItemsCount,
  usersApprovedCount
} from "../../utils/userSelector";

const LeadStatus = ({ approvedCount, totalLength }) => {
  return (
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
              <span className="new badge" data-badge-caption={approvedCount} />
            </td>
            <td>
              <span className="new badge" data-badge-caption={totalLength} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  totalLength: usersTotalItemsCount,
  approvedCount: usersApprovedCount
});

export default connect(mapStateToProps)(LeadStatus);
