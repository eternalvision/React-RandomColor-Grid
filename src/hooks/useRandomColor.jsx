import { useState, useEffect, useMemo } from "react";

export const useRandomColor = () => {
    const generateColor = useMemo(
        () => () =>
            `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
                Math.random() * 255
            })`,
        [],
    );

    const [color, setColor] = useState(generateColor());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColor(generateColor());
        }, 100);

        return () => clearInterval(intervalId);
    }, [generateColor]);

    return color;
};
