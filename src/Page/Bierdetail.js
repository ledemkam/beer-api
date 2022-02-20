import React, { Component } from "react";
import Navigation from "../Components/Navigation";
import { Link } from "react-router-dom";
import "../style/Bierdetail.css";

class Bierdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bierdetail: [],
    };
  }

  componentDidMount() {
    fetch("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => response.json())
      .then((data) => this.setState({ bierdetail: data }));
  }
  render() {
    return (
      <main className="randombeer">
        <section>
          <article className="arts">
            <img src={this.state.bierdetail.image_url} alt="" />
          </article>

          <article>
            <div>
              <h1>{this.state.bierdetail.name}</h1>
              <h2>{this.state.bierdetail.tagline}</h2>
            </div>
            <div>
              <p>First brewed:</p>
              <p>{this.state.bierdetail.first_brewed}</p>
            </div>
            <div>
              <p>Attenuation Level:</p>
              <p>{this.state.bierdetail.attenuation_level}</p>
            </div>
            <p>{this.state.bierdetail.description}</p>
          </article>
        </section>
        <Link to="/allbeers">Back</Link>
        <Navigation />
      </main>
    );
  }
}

export default Bierdetail;
