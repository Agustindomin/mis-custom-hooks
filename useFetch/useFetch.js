import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {

    if ( !url.trim() ) {

    }

    // Usamos el hook useRef para tener una variable que nos diga si este hook está montado
    const isMounted = useRef(true); // Por defecto está montado cuando este código se ejecuta
  
    const [state, setState] = useState({ data: null, loading: true, error: null});

    // useEffect sólo cuando el componente se carga la primera vez
    useEffect(() => {

        return () => {
            isMounted.current = false; // cuando se desmonte, ponemos isMounted = false
        }
    }, []);

    useEffect(() => {
  
        setState({ data: null, loading: true, error: null}); // para que muestre el loading cada vez que cambie

        // Hacemos petición get
        fetch( url )
            .then( resp => resp.json() )
            .then( data => {

                // // Hacemos esto más lento para forzar error en RealExampleRef.js
                // setTimeout(() => {

                    // Usamos isMounted.current para llamar al setState sólo si sigue mnotado!!!
                    if ( isMounted.current ) {
                        setState({
                            loading: false,
                            error: null,
                            data,
                        });
                    }
                    // else {
                    //     console.log('setState no se llamó!');
                    // }
                    
                // }, 4000);


                

            })
            .catch( () => {

                setState( {
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la información'

                });

            });

    }, [url]);

    // Retornamos el estado
    return state;

}
