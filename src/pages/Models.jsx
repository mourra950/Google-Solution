import React, { useState, useEffect } from "react";
import Model from "../components/Model";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import "../styles/models.css";
import {data} from "./Forms/formdata.js"


const WhiteTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
  "& .MuiInputLabel-root": {
    color: "white",
  },
  "& .MuiInputBase-input": {
    color: "white",
    fontSize: "1.5rem",
  },
});

function Models() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredModels, setFilteredModels] = useState([]);

  const models = data

  useEffect(() => {
    setFilteredModels(
      models.filter((model) =>
        model.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="models-container">
      <WhiteTextField
        label="Search"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          marginBottom: 2,
          transition: "all 0.3s",
          width: "60%",
        }}
      />
      <div className="cards-grid">
        {filteredModels.map((model, index) => (
          <Model key={index} title={model.title} desc={model.desc} />
        ))}
      </div>
    </div>
  );
}

export default Models;
