import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <div className="home-container">
          <h1>Play Quizz</h1>
        </div>
      </Link>
    </div>
  );
};

export default Home;
