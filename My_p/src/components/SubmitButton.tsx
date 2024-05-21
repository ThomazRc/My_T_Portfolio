import { useFormStatus } from "react-dom"

export const SubmitButton = () => {

    const {pending} = useFormStatus();
    return <>
    <button type="submit" disabled={pending}>{pending ? "Enviando..." : "Enviar" }</button>
    </>
}