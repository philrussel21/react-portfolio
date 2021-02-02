import { Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Icon from './Icon';

// Tech Stack
import { ReactComponent as Html } from '../media/tech_icons/html.svg';
import { ReactComponent as Js } from '../media/tech_icons/js.svg';
import { ReactComponent as NodeJS } from '../media/tech_icons/node.svg';
import { ReactComponent as Sass } from '../media/tech_icons/sass.svg';
import reactIcon from '../media/tech_icons/react.svg';
import mongodb from '../media/tech_icons/mongodb.svg';
import postgres from '../media/tech_icons/postgres.svg';
import ruby from '../media/tech_icons/ruby.svg';
import rails from '../media/tech_icons/rails.svg';
import css from '../media/tech_icons/css.svg';

// Tech Tools
import aws from '../media/tech_tools/aws.svg';
import { ReactComponent as Git } from '../media/tech_tools/git.svg';
import heroku from '../media/tech_tools/heroku.svg';
import netlify from '../media/tech_tools/netlify.svg';
import postman from '../media/tech_tools/postman.svg';
import terminal from '../media/tech_tools/terminal.svg';
import trello from '../media/tech_tools/trello.svg';
import jest from '../media/tech_tools/jest.svg';
import mocha from '../media/tech_tools/mocha.svg';





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
              I love adventures and new experiences. I like treating challenges as opportunities and failures as lessons. As a developer, I acknowledge and practice the need to constantly update, learn and apply new skills to be adaptable, a better problem solver and a successful risk-taker. In my leisure, I enjoy travelling and trying new things to expand my horizon.
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
                  <Icon>
                    <Html />
                  </Icon>
                  <Icon>
                    <img src={css} className={classes.iconImg} alt="CSS3" />
                  </Icon>
                  <Icon>
                    <Js />
                  </Icon>
                  <Icon>
                    {/* <Ruby /> */}
                    <img src={ruby} className={classes.iconImg} alt="Ruby" />
                  </Icon>
                  <Icon>
                    {/* <Rails /> */}
                    <img src={rails} className={classes.iconImg} alt="Ruby on Rails" />
                  </Icon>
                  <Icon>
                    <NodeJS />
                  </Icon>
                  <Icon>
                    {/* <Mongodb /> */}
                    <img src={mongodb} className={classes.iconImg} alt="MongoDB" />
                  </Icon>
                  <Icon>
                    {/* <Postgres /> */}
                    <img src={postgres} className={classes.iconImg} alt="PostgreSQL" />
                  </Icon>
                  <Icon>
                    {/* <ReactIcon /> */}
                    <img src={reactIcon} className={classes.iconImg} alt="React" />
                  </Icon>
                  <Icon>
                    <Sass />
                  </Icon>
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
                  <Icon>
                    <img src={aws} className={classes.iconImg} alt="AWS" />
                  </Icon>
                  <Icon>
                    <Git />
                  </Icon>
                  <Icon>
                    <img src={heroku} className={classes.iconImg} alt="Heroku" />
                  </Icon>
                  <Icon>
                    <img src={netlify} className={classes.iconImg} alt="Netlify" />
                  </Icon>
                  <Icon>
                    <img src={postman} className={classes.iconImg} alt="Postman" />
                  </Icon>
                  <Icon>
                    <img src={terminal} className={classes.iconImg} alt="Terminal" />
                  </Icon>
                  <Icon>
                    <img src={trello} className={classes.iconImg} alt="Trello" />
                  </Icon>
                  <Icon>
                    <img src={jest} className={classes.iconImg} alt="Jest" />
                  </Icon>
                  <Icon>
                    <img src={mocha} className={classes.iconImg} alt="Mocha" />
                  </Icon>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}