import React from "react";

const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <div className={` px-0 md:px-0 text-center ${className}`}>
      {subtitle && <h5 className="h5 ">{subtitle}</h5>}
      <h1 className="h2 ">{title}</h1>
    </div>
  );
};

export default SectionTitle;
