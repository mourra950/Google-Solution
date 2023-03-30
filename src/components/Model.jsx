import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { auth } from "../firebaseconfig";
function Model({ title, desc }) {
  const [isAuthenticated, setIsAuthenticated] = useState(auth.currentUser ? true : false);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setIsAuthenticated(user ? true : false);
    });
  }, []);
  return (
    <Card >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      {isAuthenticated && (
        <CardActions>
          <Button size="small" component={Link} to={"/form/" + title}>
            Add
          </Button>
        </CardActions>
      )
      }
    </Card>
  );
}

export default Model;
