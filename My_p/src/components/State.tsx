import { useFormState } from "react-dom"

export const StatusForm = () => {

    const acton = (formData) => {
        console.log(formData);

    };

    const validation

    const [] = useFormState()



    return <>
    <form action={acton}>
        <label htmlFor="Nomedousuario">Nome</label>
        <input type="text" name="nomedousuario" />
        <button type="submit">Enviar</button>
    </form>
    </>
}