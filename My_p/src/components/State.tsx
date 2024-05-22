import { useFormState } from "react-dom"

export const StatusForm = () => {

    const acton = (formData) => {
        console.log(formData);

    };

    const validationUser = (prevState, formData) => {

        const name = formData.get("nome do usuario");

        if(name == "João") {
            return {
                success: true,
                text: "Welcome João",
            };
        } else {
            return {
                success: false,
                text: "Erro, usúario não encontrado",
            };
        }

    }

    const [message, actionForm] = useFormState(validationUser, null)



    return <>
    <form action={acton}>
        <label htmlFor="Nomedousuario">Nome</label>
        <input type="text" name="nomedousuario" />
        <button type="submit">Enviar</button>
        {message && <h4>{message.text}</h4>}
    </form>
    </>
}