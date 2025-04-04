import { ImageListItem, ImageListItemBar, Paper, Stack, Tooltip, Typography } from "@mui/material"
import line45 from "../assets/profileImages/line45.png";
import invertedLine from "../assets/profileImages/invertedLine.png";
import reactLogo from "../assets/techLogos/logo-react.svg";
import viteLogo from "../assets/techLogos/Vitejs-logo.svg.png";
import muiLogo from "../assets/techLogos/Mui.png";
import svgLogo from "../assets/techLogos/SVG_Logo.svg.png";
import threeLogo from "../assets/techLogos/THREEjs.png";
import fiberLogo from "../assets/techLogos/fiber.png";
import dreiLogo from "../assets/techLogos/drei.png";
import EventTracker from "../EventTracker";
import { useEffect } from "react";

const diagonalLine = <img src={line45} />;
const inverted = <img src={invertedLine} />;

const logoStyles = {
    height: "5vh",
    width: "auto"
};

const logoLabelStyles = {
    textAlign: "center"
}

export const CircleInversion = () => {
    const tracker = EventTracker("interface CircleInversion");
    useEffect(() => {
        tracker("description","CircleInversion");
    })
    const LinkTo = () => <a href="https://thefreck.github.io/Circle_Inversion/" target="_blank" onClick={() => tracker("visit project","CircleInversions")}>Circle Inversion</a>;

    return (
        <Paper
            sx={{
                margin: "auto",
                padding: "5vh 5vw 10vh 5vw"
            }}
        >
            <Typography
                variant="h4"
            >
                <LinkTo />
            </Typography>
            <hr/>
            <Typography
                variant="h6"
            >
                A diagonal line can be defined as <Tooltip title={diagonalLine}><em>y=x</em></Tooltip>. An inverted line can be defined as <Tooltip title={inverted}><em>y=1/x</em></Tooltip>. In both cases the left and right side of the line go off indefinitely. In the case of the inverted line the center goes up and down indefinitely and approaches infinity.
            </Typography>
            <br/>
            <Typography
                variant="h6"
            >
                What this does in one dimension can also be done in two. This is the process of inverting a circle. Every point inside a circle can be mapped to every point outside the circle. The outer edge of the circle maps onto itself but the closer the point is to the center the closer it approaches infinity. The mathematics of this process are fairly straight forward. The edge of the circle works similarly to a reflection or a lense. We can extend this idea from single points to shapes. If we invert every point of a rectangle for instance, the projected shape has curved edges instead of straight reflecting the curved surface of the circle it is being projected through. A triangle will also have curved sides. However, a circle will still be a circle.
            </Typography>
            <br/>
            <Typography
                variant="h6"
            >
                What this does in two dimensions can be done in three. Projecting across the surface of a sphere adds yet another level of mathematical beauty. The 2d version was built using SVG. The 3d version is powered by the amazing javaScript library, THREE.js.
            </Typography>
            <br/>
            <Stack
                direction={navigator.maxTouchPoints > 0 ? "column" : "row"}
            >
            <Stack
                direction="row"
                spacing={2}
            >
                <ImageListItem
                >
                    <img style={logoStyles} src={reactLogo} alt="logo for React" />
                    <ImageListItemBar
                    sx={logoLabelStyles}
                        title="React"
                        position="below"
                        />
                </ImageListItem>
                
                <ImageListItem
                >
                    <img style={logoStyles} src={viteLogo} alt="logo for Vite" />
                    <ImageListItemBar
                    sx={logoLabelStyles}
                        title="Vite"
                        position="below"
                        />
                </ImageListItem>
                <ImageListItem
                >
                    <img style={logoStyles} src={muiLogo} alt="logo for Material-UI" />
                    <ImageListItemBar
                    sx={logoLabelStyles}
                        title="Material-UI"
                        position="below"
                        />
                </ImageListItem>
                <ImageListItem
                >
                    <img style={logoStyles} src={svgLogo} alt="logo for SVG" />
                    <ImageListItemBar
                    sx={logoLabelStyles}
                        title="SVG"
                        position="below"
                    />
                </ImageListItem>
            </Stack>
            <Stack
                direction="row"
                spacing={2}
            >
                <ImageListItem
                >
                    <img style={logoStyles} src={threeLogo} alt="logo for THREE.js" />
                    <ImageListItemBar
                    sx={logoLabelStyles}
                        title="THREE.js"
                        position="below"
                    />
                </ImageListItem>
                <ImageListItem
                >
                    <img style={logoStyles} src={fiberLogo} alt="logo for Three-Fiber" />
                    <ImageListItemBar
                    sx={logoLabelStyles}
                        title="THREE-Fiber"
                        position="below"
                        />
                </ImageListItem>
                <ImageListItem
                >
                    <img style={logoStyles} src={dreiLogo} alt="logo for Three-Drei" />
                    <ImageListItemBar
                    sx={logoLabelStyles}
                        title="THREE-Drei"
                        position="below"
                    />
                </ImageListItem>
            </Stack>
            </Stack>
        </Paper>
    );
}

export default CircleInversion;