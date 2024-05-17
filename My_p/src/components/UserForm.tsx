import { useState } from "react";

export const UseForm = () => {
    const [user, setUser] = useState([]);

    async function handleAddUser(formData: string) {
        console.log("foi")

    }

    return (
        <div>
            <form action={handleAddUser}>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};