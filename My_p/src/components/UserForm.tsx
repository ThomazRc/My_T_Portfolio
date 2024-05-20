import { useState } from "react";

export const UseForm = () => {
    const [user, setUser] = useState([]);

    async function handleAddUser(formData: string) {
        
        const name = formData.get("name");
        const email = formData.get("email");

        setUser((prev) => [...prev, {name, email }]);

    }

    return (
        <div>
            <form action={handleAddUser}>
                <div>
                    <input type="text" name="name" placeholder="Digite o nome"/>
                </div>
                <div>
                    <input type="email" name="email" placeholder="Digite o email"/>
                </div>
                <button type="submit">Enviar</button>
            </form>
            <h3>Usuários</h3>
            <ul>{user.map((user, index) => (
                <li key={index}>{user.name} - {user.email}</li>
            ))}</ul>
        </div>
    )
};