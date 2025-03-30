import { ImageListItem, ImageListItemBar, Paper, Stack, Typography } from "@mui/material"
import EventTracker from "../EventTracker";
import reactLogo from "../assets/techLogos/logo-react.svg";
import viteLogo from "../assets/techLogos/Vitejs-logo.svg.png";
import p5jsLogo from "../assets/techLogos/P5js_Logo.svg.png";
import { useEffect } from "react";

const logoStyles = {
    height: "5vh",
    width: "auto"
};

const logoLabelStyles = {
    textAlign: "center"
}


export const FourierFun = () => {
    const tracker = EventTracker("interface FourierFun");
    useEffect(() => {
        tracker("description","FourierFun");
    },[]);
    
    const LinkTo = () => <a href="https://thefreck.github.io/Fourier_Fun_p5.js/" target="_blank" onClick={() => tracker("visit project","FourierFun")}>Fourier Series</a>;

    return <Paper
        sx={{
            margin: "auto",
            padding: "5vh 5vw 10vh 5vw",
            height: "75vh",
            overflowY: "auto"
        }}
    >
        <Typography
            variant="h4"
        >
            <LinkTo />
        </Typography>
        <Typography
            variant="h6"
        >
            <hr/>
            Any shape wave can be built by adding sine waves of varying frequencies together into a composite wave. Similarly, any composite wave can be broken down into its component waves. This simple realization has made for some amazing advances in mathematics and physics and is how we can figure out the composition of stars, nebulae and even galaxies by evaluating the light that comes off of them.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            Fourier Series and the Fourier Transform are so integral to modern physics and mathematics that in showing this project to a friend and mentioning it was based on the Fourier transform he exclaimed "Everything is the Mother{"\ua6d9"}{"\u2127"}{"\u00A2"}{"\u16b4"}ing Fourier Transform!" He is not wrong.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            In this project I have drawn a circle in the top left corner. The wave going horizontally from the circle is mapping the y values while the wave proceeding downward from the circle is mapping the X coordinates. The circle itself has a radius which connects to the center of another circle which itself orbits the first circle. The radius of this circle connects to yet another circle which orbits it and by extension orbits the first circle. This can go on as long as you like (in theory it goes on forever). It's a way of visusalizing the Fourier Series in an accessible way. In the center of the screen I have recombined the X and Y coordinates back into the shape being drawn by the outermost radius tip. If we know the right series values we can theoretically draw anything we like.
        </Typography>
        <br/>
        <Typography
            variant="h6"
        >
            Out of the box I have included a square wave and a sawtooth wave. The square wave was the original discovered with this method and is created simply by causing each successive radius to be of length 1/(2n-1). This means that the series of radii are [1/1, 1/3, 1/5, 1/7, 1/9, 1/11...]. The sawtooth wave is creating even simpler. The radii are [1/1, 1/2, 1/3, 1/4, 1/5...]. The central shape is made of individual points. When you increase the speed you will see more space between each point. For a more continuous look you can slow the speed down. The depth slider indicates how many fractions are in the series. More depth will more closely approximate the square or the sawtooth waves. The third option is the enter your own series. The input just takes the denominator so the square wave would be entered as [1, 3, 5, 7, 9...] while the sawtooth would just be [1, 2, 3, 4, 5...]. An interesting thing happens when you enter numbers that are very close to each other. For instance try the series [1, 1.1, 2, 2.1, 3, 3.1, 4, 4.1, 5].
        </Typography>
        <br/>
        <Typography
        >
            * More can (and should) be learned from a variety of online resources including <a href="https://en.wikipedia.org/wiki/Fourier_series" target="_blank">Widipedia</a>
        </Typography>
        <br />
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
                <img style={logoStyles} src={p5jsLogo} alt="logo for P5js" />
                <ImageListItemBar
                    sx={logoLabelStyles}
                    title="P5js"
                    position="below"
                />
            </ImageListItem>
        </Stack>
    </Paper>
}

export default FourierFun;