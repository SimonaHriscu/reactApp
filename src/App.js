import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Movies from "pages/Movies";
import Section1 from "pages/Section1";
import Section2 from "pages/Section2";

const useStyles = makeStyles({
  container: {
    width: "100%",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f8f1f1",
  },
  section: {
    width: "100vw",
    height: "100vh",
  },
});

function useOnScreen(options) {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    }, options);
    if (ref) {
      observer.observe(ref);
    }
    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);
  return [setRef, visible];
}
function App() {
  const [setRefSection1, visible] = useOnScreen({ threshold: 0.5 });
  const [setRefSection2, visible2] = useOnScreen({ threshold: 0.5 });
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Movies />
      <Section1
        className={classes.section}
        reference={setRefSection1}
        style={{ backgroundColor: visible ? "#ffdf91" : "#557174" }}
      >
        {visible ? <h1>Hey, I am on the screen!</h1> : ""}
      </Section1>
      <Section2
        className={classes.section}
        reference={setRefSection2}
        style={{ backgroundColor: visible2 ? "#ffdf91" : "#487e95" }}
      >
        {visible2 ? <h1>Hey, I am on the screen!</h1> : ""}
      </Section2>
    </div>
  );
}

export default App;
