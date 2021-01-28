import { Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as Html } from '../media/tech_icons/html.svg';
import { ReactComponent as Js } from '../media/tech_icons/js.svg';
import { ReactComponent as NodeJS } from '../media/tech_icons/node.svg';
// import { ReactComponent as Ruby } from '../media/tech_icons/ruby.svg';
// import { ReactComponent as Rails } from '../media/tech_icons/rails.svg';

import postgres from '../media/tech_icons/postgres.svg';
import ruby from '../media/tech_icons/ruby.svg';
import rails from '../media/tech_icons/rails.svg';
import css from '../media/tech_icons/css.svg';
import React from 'react';
import Icon from './Icon';

export default function About() {
  const useStyles = makeStyles({
  });

  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item>
          <Typography variant="h1" align="center">
            About Me
        </Typography>
          <Typography variant="body1">
            I love adventures and new experiences. I like treating challenges as opportunities and failures as lessons. As a developer, I acknowledge and practice the need to constantly update, learn and apply new skills to be adaptable, a better problem solver and a successful risk-taker. In my leisure, I enjoy travelling and trying new things to expand my horizon.
      </Typography>
        </Grid>

        <Grid item container>
          {/* Tech Stack Card*/}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h2" align="center">
                  Tech Stack
              </Typography>
                <Grid container>
                  <Icon>
                    <Html />
                  </Icon>
                  <Icon>
                    <img src={css} width="50" height="50" alt="CSS3" />
                  </Icon>
                  <Icon>
                    <Js />
                  </Icon>
                  <Icon>
                    {/* <Ruby /> */}
                    <img src={ruby} width="50" height="50" alt="Ruby" />
                  </Icon>
                  <Icon>
                    {/* <Rails /> */}
                    <img src={rails} width="50" height="50" alt="Ruby on Rails" />
                  </Icon>
                  <Icon>
                    <NodeJS />
                  </Icon>
                  <Icon>
                    {/* <Postgres /> */}
                    <img src={postgres} width="50" height="50" alt="PostgreSQL" />
                  </Icon>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Tech Tools Card */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h2" align="center">
                  Tech Tools
              </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}