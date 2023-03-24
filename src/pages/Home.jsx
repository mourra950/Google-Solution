import React from "react";
import { Container, TextField } from "@mui/material";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-section">
      <h1>Making Healthcare Easier</h1>

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
        />
      </Container>
    </div>
  );
}

export default Home;
