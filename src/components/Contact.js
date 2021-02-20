import { Card, CardContent, CardMedia, Container, Grid, IconButton, Tooltip, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import okay from '../media/okay.png';

// Social and Contact Icons
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import DescriptionIcon from '@material-ui/icons/Description';
import resume from '../media/PhilAntiporda_Resume.pdf';

export default function Contact() {



  const useStyles = makeStyles((theme) => ({
    card: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5em',
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center',
      // transforms card format depending on screen size
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxWidth: 500,
        padding: '2.5rem'
      }
    },
    imgBg: {
      width: 'min-content',
      margin: 'auto',
      padding: '0.6em',
      borderRadius: '50%',
      backgroundColor: '#7d2020'
    },
    img: {
      width: 150,
      height: 150
    },
    contentCont: {
      marginBottom: '1em'
    }
  }));

  const classes = useStyles();

  return (
    <Container>
      <Grid container direction="column">
        <Grid item container direction="column" spacing={4} className={classes.contentCont}>
          <Grid item>
            <Typography variant="h1" align="center">
              Contact
          </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" align="center">
              Interested in working together? Here's my card.
          </Typography>
          </Grid>
        </Grid>

        {/* Contact Card */}
        <Grid item container xs={12} justify="center" alignItems="center">
          <Card className={classes.card} raised>
            <CardMedia>
              <div className={classes.imgBg}>
                <img src={okay} className={classes.img} alt="Thumbs-up Avatar" />
              </div>
            </CardMedia>
            <CardContent>
              <Typography variant='h2'>
                Phil Antiporda
              </Typography>
              <Typography variant='subtitle2' display="block">
                Junior Full Stack Developer
              </Typography>
              <Grid container justify="center">

                <Grid item>
                  <Tooltip title="LinkedIn" arrow>
                    <IconButton color="primary" href="https://www.linkedin.com/in/philantiporda/" target="_blank" aria-label="Linkedin">
                      <LinkedInIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>

                </Grid>

                <Grid item>
                  <Tooltip title="Email" arrow>
                    <IconButton color="primary" href="mailto: phil.antiporda21@gmail.com" target="_blank" aria-label="Email">
                      <MailIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Github" arrow>
                    <IconButton color="primary" href="https://github.com/philrussel21" target="_blank" aria-label="Github">
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Twitter" arrow>
                    <IconButton color="primary" href="https://twitter.com/PeelRasel" target="_blank" aria-label="Twitter">
                      <TwitterIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Download Resume" arrow>
                    <IconButton color="primary" href={resume} download="PhilAntiporda_Resume.pdf" aria-label="Resume">
                      <DescriptionIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Grid>

              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}