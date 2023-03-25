import * as React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function BasicAccordion({ message, name }) {
    return (
        <Accordion style={{margin:"auto 5rem"}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{fontSize:"2.5rem",backgroundColor:"#007ea7",color:"white"}}

            >
                {name}
            </AccordionSummary>
            <AccordionDetails style={{fontSize:"1.5rem"}} >
                {message}
            </AccordionDetails>
        </Accordion>
    );
}