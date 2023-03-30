import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

function EditDiagnosis({ diagnosis, onUpdate, onDelete }) {
  const [open, setOpen] = useState(false);
  const [updatedDiagnosis, setUpdatedDiagnosis] = useState(diagnosis);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    onUpdate(updatedDiagnosis);
    setOpen(false);
  };

  const handleChange = (e) => {
    setUpdatedDiagnosis({
      ...updatedDiagnosis,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Button
        variant="outlined"
        style={{ color: "white", border: "1px solid white" ,marginTop:"10px"}}
        onClick={handleClickOpen}
      >
        Edit
      </Button>

      <Button
        variant="outlined"
        style={{
          color: "white",
          border: "1px solid firebrick",
          marginLeft: "8px",
          marginTop:"10px"
        }}
        onClick={() => onDelete(diagnosis.id)}
        color="error"
      >
        Delete
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Diagnosis</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            fullWidth
            value={updatedDiagnosis.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="message"
            label="Message"
            fullWidth
            value={updatedDiagnosis.message}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditDiagnosis;
