import { useEffect, useState } from "react";

export const useScreenWidth = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeZ = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", resizeZ);

        return () => {
            window.removeEventListener("resize", resizeZ)
        }
    }, []);

    return screenWidth;
};