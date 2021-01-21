import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useOnScreen from "components/useOnScreenObserver";
import Movies from "components/Movies";
import Section from "components/Section";

const useStyles = makeStyles({
  section: {
    width: "100vw",
    height: "100vh",
  },
});

const LandingPage = () => {
  const classes = useStyles();
  const [setRefSection1, visibleSection1] = useOnScreen({ threshold: 0.5 });
  const [setRefSection2, visibleSection2] = useOnScreen({ threshold: 0.5 });
  const [setRefSection3, visibleSection3] = useOnScreen({ threshold: 0.5 });
  return (
    <>
      <Movies />
      <Section
        className={classes.section}
        reference={setRefSection1}
        style={{ backgroundColor: visibleSection1 ? "#ffdf91" : "#557174" }}
      >
        {visibleSection1 && <h1>Hey, I am on the screen!</h1>}
      </Section>
      <Section
        className={classes.section}
        reference={setRefSection2}
        style={{ backgroundColor: visibleSection2 ? "#f8f1f1" : "#48426d" }}
      >
        {visibleSection2 && <h1>Hey, I am section 2!</h1>}
      </Section>
      <Section
        className={classes.section}
        reference={setRefSection3}
        style={{ backgroundColor: visibleSection3 ? "#ff884b" : "#e1d89f" }}
      >
        {visibleSection3 && <h1>Hey, I am section 3!</h1>}
      </Section>
    </>
  );
};
export default LandingPage;
