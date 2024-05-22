import { useState } from "react"
import { FormMessage } from "./FormMessage";

export const MessageApp = () => {
    const [messages, setMessages] = useState([
        { text: "Oi, sou a primeira mensagem", sending: false, key: 1 },
    ]);

    return <>
    <FormMessage messages={messages} />
    </>
}