// FormComponent.js
import React from "react";
import {
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";

const inputStyle = {
  fontSize: "1.2rem", // Adjust this value to change the font size
};

const FormComponent = ({ config, onSubmit,result }) => {
  const [formValues, setFormValues] = React.useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues,result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        {config.map((field) => (
          <Grid item key={field.name} xs={12} style={{ margin: "12px 0px" }}>
            {field.type === "select" ? (
              <FormControl fullWidth variant="outlined">
                <InputLabel>{field.label}</InputLabel>
                <Select
                  name={field.name}
                  value={formValues[field.name] || ""}
                  label={field.label}
                  required={field.required}
                  onChange={handleChange}
                  inputProps={{ style: inputStyle }}
                >
                  {field.choices.map((choice) => (
                    <MenuItem key={choice.value} value={choice.value}>
                      {choice.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <TextField
                fullWidth
                label={field.label}
                name={field.name}
                value={formValues[field.name] || ""}
                type={field.type}
                variant="outlined"
                required={field.required}
                onChange={handleChange}
                inputProps={{ style: inputStyle }}
              />
            )}
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormComponent;
