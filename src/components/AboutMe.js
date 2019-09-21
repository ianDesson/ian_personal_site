import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const AboutMe = () => {
  return (
    <Grid container>
      <div>
        <Typography variant="title">
          About Me
        </Typography>
      </div>
      <div>
        <Typography variant="subtitle1">
          Education
        </Typography>
      </div>
    </Grid>
  );
}

export default AboutMe;