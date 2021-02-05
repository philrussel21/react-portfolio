import React, { useState } from 'react';
import { Grid, Card, CardContent, Zoom, Typography, IconButton, Tooltip, Link } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import PublicIcon from '@material-ui/icons/Public';
import CodeIcon from '@material-ui/icons/Code';


export default function ProjectDiv({ children, content, bgDesign }) {
  const [isHovering, setIsHovering] = useState(false);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  // FOR MOBILE AND TABLET PROJECT LINKS
  // use livesite if applicable, otherwise use github link
  const link = content.live || content.src;

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
    >
      {matches
        ?
        <Card className={classes.card + " hover"}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseOver}>
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
        :
        <Link href={link}>
          <Card className={classes.card}>
            <CardContent className={classes.cardCont}>
              {children}
            </CardContent>
          </Card>
        </Link>
      }
    </Grid>
  );
}
