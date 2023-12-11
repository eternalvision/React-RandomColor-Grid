import { useState, useEffect } from "react";

export const useRandomColor = () => {
    const generateColor = () =>
        `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
            Math.random() * 255
        })`;
    const [color, setColor] = useState(generateColor());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor(generateColor());
        }, 50);

        return () => clearInterval(intervalId);
    }, []);

    return color;
};
