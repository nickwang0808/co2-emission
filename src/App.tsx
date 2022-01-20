import { Slider, Stack } from "@mui/material";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [year, setYear] = useState<number>(1990);
  return (
    <>
      <h1>CO2 Emission By Year {year}</h1>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <div>1990</div>
        <Slider
          aria-label="Volume"
          value={year}
          onChange={(_, value) => {
            typeof value === "number" && setYear(value);
          }}
          min={1990}
          max={2018}
        />
        <div>2019</div>
      </Stack>
    </>
  );
}

export default App;
