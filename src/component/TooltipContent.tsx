import React, { FC } from "react";

interface TooltipContentProps {
  key: string;
  value: string;
}

const TooltipContent: FC<TooltipContentProps> = ({ key, value }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{key}</span>
      <span> : </span>
      <span>{value}</span>
    </div>
  );
};

export default TooltipContent;
