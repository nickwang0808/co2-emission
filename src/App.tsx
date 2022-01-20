import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import "./App.css";
import MapChart from "./component/MapChart";
import Title from "./component/Title";
import YearSlider from "./component/YearSlider";

function App() {
  const [year, setYear] = useState<number>(1990);

  const [country, setCountry] = useState("");

  return (
    <div
      style={{
        width: "1000px",
        margin: "auto",
      }}
    >
      <Title year={year} />
      <YearSlider {...{ year, setYear }} />
      <MapChart setCountry={setCountry} />
      <ReactTooltip>{country}</ReactTooltip>
    </div>
  );
}

export default App;
