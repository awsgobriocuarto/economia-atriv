import React, { Component } from "react";
import PlanDePago from "../components/banners/PlanDePago";
import Hero from "../components/Hero";
import Categories from "../components/home/Categories";
import Buttons from "../components/home/Buttons";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <section className="home">
          <Categories />
          <Buttons />
        </section>
        <section className="banners">
          <PlanDePago />
        </section>
      </>
    );
  }
}

export default Home;
