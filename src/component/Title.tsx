import React, { FC } from "react";

interface TitleProps {
  year: number;
}

const Title: FC<TitleProps> = ({ year }) => {
  return <h1 style={{ textAlign: "center" }}>CO2 Emission By Year {year}</h1>;
};

export default Title;
