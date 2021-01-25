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

const App = () => {
  const useStyles = makeStyles({
    main: {
      flexGrow: 2
    },
    cont: {
      height: '100vh'
    }
  });

  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column" className={classes.cont}>
        <Navbar />
        <Grid item container alignItems="center" className={classes.main}>
          <Router>
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
