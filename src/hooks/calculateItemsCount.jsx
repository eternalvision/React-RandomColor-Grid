export const calculateItemsCount = (width, height, itemWidth, itemHeight) => {
    const itemsPerRow = Math.floor(width / itemWidth);
    const itemsPerColumn = Math.floor(height / itemHeight);
    return itemsPerRow * itemsPerColumn;
};
