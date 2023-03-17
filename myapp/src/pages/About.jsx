import React from "react";
import { Container, Typography, Box } from "@mui/material";
import useStyles from "../styles/About.module.css";

const About = () => {
  const classes = useStyles;

  return (
    <Container maxWidth="md" className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="h3" className={classes.title}>
          About Us
        </Typography>
      </Box>
      <Box className={classes.content}>
        <Typography variant="body1" className={classes.text}>
          Welcome to our healthcare platform! We are dedicated to providing the
          highest quality healthcare services to our patients. Our team of
          experienced doctors, nurses, and support staff work tirelessly to
          ensure that you receive the best care possible.
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Our platform utilizes the latest technology and data-driven insights
          to provide personalized care tailored to your unique needs. We strive
          to make healthcare accessible, efficient, and transparent for all.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
