### Project Overview

#### Introduction

This project creates a dynamic and visually appealing color palette using React. It showcases the use of custom hooks to manage state and react to environmental changes, like window resizing. The palette is composed of multiple colored items that change their colors at regular intervals, creating a lively and colorful display.

#### How It Works

1. **Palette Component**:

    - The `Palette` component is the heart of the application. It uses props to receive a set of hooks from the `Hooks` object.
    - It employs the `useWindowSize` hook to determine the current window size and calculates the number of items to display using the `calculateItemsCount` function.
    - The `useRandomColors` hook is used to generate an array of random colors, corresponding to the number of items.
    - The component then renders a list of `Item` components, each with its unique background color from the generated array.

2. **Item Component**:

    - The `Item` component is a simple functional component that receives a color prop and displays it.
    - It is optimized with `React.memo` for performance, ensuring that it only re-renders when its color prop changes.

3. **Hooks**:

    - `useWindowSize`: A custom hook that provides the current window's width and height. It listens to window resize events to update these dimensions.
    - `useRandomColors`: This hook generates an array of random colors. The number of colors is based on the count parameter, which is the number of items to display. It updates the colors every 150 milliseconds.
    - `calculateItemsCount`: A utility function to calculate the number of items that can fit into the current window size, based on the specified item width and height.

4. **App Component**:

    - The main `App` component renders the `Palette` component, passing the `Hooks` object as a prop.

#### Key Features

-   **Dynamic Resizing**: Adjusts the number of color items based on the window size.
-   **Live Color Update**: Each item's color changes every 150 milliseconds, creating a dynamic, ever-changing look.
-   **Performance Optimization**: Uses `React.memo` and `useCallback` to optimize rendering and prevent unnecessary recalculations and re-renders.

#### Technologies Used

-   React - Vite (Functional Components, Hooks)
-   JavaScript (ES6+ features)
-   SCSS for basic styling

#### Installation and Setup

1. Clone the repository.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Use `npm start` to run the application in development mode.

#### Contributing

Contributions to the project are welcome. Please follow the standard procedure:

1. Fork the repository.
2. Create a new branch for your feature.
3. Add your changes and commit them.
4. Push to your fork and submit a pull request.
