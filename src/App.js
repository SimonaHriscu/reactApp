import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ProgressBar from 'components/ProgressBar';
import LandingPage from 'pages/LandingPage';

const useStyles = makeStyles({
  container: {
    width: '100%',
    height: 'fit-content',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f8f1f1',
  },
  section: {
    width: '100vw',
    height: '100vh',
  },
});

function App() {
  const classes = useStyles();
  const [scrollTop, setScrollTop] = useState(0);
  const [style, setStyle] = useState({});

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled.toFixed(0));
  };

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${scrollTop}%`,
      };
      setStyle(newStyle);
    }, 0);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return (
    <div className={classes.container}>
      <ProgressBar done={scrollTop} style={style} />
      <LandingPage />
    </div>
  );
}

export default App;
