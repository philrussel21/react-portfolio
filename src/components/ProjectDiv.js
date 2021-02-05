import React, { useState } from 'react';
import { Grid, Card, CardContent, Zoom, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default function ProjectDiv({ children, content, bgDesign }) {
  const [isHovering, setIsHovering] = useState(false);
  const useStyles = makeStyles(theme => ({
    cardCont: {
      display: 'flex',
      justifyContent: 'center'
    },
    cardContHover: {
      display: 'flex',
      justifyContent: 'center',
      opacity: 0,
      transition: 'linear opacity 0.5s'
    },
    card: bgDesign,
    cardContTxt: {
      width: 100,
      height: 100,
      [theme.breakpoints.up('sm')]: {
        width: 250,
        height: 250
      }
    }
  }));

  const handleMouseOver = () => {
    setIsHovering(!isHovering);
  };

  const classes = useStyles();

  return (
    <Grid item xs={12} md={6}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseOver}
    >
      <Card className={classes.card + " hover"}>
        {isHovering
          ?
          <CardContent className={classes.cardContHover + " hover-text"}>
            <div className={classes.cardContTxt}>
              <Typography variant="subtitle1">
                {content}
              </Typography>
            </div>
          </CardContent>
          :
          <CardContent className={classes.cardCont}>
            <Zoom in={!isHovering}>
              {children}
            </Zoom>
          </CardContent>
        }
      </Card>
    </Grid>
    // <Grid item xs={12} md={6}>
    //   <Card className={classes.card}>
    //     <CardContent className={classes.cardCont}>
    //       {children}
    //     </CardContent>
    //   </Card>
    // </Grid>
  );
}
