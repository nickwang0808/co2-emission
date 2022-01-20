import { Slider, Stack } from "@mui/material";
import React, { FC } from "react";

interface YearSliderProps {
  year: number;
  setYear: (year: number) => void;
}

const YearSlider: FC<YearSliderProps> = ({ year, setYear }) => {
  return (
    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
      <div>1990</div>
      <Slider
        aria-label="year range"
        value={year}
        onChange={(_, value) => {
          typeof value === "number" && setYear(value);
        }}
        min={1990}
        max={2018}
      />
      <div>2019</div>
    </Stack>
  );
};

export default YearSlider;
