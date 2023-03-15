import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
  Container,
} from "@mui/material";
import "../styles/form.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform validation here
    const validationErrors = {};
    if (!fullName) {
      validationErrors.fullName = "Please enter your full name";
    }
    if (!email) {
      validationErrors.email = "Please enter your email";
    }
    if (!password) {
      validationErrors.password = "Please enter your password";
    }
    if (!confirmPassword) {
      validationErrors.confirmPassword = "Please confirm your password";
    }
    if (password !== confirmPassword) {
      validationErrors.confirmPassword = "Passwords do not match";
    }
    if (!agreeTerms) {
      validationErrors.agreeTerms = "Please agree to the terms";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // submit data to MongoDB here
    const userData = { fullName, email, password };
    axios
      .post("/api/register", userData)
      .then((response) => {
        console.log(response.data);
        // handle successful registration here
      })
      .catch((error) => {
        console.log(error);
        // handle registration error here
      });
  };

  return (
    <Container maxWidth="sm" className="container">
      <form onSubmit={handleSubmit}>
        <Typography variant="h4">Register</Typography>
        <TextField
          label="Full Name"
          variant="outlined"
          margin="normal"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          error={Boolean(errors.fullName)}
          helperText={errors.fullName}
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(errors.email)}
          helperText={errors.email}
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(errors.password)}
          helperText={errors.password}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={Boolean(errors.confirmPassword)}
          helperText={errors.confirmPassword}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
            />
          }
          label="I agree to the terms and conditions"
          error={Boolean(errors.agreeTerms)}
          helperText={errors.agreeTerms}
        />
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        <Typography variant="body1">
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </form>
    </Container>
  );
};

export default Register;
