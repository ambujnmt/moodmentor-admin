import React from "react";
import classNames from "classnames";


const ChartStatistics = ({ title, Icon, stats, variant }) => {
  return (
    <>
      <p className="text-muted font-15 mb-1 text-[14px]">{title}</p>
      <h4 className="text-[15px] flex">
        {Icon && <Icon className={`text-${variant} me-1`} />}
        {stats}
      </h4>
    </>
  );
};

export default ChartStatistics;
