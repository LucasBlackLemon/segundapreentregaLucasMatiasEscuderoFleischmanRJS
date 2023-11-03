import { useState } from "react"
import Titulo from "../Titulo/Titulo"
import { Form } from "./Form"
import { formWhitValidation } from "./fromWhitValidation"

const FormWhitValidation = formWhitValidation(Form)

const FormContainer = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: ''
    })   

    const handleOnChange = (evt) => {

        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }
    
    return (
        <FormWhitValidation 
            formData={formData}
            handleOnChange={handleOnChange}
        />
    )
}

export default FormContainer