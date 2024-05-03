import React from "react";
import FindReplaceIcon from "@mui/icons-material/FindReplace";

function NoJobsFound() {
  return (
    <div className="custom-icon">
      <FindReplaceIcon style={{ fontSize: 300, color: "black" }} />
      <h3 className="no-job-found">
        No Jobs available for this category at the moment
      </h3>
    </div>
  );
}

export default NoJobsFound;
