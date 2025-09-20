import { useState, useEffect } from "react";

const getWindowDimensions = () => {
    if (typeof window !== "undefined") {
        return {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }
    return {
        width: 0,
        height: 0,
    };
};

const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        if (typeof window === "undefined") return;
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions());
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;