import React, { Component } from "react";
import Headline from "../components/Headline";
import axios from "axios";
import Loading from "../components/Loading";
import Novedad from "../components/Novedad";
import { Redirect } from "react-router-dom";
export default class Novedades extends Component {
  state = {
    novedad: [],
    isLoading: false,
    error: false,
  };

  componentDidMount() {
    const item = this.props.match.params.slug;
    const apiUrl = `https://atriv.herokuapp.com/novedades/${item}`;
    this.setState({ isLoading: true });
    axios
      .get(apiUrl)
      .then((res) => {
        console.log(res.data);
        this.setState({ isLoading: false, novedad: res.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false, error: true });
      });
  }
  render() {
    if (this.state.error) {
      return <Redirect to="/404" />;
    }

    return (
      <>
        <Headline title="Novedades" />
        <div className="container">
          {this.state.isLoading ? (
            <Loading />
          ) : (
            <Novedad novedad={this.state.novedad} />
          )}
        </div>
      </>
    );
  }
}
