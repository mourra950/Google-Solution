import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function BasicCard({ relation, name, phonenumber }) {
  return (
    <Card sx={{  maxWidth: 600 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary">
          {relation}
        </Typography>
        <Typography sx={{ fontSize: 22, wordWrap: "break-word" }} color="text.primary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14, wordWrap: "break-word" }} color="text.secondary">
          {phonenumber}
        </Typography>
      </CardContent>
    </Card>
  );
}