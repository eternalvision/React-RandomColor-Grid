import { PropTypes } from "prop-types";

const Item = ({ useRandomColor }) => {
    const color = useRandomColor();
    return (
        <li
            style={{
                backgroundColor: color,
            }}></li>
    );
};

export const Palette = (props) => {
    const {
        Hooks: { useWindowSize, calculateItemsCount, useRandomColor },
    } = props;
    const [width, height] = useWindowSize();
    const itemsCount = calculateItemsCount(width, height, 50, 50);

    const items = new Array(itemsCount).fill(null);
    return (
        <ul className="PaletteList">
            {items.map((_, index) => (
                <Item useRandomColor={useRandomColor} key={index} />
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
