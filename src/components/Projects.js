import { Container, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Project Logos
import airGear from '../media/project_logos/AirGear.svg';
import kewlors from '../media/project_logos/kewlors.svg';
import longShot from '../media/project_logos/LongShot.svg';
import orbisFoods from '../media/project_logos/OrbisFoods.svg';
import tcc from '../media/project_logos/TCC.svg';
import GitHubIcon from '@material-ui/icons/GitHub';
import ProjectDiv from './ProjectDiv';

// Proj content from data
import content from '../data/content.json';



export default function Projects() {
  const useStyles = makeStyles((theme) => ({
    projImg: {
      width: 100,
      height: 100,
      [theme.breakpoints.up('sm')]: {
        width: 250,
        height: 250
      }
    },
    cont: {
      [theme.breakpoints.up('md')]: {
        marginTop: '5em'
      }
    },
    contentCont: {
      marginBottom: '1em'
    }
  }));

  const designs = {
    kewlors: {
      background: `linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    )`,
      transition: 'linear background 0.5s'
    },
    airGear: {
      backgroundColor: "#BE0000",
      transition: 'linear background 0.5s'
    },
    curtainCo: {
      backgroundColor: `rgb(31, 144, 77)`,
      // background: `linear-gradient(90deg, rgba(31, 144, 77, 0.8267507686668417) 41%, rgba(92, 156, 185, 1) 74%)`
      background: `radial-gradient(circle, rgba(31,144,77,0.8267507686668417) 50%, rgba(92,156,185,1) 85%)`,
      transition: 'linear background 0.5s'
    },
    orbisFoods: {
      backgroundColor: "#fff",
      transition: 'linear background 0.5s'
    },
    longShot: {
      backgroundColor: "#FBAB7E",
      backgroundImage: `linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)`,
      transition: 'linear background 0.5s'
    },
    github: {
      backgroundColor: "#24292e",
      transition: 'linear background 0.5s'
    }
  };

  const classes = useStyles();
  return (
    <Container className={classes.cont}>
      <Grid container direction="column">
        <Grid item className={classes.contentCont}>
          <Typography variant="h1" align="center">
            Projects
          </Typography>
        </Grid>

        <Grid item container spacing={4}>
          <ProjectDiv content={content.curtainCo} bgDesign={designs.curtainCo}>
            <img src={tcc} className={classes.projImg} alt="The Curtain Co." />
          </ProjectDiv>
          {/* BG color for airGear - #BE0000 */}
          <ProjectDiv content={content.airGear} bgDesign={designs.airGear}>
            <img src={airGear} className={classes.projImg} alt="AirGear Aeroparts" />
          </ProjectDiv>
          <ProjectDiv content={content.orbisFoods} bgDesign={designs.orbisFoods}>
            <img src={orbisFoods} className={classes.projImg} alt="Orbis Foods" />
          </ProjectDiv>
          <ProjectDiv content={content.longShot} bgDesign={designs.longShot}>
            <img src={longShot} className={classes.projImg} alt="LongShot" />
          </ProjectDiv>
          <ProjectDiv content={content.kewlors} bgDesign={designs.kewlors}>
            <img src={kewlors} className={classes.projImg} alt="KewLors" />
          </ProjectDiv>
          <ProjectDiv content={content.github} bgDesign={designs.github}>
            <GitHubIcon className={classes.projImg} />
          </ProjectDiv>
        </Grid>
      </Grid>

    </Container>
  );
}
