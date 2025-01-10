import { Accordion, AccordionDetails, AccordionSummary, Paper, Typography } from "@mui/material";
import react, { useState } from "react";
import {fiction,nonFiction} from "../content/ReadingListContent";

export const ReadingList = () => {
    const [expanded,setExpanded] = useState();


    return <Paper
        sx={{
            width: "60vw",
            margin: "auto"
        }}
    >
        <Typography
            variant="h4"
        >
            Reading List:
        </Typography>
        <Accordion
        >
            <AccordionSummary>
                Non-Fiction
            </AccordionSummary>
            <AccordionDetails
            >
                {
                    nonFiction && nonFiction.map((n,i) => (
                        <Accordion 
                            key={i}
                            >
                            <AccordionSummary
                            >
                                {n.title} by {n.author}
                            </AccordionSummary>
                            <AccordionDetails>
                                {
                                    n.thoughts && n.thoughts.map((t,j) => (
                                        <Typography key={j} >
                                            {t}
                                        </Typography>
                                    ))
                                }
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </AccordionDetails>
        </Accordion>
        
        
    </Paper>
}

export default ReadingList;