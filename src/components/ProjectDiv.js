import React from 'react';
import { Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// TODOs
// - Projects effects/animations
// - change favicon
// - page not found
// - padding/margin in the footer
// - loading state for images
// - show navigation on Projects page: either make nav pos: fixed or restructure content
// - change navLinks font to:
// font - size: 1rem;
// letter - spacing: 2px;
// font - family: "Space Mono", "Helvetica", "Arial", "sans-serif";


export default function ProjectDiv({ children, content, bgDesign }) {
  // for next feature
  // const [isHovering, setIsHovering] = useState(false);
  const useStyles = makeStyles({
    cardCont: {
      display: 'flex',
      justifyContent: 'center'
    },
    card: bgDesign
  });

  // for next feature
  // const handleMouseOver = () => {
  //   setIsHovering(!isHovering);
  // };

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
