import { SubmitButton } from "./SubmitButton"

export const FormStatus = () => {

    const formAction =  async(formData) => {
        await new Promise((resolve) => setTimeout(resolve, 3000));

    };

    return <form action={formAction}>
        <input type="email" name="email" placeholder="Digite seu email"/>
        <SubmitButton />
    </form>
}