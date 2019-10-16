import React from "react";
import { Grid, Typography } from "@material-ui/core";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent
} from "@material-ui/core";

const AboutMe = () => {
  return (
    <Grid
      container
      direction="column"
      style={{ marginTop: "1em", textAlign: "center" }}
    >
      <div>
        <Typography variant="h2" style={{ fontFamily: "Raleway" }}>
          About Me
        </Typography>
      </div>
      <Grid container direction="row" justify="space-evenly">
        <Card>
          <CardActionArea>
            <CardMedia
              image={require("../resources/images/education.jpeg")}
              title="Education"
              style={{ height: "300px", width: "300px" }}
            />
            <CardContent>
              <Typography variant="h4">Education</Typography>
              <Typography varaint="body1">
                I studied at the University of Ottawa.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <CardMedia
              image={require("../resources/images/work.jpg")}
              title="Experience"
              style={{ height: "300px", width: "300px", }}
            />
            <CardContent>
              <Typography variant="h4">Experience</Typography>
              <Typography variant="body1">
                I've participated in multiple internships!
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default AboutMe;
