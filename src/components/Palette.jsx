import React from "react";

import { PropTypes } from "prop-types";

const Item = React.memo(({ color }) => {
    return <li style={{ backgroundColor: color }}></li>;
});

Item.propTypes = {
    color: PropTypes.string.isRequired,
};

Item.displayName = "Item";

export const Palette = (props) => {
    const {
        Hooks: { useWindowSize, calculateItemsCount, useRandomColors },
    } = props;
    const [width, height] = useWindowSize();
    const itemsCount = calculateItemsCount(width, height, 30, 30);
    const colors = useRandomColors(itemsCount);
    return (
        <ul className="PaletteList">
            {colors.map((color, index) => (
                <Item color={color} key={index} />
            ))}
        </ul>
    );
};

Palette.propTypes = {
    Hooks: PropTypes.object.isRequired,
};

Item.propTypes = {
    useRandomColor: PropTypes.func.isRequired,
};
