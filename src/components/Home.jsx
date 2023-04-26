import React from "react";
import "./Home.css";

const Home = ({ cars }) => {
  return (
    <div className="div1">
      {cars.map((elem) => (
        <div className="div2" key={elem.id}>
          <h2>{elem.title}</h2>
          <h3>{elem.category}</h3>
          <h4>{elem.content}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
