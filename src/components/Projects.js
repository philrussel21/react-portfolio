import { Card, CardActions, CardContent, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Project Logos
import airGear from '../media/project_logos/AirGear.svg';
import kewlors from '../media/project_logos/kewlors.svg';
import longShot from '../media/project_logos/LongShot.svg';
import orbisFoods from '../media/project_logos/OrbisFoods.svg';
import tcc from '../media/project_logos/TCC.svg';
import ProjectDiv from './ProjectDiv';



export default function Projects() {
  const useStyles = makeStyles({
    projImg: {
      width: 100,
      height: 100
    }
  });

  const content = "Some text here";

  const classes = useStyles();
  return (
    <Container>
      <Grid container direction="column">
        <Grid item>
          <Typography variant="h1" align="center">
            Projects
      </Typography>
        </Grid>
        <Grid item container spacing={2}>
          <ProjectDiv content={content}>
            <img src={tcc} className={classes.projImg} alt="The Curtain Co." />
          </ProjectDiv>
          {/* BG color for airGear - #BE0000 */}
          <ProjectDiv content={content}>
            <img src={airGear} className={classes.projImg} alt="AirGear Aeroparts" />
          </ProjectDiv>
          <ProjectDiv>
            <img src={orbisFoods} className={classes.projImg} alt="Orbis Foods" />
          </ProjectDiv>
          <ProjectDiv>
            <img src={longShot} className={classes.projImg} alt="LongShot" />
          </ProjectDiv>
          <ProjectDiv>
            <img src={kewlors} className={classes.projImg} alt="KewLors" />
          </ProjectDiv>
        </Grid>
      </Grid>

    </Container>
  );
}
