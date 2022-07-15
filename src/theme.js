import react from "react";

export const Themes = {
    light: {
        fontColor: '#000000',
        background: '#ffffff',
    },
    dark: {
        fontColor: '#ffffff',
        background: '#000000',
    }
}

export const ThemeContext = react.createContext(
    Themes.dark
);