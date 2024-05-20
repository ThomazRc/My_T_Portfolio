import { useRef, useEffect } from "react"
import { InputField } from "./InputField";

export const ParentComponent = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if(inputRef.current) {
            inputRef.current.focus();
        }
    }, [])

    return <>
    <InputField ref={inputRef} placeholder="Algo"/>
    </>
}