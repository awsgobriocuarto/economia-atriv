import React, { useState, useEffect } from "react";
import axios from "axios";

const apiURL =
  "https://script.google.com/macros/s/AKfycbwI68_FYAYzOLKHwbxIJSX1RH_21MBF1nrxXOpHZlNsKkqvPRHh/exec?spreadsheetId=12cokqEPO0B7WZCds_4dV0Uigoe4r-SM7iCIxJuMgeAI&sheet=datos";

function DataFetching() {
  const [texts, setTexts] = useState([]);

  useEffect(() => [
    axios
      .get(apiURL)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      }),
  ]);
  return <div>{texts}</div>;
}

export default DataFetching;
