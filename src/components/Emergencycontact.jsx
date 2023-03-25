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
    </Box>
);

export default function BasicCard({ relation, name, phonenumber }) {
    return (
        <Card sx={{ minWidth: 450, maxWidth: 500 }}>
            <CardContent>
                <div sx={{ fontSize: 14 }} color="text.secondary">
                    {relation}
                </div>
                <div>
                    {name}
                </div>

                <div>
                    {phonenumber}
                </div>
            </CardContent>
            <CardActions>
                <Button size="small">Copy number</Button>
            </CardActions>
        </Card>
    );
}