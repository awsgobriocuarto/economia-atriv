import React, { Component } from "react";
import Hero from "../components/Hero";
import Categories from "../components/home/Categories";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <section className="home">
          <Categories />
        </section>
      </>
    );
  }
}

export default Home;
