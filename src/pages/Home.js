import React, { Component } from 'react';
import PlanDePago from '../components/banners/PlanDePago';
import Hero from '../components/Hero';
import Categories from '../components/home/Categories';

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <section className='home'>
          <Categories />
        </section>
        <section className='banners'>
          <PlanDePago />
        </section>
      </>
    );
  }
}

export default Home;
