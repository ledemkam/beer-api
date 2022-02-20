import React from "react";
import { Link } from "react-router-dom";

const card2 = ({ bier }) => {
  return (
    <div className="card">
      <div className="img">
        <img src={bier.image_url} alt={bier.name} />
      </div>
      <div className="descript">
        <h2>{bier.name}</h2>
        <h3>{bier.tagline}</h3>
        <div>
          <div className="brewed">
            <p>first_brewed:</p>
            <p>{bier.first_brewed}</p>
          </div>
          <div className="brewed">
            <p>attenuation_level:</p>
            <p>{bier.attenuation_level}</p>
          </div>
        </div>
        <p>{bier.description}</p>
        <p>{bier.contributed_by}</p>
        <button>
          <Link to="/allbeer">
            <img src="../../public/img/Back.svg" alt="back" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default card2;
