import { useState } from 'react';

export const useCounter = ( initialState = 10 ) => {

    // Creamos un estado
    const [counter, setCounter] = useState(initialState); // 10 si no mandamos nada

    // definimos las funciones increment y decrement
    const increment = ( factor = 1 ) => { // pasamos el factor de conteo
        setCounter( counter + factor );
    };

    const decrement = ( factor = 1 ) => {
        setCounter( counter - factor );
    };

    // TAREA: Botón de reset
    const reset = () => {
        setCounter( initialState );
    };

    // Hacemos el return devolviendo un objeto, tambien podemos devolver un  array como el useState
    return {
        counter,
        increment,
        decrement,
        reset
    };

};
