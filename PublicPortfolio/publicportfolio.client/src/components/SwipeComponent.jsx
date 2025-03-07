import { Box, SwipeableDrawer, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";

const viewEnum = {
    about: 0,
    projects: 1,
    books: 2,
    endorsements: 3
};

const routes = [
  "/Portfolio/",
  "/Portfolio/Projects",
  "/Portfolio/ReadingList",
  "/Portfolio/Endorsements"
];

export const SwipeComponent = (props) => {
    const {view,setView} = props;

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
    },[]);
    
    const handleTouchStart = (e) => {
        touchRef.current.touchStartX = e.targetTouches[0].clientX;
        touchRef.current.touchStartY = e.targetTouches[0].clientY;
        touchRef.current.touchEndX = null;
        touchRef.current.touchEndY = null;
    }

    const handleTouchMove = (e) => {
        touchRef.current.touchEndX = e.targetTouches[0].clientX;
        touchRef.current.touchEndY = e.targetTouches[0].clientY;
        if(touchRef.current.touchEndX-touchRef.current.touchStartX > minSwipeDistance){
            setSwipeLeft(true);
        }
        else{
            setSwipeLeft(false);
        }
        if(touchRef.current.touchStartX-touchRef.current.touchEndX > minSwipeDistance){
            setSwipeRight(true);
        }
        else{
            setSwipeRight(false);
        }
    }

    const handleTouchEnd = (e) => {
        if (!touchRef.current.touchStartX || !touchRef.current.touchEndX) return;
        if(Math.abs(touchRef.current.touchStartY-touchRef.current.touchEndY) >= Math.abs(touchRef.current.touchStartX-touchRef.current.touchEndX)) return;
        console.log("touch end");
        const distance = touchRef.current.touchEndX - touchRef.current.touchStartX;
        if (distance > minSwipeDistance) {
            setView(((view + 4) - 1) % 4);
        }
        else
        if (distance < -minSwipeDistance) {
            setView((view + 1) % 4);
        }
    }

    return <Box
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        sx={{background: "red"}}
    >
        <SwipeableDrawer
            anchor="left"
            open={swipeLeft}
        >
            <Box
            >
                <Typography
                variant="h6"
                    sx={{
                        writingMode: "vertical-rl",
                        textOrientation: "upright",
                        background: "content-box"
                    }}
                    >
                    Go to {Object.keys(viewEnum)[((view + 4) - 1) % 4]}
                </Typography>
            </Box>
        </SwipeableDrawer>
        {props.children}
        <SwipeableDrawer
            anchor="right"
            open={swipeRight}
        >
            <Typography
                sx={{
                    writingMode: "vertical-rl",
                    textOrientation: "upright",
                    background: "transparent"
                }}
            >
                Go to {Object.keys(viewEnum)[(view + 1) % 4]}
            </Typography>
        </SwipeableDrawer>
    </Box>
}

export default SwipeComponent;