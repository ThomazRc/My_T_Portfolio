import { use } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export const ButtonTheme = () => {
    const {theme, toggleTheme} = use(ThemeContext);

    return <>
    <button onClick={toggleTheme}>Alterar Tema {theme === "claro" ? "escuro" : "claro"}</button>
    </>
}