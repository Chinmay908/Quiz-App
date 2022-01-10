import React from "react";
import { Link } from "react-router-dom";

/* Error Component */
const Error = () => {
  return (
    <div>
      <h1>Error 404 Page Not Found</h1>
      <Link to="/" style={{ color: "red" }}>
        Go back to home page
      </Link>
    </div>
  );
};

export default Error;
