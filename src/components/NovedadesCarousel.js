import React from "react";
import CarouselIndicators from "./CarouselIndicators";
import CarouselControls from "./CarouselControls";
import CarouselInner from "./CarouselInner";
import Loading from "../components/Loading";
import Error from "../components/Error";
import axios from "axios";

export default class NovedadesCarousel extends React.Component {
  state = {
    novedades: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    const apiUrl = "https://atriv.herokuapp.com/novedades";
    // const apiUrl = "http://localhost:1337/novedades/";
    this.setState({
      isLoading: true,
    });
    axios
      .get(apiUrl, {
        params: {
          _limit: 5,
        },
      })
      .then((res) => {
        //console.log(res.data);
        this.setState({
          novedades: res.data,
          isLoading: false,
        });
      })
      .catch((err) => {
        //console.log(err);
        this.setState({
          isLoading: false,
          error: err.message,
        });
      });
  }
  render() {
    const items = this.state.novedades;
    const count = items.length;

    if (this.state.isLoading) {
      return <Loading />;
    }

    if (this.state.error) {
      return <Error error={this.state.error} />;
    }

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
