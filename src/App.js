import React from 'react';
import { Router } from '@reach/router';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import './styles/main.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import { Grid } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7d2020"
    },
    secondary: {
      main: "#ffba49"
    },
    background: {
      paper: "#7d2020"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        color: "#fff"
      }
    }
  }
});
const defaultTypography = theme.typography;
theme.typography.h1 = {
  ...defaultTypography.h1,
  fontSize: '6rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '3rem',
  },
};
theme.typography.h2 = {
  ...defaultTypography.h2,
  fontSize: '3.75rem',
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
};

const App = () => {
  const useStyles = makeStyles({
    main: {
      flexGrow: 2
    }
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" className={classes.cont}>
        <Navbar />
        <Grid item container alignItems="center" className={classes.main}>
          <Router style={{ width: '100%' }}>
            <Home path="/" />
            <About path="/about" />
            <Projects path="/projects" />
            <Contact path="/contact" />
            <NotFound default />
          </Router>
        </Grid>
        <Grid item container direction="column-reverse" className={classes.footer}>
          <Footer />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
