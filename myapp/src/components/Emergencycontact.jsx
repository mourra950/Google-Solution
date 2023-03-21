import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <Card sx={{ minWidth: 450, maxWidth: 600 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Contact Relation
                </Typography>
                <Typography variant="h5" component="div">
                    Contact name
                </Typography>

                <Typography variant="body2">
                    phone number
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Copy number</Button>
            </CardActions>
        </Card>
    );
}