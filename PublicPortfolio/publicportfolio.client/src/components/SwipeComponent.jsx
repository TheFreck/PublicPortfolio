import { Box, SwipeableDrawer, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const viewEnum = {
    about: 0,
    projects: 1,
    books: 2,
    endorsements: 3,
    writing: 4
};

const routes = [
    "/Portfolio/",
    "/Portfolio/Projects",
    "/Portfolio/ReadingList",
    "/Portfolio/Endorsements",
    "/Portfolio/Writing"
];

export const SwipeComponent = (props) => {
    const { view, setView } = props;

    const [swipeLeft, setSwipeLeft] = useState(false);
    const [swipeRight, setSwipeRight] = useState(false);
    const navigate = useNavigate();
    const touchRef = useRef();

    useEffect(() => {
        navigate(routes[view]);
        setSwipeLeft(false);
        setSwipeRight(false);
    }, [view]);

    const minSwipeDistance = 100;

    useEffect(() => {
        touchRef.current = {
            touchStartX: null,
            touchEndX: null,
            touchStartY: null,
            touchEndY: null,
        };
    }, []);

    const handleTouchStart = (e) => {
        touchRef.current.touchStartX = e.targetTouches[0].clientX;
        touchRef.current.touchStartY = e.targetTouches[0].clientY;
        touchRef.current.touchEndX = null;
        touchRef.current.touchEndY = null;
    }

    const handleTouchMove = (e) => {
        touchRef.current.touchEndX = e.targetTouches[0].clientX;
        touchRef.current.touchEndY = e.targetTouches[0].clientY;
        if (touchRef.current.touchEndX - touchRef.current.touchStartX > minSwipeDistance) {
            setSwipeLeft(true);
        }
        else {
            setSwipeLeft(false);
        }
        if (touchRef.current.touchStartX - touchRef.current.touchEndX > minSwipeDistance) {
            setSwipeRight(true);
        }
        else {
            setSwipeRight(false);
        }
    }

    const handleTouchEnd = () => {
        if (!touchRef.current.touchStartX || !touchRef.current.touchEndX) return;
        if (Math.abs(touchRef.current.touchStartY - touchRef.current.touchEndY) >= Math.abs(touchRef.current.touchStartX - touchRef.current.touchEndX)) return;
        const distance = touchRef.current.touchEndX - touchRef.current.touchStartX;
        if (distance > minSwipeDistance) {
            setView(((view + 5) - 1) % 5);
        }
        else
            if (distance < -minSwipeDistance) {
                setView((view + 1) % 5);
            }
    }

    return <Box
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
    >
        <SwipeableDrawer
            anchor="left"
            open={swipeLeft}
        >
            <Typography
                variant="h6"
                sx={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                    letterSpacing: "1em",
                    width: "20vw",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "auto",
                    marginBottom: "auto"
                }}
            >
                {Object.keys(viewEnum)[((view + 5) - 1) % 5]}
            </Typography>
        </SwipeableDrawer>
        {props.children}
        <SwipeableDrawer
            anchor="right"
            open={swipeRight}
        >
            <Typography
                variant="h6"
                sx={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                    letterSpacing: "1em",
                    width: "20vw",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "auto",
                    marginBottom: "auto"
                }}
            >
                {Object.keys(viewEnum)[(view + 1) % 5]}
            </Typography>
        </SwipeableDrawer>
    </Box>
}

export default SwipeComponent;