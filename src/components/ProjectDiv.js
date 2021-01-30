import React, { useState } from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


export default function ProjectDiv({ children, content }) {
  const [isHovering, setIsHovering] = useState(false);
  const useStyles = makeStyles({
    cardCont: {
      display: 'flex',
      justifyContent: 'center'
    }
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
    <Grid item xs={12}>
      <Card>
        <CardContent className={classes.cardCont}>
          {children}
        </CardContent>
      </Card>
    </Grid>
  );
}
