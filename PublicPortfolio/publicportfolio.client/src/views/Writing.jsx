import { useEffect, useState } from "react";
import { essays,poetry,lyrics } from "../content/WritingContent";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material"
import EventTracker from "../EventTracker";

const sectionEnum = {
    poetry: 0,
    nonFiction: 1,
    lyrics: 2
};

export const Writing = ({isMobile}) => {
    const tracker = EventTracker("writings page");
    const [section,setSection] = useState(-1);
    const [essayExpanded,setEssayExpanded] = useState(-1);
    const [poetryExpanded,setPoetryExpanded] = useState(-1);
    const [lyricsExpanded,setLyricsExpanded] = useState(-1);

    useEffect(() => {
        tracker("view page", "writing");
    },[]);

    useEffect(() => {
        document.getElementById(essayExpanded)?.scrollIntoView();
        tracker("read essay",essayExpanded);
    },[essayExpanded]);
    
    useEffect(() => {
        document.getElementById(poetryExpanded)?.scrollIntoView();
        tracker("read poem",poetryExpanded);
    },[poetryExpanded]);
    
    useEffect(() => {
        document.getElementById(lyricsExpanded)?.scrollIntoView();
        tracker("read lyrics",lyricsExpanded);
    },[lyricsExpanded]);

    const Desktop = () => <Container
        sx={{
            overflowY: "auto",
            overflowX: "hidden",
            height: "90vh",
            paddingBottom: "10vh"
        }}
    >
        <Accordion
            expanded={section === sectionEnum.nonFiction}
            onChange={() => {
                if(section !== sectionEnum.nonFiction) {
                    setSection(sectionEnum.nonFiction);
                }
                else {
                    setSection(-1);
                }
            }}
            sx={{
                marginBottom: "1vh"
            }}
        >
            <AccordionSummary>
                <Typography>
                    <b>Non Fiction</b>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    essays && essays.map((e,i) => (
                        <Accordion 
                            key={i}
                            expanded={essayExpanded === i}
                            onChange={() => {
                                if(essayExpanded !== i) {
                                    setEssayExpanded(i);
                                }
                                else {
                                    setEssayExpanded(-1);
                                }
                            }}
                        >
                            <AccordionSummary
                                id={e.title}
                            >
                                <b>{e.title}</b>
                            </AccordionSummary>
                            <AccordionDetails>
                                {e.body}
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </AccordionDetails>
        </Accordion>
        <Accordion
            expanded={section === sectionEnum.poetry}
            onChange={() => {
                if(section !== sectionEnum.poetry) {
                    setSection(sectionEnum.poetry);
                }
                else {
                    setSection(-1);
                }
            }}
            sx={{
                marginBottom: "1vh"
            }}
        >
            <AccordionSummary>
                <Typography>
                    <b>Poetry</b>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <em>In a past life I was a slam poet and represented Utah at the National Poetry Slam in 2002. That year I also won Best Poet of Salt Lake City by the City Weekly</em>
                    </Typography>
                {
                    poetry && poetry.map((p,i) => (
                        <Accordion 
                            key={i}
                            expanded={poetryExpanded === i}
                            onChange={() => {
                                if(poetryExpanded !== i) {
                                    setPoetryExpanded(i);
                                }
                                else {
                                    setPoetryExpanded(-1);
                                }
                            }}
                        >
                            <AccordionSummary
                                id={p.title}
                            >
                                <b>{p.title}</b>
                            </AccordionSummary>
                            <AccordionDetails>
                                {p.body}
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </AccordionDetails>
        </Accordion>
        <Accordion
            expanded={section === sectionEnum.lyrics}
            onChange={() => {
                if(section !== sectionEnum.lyrics) {
                    setSection(sectionEnum.lyrics);
                }
                else {
                    setSection(-1);
                }
            }}
            sx={{
                marginBottom: "1vh"
            }}
        >
            <AccordionSummary>
                <Typography>
                    <b>Song Lyrics</b>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    lyrics && lyrics.map((l,i) => (
                        <Accordion 
                            key={i}
                            expanded={lyricsExpanded === i}
                            onChange={() => {
                                if(lyricsExpanded !== i) {
                                    setLyricsExpanded(i);
                                }
                                else {
                                    setLyricsExpanded(-1);
                                }
                            }}
                        >
                            <AccordionSummary
                                id={l.title}
                            >
                                <b>{l.title}</b>
                            </AccordionSummary>
                            <AccordionDetails>
                                {l.body}
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </AccordionDetails>
        </Accordion>
    </Container>

    const Mobile = () => <Container
        sx={{
            overflowY: "auto",
            overflowX: "hidden",
            height: "90vh",
            padding: "0 0 10vh 0",
        }}
    >
        <Accordion
            expanded={section === sectionEnum.nonFiction}
            onChange={() => {
                if(section !== sectionEnum.nonFiction) {
                    setSection(sectionEnum.nonFiction);
                }
                else {
                    setSection(-1);
                }
            }}
            sx={{
                marginBottom: "1vh",
            }}
            >
            <AccordionSummary>
                <Typography>
                    <b>Non Fiction</b>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    essays && essays.map((e,i) => (
                        <Accordion 
                            key={i}
                            expanded={essayExpanded === i}
                            onChange={() => {
                                if(essayExpanded !== i) {
                                    setEssayExpanded(i);
                                }
                                else {
                                    setEssayExpanded(-1);
                                }
                            }}
                        >
                            <AccordionSummary
                                id={e.title}
                            >
                                <b>{e.title}</b>
                            </AccordionSummary>
                            <AccordionDetails>
                                {e.body}
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </AccordionDetails>
        </Accordion>
        <Accordion
            expanded={section === sectionEnum.poetry}
            onChange={() => {
                if(section !== sectionEnum.poetry) {
                    setSection(sectionEnum.poetry);
                }
                else {
                    setSection(-1);
                }
            }}
            sx={{
                marginBottom: "1vh"
            }}
        >
            <AccordionSummary>
                <Typography>
                    <b>Poetry</b>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <em>In a past life I was a slam poet and represented Utah at the National Poetry Slam in 2002. That year I also won Best Poet of Salt Lake City by the City Weekly</em>
                </Typography>
                {
                    poetry && poetry.map((p,i) => (
                        <Accordion 
                            key={i}
                            expanded={poetryExpanded === i}
                            onChange={() => {
                                if(poetryExpanded !== i) {
                                    setPoetryExpanded(i);
                                }
                                else {
                                    setPoetryExpanded(-1);
                                }
                            }}
                        >
                            <AccordionSummary
                                id={p.title}
                            >
                                <b>{p.title}</b>
                            </AccordionSummary>
                            <AccordionDetails>
                                {p.body}
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </AccordionDetails>
        </Accordion>
        <Accordion
            expanded={section === sectionEnum.lyrics}
            onChange={() => {
                if(section !== sectionEnum.lyrics) {
                    setSection(sectionEnum.lyrics);
                }
                else {
                    setSection(-1);
                }
            }}
            sx={{
                marginBottom: "1vh"
            }}
        >
            <AccordionSummary>
                <Typography>
                    <b>Song Lyrics (played on the banjo)</b>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    lyrics && lyrics.map((l,i) => (
                        <Accordion 
                            key={i}
                            expanded={lyricsExpanded === i}
                            onChange={() => {
                                if(lyricsExpanded !== i) {
                                    setLyricsExpanded(i);
                                }
                                else {
                                    setLyricsExpanded(-1);
                                }
                            }}
                        >
                            <AccordionSummary
                                id={l.title}
                            >
                                <b>{l.title}</b>
                            </AccordionSummary>
                            <AccordionDetails>
                                {l.body}
                            </AccordionDetails>
                        </Accordion>
                    ))
                }
            </AccordionDetails>
        </Accordion>
    </Container>

    return <Box>
        {
            isMobile ?
            <Mobile /> :
            <Desktop /> 
        }
    </Box>
}

export default Writing;