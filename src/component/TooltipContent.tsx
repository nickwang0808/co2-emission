import React, { FC } from "react";

interface TooltipContentProps {
  dataKey: string;
  dataValue: string;
}

const TooltipContent: FC<TooltipContentProps> = ({ dataKey, dataValue }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{dataKey}</span>
      <span>{dataValue}</span>
    </div>
  );
};

export default TooltipContent;
