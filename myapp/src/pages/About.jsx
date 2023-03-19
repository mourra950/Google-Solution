import React from "react";
import { Container, Typography, Box } from "@mui/material";
import useStyles from "../styles/About.module.css";

const About = () => {
  const classes = useStyles;

  return (
    <Container style={{textAlign:"center" , lineHeight:"2321px"}} maxWidth="md" className={classes.container}>
      <Box className={classes.header}>
        <Typography variant="h3" className={classes.title}>
          About Us
        </Typography>
      </Box>
      <Box className={classes.content}>
        <Typography style={{textAlign:"center" , lineHeight:"240%"}}  variant="body1" className={classes.text}>
          Welcome to MDLog a simple website with a noble and simple idea that hopefully will save lives.<br />
          <h1> What United Nations' Sustainable Development goal did you choose for your solution?</h1>
          We are targeting the third Goal Health and Well being.
          <h1>The Problem</h1>
          all the world lack a global health care system where all medical history of a patient can be accessed in any hospital when needed.
          why do we need a system like that?
          well in case of emergencies where no one related to patient is around speed is the factor between life and death and acting blindly could lead to fatal mistakes.
          <h1>Solution</h1>
          Our site provide a simple way to store your medical history and a code that can be used to search for your medical profile.
          using that code accessing your medical history and emergency contact couldnt be easier saving time and tests and hopefully your life.

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
