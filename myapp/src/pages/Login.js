import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@material-ui/core";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform validation here
    const validationErrors = {};
    if (!username) {
      validationErrors.username = "Please enter your username";
    }
    if (!password) {
      validationErrors.password = "Please enter your password";
    }
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // submit data to MongoDB here
    const userData = { username, password };
    axios
      .post("/api/login", userData)
      .then((response) => {
        console.log(response.data);
        // handle successful login here
      })
      .catch((error) => {
        console.log(error);
        // handle login error here
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Username"
        variant="outlined"
        margin="normal"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={Boolean(errors.username)}
        helperText={errors.username}
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
      <FormControlLabel
        control={
          <Checkbox
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
        }
        label="Remember me"
      />
      <Button type="submit" variant="contained" color="primary">
        Login
      </Button>
      <Typography variant="body1">
        Don't have an account? <Link to="/register">Register</Link>
      </Typography>
    </form>
  );
};

export default Login;
