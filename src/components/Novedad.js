import React from "react";
import Moment from "react-moment";
import ReactMarkdown from "react-markdown";

export default function Novedad(props) {
  const novedad = props.novedad;
  return (
    <section className="novedad">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="date">
            <Moment format="DD/MM/YYYY">{novedad.createdAt}</Moment>
          </div>
          <h1>{novedad.title}</h1>
          <div className="description">
            <ReactMarkdown source={novedad.description} />
          </div>
        </div>
      </div>
    </section>
  );
}
