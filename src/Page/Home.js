import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";

const Home = () => {
  return (
    <main className="Home">
      <article>
        <section>
          <figure>
            <img src="./img/christin.png" alt="logo1" />
            <figcaption>
              <Link to="/allbeers">Allbeers</Link>
            </figcaption>
          </figure>
          <div className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            error officia aspernatur. Voluptas necessitatibus voluptatum quod r
          </div>
        </section>
        <section>
          <figure>
            <img src="./img/proriat.png" alt="logo2" />
            <figcaption>
              <Link to="/bierdetail">Bierdetail</Link>
            </figcaption>
          </figure>
          <div className="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            error officia aspernatur. Voluptas necessitatibus voluptatum quod r
          </div>
        </section>
      </article>
    </main>
  );
};

export default Home;
