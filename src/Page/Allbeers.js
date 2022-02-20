import axios from "axios";
import React, { useEffect, useState } from "react";
import Navigation from "../Components/Navigation";
import Card from "../Components/Card";

const Allbeers = () => {
  const [bierdata, setBierdata] = useState([]);
  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers")
      .then((response) => setBierdata(response.data));
  });
  return (
    <div className="allbeers">
      <div className="results">
        {bierdata.map((bierdata) => (
          <Card key={bierdata._id} bierdata={bierdata} />
        ))}
      </div>
      <Navigation />
    </div>
  );
};

export default Allbeers;
