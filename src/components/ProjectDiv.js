import React, { useState } from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default function ProjectDiv({ children, content, bgDesign }) {
  const [isHovering, setIsHovering] = useState(false);
  const useStyles = makeStyles({
    cardCont: {
      display: 'flex',
      justifyContent: 'center'
    },
    card: bgDesign
  });

  const handleMouseOver = () => {
    setIsHovering(!isHovering);
  };

  const classes = useStyles();

  return (
    // Working
    // <Grid item xs={12}
    //   onMouseEnter={handleMouseOver}
    //   onMouseLeave={handleMouseOver}
    // >
    //   <Card>
    //     {isHovering
    //       ?
    //       <h2>{content}</h2>
    //       :
    //       <CardContent className={classes.cardCont}>
    //         {children}
    //       </CardContent>
    //     }
    //   </Card>
    // </Grid>
    <Grid item xs={12} md={6}>
      <Card className={classes.card}>
        <CardContent className={classes.cardCont}>
          {children}
        </CardContent>
      </Card>
    </Grid>
  );
}
