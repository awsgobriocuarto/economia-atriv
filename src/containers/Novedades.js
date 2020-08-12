import React, { Component } from 'react';
import Headline from '../components/Headline';

class Novedades extends Component {
  render () {
    const item = this.props.match.params.slug;
    return (
      <>
        <Headline title="Novedades" icon="" />
        <div className="container">
          {item}
        </div>
      </>
    )
  }
}

export default Novedades;