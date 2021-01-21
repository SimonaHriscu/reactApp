import React from "react";
//import { makeStyles } from "@material-ui/core/styles";

//const useStyles = makeStyles({
// container: {
//   width: "100vw",
//   height: "100vh",
//   backgroundColor: "#487e95",
// },
//});

const Section2 = ({ children, className, reference, style }) => {
  // const classes = useStyles();
  return (
    <div className={className} ref={reference} style={style}>
      {children}
    </div>
  );
};

export default Section2;
