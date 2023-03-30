import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, TextField } from "@mui/material";
import "../styles/Home.css";
import { Button } from "@mui/material";

function Home() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="home-section">
      <h1>Making Healthcare Accessible</h1>

      <Container maxWidth="sm">
        <TextField
          id="search-bar"
          label="Enter Patient ID"
          type="search"
          variant="outlined"
          fullWidth
          margin="none"
          InputLabelProps={{
            style: { color: "white" },
          }}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "white",
            },
            "& .MuiInputBase-input": {
              color: "white",
            },
          }}
          value={value}
          onChange={handleChange}
        />
        <Button
          component={Link}
          key="Profile"
          className="nav-link"
          color="inherit"
          style={{ marginTop: "2rem" }}
          to={"/profile/" + value}
        >
          Search
        </Button>
      </Container>
    </div>
  );
}

export default Home;

