import React, { Component } from "react";
import Headline from "../components/Headline";
import LegislacionNav from "../components/legislations/LegislacionNav";
import LegislacionFileList from "../components/legislations/LegislacionFileList";
import Loading from "../components/Loading";

// import legislations from "../data/legilations.json";
import axios from "axios";

class Legislacion extends Component {
  state = {
    legislations: [],
    isLoading: false,
  };

  componentDidMount() {
    const apiUrl = "http://localhost:1337/legislaciones";
    this.setState({ isLoading: true });
    axios.get(apiUrl).then((res) => {
      this.setState({ isLoading: false, legislations: res.data });
      //console.log(res.data);
    });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }

    return (
      <>
        <Headline title="Servicios" pathGoBack="/consultas" />
        <section className="legislacion">
          <div className="container">
            <h4>Legislacion</h4>
            <div className="row">
              <div className="col-sm-5">
                <LegislacionNav legislations={this.state.legislations} />
              </div>
              <div className="col-sm-7">
                <LegislacionFileList legislations={this.state.legislations} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Legislacion;
