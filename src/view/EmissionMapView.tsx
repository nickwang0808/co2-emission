import React, { FC, useMemo, useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "../component/MapChart";
import Title from "../component/Title";
import TooltipContent from "../component/TooltipContent";
import YearSlider from "../component/YearSlider";
import dataSource from "../owid-co2-data.json";

const EmissionMapView: FC = () => {
  const [year, setYear] = useState<number>(1950);

  const [country, setCountry] = useState("");

  const countryData = useMemo(() => {
    const foundCountry = (dataSource as any)[country]?.data?.find(
      (yearGroup: any) => yearGroup.year === year
    );

    if (!foundCountry && country) {
      return <span>No data available</span>;
    }

    let formattedData: [string, string][] = [];
    for (const key in foundCountry) {
      if (Object.prototype.hasOwnProperty.call(foundCountry, key)) {
        const element = foundCountry[key];
        formattedData.push([key, element]);
      }
    }

    return formattedData.map((data) => (
      <TooltipContent
        dataKey={data[0]}
        dataValue={data[1]}
        key={JSON.stringify(data)}
      />
    ));
  }, [country, year]);

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
      {country && <ReactTooltip place="left">{countryData}</ReactTooltip>}
    </div>
  );
};

export default EmissionMapView;
