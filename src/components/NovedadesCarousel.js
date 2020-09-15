import React from "react";
import CarouselIndicators from "./CarouselIndicators";
import CarouselControls from "./CarouselControls";
import CarouselInner from "./CarouselInner";
import axios from "axios";

export default class NovedadesCarousel extends React.Component {
  state = {
    novedades: [],
    isLoading: false,
  };

  componentDidMount() {
    const apiUrl = "http://localhost:1337/novedades";
    this.setState({
      isLoading: true,
    });
    axios
      .get(apiUrl, {
        params: {
          _limit: 3,
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          novedades: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const items = this.state.novedades;
    const count = items.length;
    return (
      <>
        <div
          id="carouselSlides"
          className="carousel slide"
          data-ride="carousel"
        >
          {count > 1 && <CarouselIndicators items={items} count={count} />}
          <CarouselInner items={items} />
          {count > 1 && <CarouselControls count={count} />}
        </div>
      </>
    );
  }
}
