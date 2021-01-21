import React from "react";

const Section = ({ children, className, reference, style }) => {
  return (
    <div className={className} ref={reference} style={style}>
      {children}
    </div>
  );
};

export default Section;
