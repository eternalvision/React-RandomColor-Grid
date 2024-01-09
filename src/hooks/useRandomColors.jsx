import { useState, useEffect, useCallback } from "react";

export const useRandomColors = (count) => {
    const generateColor = () =>
        `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
            Math.random() * 255
        })`;

    const generateColorArray = useCallback(
        () => Array.from({ length: count }, generateColor),
        [count],
    );

    const [colors, setColors] = useState(generateColorArray());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColors(generateColorArray());
        }, 150);

        return () => clearInterval(intervalId);
    }, [generateColorArray]);

    return colors;
};
