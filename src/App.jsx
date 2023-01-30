import React, {useState, useEffect} from 'react';
import './App.css';
import {getRandomFact} from './services/facts.js';
import {useCatImage} from './hooks/useCatImage.js';
import {useCatFact} from './hooks/useCatFact.js';

export function App() {
    const {fact, refreshFact} = useCatFact();
    const {imageURL} = useCatImage({fact});  //parametros nombrados son extensibles y podemos pasar mas en cualquier orden vs (param1, param2) that need to be in the same order

    const handleClick = async () => {
        refreshFact();
    }

    return(
        <main>
            <h1>App de gatos</h1>
            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageURL && <img src={imageURL} alt={`image extracted using the firat three words of the fact`} />}
        </main>
    )
}

//notes: el catch en el fetch entra solo diractamente cuando ha habido un problema con la peticion no con la respuesta


   // ----- efecto para recuperar la cita al cargar la página
//    useEffect(() => {
    // getRandomFact().then(newFact => setFact(newFact));
    // const newFact = getRandomFact();
    // setFact(newFact);
// }, [])

// useEffect(async () => {
//     const newFact = await getRandomFact();
//     setFact(newFact);
// }, [])