import { Card, CardContent, CardMedia, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import okay from '../media/okay.png';

export default function Contact() {



  const useStyles = makeStyles((theme) => ({
    card: {
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5em',
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
      backgroundColor: 'white'
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
                <img src={okay} width={150} height={150} alt="Thumbs-up Avatar" />
              </div>
            </CardMedia>
            <CardContent>
              oops
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}