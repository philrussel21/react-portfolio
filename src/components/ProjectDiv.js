import React, { useState } from 'react';
import { Grid, Card, CardContent, Zoom, Typography, Button, IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';
import CodeIcon from '@material-ui/icons/Code';


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
    },
    projBtn: {
      border: '1px solid #fff',
      borderRadius: 25,
      '&:hover': {
        background: '#7d2020'
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
            <Grid container direction="column" justify="space-around" alignItems="center" className={classes.cardContTxt}>
              <Grid item>
                <Typography variant="h6" align="center">
                  {content.str}
                </Typography>
              </Grid>
              <Grid item container justify="space-around">
                {content.live &&
                  <Tooltip title="Live App" arrow>
                    <IconButton color="inherit" className={classes.projBtn} href={content.live}>
                      <PublicIcon />
                    </IconButton>
                  </Tooltip>
                }
                <Tooltip title={content.github ? "Github" : "Source code"} arrow>
                  <IconButton color="inherit" className={classes.projBtn} href={content.src}>
                    <CodeIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
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
