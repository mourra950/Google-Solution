import * as React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function BasicAccordion({ message, name, date }) {
    return (
        <Accordion square>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                style={{ fontSize: "2.5rem", backgroundColor: "#007ea7", color: "white", wordWrap: "break-word", marginTop: "10px" }}

            >
                {name}
            </AccordionSummary>
            <AccordionDetails style={{ fontSize: "1.5rem" }} >
                <p style={{ wordWrap: "break-word" }}>
                    {message}

                </p>
                <p style={{ wordWrap: "break-word" }}>
                    diagnosed on : {date}

                </p>
            </AccordionDetails>
        </Accordion>
    );
}