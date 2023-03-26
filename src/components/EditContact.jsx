import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

function EditContact({ contact, onUpdate }) {
  const [open, setOpen] = useState(false);
  const [updatedContact, setUpdatedContact] = useState(contact);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    onUpdate(updatedContact);
    setOpen(false);
  };

  const handleChange = (e) => {
    setUpdatedContact({
      ...updatedContact,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Button
        variant="outlined"
        style={{ color: "white", border: "1px solid white" }}
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            fullWidth
            value={updatedContact.name}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="relation"
            label="Relation"
            fullWidth
            value={updatedContact.relation}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="phonenumber"
            label="Phone Number"
            fullWidth
            value={updatedContact.phonenumber}
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

export default EditContact;
