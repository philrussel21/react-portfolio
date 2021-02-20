import { Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Icon from './Icon';

// Tech Stack
import html from '../media/tech_icons/html.svg';
import js from '../media/tech_icons/js.svg';
import node from '../media/tech_icons/node.svg';
import sass from '../media/tech_icons/sass.svg';
import reactIcon from '../media/tech_icons/react.svg';
import mongodb from '../media/tech_icons/mongodb.svg';
import postgres from '../media/tech_icons/postgres.svg';
import ruby from '../media/tech_icons/ruby.svg';
import rails from '../media/tech_icons/rails.svg';
import css from '../media/tech_icons/css.svg';

// Tech Tools
import aws from '../media/tech_tools/aws.svg';
import git from '../media/tech_tools/git.svg';
import heroku from '../media/tech_tools/heroku.svg';
import netlify from '../media/tech_tools/netlify.svg';
import postman from '../media/tech_tools/postman.svg';
import terminal from '../media/tech_tools/terminal.svg';
import trello from '../media/tech_tools/trello.svg';
import jest from '../media/tech_tools/jest.svg';
import mocha from '../media/tech_tools/mocha.svg';
import tailwind from '../media/tech_tools/tailwind.svg'
import matUI from '../media/tech_tools/matUI.svg'
import bootstrap from '../media/tech_tools/bootstrap.svg'





export default function About() {
  const useStyles = makeStyles({
    iconImg: {
      width: 50,
      height: 50
    },
    contentCont: {
      marginBottom: '1em'
    }
  });

  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column">
        <Grid item container direction="column" spacing={4} className={classes.contentCont}>
          <Grid item>
            <Typography variant="h1" align="center">
              About Me
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center">
              I like treating challenges as opportunities and failures as lessons. I tackle big problems into smaller digestible pieces to bring constant progress, thus applying the agile methodology. As a developer, I acknowledge and practice the need to constantly update, learn and apply new skills to be adaptable, a better problem solver and a successful risk-taker. I love adventures and new experiences. In my leisure, I enjoy travelling and trying new things to expand my horizon.
            </Typography>
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          {/* Tech Stack Card*/}
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>

                <Typography variant="h2" align="center">
                  Tech Stack
              </Typography>

                <Grid container spacing={1}>
                  <Icon img={html} alt="HTML5" />
                  <Icon img={css} alt="CSS3" />
                  <Icon img={sass} alt="SASS" />
                  <Icon img={js} alt="Javacript" />
                  <Icon img={ruby} alt="Ruby" />
                  <Icon img={rails} alt="Ruby on Rails" />
                  <Icon img={node} alt="NodeJS" />
                  <Icon img={mongodb} alt="MongoDB" />
                  <Icon img={postgres} alt="PostgreSQL" />
                  <Icon img={reactIcon} alt="React" />
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Tech Tools Card */}
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography variant="h2" align="center">
                  Tech Tools
              </Typography>
                <Grid container spacing={1}>
                  <Icon img={aws} alt="AWS" />
                  <Icon img={git} alt="Git Source Control" />
                  <Icon img={heroku} alt="Heroku" />
                  <Icon img={netlify} alt="Netlify" />
                  <Icon img={postman} alt="Postman" />
                  <Icon img={terminal} alt="Terminal" />
                  <Icon img={trello} alt="Trello" />
                  <Icon img={jest} alt="Jest" />
                  <Icon img={mocha} alt="Mocha" />
                  <Icon img={tailwind} alt="TailwindCSS" />
                  <Icon img={matUI} alt="Material UI" />
                  <Icon img={bootstrap} alt="Bootstrap" />
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}