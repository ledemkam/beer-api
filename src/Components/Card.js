import React from "react";
import { Link } from "react-router-dom";
import "../style/Card.css";

const Card = ({ bierdata }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={bierdata.image_url} alt={bierdata.name} />
      </div>
      <div className="descript">
        <h2>{bierdata.name}</h2>
        <h3>{bierdata.tagline}</h3>
        <br />
        <p>Created by: {bierdata.name}</p>
        <button>
          <Link to="/bierdetail">Details</Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
