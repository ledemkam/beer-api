import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "../Components/Navigation";
import Card2 from "../Components/Card2";

export const Bierdetail = () => {
  const [bierrandom, setBierrandom] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => console.log(response.data));
  });

  return (
    <div className="allbeers">
      <div className="results">
        {bierrandom.map((bier) => (
          <Card2 key={bier._id} bier={bier} />
        ))}
      </div>
      <Navigation />
    </div>
  );
};
