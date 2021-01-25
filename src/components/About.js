import { Container, Typography, Grid, Card, CardContent } from '@material-ui/core';
import React from 'react';

export default function About() {
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