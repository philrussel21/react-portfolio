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
      backgroundColor: '#eee',
      color: '#000',
      textAlign: 'center',
      // transforms card format depending on screen size
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    }
  }));

  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item>
          <Typography variant="h1" align="center">
            Contact
          </Typography>
          <Typography variant="body1" align="center">
            Interested in working together? Here's my card.
          </Typography>
        </Grid>

        {/* Contact Card */}
        <Grid item xs={12}>
          <Card className={classes.card}>
            <CardMedia>
              <div className={classes.imgBg}>
                <img src={okay} className={classes.img} alt="Thumbs-up Avatar" />
              </div>
            </CardMedia>
            <CardContent>
              <Typography variant='h2'>
                Phil Antiporda
              </Typography>
              <Typography variant='subtitle1' display="block">
                Junior Full Stack Developer
              </Typography>
              <Grid container justify="center">

                <Grid item>
                  <Tooltip title="LinkedIn" arrow>
                    <IconButton href="https://www.linkedin.com/in/philantiporda/" target="_blank" aria-label="Linkedin">
                      <LinkedInIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>

                </Grid>

                <Grid item>
                  <Tooltip title="Email" arrow>
                    <IconButton href="mailto: phil.antiporda21@gmail.com" target="_blank" aria-label="Email">
                      <MailIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Github" arrow>
                    <IconButton href="https://github.com/philrussel21" target="_blank" aria-label="Github">
                      <GitHubIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Twitter" arrow>
                    <IconButton href="https://twitter.com/PeelRasel" target="_blank" aria-label="Twitter">
                      <TwitterIcon fontSize="large" />
                    </IconButton>
                  </Tooltip>
                </Grid>

                <Grid item>
                  <Tooltip title="Download Resume" arrow>
                    <IconButton href={resume} download="PhilAntiporda_Resume.pdf" aria-label="Resume">
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