import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";

const apiURL =
  "https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=12cokqEPO0B7WZCds_4dV0Uigoe4r-SM7iCIxJuMgeAI&sheet=buttons";

export default function Buttons() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(apiURL)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (data.length === 0) {
    return "";
  }

  return (
    <div className="container">
      <h3 className="mb-4">Novedades</h3>
      <div className="row justify-content-center">
        {data.map((item) => (
          <div key={item.id} className="col-md-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={item.url}
              className=""
              title={item.title}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="img-fluid img-thumbnail mb-3"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
