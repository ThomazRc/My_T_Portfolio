import { Children, createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({Children}) => {
    const [theme, setTheme] = useState("claro");

    const togggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "claro" ? "escuro" : "claro"));
    };

    return (<ThemeContext.Provider value={theme, togggleTheme}>
        {Children}
    </ThemeContext.Provider>)
 }