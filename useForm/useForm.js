import { useState } from "react";

export const useForm = ( initialState = {} ) => {

    const [formValues, setFormValues] = useState(initialState); // el initialState es un objeto por defecto

    // función para resetear el campo de formulario
    const reset = () => {
        setFormValues(initialState);
    }

    // funcion para manejar los cambiso en el campo de foirmulario
    const handleInputChange = ({ target }) => {

        // Con el setrFromState lo ponemos en el estado formState
        setFormValues({
            ...formValues,
            [ target.name ]: target.value, // Con spread ..., tomamos todo el objeto y con [ target.name ] le 
            // decimos que la clave del objeto a cambiar sea esa y el valor sea target.value
        });

    };

    // Retornamos el estado y la referencia a la función handleInputChange
    return [ formValues, handleInputChange, reset ];
    
};
